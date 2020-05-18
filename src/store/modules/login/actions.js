import {
  Toast
} from 'vant'
import http from "http"
import Router from '@/router'
import local from '@/util/local'
import {
  GET_LOGIN_INFO,
  RESET_LOGIN_INFO,
  AUTO_LOGIN
} from 'store/mutation_types'
const OK = 0
const ERROR = 1

function LoginSuccess(commit, data, loginWay, tapChangeImg) {
  commit(GET_LOGIN_INFO, data)

  local.set("token", data.token)

  if (loginWay === "password") tapChangeImg()

  Toast.success({
    message: "登录成功",
    duration: 2000
  })

  Router.replace('/profile')
}

function LoginFail(loginWay, tapChangeImg) {
  if (loginWay === "password") tapChangeImg()
  Toast.fail({
    message: "登录失败，请重新登录！",
    duration: 2000
  })
}
export default {
  async [GET_LOGIN_INFO]({
    commit
  }, {
    loginWay,
    phone,
    code,
    name,
    pwd,
    captcha,
    tapChangeImg
  }) {
    let body = ''
    if (loginWay === "message") {
      body = await http.login.getLoginInfoBySms({
        phone,
        code
      })
    } else if (loginWay === "password") {
      body = await http.login.getLoginInfoByPwd({
        name,
        pwd,
        captcha
      })
    }
    if (body.code === OK) LoginSuccess(commit, body.data, loginWay, tapChangeImg)
    if (body.code === ERROR) LoginFail(loginWay, tapChangeImg)
  },
  async [RESET_LOGIN_INFO]({
    commit
  }) {
    await commit(RESET_LOGIN_INFO)
    local.remove('token')
  },
  async [AUTO_LOGIN]({
    state,
    commit
  }) {
    // if (Router.currentRoute.fullPath === "/login") return
    try {
      const {
        code,
        data,
        // msg
      } = await http.login.autoLigin()
      if (code === OK) {
        await commit(AUTO_LOGIN, data)
        // 这一步需要在校验token的时候后台接口也要将该token返回回来
        local.set("token", state.token)
      } else if (code === ERROR) {
        await commit(RESET_LOGIN_INFO)
        // Toast.fail({
        //   message: msg,
        //   duration: 2000,
        //   onClose() {
        //     Router.replace('/login')
        //   }
        // })
      }
    } catch (error) {
      await commit(RESET_LOGIN_INFO)
      // Toast.fail({
      //   message: "登录超时，请重新登录",
      //   duration: 2000,
      //   onClose() {
      //     Router.replace('/login')
      //   }
      // })
    }
  }
}
