import Vue from 'vue'
import App from './App.vue'
import http from 'http'
import router from 'router'
import store from 'store'
import 'lib-flexible/flexible'
import Swiper from 'swiper'
import BScroll from 'better-scroll'
import {
  Lazyload,
} from 'vant';
import '@/validate'
Vue.use(Lazyload, {
  lazyComponent: true,
  [Lazyload.name]: Lazyload
});
Vue.config.productionTip = false
Vue.prototype.$http = http
Vue.prototype.Swiper = Swiper
Vue.prototype.BScroll = BScroll

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
