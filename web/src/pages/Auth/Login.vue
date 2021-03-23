<template>
  <q-page
    class="window-height window-width row justify-center items-center"
  >

    <div class="">
      <q-card  class="q-pa-md q-ma-none bg-white main-card-bg" style="width:420px;">

        <!-- Logo & App Name -->
        <q-card-section class="q-mt-md q-mb-sm">
          <div class="row justify-center items-center">
            <img
              alt="App logo"
              width="130px"
              src="~assets/LOGO.png"
            >
            <div class="col-12 q-mt-lg">
              <span class="auth-title">Sign In</span>
            </div>
          </div>
        </q-card-section>
        <!-- END Logo & App Name -->

        <!-- Login Form -->
        <q-card-section class="text-grey-8">
          <q-form class="q-gutter-md">
            <q-input autocomplete="off" square filled v-model="email" type="email" label="Enter email address" class="main-input-bg">
              <template v-slot:prepend>
                <q-icon name="email" color="gray"/>
              </template>
            </q-input>
            <q-input autocomplete="off" square filled v-model="password"  :type="isPwd ? 'password' : 'text'"  label="Enter password" class="main-input-bg">
              <template v-slot:append>
                <q-icon
                  :name="isPwd ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="isPwd = !isPwd"
                />
              </template>
              <template v-slot:prepend>
                <q-icon name="img:statics/icons/pass.png" color="gray"/>
              </template>
            </q-input>
          </q-form>
        </q-card-section>
        <!-- END Login Form -->

        <!-- Sign up and Forgot Password Actions -->
        <q-card-actions>
          <div class="row full-width items-center">
            <div class="col-12">
              <a class="cursor-pointer text-right link-text block q-mb-lg" @click="$router.push('/forgot-password/')">Forgot password?</a>
            </div>
            <div class="col-12 text-center q-mb-xl">
              <q-btn size="md" label="Sign In" text-color="white" :loading="loading" class=" main-button-bg full-width" @click="login" />
            </div>
            <div class="col-12">
              <p class="text-center nolink-text">Don't you have an account?
                <a class="cursor-pointer" style="color:#2F5597; text-transform: none !important;" @click="$router.push('/register')">Sign up</a>
              </p>
            </div>
          </div>
        </q-card-actions>
        <!-- END Sign up and Forgot Password Actions -->

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
      email: '',
      password: '',
      loading: false
    }
  },
  methods: {
    login () {
      this.loading = true
      const formData = {
        email: this.email,
        password: this.password
      }
      this.$axios.post('/rest-auth/login/', formData)
        .then(res => {
          localStorage.setItem('token', res.data.key)

          this.$router.push('/')
          this.loading = false
        })
        .catch(e => {
          console.log(e)
          this.loading = false
          this.$q.notify({
            type: 'negative',
            message: 'Wrong Credentials, please try again.'
          })
          console.log(e.response)
        })
    }
  }
}
</script>

<style>

</style>
