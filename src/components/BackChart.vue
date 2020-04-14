<script>
import { Radar } from 'vue-chartjs';

export default {
  name: 'Chart',
  extends: Radar,
  data () {
    return {
      /* グラフ内容 */
      data: {
        labels: ['java', 'Ruby', 'RubyOnRails', 'MySQL'],
        datasets: [{
          data: [13, 6, 4, 10,],
          backgroundColor: [
            'rgba(50, 150, 50, 0.25)'
          ],
        }]
      }
    }
  },
  mounted () {
    this.renderChart(this.data, this.options)
  }
}
</script>
