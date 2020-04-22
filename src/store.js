import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)        //vuexを読み込む
const store = new Vuex.Store({           // storeをエクスポート
  state: {                //stateオプションで初期値を設定
    chartScore: []      //初期値をなし
  },
  getters: {              //stateからデータを取得する
    chartScore(state) {          //stateのchartScoreの値を取得
      return state.chartScore     //取得した値をtemplateに返す
    }
  },
  mutations: {              //stateの値を更新する
    setChartScore(state, paylord) {      //setって何？？？？？？？
      state.chartScore = paylord.chartScore   //paylordの値に更新
    }
  },
  actions:{ //mutationsの関数を指定。stateの何を更新するかが決まる。
    async updateChartScore({ commit }) {
      let chartScore = [];         //chartScoreを空の状態に
      let res = await axios.get('https://us-central1-masayukitagi-8e898.cloudfunctions.net/skills')     //axios.getでAPI（URLのやつ）を取得
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
