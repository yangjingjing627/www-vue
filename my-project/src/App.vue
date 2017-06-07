<template>
  <div id="app">
    <topbar></topbar>
    <wrapper></wrapper>
    
  </div>
</template>

<script>
import wrapper from './script/views/common/wrapper.vue'
import topbar from './script/views/common/topbar.vue'

export default {
  name: 'app',
  data () {
    return {
      isActive: true
    }
  },
  components: { wrapper, topbar }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
  width: 100%;
  height: 100%;
}
.active {
  font-size: 30px;
  font-weight: bold;
}
</style>
