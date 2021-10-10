<template>
  <div id="app">
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>

<script>
import EmptyLayout from "./layouts/EmptyLayout";
import MenuLayout from "./layouts/MenuLayout";
export default {
  computed: {
    layout() {
      return this.$route.meta.layout + 'layout'
    }
  },
comments: {
  MenuLayout, EmptyLayout
}
}
</script>

<style lang="scss">
#app {
  width: 100%;
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


</style>
