<template>
  <div class="container">
    <img class="banner" src="../assets/aki_youTube.png" alt="youTube">
    <div class="jumbotron">
      <b-card-group columns>
        <b-card class="ml-auto" v-for="(video, index) in videos" :key="index">
          <youtube class="video" :video-id= video :player-vars="playerVars"></youtube>
        </b-card>
      </b-card-group>
    </div>

  </div>
</template>

<script>
import axios from 'axios'

// const CLIENT_ID = '501462870335-7o4pi1sr4oerfa2ilmi4rulsqcc6hrs4.apps.googleusercontent.com'
const apiKey = 'AIzaSyD5ojU-89Hw4jGEvaIx4WMYa1u8SoElbWQ'
// let BASE_URL = 'https://googleapis.com/youtube/v3/search'

export default {
  name: 'videos',
  data () {
    return {
      videos: [],
      playlistID: [],
      errors: [],
      playerVars: {
        autoplay: 0
      }
    }
  },
  mounted () {
    // this.getPosts()
    this.getPlaylistId()
  },
  methods: {
    getPlaylistId () {
      axios.get('https://www.googleapis.com/youtube/v3/playlists', {
        params: {
          channelId: 'UCoSX07YpXSK0bekcWCbazRw',
          part: 'snippet, contentDetails',
          key: apiKey
        }
      })
        .then(response => {
          if (response) {
            response.data.items.forEach((item) => {
              this.playlistID.push(item.id)
            })
            // console.log(this.playlistID)
            this.getVideoID()
          }
        })
        .catch(error => console.error(error))
    },
    getVideoID () {
      this.playlistID.forEach((item) => {
        axios.get('https://www.googleapis.com/youtube/v3/playlistItems', {
          params: {
            maxResults: '25',
            part: 'snippet,contentDetails',
            playlistId: item,
            key: apiKey
          }
        })
          .then(response => {
            response.data.items.forEach((item) => {
              this.videos.push(item.contentDetails.videoId)
            })
            // console.log(this.videos)
          })
          .catch(error => console.error(error))
      })
    }
  }
}
</script>
