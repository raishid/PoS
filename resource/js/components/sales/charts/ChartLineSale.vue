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
    watch: {
        chartData: () => {
            console.log('cambiando');
        },
    },
    methods: {
        
    },
    mounted(){
        setTimeout(()=>{
            this.chartData.data = [1, 2, 3, 10 ];
        }, 5000)
    }
}
</script>
<style>
    .small {
    max-width: 700px;
    margin:  150px auto;
  }
</style>