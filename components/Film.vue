<template>
    <div>
      <h3>新闻列表</h3>
      <ul>
        <li><router-link to="/news/012">item 1</router-link></li>
        <li><router-link to="/news/123">item 2</router-link></li>
        <li><router-link to="/news/456">item 3</router-link></li>
        <li><router-link to="/news/678">item 4</router-link></li>
        <li @click="fn"><a>item 5</a></li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'Film',
  methods: {
    fn () {
      const id = '99982842215'
      this.$router.push({
        name: 'detail',
        // query: {
        //   id: '123'
        // }
        params: {
          id
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
