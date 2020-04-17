<script>
import { Radar } from 'vue-chartjs';

export default {
  name: 'Chart',
  extends: Radar,
  data () {
    return {
      /* グラフ内容 */
      data: {
        labels: ['Linux', 'Node', 'Git', 'Github','Firebasa'],
        datasets: [{
          data: [ 2, 3, 6, 6, 5],
          backgroundColor: [
            'rgba(100, 0, 150, 0.25)'
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
