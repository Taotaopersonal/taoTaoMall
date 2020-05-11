import http from 'http'
import {
  GET_TOTAL_NUMBERS_OF_PRODUCTS,
  GET_INDEXDATA,
  GET_INDEXCATEMODULE,
  GET_CATELISTSITEM,
  GET_CATENAVDATAS
} from 'store/mutation_types'
const OK = "200"
export default {
  async [GET_TOTAL_NUMBERS_OF_PRODUCTS]({
    commit
  }) {
    const {
      code,
      data
    } = await http.home.getTotalNumbersOfProducts()
    if (code === OK) {
      commit(GET_TOTAL_NUMBERS_OF_PRODUCTS, data)
    }
  },
  async [GET_INDEXDATA]({
    commit
  }) {
    const {
      code,
      data
    } = await http.home.index()
    if (code === OK) {
      commit(GET_INDEXDATA, data)
    }
  },
  async [GET_INDEXCATEMODULE]({
    commit
  }) {
    const {
      code,
      data
    } = await http.home.indexCateModule()
    if (code === OK) {
      commit(GET_INDEXCATEMODULE, data)
    }
  },
  async [GET_CATELISTSITEM]({
    commit
  },id) {
    const {
      code,
      data
    } = await http.home.cateListsItem({id})
    if (code === OK) {
      commit(GET_CATELISTSITEM, data)
    }
  },
  async [GET_CATENAVDATAS]({
    commit
  }) {
    const {
      code,
      data
    } = await http.home.cateNavDatas()
    if (code === OK) {
      commit(GET_CATENAVDATAS, data)
    }
  },
}
