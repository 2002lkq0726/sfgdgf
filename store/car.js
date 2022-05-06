import Vue from 'vue'
export default {
  state: {
    carGoods: []
  },
  mutations: {
    add (state, data) {
      let goodIndex = state.carGoods.findIndex(item => {
        return item.id === data.id
      })
      if (goodIndex >= 0) {
        state.carGoods[goodIndex].count++
        Vue.set(state.carGoods, goodIndex, state.carGoods[goodIndex])
      } else {
        data.count = 1
        state.carGoods.push(data)
      }
    }
  },
  action: {
  }
}
