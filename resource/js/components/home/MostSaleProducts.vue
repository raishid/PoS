<template>
    <div class="p-auto m-auto">
        <h2 class="mt-auto"><i class="ion ion-stats-bars fs-2"></i> Products Most Sold</h2>
        <sale-doughnut ref="chart_doughnut" v-if="loadedDoughnut" :data="dataDoughnut" :options="optionsDoughnut" class="mt-4 p-2"></sale-doughnut>
    </div>
</template>
<script>
import ProductsCharts from '../sales/charts/ChartDoughnutSales.vue';
import moment from 'moment';
import randomColor from 'randomcolor';

export default {
    name: 'report-home-most-sale-products',
    props:{
        csrf_token: {
            type: String,
            required: true
        },
    },
    data(){
        return {
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
        }
    },
    components:{
        ProductsCharts
    },
    methods:{
        productMostSell(){
            this.loadedDoughnut = false;
            const start_time = moment().format('Y-MM-DD 00:00:00')
            const end_time = moment().format('Y-MM-DD 23:59:59');
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
        }
    },
    mounted(){
        this.productMostSell();
    }
}
</script>