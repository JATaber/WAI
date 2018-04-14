<template>
  <div class="container">
    <img class="banner" src="../assets/aki_stream.png" alt="stream">

    <twitch-player class="player" width="100%" height="100%"
      :channel="channel"
      ></twitch-player>
    <twitch-chat class="chat" width="100%" height="100%"
      :channel="channel"
      ></twitch-chat>
  </div>
</template>

<script>
import VueTwitchPlayer from 'vue-twitch-player'
import TwitchPlayer from 'vue-twitch-player/TwitchPlayer'
import VueTwitchChat from 'vue-twitch-chat'
import TwitchChat from 'vue-twitch-chat/TwitchChat'

export default {
  components: {
    TwitchChat,
    TwitchPlayer,
    VueTwitchPlayer,
    VueTwitchChat
  },
  data () {
    return {
      channel: 'burkeblack'
    }
  }
}
</script>
