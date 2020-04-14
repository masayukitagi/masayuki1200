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
          data: [ 10, 4, 10, 8, 16],
          backgroundColor: [
            'rgba(100, 0, 150, 0.25)'
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
