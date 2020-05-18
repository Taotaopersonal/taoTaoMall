// 该文件是发请求需要的原材料
export default {
  // baseUrl: "https://m.you.163.com",
  name: 'worth',
  api: {
    getNavList: {
      url: "/topic/v1/know/navWap.json",
      method: "get",
      corsUrl: "/wangyi"
    },
    getInitWaterfullData: {
      url: "/topic/v1/find/recManual.json",
      method: "get",
      corsUrl: "/wangyi"
    },
    getUpdateWaterfulData: {
      url: "/topic/v1/find/recAuto.json",
      method: "get",
      corsUrl: "/wangyi",
    }
  }
}
