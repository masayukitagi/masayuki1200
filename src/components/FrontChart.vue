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
            'rgba(150, 0, 0, 0.25)',
            'rgba(150, 0, 0, 0.25)',
            'rgba(150, 0, 0, 0.25)',
            'rgba(150, 0, 0, 0.25)',
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
  mounted () { //ページ更新時に次の処理を実行
    this.getSkillScore() //getSkillScoreイベントの発生
    this.getSkillName() //getSkillNameイベントの発生
    this.renderChart(this.data, this.options)
  },
  methods:{ //イベント発生時に次の処理を実行
    getSkillScore(){  // storeからgettersで取得したstateのscoreを取得
      const skillScore=this.$store.getters.frontScore  //skillScoreを定義。右辺はその値。
      this.data.datasets[0].data=skillScore  //本コンポーネントの data/datasetsの０番目の配列/data を skillScore に。
    },
    getSkillName(){  // storeからgettersで絞り込んだstateのnameを取得
      const skillScore=this.$store.getters.frontName
      this.data.labels=skillScore  //本コンポーネントの data/labels を skillScore に。
    }
  }
}

</script>
