<template>
    <div class="small">
        <line-chart ref="chart" :chartData="chartData" :options="chartOptions"/>
    </div>
</template>
<script>
import LineChart from './LineChart.vue'
export default {
    name: 'sale-linechart',
    props:{
        data: {
            type: Object,
        },
        options: {
            type: Object,
        }
    },
    components:{
        LineChart
    },
    data() {
        return {
            chartData: this.data,
            chartOptions: this.options,
        }
        
    },
}
</script>
<style>
    .small {
    max-width: 700px;
    margin: 50px auto;
  }
    @media (min-width: 796px) {
        .small {
            margin:  150px auto;
        }
    }
</style>