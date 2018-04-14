<template>
  <div class="container">
    <twitch-player
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
