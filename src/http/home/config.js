// 该文件是发请求需要的原材料
export default {
  name: 'seller',
  api: {
    getTotalNumbersOfProducts: {
      url: "/getTotalNumbersOfProducts",
      method: "get",
      corsUrl: "/4000"
    },
    index: {
      url: "/index",
      method: "get",
      corsUrl: "/4000"
    },
    indexCateModule: {
      url: "/indexCateModule",
      method: "get",
      corsUrl: "/4000"
    },
    cateLists: {
      url: "/cateLists",
      method: "get",
      corsUrl: "/4000"
    },
    cateNavDatas: {
      url: "/cateNavDatas",
      method: "get",
      corsUrl: "/4000"
    },
    cateListsItem: {
      url: "/cateListsItem",
      method: "get",
      corsUrl: "/4000"
    }
  }
}
