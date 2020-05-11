import {
  GET_TOTAL_NUMBERS_OF_PRODUCTS,
  GET_INDEXDATA,
  GET_INDEXCATEMODULE,
  GET_CATELISTSITEM,
  GET_CATENAVDATAS
} from 'store/mutation_types'

export default {
  [GET_TOTAL_NUMBERS_OF_PRODUCTS](state, totalNumbersOfProducts) {
    state.totalNumbersOfProducts = totalNumbersOfProducts
  },
  [GET_INDEXDATA](state, indexData) {
    state.indexData = indexData
  },
  [GET_INDEXCATEMODULE](state, indexCateModule) {
    state.indexCateModule = indexCateModule
  },
  [GET_CATELISTSITEM](state, cateListsItem) {
    state.cateListsItem = cateListsItem
  },
  [GET_CATENAVDATAS](state, cateNavDatas) {
    state.cateNavDatas = cateNavDatas
  },
}
