<template>
    <div>
      <h3>购物车内容</h3>
      <ul>
        <li v-for="(item, index) in goods" :key="index">{{item.name}}-----{{item.count}}</li>
      </ul>
    </div>
</template>

<script>
// import carStore from '../store/car'
export default {
  name: 'Cars',
  computed: {
    goods () {
      return this.$store.state.carStore.carGoods
    }
  }
}
</script>

<style scoped>

</style>
