import http from 'http'
import {
  GET_NAVLIST,
  GET_INITWATERFULLDATA
} from 'store/mutation_types'
const OK = "200"
export default {
  async [GET_NAVLIST]({
    commit
  }) {
    const {
      code,
      data
    } = await http.worth.getNavList()
    if (code === OK) {
      commit(GET_NAVLIST, data.navList)
    }
  },
  async [GET_INITWATERFULLDATA]({
    commit
  }) {
    const {
      code,
      data
    } = await http.worth.getInitWaterfullData()
    if (code === OK) {
      commit(GET_INITWATERFULLDATA,data)
    }
  }
}
