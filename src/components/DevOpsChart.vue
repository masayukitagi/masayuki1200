<script>
import { Radar } from 'vue-chartjs';

export default {
  name: 'Chart',
  extends: Radar,
  data () {
    return {
      /* グラフ内容 */
      data: {
        labels: [],
        datasets: [{
          data: [],
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
    this.getSkillScore()
    this.getSkillName()
    this.renderChart(this.data, this.options)
  },
  methods:{
    // storeからscore
    getSkillScore(){
      const skillScore=this.$store.getters.devScore
      this.data.datasets[0].data=skillScore //[0]上のことよ
    },
    // storeからname
    getSkillName(){
      const skillScore=this.$store.getters.devName
      this.data.labels=skillScore
    }
  }
}
</script>
