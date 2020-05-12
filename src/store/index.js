import Vue from 'vue'
import Vuex from 'vuex'
import home from './modules/home'
import worth from './modules/worth'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    home,
    worth
  }
})
