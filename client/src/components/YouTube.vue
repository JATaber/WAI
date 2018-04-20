<template>
  <div class="container">
    <img class="banner" src="../assets/aki_youTube.png" alt="youTube">

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
      errors: []
    }
  },
  mounted () {
    // this.searchYouTbe()
    this.getPosts()
  },
  methods: {
    async getPosts () {
      axios.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
          part: 'snippet',
          order: 'date',
          q: 'awkwardkittyinc',
          key: apiKey
        }
      })
        .then(response => {
          if (response) { console.log(response.data.items) }
        })
        .catch(error => console.error(error))
    }
  }
}
</script>
