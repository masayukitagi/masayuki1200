<script>
import { Radar } from 'vue-chartjs';

export default {
  name: 'Chart',
  extends: Radar,
  data () {
    return {
      /* グラフ内容 */
      data: {
        labels: ['HTML', 'CSS', 'JavaScript', 'SCSS','Vue'],
        datasets: [{
          data: [7, 8, 5, 2, 6],
          backgroundColor: [
            'rgba(150, 0, 0, 0.25)'
          ],
        }]
      },
      options: {
        scale: {
          ticks: {
            suggestedMin: 0,
            suggestedMax: 10,
            stepSize: 2,
          }
        },
        legend:{
          display: false,
        }
      },
    }
  },
  mounted () {
    this.renderChart(this.data, this.options)
  }
}
</script>
