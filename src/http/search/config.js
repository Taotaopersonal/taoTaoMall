// 该文件是发请求需要的原材料
export default {
  name: 'search',
  api: {
    getInitData: {
      url: "/xhr/search/init.json",
      method: "post",
      corsUrl: '/wangyi'
    },
    getAutoSearchData: {
      url: "/xhr/search/searchAutoComplete.json",
      method: "post",
      corsUrl: '/wangyi',
      isForm:true
    }
  }
}
