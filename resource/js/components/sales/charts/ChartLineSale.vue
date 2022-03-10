<template>
    <div class="small">
        <line-chart ref="line_chart" :chartData="chartData" :options="chartOptions"/>
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
            chartOptions: this.options
        }
    },
    watch: {
    chartData () {
        this.$data._chart.update()
    }
    },
    methods: {
        
    },
}
</script>
<style>
    .small {
    max-width: 600px;
    margin:  150px auto;
  }
</style>