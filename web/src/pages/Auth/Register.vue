<template>
  <q-page
    class="window-height window-width row justify-center items-center"
  >

    <div class="">
      <q-card  class="q-pa-md q-ma-none no-shadow bg-white main-card-bg" style="width:420px;">

        <!-- Logo & App Name -->
        <q-card-section class="q-mt-md q-mb-sm">
          <div class="row justify-center items-center">
            <img
              alt="App logo"
              width="130px"
              src="~assets/LOGO.png"
            >
            <div class="col-12 q-mt-lg">
              <span class="auth-title">Sign Up</span>
            </div>
          </div>
        </q-card-section>
        <!-- END Logo & App Name -->

        <!-- 1 Registration Form -->
        <q-card-section class="text-grey-8" v-if="screen == 0">
          <q-form class="q-gutter-md">
            <q-input autocomplete="off" square filled v-model="firstName" type="text" label="First Name*" class="main-input-bg">
              <template v-slot:prepend>
                <q-icon name="img:statics/icons/user.png" color="gray"/>
              </template>
            </q-input>
            <q-input autocomplete="off" square filled v-model="middleName" type="text" label="Middle Name" class="main-input-bg">
              <template v-slot:prepend>
                <q-icon name="img:statics/icons/user.png" color="gray"/>
              </template>
            </q-input>
            <q-input autocomplete="off" square filled v-model="lastName" type="text" label="Last Name*" class="main-input-bg">
              <template v-slot:prepend>
                <q-icon name="img:statics/icons/user.png" color="gray"/>
              </template>
            </q-input>
            <q-input autocomplete="off" square filled v-model="email" type="email" label="Enter email address*" class="main-input-bg">
              <template v-slot:prepend>
                <q-icon name="email" color="gray"/>
              </template>
            </q-input>
            <q-input  square filled v-model="dob" mask="##-##-####" label="Date of birth*" class="main-input-bg">
              <template v-slot:prepend>
                <q-icon name="img:statics/icons/calendar.png" color="gray">
                  <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                    <q-date v-model="dob" mask="YYYY-MM-DD">
                      <div class="row items-center justify-end">
                        <q-btn v-close-popup label="Close" color="primary" flat />
                      </div>
                    </q-date>
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
            <q-input autocomplete="off" square filled v-model="phone" type="text" label="Cellphone number*" class="main-input-bg">
              <template v-slot:prepend>
                <q-icon name="img:statics/icons/phone.png" color="gray"/>
              </template>
            </q-input>
          </q-form>
        </q-card-section>
        <!-- END 1 Registration Form -->

        <!-- 2 Registration Form -->
        <q-card-section class="text-grey-8" v-if="screen == 1">
          <q-form class="q-gutter-md">
            <q-input autocomplete="off" square filled v-model="street1" type="text" label="Address 1*" class="main-input-bg">
              <template v-slot:prepend>
                <q-icon name="img:statics/icons/address.png" color="gray"/>
              </template>
            </q-input>
            <q-input autocomplete="off" square filled v-model="street2" type="text" label="Address 2" class="main-input-bg">
              <template v-slot:prepend>
                <q-icon name="img:statics/icons/address.png" color="gray"/>
              </template>
            </q-input>

            <q-input autocomplete="off" square filled v-model="city" type="text" label="City*" class="main-input-bg">
              <template v-slot:prepend style="display: none">
              </template>
            </q-input>
            <q-select square filled v-model="state" input-debounce="0" use-input @filter="filterFn" :options="stateOptions" class="main-select-bg">
              <template v-slot:selected>
                <template v-if="state">
                  <span style="font-family: Roboto; font-size:16px; font-style:normal;color:rgba(0, 0, 0, 0.87); padding-left: 10px">{{ state }}</span>
                </template>
                <template v-else>
                  <span style="font-family: Roboto; font-size:16px; font-style:normal;color:rgba(0, 0, 0, 0.6); padding-left: 10px">State*</span>
                </template>
              </template>
            </q-select>
            <q-input autocomplete="off" square filled v-model="zip" mask="#####" type="text" label="Zip Code*" class="main-input-bg">
              <template v-slot:prepend style="display: none">
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
        <!-- END 2 Registration Form -->

        <!-- 3 Registration Form -->
        <q-card-section class="text-grey-8" v-if="screen == 2">
          <q-form class="q-gutter-md">
            <div>
              <span style="display: block; text-align: justify">
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
              </span>
            </div>
          </q-form>
        </q-card-section>
        <!-- END 3 Registration Form -->

        <!-- Sign up and Forgot Password Actions -->
        <q-card-actions>
          <div class="row full-width items-center">
            <div class="col-12 text-center q-mb-xl">
              <q-btn size="md" v-if="screen < 2" label="Next" text-color="white" :loading="loading" class=" main-button-bg full-width" @click="screen++" />
              <q-btn size="md" v-if="screen === 2" label="Accept and Sign up" text-color="white" :loading="loading" class=" main-button-bg full-width" @click="registration" />
              <q-btn size="md" v-if="screen > 0" label="Back" text-color="white" :loading="loading" class="secondary-button-bg full-width q-mt-sm" @click="screen--" />
            </div>
            <div class="col-12">
              <p class="text-center nolink-text">Already have an account?
                <a class="cursor-pointer" style="color:#2F5597; text-transform: none !important;" @click="$router.push('/login')">Sign in</a>
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

const options = [
  'Alabama',
  'Alaska',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'District of Columbia',
  'Florida',
  'Georgia',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansa',
  'Kentucky',
  'Lousiana',
  'Maine',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Pennsylvania',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming'
]

export default {
  name: 'Login',
  data () {
    return {
      isPwd: true,
      screen: 0,
      firstName: '',
      middleName: '',
      lastName: '',
      email: '',
      dob: '',
      phone: '',
      street1: '',
      street2: '',
      state: '',
      stateOptions: [],
      city: '',
      zip: '',
      password: '',
      loading: false
    }
  },
  methods: {
    filterFn (val, update) {
      if (val === '') {
        update(() => {
          this.stateOptions = options
        })
        return
      }

      update(() => {
        const needle = val.toLowerCase()
        this.stateOptions = options.filter(v => v.toLowerCase().indexOf(needle) > -1)
      })
    },
    registration () {
      if (this.email === '' || this.firstName === '' || this.lastName === '' || this.dob === '' || this.phone === '' || this.city === '' || this.zip === '' || this.state === '' || this.password === '' || this.street1 === '') {
        this.$q.notify({
          type: 'negative',
          message: 'Please fill mandatory fields.'
        })
        return false
      }
      const dateOfBirth = this.dob.split('-')
      this.loading = true
      const formData = {
        email: this.email,
        first_name: this.firstName,
        middle_name: this.middleName,
        last_name: this.lastName,
        dob: dateOfBirth[2] + '-' + dateOfBirth[0] + '-' + dateOfBirth[1],
        phone: this.phone,
        street1: this.street1,
        street2: this.street2,
        city: this.city,
        state: this.state,
        zip: this.zip,
        password: this.password,
        password1: this.password
      }
      this.$axios.post('/rest-auth/registration/', formData)
        .then(res => {
          console.log(res.data)
          localStorage.setItem('token', res.data.key)

          this.$router.push('/')
          this.loading = false
        })
        .catch(e => {
          console.log(e)
          this.loading = false
          for (var key of Object.entries(e.response.data)) {
            this.$q.notify({
              type: 'negative',
              message: key[0] !== 'dob' ? key[0] + ' : ' + key[1] : key[1]
            })
          }
          console.log(e.response)
        })
    }
  }
}
</script>

<style>

</style>
