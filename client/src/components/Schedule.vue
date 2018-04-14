<template>
  <div class="container">
    <img class="banner" src="../assets/aki_sched.png" alt="banner">

    <div class="jumbotron">
      <b-table striped hover :items="items" :fields="fields"></b-table>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      fields: [
        {
          key: 'day',
          sortable: false
        },
        {
          key: 'startTime',
          sortable: false
        },
        {
          key: 'endTime',
          sortable: false
        }
      ],
      items: [
        { day: 'Sunday', startTime: '~9am CST', endTime: '???' },
        { day: 'Monday', startTime: '', endTime: '' },
        { day: 'Tuesday', startTime: '~2/3pm CST', endTime: '???' },
        { day: 'Wednesday', startTime: '', endTime: '' },
        { day: 'Thursday', startTime: '~2/3pm CST', endTime: '???' },
        { day: 'Friday', startTime: '', endTime: '' },
        { day: 'Saturday', startTime: '~9am CST', endTime: '???' }
      ]
    }
  }
}
</script>
