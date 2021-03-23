<template>
  <q-page
    class="window-height window-width row justify-center items-center"
  >

    <div class="">
      <q-card  class="q-pa-md no-shadow q-ma-none bg-white main-card-bg" style="width:420px;">

        <!-- Logo & App Name -->
        <q-card-section class="q-mt-md q-mb-sm">
          <div class="row justify-center items-center">
            <img
              alt="App logo"
              width="130px"
              src="~assets/LOGO.png"
            >
            <div class="col-12 q-mt-lg">
              <span class="auth-title">Forgot Password</span>
            </div>
          </div>
        </q-card-section>
        <!-- END Logo & App Name -->

        <!-- Login Form -->
        <q-card-section class="text-grey-8">
          <q-form class="q-gutter-md">
            <q-input  square filled v-model="email" type="email" label="Email" class="main-input-bg">
              <template v-slot:prepend>
                <q-icon name="email" color="gray"/>
              </template>
            </q-input>
          </q-form>
        </q-card-section>

        <q-card-actions>
          <div class="row full-width items-center">
            <div class="col-12">
              <p class="text-center explain-text q-mb-xl block text-center">We will send a verification code <br> to your email.</p>
            </div>
            <div class="col-12 text-center q-mb-xl">
              <q-btn size="md" label="Send Reset Code" text-color="white" class=" main-button-bg full-width" @click="login" />
            </div>
          </div>
        </q-card-actions>

      </q-card>
    </div>
  </q-page>
</template>

<script>

export default {
  name: 'Login',
  data () {
    return {
      isPwd: true,
      email: ''
    }
  },
  methods: {
    login () {
      const formData = {
        email: this.email
      }
      this.$axios.post('/rest-auth/password/reset/', formData)
        .then(res => {
          this.$q.notify({
            type: 'positive',
            message: 'Check your email for instructions'
          })
          this.email = ''
        })
        .catch(e => {
          this.$q.notify({
            type: 'negative',
            message: 'Wrong Email, please try again'
          })
          console.log(e)
          console.log(e.response)
        })
    }
  }
}
</script>

<style>

</style>
