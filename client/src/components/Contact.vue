<template>
  <div class="container">
    <img class="banner" src="../assets/aki_contact.png" alt="contact">

    <b-container fluid>
      <b-card-group columns>
        <b-card class="jumbotron">
          <a href="http://twitch.tv/awkwardkittyinc"><icon name="brands/twitch"></icon> twitch.tv/awkwardkittyinc</a><br>
          <a href="http://youtube.com/awkwardkittying"><icon name="brands/youtube"></icon> youtube.com/awkwardkittyinc</a><br>
          <a href="http://twitter.com/AwkwardKittyInc"><icon name="brands/twitter"></icon> twitter.com/AwkwardKittyInc</a><br>
          <a href="http://instagram.com/awkwardkittyinc"><icon name="brands/instagram"></icon> instagram.com/awkwardkittyinc</a><br>
        </b-card>
        <b-card class="ml-auto jumbotron">

          <b-form @submit="modal" @reset="onReset" v-if="show">
            <b-form-group id="email"
                          horizontal
                          label="Email:"
                          lable-for="emailInput"
                          description="We'll never share your email with anyone else.">
              <b-form-input id="emailInput"
                            type="email"
                            v-model="form.email"
                            required
                            placeholder="Enter email">
              </b-form-input>
            </b-form-group>
            <b-form-group id="name"
                          horizontal
                          label="Name:"
                          description="What should I call you?"
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
                             :max-rows="12">
            </b-form-textarea>
            <b-btn v-b-modal.formSub type="submit" variant="primary">Submit</b-btn>
            <b-button type="reset" variant="primary">Reset</b-button>
          </b-form>
        </b-card>
      </b-card-group>
    </b-container>
    <b-modal id="formSub" ref="formSub" hide-footer title="Thank You!">
      <div class="d-block text-center">
        <h3>We will get back to you as soon as we can!</h3>
      </div>
      <b-btn class="mt-3" variant="primary" block @click="hide">OK</b-btn>
    </b-modal>
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
      show: true
    }
  },
  methods: {
    onReset (evt) {
      this.form.email = ''
      this.form.name = ''
      this.form.comment = ''
      this.show = false
      this.$nextTick(() => { this.show = true })
    },
    modal () {
      this.$refs.formSub.show()
    },
    hide () {
      this.$refs.formSub.hide()
    }
  }
}
</script>
