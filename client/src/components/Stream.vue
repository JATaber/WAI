<template>
  <div class="container">
    <img class="banner" src="../assets/aki_stream.png" alt="stream">

    <twitch-player class="player" width="100%" height="100%"
      :channel="channel"
      ></twitch-player>
  </div>
</template>

<script>
import VueTwitchPlayer from 'vue-twitch-player'
import TwitchPlayer from 'vue-twitch-player/TwitchPlayer'

export default {
  components: {
    TwitchPlayer,
    VueTwitchPlayer
  },
  data () {
    return {
      channel: 'burkeblack'
    }
  }
}
</script>
