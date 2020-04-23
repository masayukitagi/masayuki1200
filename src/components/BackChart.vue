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
            'rgba(50, 150, 50, 0.25)'
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
  created(){
    this.getSkillScore()
    this.getSkillName()
  },
  mounted () {
    this.renderChart(this.data, this.options)
  },
  methods:{
    // storeからscore
    getSkillScore(){
      const skillScore=this.$store.getters.backScore
      this.data.datasets[0].data=skillScore
    },
    // storeからname
    getSkillName(){
      const skillScore=this.$store.getters.backName
      this.data.labels=skillScore
    }
  }
}
</script>
