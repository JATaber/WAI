<template>
  <div id="app">
    <!--<navbar-component></navbar-component>-->
    <!-- This is the main area of the view -->
    <div>
      <Navbar></Navbar>
      <router-view/>
    </div>

  </div>
</template>

<script>
import Navbar from './components/Navbar'

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style lang="scss">
  @import './assets/scss/app.scss';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

  body{
    background-color: $primary;
  }

  .container{
    margin-top: 60px;
  }
</style>
