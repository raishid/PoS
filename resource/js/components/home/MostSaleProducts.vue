<template>
    <div class="card">
        <div class="card-body">
            <sale-doughnut ref="chart_doughnut" v-if="loadedDoughnut" :data="dataDoughnut" :options="optionsDoughnut"></sale-doughnut>
        </div>
    </div>
</template>
<script>
import ProductsCharts from '../sales/charts/ChartDoughnutSales.vue';
import moment from 'moment';
import randomColor from 'randomcolor';

export default {
    name: 'most-sale-products',
    data(){
        return {
            dataDoughnut:{
                labels: [],
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
            optionsDoughnut:{
                responsive: true,
                scales: {
                    y: {
                        min: 0,
                        suggestedMin: 100,
                        display: true,
                    }
                }
            },
            loadedDoughnut: false,
        }
    },
    components:{
        ProductsCharts
    },
}
</script>