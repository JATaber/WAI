<template>
  <div class="container">
    <img class="banner" src="../assets/aki_sched.png" alt="banner">

    <div class="jumbotron">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Day</th>
            <th>Start Time</th>
            <th>End Time</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(schedule, index) in schedules" :key="index">
            <td>{{ schedule.day }}</td>
            <td>{{ schedule.start }}</td>
            <td>{{ schedule.end }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Firebase from 'firebase'

let config = {
  apiKey: 'AIzaSyCZoioS61EvIRwMzmtBH07dTr4loPb4Ugs',
  authDomain: 'wai-fullsail.firebaseapp.com',
  databaseURL: 'https://wai-fullsail.firebaseio.com',
  projectId: 'wai-fullsail',
  storageBucket: 'wai-fullsail.appspot.com',
  messagingSenderId: '133913508287'
}

let app = Firebase.initializeApp(config)
export let db = app.database()

let scheduleRef = db.ref('schedule')

export default {
  name: 'schedule',
  data () {
    return {
      schedules: {}
    }
  },
  firebase: {
    schedules: scheduleRef
  }
}
</script>
