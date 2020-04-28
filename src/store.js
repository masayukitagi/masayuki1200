import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)                   //vuexを読み込む
const store = new Vuex.Store({  //store を定義

  state: {                      //stateで現状を設定。
    chartScore : [],            //chartScore という配列を空に設定。
    loaded : false              //loaded という関数を false に設定。
  },

  getters: {
    frontScore(state){  //frontScoreという処理を定義。
      const frontScoreAllay=[]  //frontScoreAllayという配列を定義。
      state.chartScore[0].skills.forEach((filter)=>{  //state/chartScore0番目の配列/skillsの配列全てに次の処理を実行。処理filterを定義。
        frontScoreAllay.push(filter.score)  //定義した frontScoreAllay に 処理filter で取得したscoreの値をプッシュする処理。
      })
      return frontScoreAllay  //上の処理結果を返す。frontscoreの値が決まる。
    },
    backScore(state){
      const backScoreAllay=[]
      state.chartScore[1].skills.forEach((filter)=>{
        backScoreAllay.push(filter.score)
      })
      return backScoreAllay
    },
    devScore(state){
      const devScoreAllay=[]
      state.chartScore[2].skills.forEach((filter)=>{
        devScoreAllay.push(filter.score)
      })
      return devScoreAllay
    },
    frontName(state){
      const frontNameAllay=[]
      state.chartScore[0].skills.forEach((filter)=>{
        frontNameAllay.push(filter.name)  //定義した frontNameAllay に 処理skillInfo で取得したnameの値をプッシュする処理。
      })
      return frontNameAllay
    },
    backName(state){
      const backNameAllay=[]
      state.chartScore[1].skills.forEach((filter)=>{
        backNameAllay.push(filter.name)
      })
      return backNameAllay
    },
    devName(state){
      const devNameAllay=[]
      state.chartScore[2].skills.forEach((filter)=>{
        devNameAllay.push(filter.name)
      })
      return devNameAllay
    }
  },



  mutations: {              //stateの値を更新する
    setChartScore(state, paylord) {      //setChartScore という処理を定義し、第一・第二引数を設定。
      state.chartScore = paylord.chartScore   //state の chartScore の値を paylord（アクション後）の chartScore の値に更新。
      state.loaded = true  //state の loaded  を true に。（→skill.vue の computed がこの更新内容を取得。）
    }
  },

  actions:{ //mutationsの関数を指定。stateの何を更新するかが決まる。
    async updateChartScore({ commit }) {
      const chartScore = [];         //chartScore を定義。
      const functionsUrl = 'https://us-central1-' + process.env.VUE_APP_FUNCTIONS_API + '.cloudfunctions.net/skills'; //functionsUrl を定義。
      const res = await axios.get(functionsUrl);     //axios.get で API（functionsUrl）を取得。データベースと連結。
      res.data.forEach((data) => {     //forEach((score) => 次の処理を（res.data.）データベース内の全ての配列に繰り返し実行。処理scoreを定義。
        chartScore.push(data);           //定義した chartScore に処理scoreで取得した値をプッシュする処理。
        });
      commit('setChartScore', {chartScore})        //mutations の setChartScore を呼び chartScore を更新。
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
