<template>
<div>
  <p>我是子组件内容</p>
  <h1> {{ msg }}</h1>
</div>
</template>

<script>
export default {
  name: 'Child',
  props: [ 'msg' ]
}
</script>

<style scoped>

</style>
