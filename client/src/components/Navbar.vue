<template>
  <b-navbar toggleable="md" variant="info">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <b-navbar-brand href="/#/">
      <img class="logo" src="../assets/aki_logo.png" alt="AKI">
    </b-navbar-brand>
    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav>
        <b-nav-item href="/#/schedule">Schedule</b-nav-item>
        <b-nav-item href="/#/stream">Stream</b-nav-item>
        <b-nav-item href="/#/youtube">YouTube</b-nav-item>
        <b-nav-item href="/#/contact">Contact</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<style lang="scss" scoped>
  .logo{
    width: 60px;
    height: 60px;
  }
</style>

<script>
module.exports = {
  data () {
    return {}
  }
}
</script>
