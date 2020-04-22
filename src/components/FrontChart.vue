<script>
import { Radar } from 'vue-chartjs';
import store from '../store'

export default {
  name: 'Chart',
  store,
  extends: Radar,
  data () {
    return {
      /* グラフ内容 */
      data: {
        labels: [],
        datasets: [{
          data: [],
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
    this.getSkillScore()
    this.getSkillName()
    this.renderChart(this.data, this.options)
  },
  methods:{
    // storeからscore
    getSkillScore(){
      const skillScore=this.$store.getters.frontScore
      this.data.datasets[0].data=skillScore
    },
    // storeからname
    getSkillName(){
      const skillScore=this.$store.getters.frontName
      this.data.labels=skillScore
    }
  }
}
// detaの中のdatasetsに配列を持ってくる

</script>
