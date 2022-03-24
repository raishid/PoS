<template>
    <div class="card">
        <div class="card-header">
            <div class="d-flex align-items-center justify-content-between">
                <date-range-picker
                v-model="dateRange"
                @update="changeDateRange"
                >
                <template #input="picker" style="min-width: 350px;">
                {{ picker.startDate | date }} - {{ picker.endDate | date }}
                </template>
                </date-range-picker>
                <download-excel :fetch="fetchDataExcel" type="xls" worksheet="Report" :name="`Report Sales ${formatDate3(dateRange.startDate)} to ${formatDate3(dateRange.endDate)}.xls`">
                    <button class="btn btn-primary">Export Excel</button>
                </download-excel>
            </div>
            
        </div>
        <div class="card-body">
            <div class="row">
                <div class="col-sm-12 col-md-8">
                    <sale-linechart ref="chart" v-if="loadedLine" :data="dataLine" :options="optionsLine"></sale-linechart>
                </div>
                <div class="col-sm-12 col-md-4 py-2 m-auto">
                    <div class="d-flex flex-column animate__animated animate__backInRight" v-if="loadedLine">
                        <span class="text-center text-success fw-bold fs-2 mb-3 mb-md-0">Total: $ {{ dataLine.datasets[0].data |  addedSales }}</span>
                        <span class="text-center">Sales report from {{dateRange.startDate | date2}} to {{ dateRange.endDate | date2  }}</span>
                    </div>
                </div>
                <div class="col-sm-12 col-md-6 m-auto">
                    <div class="d-flex flex-column justify-content-center animate__animated animate__backInLeft" v-if="loadedDoughnut">
                        <span class="text-center text-success fw-bold fs-2 mb-md-0">Products Most Sold</span>
                        <ul class="list-group mt-2">
                            <li class="list-group-item d-flex justify-content-between" v-for="(product, index) in dataDoughnut.datasets[0].data" :key="index">
                                {{ dataDoughnut.labels[index] }} <span class="fw-bold" :style="'color: '+dataDoughnut.datasets[0].backgroundColor[index]">{{ percentVal(product)}}%</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-sm-12 col-md-6">
                    <sale-doughnut ref="chart_doughnut" v-if="loadedDoughnut" :data="dataDoughnut" :options="optionsDoughnut"></sale-doughnut>
                </div>
                <div class="col-sm-12 col-md-6">
                    <div class="d-flex flex-column animate__animated animate__backInLeft">
                        <span class="text-center text-success fw-bold fs-2 mb-md-0">Best Seller</span>
                        <sale-bar v-if="loadedBar" :data="dataBar" :options="optionsBar" :classes="'mt-2 m-auto w-75'"></sale-bar>
                    </div>
                </div>
                <div class="col-sm-12 col-md-6">
                    <div class="d-flex flex-column animate__animated animate__backInRight" v-if="loadedBarClient">
                        <span class="text-center text-success fw-bold fs-2 mb-md-0">Best Customer</span>
                        <sale-bar :data="dataBarClient" :options="optionsBarClient" :classes="'mt-2 m-auto w-75'"></sale-bar>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import moment from 'moment';
import DateRangePicker from 'vue2-daterange-picker';
import SaleChart from './charts/ChartLineSale.vue';
import DoughnutSale from './charts/ChartDoughnutSales.vue';
import randomColor from 'randomcolor';
import BarSale from './charts/BarChart.vue';

export default {
    name: 'report-sale',
    props:['csrf_token'],
    data(){
        let last_week = moment().subtract(7, 'days').format('Y-MM-DD 00:00:00');
        let today = moment().format('Y-MM-DD 23:59:59');
        const days_last_week = [
            moment().subtract(7, 'days').format('MMMM DD'), 
            moment().subtract(6, 'days').format('MMMM DD'), 
            moment().subtract(5, 'days').format('MMMM DD'),
            moment().subtract(4, 'days').format('MMMM DD'),
            moment().subtract(3, 'days').format('MMMM DD'),
            moment().subtract(2, 'days').format('MMMM DD'),
            moment().subtract(1, 'days').format('MMMM DD'),
            moment().format('MMMM DD')]
        return {
            dateRange: {
                startDate: last_week,
                endDate: today,
            },
            total_sale: 0,
            dataLine:{
                labels: days_last_week,
                datasets: [{
                    data: [],
                    label: 'Sales',
                    borderColor: 'green',
                    backgroundColor: 'transparent',
                    pointRadius: 10,
                    pointHoverRadius: 15,
                    fill: false,
                    tension: 0.1
                }]
            },
            optionsLine:{
                responsive: true,
                scales: {
                    y: {
                        min: 0,
                        suggestedMin: 100,
                        display: true,
                    }
                }
            },
            loadedLine: false,
            dataDoughnut:{
                labels: [],
                datasets: [{
                    label: 'Most Sales',
                    data: [],
                    backgroundColor: [],
                }],
            },
            optionsDoughnut:{
                responsive: true,

            },
            loadedDoughnut: false,
            doughnutTotal: 0,
            dataBar:{
                labels: [],
                datasets: [],
            },
            optionsBar:{
                responsive: true,

            },
            loadedBar: false,
            dataBarClient:{
                labels: [],
                datasets: [],
            },
            optionsBarClient:{
                responsive: true,

            },
            loadedBarClient: false,
            data_excel:[
            ],

        }
    },
    filters:{
      date (val) {
        return val ? moment(val).format('Y-MM-DD') : ''
      },
      date2(val){
          return val ? moment(val).format('MMMM DD, Y') : ''
      },
      addedSales(val){
          let total = 0;
          val.map(sale => {
              total += sale;
          })
          return total;
      },
    },
    components:{
      DateRangePicker,
      SaleChart,
      DoughnutSale,
      BarSale
    },
    methods: {
        salesReport(){
            const start_time = moment(this.dateRange.startDate).format('Y-MM-DD 00:00:00')
            const end_time = moment(this.dateRange.endDate).format('Y-MM-DD 23:59:59');
            this.loadedLine = false;
            axios({
                method:'post',
                url: '/sales/ranges/charts',
                data: {
                    csrf_token: this.csrf_token,
                    start_date: start_time,
                    end_date: end_time,
                }
            }).then(response =>{
                const { data:salesDays } = response;
                const keysDays = Object.keys(salesDays);
                this.dataLine.labels.map(d => {
                    let isAdd = false;
                    keysDays.map(k => {
                        let newkey = k.substring(0, k.length - 5).replace('_', ' ');
                        if(d == newkey){
                            this.dataLine.datasets[0].data.push(salesDays[k]);
                            isAdd = true;
                        }
                    });
                    if(!isAdd){
                        this.dataLine.datasets[0].data.push(0);
                    }
                });
                this.loadedLine = true;
            })
        },
        getDaysDiff(startDate, stopDate) {
            const dateArray = [];
            let currentDate = moment(startDate);
            stopDate = moment(stopDate);
            while (currentDate <= stopDate) {
                dateArray.push( moment(currentDate).format('MMMM DD') )
                currentDate = moment(currentDate).add(1, 'days');
            }
            return dateArray;
        },
        changeDateRange(){
            this.dataLine.labels = this.getDaysDiff(this.dateRange.startDate, this.dateRange.endDate);
            this.loadedLine = false;
            this.dataLine.datasets[0].data = [];
            this.salesReport();

            this.dataDoughnut.datasets[0].data = [];
            this.dataDoughnut.labels = [];
            this.doughnutTotal = 0;
            this.productMostSell();

            this.dataBar.labels = [];
            this.dataBar.datasets = [];
            this.bestSeller();

            this.dataBarClient.labels = [];
            this.dataBarClient.datasets = [];
            this.bestClient();
        },
        productMostSell(){
            this.loadedDoughnut = false;
            const start_time = moment(this.dateRange.startDate).format('Y-MM-DD 00:00:00')
            const end_time = moment(this.dateRange.endDate).format('Y-MM-DD 23:59:59');
            axios({
                method:'post',
                url: '/sales/products/mostsales',
                data:{
                    csrf_token: this.csrf_token,
                    start_date: start_time,
                    end_date: end_time 
                }
            }).then(response => {
                const { data:products } = response;
                products.map((product) =>{
                    this.doughnutTotal += parseInt(product.sold);
                    this.dataDoughnut.labels.push(product.name);
                    this.dataDoughnut.datasets[0].data.push(parseInt(product.sold))
                    this.dataDoughnut.datasets[0].backgroundColor.push(randomColor())
                })
                if(products.length > 0){
                    this.loadedDoughnut = true;
                }
            });
        },
        percentVal(val){
            return parseFloat((val / this.doughnutTotal) * 100).toFixed(2);
        },
        bestSeller(){
            this.loadedBar = false;
            const start_time = moment(this.dateRange.startDate).format('Y-MM-DD 00:00:00')
            const end_time = moment(this.dateRange.endDate).format('Y-MM-DD 23:59:59');
            axios({
                method:'post',
                url: '/sales/report/bestseller',
                data:{
                    csrf_token: this.csrf_token,
                    start_date: start_time,
                    end_date: end_time 
                }
            }).then(response => {
                const { data:seller } = response;
                this.dataBar.labels = [`${moment(start_time).format('MMMM DD')} to ${moment(end_time).format('MMMM DD')}`]
                seller.map((sel) =>{
                    this.dataBar.datasets.push({
                        label: sel.name,
                        data: [parseFloat(sel.sold).toFixed(2)],
                        backgroundColor: [randomColor()],
                    })
                })
                this.loadedBar = true;
                
            });
        },
        bestClient(){
            this.loadedBarClient = false;
            const start_time = moment(this.dateRange.startDate).format('Y-MM-DD 00:00:00')
            const end_time = moment(this.dateRange.endDate).format('Y-MM-DD 23:59:59');
            axios({
                method:'post',
                url: '/sales/report/bestclient',
                data:{
                    csrf_token: this.csrf_token,
                    start_date: start_time,
                    end_date: end_time 
                }
            }).then(response => {
                const { data:client } = response;
                this.dataBarClient.labels = [`${moment(start_time).format('MMMM DD')} to ${moment(end_time).format('MMMM DD')}`]
                client.map((cs) =>{
                    this.dataBarClient.datasets.push({
                        label: cs.name,
                        data: [parseFloat(cs.sold).toFixed(2)],
                        backgroundColor: [randomColor()],
                    })
                })
                this.loadedBarClient = true;
                
            });
        },
        async fetchDataExcel(){
            const start_time = moment(this.dateRange.startDate).format('Y-MM-DD 00:00:00')
            const end_time = moment(this.dateRange.endDate).format('Y-MM-DD 23:59:59');
            const data_excel = [];
            await axios({
                method:'post',
                url: '/sales/report/excel',
                data:{
                    csrf_token: this.csrf_token,
                    start_date: start_time,
                    end_date: end_time 
                }
            }).then(response => {
                const { data } = response;
                data.map(sale => {
                    let amount = '';
                    let products = '';
                    sale.products.map(product => {
                        amount += product.pivot.quantity+'\n';
                        products += product.name + '\n';
                    });

                    data_excel.push({
                        "#": ((sale.id_sale.toString().substr(0, 2) + '-') + sale.id_sale.toString().substr(2, 4)),
                        client: sale.customer.name,
                        seller: sale.seller.name,
                        amount: amount,
                        products: products, 
                        tax: sale.tax,
                        net: sale.net,
                        total: sale.total,
                        method: sale.method,
                        date: moment(sale.created_at).format('MM-DD-YYYY, h:mm:ss a')

                    })
                });
            })
            
            return data_excel;
        },
        formatDate3(val){
            return val ? moment(val).format('Y-MM-DD') : ''
        }
    },
    async mounted(){
        this.salesReport();
        this.productMostSell();
        this.bestSeller();
        this.bestClient();
        /* this.fetchDataExcel(); */
    }
}
</script>