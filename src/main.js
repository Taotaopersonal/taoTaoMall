import Vue from 'vue'
import App from './App.vue'
import http from '@/http'
import router from '@/router'
import store from '@/store'
import 'lib-flexible/flexible'
import Swiper from 'swiper'
import "swiper/css/swiper.min.css";
import BScroll from 'better-scroll'


Vue.config.productionTip = false
Vue.prototype.$http = http
Vue.prototype.Swiper = Swiper
Vue.prototype.BScroll = BScroll

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
