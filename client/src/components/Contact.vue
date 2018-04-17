<template>
  <div class="container">
    <img class="banner" src="../assets/aki_contact.png" alt="contact">

    <b-container fluid>
      <b-card-group columns>
        <b-card class="">
          <a href="http://twitch.tv/awkwardkittyinc"><icon name="brands/twitch"></icon> twitch.tv/awkwardkittyinc</a><br>
          <a href="http://youtube.com/awkwardkittying"><icon name="brands/youtube"></icon> youtube.com/awkwardkittyinc</a><br>
          <a href="http://twitter.com/AwkwardKittyInc"><icon name="brands/twitter"></icon> twitter.com/AwkwardKittyInc</a><br>
          <a href="http://instagram.com/awkwardkittyinc"><icon name="brands/instagram"></icon> instagram.com/awkwardkittyinc</a><br>
        </b-card>
        <b-card class="ml-auto">

          <b-form @submit="onSubmit" @reset="onReset" v-if="show" novalidate>
            <b-form-group id="email"
                          horizontal
                          label="Email:"
                          lable-for="emailInput"
                          description="We'll never share your email with anyone else.">
              <b-form-input id="emailInput"
                            type="email"
                            v-model="form.email"
                            :state="!$v.form.email.$invalid"
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
                            :state="!$v.form.name.$invalid"
                            placeholder="Enter Name">
              </b-form-input>
            </b-form-group>
            <b-form-textarea id="textArea"
                             v-model="form.comment"
                             placeholder="Please type your question or comment here."
                             :state="!$v.form.comment.$invalid"
                             :rows="3"
                             :max-rows="12">
            </b-form-textarea>
            <b-button-group>
              <b-button type="submit" :disabled="$v.form.$invalid" variant="primary">Submit</b-button>
            </b-button-group>
            <b-button-group>
              <b-button type="reset" variant="primary">Reset</b-button>
            </b-button-group>
          </b-form>
        </b-card>
      </b-card-group>
    </b-container>
    <b-modal id="formSub" ref="formSub" hide-footer centered title="Thank You!">
      <div class="d-block text-center">
        <h3>We will get back to you as soon as we can!</h3>
      </div>
      <b-btn class="mt-3" variant="primary" block @click="hide">OK</b-btn>
    </b-modal>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, minLength, email } from 'vuelidate/lib/validators'

export default {
  name: 'commentForm',
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
  mixins: [
    validationMixin
  ],
  validations: {
    form: {
      name: {
        required,
        minLength: minLength(3)
      },
      email: {
        required,
        email
      },
      comment: {
        required
      }
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
    onSubmit (evt) {
      evt.preventDefault()
      this.$refs.formSub.show()
    },
    hide () {
      this.$refs.formSub.hide()
      this.form.email = ''
      this.form.name = ''
      this.form.comment = ''
    }
  }
}
</script>
