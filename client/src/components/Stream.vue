<template>
  <div class="container">
    <img class="banner" src="../assets/aki_stream.png" alt="stream">

    <twitch-player class="player" width="100%" height="100%"
      :channel="channel"
      ></twitch-player>
    <iframe frameborder="0"
            scrolling="true"
            id="awkwardkittyinc"
            src="http://www.twitch.tv/embed/awkwardkittyinc/chat"
            width="100%"
            height="500"
    ></iframe>
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
      channel: 'awkwardkittyinc'
    }
  }
}
</script>
