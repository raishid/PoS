<template>
    <div :class="classes">
        <bar-chart :chartData="chartData" :options="options"></bar-chart>
    </div>
</template>
<script>
import BarChart from './BarChart.vue';

export default {
    name: 'sale-bar',
    props:{
        data: {
            type: Object,
        },
        options: {
            type: Object,
        },
        classes:{
            type: String,
            default: 'small',
        }
    },
    components:{
        BarChart
    },
    data() {
        return {
            chartData: this.data,
            chartOptions: this.options,
        }
        
    },
}
</script>