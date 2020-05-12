import {
  GET_NAVLIST,
  GET_INITWATERFULLDATA
} from 'store/mutation_types'

export default {
  [GET_NAVLIST](state, navList) {
    state.navList = navList
  },
  [GET_INITWATERFULLDATA](state, initWaterfullList) {
    state.initWaterfullList = initWaterfullList
  }
}
