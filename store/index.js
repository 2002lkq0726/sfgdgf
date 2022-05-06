import Vue from 'vue'
import vuex from 'vuex'
import carStore from './car'
Vue.use(vuex)
const store = new vuex.Store({
  // state: {
  //   name: 'zhangSan'
  // }
  modules: {
    carStore
  }
})
export default store
