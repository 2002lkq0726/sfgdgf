<template>
    <div>
      <h1>首页</h1>
      <ul>
        <li @click="fn">1111111</li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    fn () {
      this.$router.push('/hello')
    }
  }
}
</script>

<style scoped>

</style>
