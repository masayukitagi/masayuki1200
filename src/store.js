import Vue from 'vue'
import Vuex from 'vuex'

//vuexを読み込む
Vue.use(Vuex)
// storeをエクスポート
const store = new Vuex.Store({

  //stateオプションで初期値を設定
  state: {
    message: []
  },

  getters: {
    todos(state) {
      return state.text
    }
  },

  mutations: {
    setTodo(state, data) {
      state.text = data
    }
  },

  actions: {
    updateTodos({ commit }, data) {
      commit('setTodo', data)
    }
  }
})

//store.stateで参照
console.log(store.state.count) //10

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
