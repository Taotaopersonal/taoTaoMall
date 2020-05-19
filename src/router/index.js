import Vue from 'vue'
import Router from 'vue-router'
// import {
//   Toast
// } from 'vant'
import routes from '@/routes'
import store from 'store'
import {
  AUTO_LOGIN
} from "store/mutation_types";
Vue.use(Router)

let router = new Router({
  // mode:history,
  routes,
  linkActiveClass: "active"
})


// 全局前置守卫判断登录状态,进行相关路由选择
router.beforeEach(async (to, from, next) => {
  if (to.path === '/cart' || to.path === '/profile') await store.dispatch(AUTO_LOGIN)
  // 这样写效率很低,每次路由切换都要去验证token是否过期,或者token是否正确
  // if (to.path !== '/loginByPhone' || to.path !== '/loginByPwd') {
  //   if (store.state.login.loginData._id) {
  //     next()
  //   } else {
  //     Toast.fail({
  //       message: '请先登录',
  //       duration: 2000,
  //       onClose() {
  //         next('/profile')
  //       }
  //     })
  //   }
  // } else {
  next()
  // }
})

export default router
