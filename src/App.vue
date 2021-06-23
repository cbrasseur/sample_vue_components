<template>
  <div id="app">
    <div id="nav">
      <banner />
    </div>
    <router-view/>
  </div>
</template>

<script>

  import Banner from '@/components/Banner.vue'

  export default {
    name: 'Home',
    components: {
      // eslint-disable-next-line vue/no-unused-components
      Banner,
    }
  }

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  background: #2c3e50;
  img {
    width: 30px;
  }
  a {
    text-decoration: none;
    font-weight: bold;
    color: white;

    &.router-link-exact-active {
      color: white;
    }
  }
  .v-app-bar {
    background-color: #37377b;
  }
}
</style>
