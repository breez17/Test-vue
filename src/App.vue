<template>
  <div id="app">
    <Home />
  </div>
</template>

<script>
import Home from '@/pages/Home'

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
  }
  #app {
    font-family: Muli, sans-serif;
    height: 100vh;
  }

  .container, .main {
    height: 100%;
  }
</style>
