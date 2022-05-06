<template>
    <div>
      <button @click="gotoback">返回</button>
      <h1>新闻详情标题</h1>
      <p>段落内容</p>
    </div>
</template>

<script>
export default {
  name: 'Detail',
  mounted () {
    // console.log(this.$route.params.id)
    const id = this.$route.params.id
    this.getData(id)
  },
  methods: {
    getData (id) {
      console.log(id)
    },
    gotoback () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>

</style>
