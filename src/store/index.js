import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pages: null,
    studio: null,
    front: null,
    end: null,
    mobile: null,
    embedded: null,
    data: null,
    game: null,
    design: null,
    isPhone: null,
    rootEm: 0,      // 根
    screenUnit: {
      screenWidth: 0
    },
    browserName: '',
    loadedCount: 0,
    isLoad: false
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
