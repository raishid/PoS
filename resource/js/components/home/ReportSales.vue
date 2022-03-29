<template>
    <div class="card">
        <div class="card-body">
            <h2 class="mt-2"><i class="ion ion-grid fs-2"></i> Sale Chart</h2>
            <sale-linechart ref="chart" v-if="loadedLine" :data="dataLine" :options="optionsLine"></sale-linechart>
        </div>
    </div>
</template>
<script>
import SaleChart from '../sales/charts/ChartLineSale.vue';

export default {
    name: "report-home-sales",
    data() {
        let today_ = moment().format('Y-MM-DD 00:00:00');
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
            dateRange: {
                startDate: today_,
                endDate: today,
            },
        }
    },
    components:{
        SaleChart
    },
    methods: {
        getDataLine() {
            this.loadedLine = false;
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
    },
    mounted() {
        this.getDataLine();
    },
}
</script>