import Vue from 'vue'
import App from './App.vue'
import store from './store'

/* ブラウザ依存の解除 */
import './assets/css/reset.css'
/* スクロール */
import smoothScroll from 'vue-smoothscroll'
Vue.use(smoothScroll)
// npm install --save axios vue-axios を実行してデータにアクセスできるようにする
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
Vue.config.productionTip = false
new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
