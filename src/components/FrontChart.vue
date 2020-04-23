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
      data: {     //dataオブジェクトを定義 {}
        labels: [],    //dataオブジェクト内に labels:[] を定義(key:labels)
        datasets: [{  //dataオブジェクト内に datasets:[{--}] を定義。datasets配列を定義。配列内に無名のオブジェクトを定義
          data: [],   //datasets配列内の、無名のオブジェクト内に、 labels:[] を定義
          backgroundColor: [   //datasets配列内に labels:[] を定義
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
