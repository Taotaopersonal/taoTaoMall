import local from "util/local"
// 该文件是发请求需要的原材料
export default {
  name: 'search',
  api: {
    getCode: {
      url: "/sendcode",
      method: "get",
      corsUrl: "/4000",
      $toast: true
    },
    getLoginInfoBySms: {
      url: "/login_sms",  
      method: "post",
      corsUrl: "/4000",
    },
    getLoginInfoByPwd: {
      url: "/login_pwd",
      method: "post",
      corsUrl: "/4000",
    },
    autoLigin: {
      url: "/auto_login",
      method: "get",
      corsUrl: "/4000",
      token() {
        return local.get('token', '')
      },
      $toast:true
    }
  }
}
