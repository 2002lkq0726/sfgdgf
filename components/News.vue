<template>
<div>
  <router-link to="/news/film">二级导航1</router-link>
<!--  <router-link to="/news/dir">二级导航2</router-link>-->
  <router-link :to="{name:'dir'}">二级导航2</router-link>
  <router-view></router-view>
</div>
</template>

<script>
export default {
  name: 'News'
}
</script>

<style scoped>

</style>
