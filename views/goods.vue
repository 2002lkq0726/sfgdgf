<template>
<div>
<!--  <h1>购物车</h1>-->
  <ul>
    <li v-for="(item, index) in goodsList" :key="index">
      <p>{{item.name}}</p>
      <p>{{item.price}}</p>
      <button @click="addCar(item.id)">添加购物车</button>
    </li>
  </ul>
  <cars-com></cars-com>
</div>
</template>

<script>
import CarsCom from '@/components/Cars'
export default {
  name: 'goods',
  components: {
    CarsCom
  },
  data () {
    return {
      goodsList: []
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    getData () {
      this.goodsList.push(...[
        {
          id: 1,
          name: '冰箱',
          price: 1000
        },
        {
          id: 2,
          name: '洗衣机',
          price: 2000
        },
        {
          id: 3,
          name: '电视',
          price: 3000
        },
        {
          id: 4,
          name: '空调',
          price: 4000
        }
      ])
    },
    addCar (id) {
      this.$store.commit('add', this.findGoods(id))
    },
    findGoods (id) {
      return this.goodsList.filter(item => {
        return item.id === id
      })[0]
    }
  }
}
</script>

<style scoped>

</style>
