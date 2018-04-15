<template>
  <div class="container">
    <img class="banner" src="../assets/aki_contact.png" alt="contact">

    <b-container fluid>
      <b-row>
        <b-col class="jumbotron" md="5">
          <icon name="brands/twitch"></icon><p>twitch.tv/awkwardkittyinc</p><br>
          <icon name="brands/youtube"></icon><p>youtube.com/awkwardkittyinc</p><br>
          <icon name="brands/twitter"></icon><p>twitter.com/AwkwardKittyInc</p><br>
          <icon name="brands/instagram"></icon><p>instagram.com/awkwardkittyinc</p><br>
        </b-col>

        <b-col md="6" class="ml-auto jumbotron">

          <b-form @submit="showModal=true" @reset="onReset" v-if="show">
            <b-form-group id="email"
                          label="Email address:"
                          lable-for="emailInput"
                          description="We'll never share your email with anyone else.">
              <b-form-input id="emailInput"
                            type="email"
                            v-model="form.email"
                            required
                            placeholder="Enter email">
              </b-form-input>
            </b-form-group>
            <b-form-group id="group2"
                          label="Your Name:"
                          label-for="nameInput">
              <b-form-input id="nameInput"
                            type="text"
                            v-model="form.name"
                            required
                            placeholder="Enter Name">
              </b-form-input>
            </b-form-group>
            <b-form-textarea id="textArea"
                             v-model="form.comment"
                             placeholder="Please type your question or comment here."
                             :rows="3"
                             :max-rows="6">
            </b-form-textarea>
            <b-button type="submit" variant="primary">Submit</b-button>
            <b-button type="reset" variant="danger">Reset</b-button>
          </b-form>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>

export default {
  data () {
    return {
      form: {
        email: '',
        name: '',
        comment: ''
      },
      show: true,
      showModal: false
    }
  },
  methods: {
    onReset (evt) {
      this.form.email = ''
      this.form.name = ''
      this.form.comment = ''
      this.show = false
      this.$nextTick(() => { this.show = true })
    }
  }
}
</script>
