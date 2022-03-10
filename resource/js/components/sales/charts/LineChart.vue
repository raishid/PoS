<script>
import { Line, mixins } from 'vue-chartjs'

export default {
  extends: Line,
  mixins: [mixins.reactiveProp],
  mounted () {
    this.renderChart(this.chartData, this.options)
    console.log(this.$data._chart);
  },
  watch: {
    chartData () {
      this.$data._chart.update()
    }
  }
}
</script>