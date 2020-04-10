import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')


/* ブラウザ依存の解除 */
import './assets/css/reset.css'

/* スクロール */
import smoothScroll from 'vue-smoothscroll'
Vue.use(smoothScroll)
