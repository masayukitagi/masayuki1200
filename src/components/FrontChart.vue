<script>
import { Radar } from 'vue-chartjs';

export default {
  name: 'Chart',
  extends: Radar,
  data () {
    return {
      /* グラフ内容 */
      data: {
        labels: ['HTML', 'CSS', 'javascript', 'SCSS','Vue'],
        datasets: [{
          data: [15, 10, 1, 10, 8],
          backgroundColor: [
            'rgba(150, 0, 0, 0.25)'
          ],
        }]
      }
    }
  },
  options: {
    responsive: true,
    scale: {
      ticks: {
        min: 0,
        max: 30,
        fontSize: 50,
      }
    },
  },
  mounted () {
    this.renderChart(this.data, this.options)
  }
}
</script>
