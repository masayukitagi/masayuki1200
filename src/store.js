import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)        //vuexを読み込む
const store = new Vuex.Store({           // storeをエクスポート
  state: {                //stateオプションで初期値を設定
    chartScore: [],    //初期値をなし
    loaded : false
  },
  getters: {
    frontScore(state){
      const frontScoreAllay=[]
      state.chartScore[0].skills.forEach((skillInfo)=>{
        frontScoreAllay.push(skillInfo.score)
      })
      return frontScoreAllay
    },
    backScore(state){
      const backScoreAllay=[]
      state.chartScore[1].skills.forEach((skillInfo)=>{
        backScoreAllay.push(skillInfo.score)
      })
      return backScoreAllay
    },
    devScore(state){
      const devScoreAllay=[]
      state.chartScore[2].skills.forEach((skillInfo)=>{
        devScoreAllay.push(skillInfo.score)
      })
      return devScoreAllay
    },
    frontName(state){
      const frontNameAllay=[]
      state.chartScore[0].skills.forEach((skillInfo)=>{
        frontNameAllay.push(skillInfo.name)
      })
      return frontNameAllay
    },
    backName(state){
      const backNameAllay=[]
      state.chartScore[1].skills.forEach((skillInfo)=>{
        backNameAllay.push(skillInfo.name)
      })
      return backNameAllay
    },
    devName(state){
      const devNameAllay=[]
      state.chartScore[2].skills.forEach((skillInfo)=>{
        devNameAllay.push(skillInfo.name)
      })
      return devNameAllay
    }
  },

  // getters: {              //stateからデータを取得する
  //   chartScore(state) {
  //     const scoreAllay = []
  //       state.chartScore[0].skills.forEach((frontAllay)=>{
  //         scoreAllay.push(frontAllay.score)
  //       })          //stateのchartScoreの値を取得
  //       return scoreAllay     //取得した値をtemplateに返す
  //   }
  // },

  mutations: {              //stateの値を更新する
    setChartScore(state, paylord) {      //setって何？？？？？？？
      state.chartScore = paylord.chartScore   //paylordの値に更新
      state.loaded = true
    }
  },
  actions:{ //mutationsの関数を指定。stateの何を更新するかが決まる。
    async updateChartScore({ commit }) {
      const chartScore = [];         //chartScoreを空の状態に
      const functionsUrl = 'https://us-central1-' + process.env.VUE_APP_FUNCTIONS_API + '.cloudfunctions.net/skills';
      const res = await axios.get(functionsUrl);     //axios.getでAPI（URLのやつ）を取得
      res.data.forEach((score) => {     //forEach((score) =>これ以降の処理を値が終わるまで繰り返す。
        chartScore.push(score);           //chartScoreにscoreの値をプッシュする
        });
      commit('setChartScore', {chartScore})        //
    }
  }
})

export default store


/*
store.jsでは「state」「mutations」「actions」というものがあり、ここで状態管理をまとめて行っています。
【state】
Vueインスタンスでいう「data」オプションのようなもので、初期値としての文字列や配列・ブーリアン値などの値が入ります。
【mutations】
stateの値を更新します。stateの値を更新できるのはmutationsからのみとなります。commit関数で呼び出されます。
【actions】
登録されたmutationsを実行します。commit関数の引数で実行するmutationsを指定します。コンポーネントからはdispatch関数で実行できます。
→vuexでは、「actions」で「mutations」の関数を指定し「state」の値を更新、最後にコンポーネントのDOMが書き換わるというイメージ
*/
