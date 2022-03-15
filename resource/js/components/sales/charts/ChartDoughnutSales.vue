<template>
    <div class="small">
        <doughnut-chart :chartData="chartData" :options="options"></doughnut-chart>
    </div>
</template>
<script>
import DoughnutChart  from './DoughnutChart.vue'

export default {
    name: 'sale-doughnut',
    props:{
        data: {
            type: Object,
        },
        options: {
            type: Object,
        }
    },
    components:{
        DoughnutChart
    },
    data() {
        return {
            chartData: this.data,
            chartOptions: this.options,
        }
        
    },
}
</script>