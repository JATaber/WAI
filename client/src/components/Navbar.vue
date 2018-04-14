<template>
  <b-navbar class="nav" toggleable="md">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <b-navbar-brand href="/">
      <img class="logo" src="../assets/aki_logo.png" alt="AKI">
    </b-navbar-brand>
    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav pills>
        <b-nav-item :class="{ 'active': $route.path == '/schedule' }" href="/schedule">Schedule</b-nav-item>
        <b-nav-item :class="{ 'active': $route.path == '/stream' }" href="/stream">Stream</b-nav-item>
        <b-nav-item :class="{ 'active': $route.path == '/youtube' }" href="/youtube">YouTube</b-nav-item>
        <b-nav-item :class="{ 'active': $route.path == '/contact' }" href="/contact">Contact</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<style lang="scss" scoped>
  .logo{
    width: 60px;
    height: 60px;
  }

  .nav{
    background-color: #24b4be;
  }
</style>

<script>
module.exports = {
  name: 'navbar',
  methods: {
    activate () {
      this.active = !this.active
    }
  },
  data () {
    return {
      active: false
    }
  }
}
</script>
