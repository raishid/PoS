<template>
    <div class="card">
        <div class="card-header">
            <date-range-picker
            v-model="dateRange"
            >
            <template #input="picker" style="min-width: 350px;">
            {{ picker.startDate | date }} - {{ picker.endDate | date }}
            </template>
            </date-range-picker>
        </div>
        <div class="card-body">
            <div class="row">
                <div class="col-md-12">
                    <sale-linechart ref="chart" v-if="loaded" :data="data" :options="options"></sale-linechart>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import moment from 'moment';
import DateRangePicker from 'vue2-daterange-picker'
import SaleChart from './charts/ChartLineSale.vue';
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
            data:{
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
            options:{
                responsive: true,
            },
            loaded: false,
        }
    },
    filters:{
      date (val) {
        return val ? moment(val).format('Y-MM-DD') : ''
      },
    },
    components:{
      DateRangePicker,
      SaleChart
    },
    methods: {
        lastWeekDate(){
            axios({
                method:'post',
                url: '/sales/ranges/charts',
                data: {
                    csrf_token: this.csrf_token,
                    start_date: this.dateRange.startDate,
                    end_date: this.dateRange.endDate,
                }
            }).then(response =>{
                const { data:salesDays } = response;
                const keysDays = Object.keys(salesDays);
                this.data.labels.map(d => {
                    let isAdd = false;
                    keysDays.map(k => {
                        let newkey = k.substring(0, k.length - 5).replace('_', ' ');
                        if(d == newkey){
                            this.data.datasets[0].data.push(salesDays[k]);
                            isAdd = true;
                        }
                    });
                    if(!isAdd){
                        this.data.datasets[0].data.push(0);
                    }
                });
                this.loaded = true;
            })
        }
    },
    async mounted(){
        this.lastWeekDate();
    }
}
</script>