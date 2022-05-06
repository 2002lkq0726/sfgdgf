<template>
  <div class="hello">
    <input type="text" v-model="msg" @keypress.enter="fn" />
    <h1>{{ "hello "+ msg }}</h1>
    <h2>{{ upper }}</h2>
    <child msg="1111111111"></child>
  </div>
</template>

<script>
import Child from './Child'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'zhangSan'
    }
  },
  mounted () {
    console.log(this.$store.state.name)
  },
  methods: {
    fn () {
      console.log(this.msg)
    }
  },
  computed: {
    upper () {
      return this.msg.toUpperCase()
    }
  },
  components: {
    Child
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
