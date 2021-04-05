<template>
  <q-page class="row justify-center items-center">

    <div class="col-md-6 col-xl-6 col-sm-12 col-xs-12" style="margin-top:60px">
      <q-card  class="q-pa-md no-shadow q-ma-md bg-white main-card-bg">
        <q-card-section class="q-mt-md q-mb-sm text-left">
          <div class="text-left">
              <span class="auth-title" style="text-align:left !important">{{firstName}} {{lastName}}</span>
          </div>
        </q-card-section>
        <q-card-section class="text-grey-8">
          <q-form class="q-gutter-md">
            <q-input autocomplete="off" square filled v-model="firstName" type="text" label="First Name" class="main-input-bg">
              <template v-slot:prepend>
                <q-icon name="img:statics/icons/user.png" color="gray"/>
              </template>
            </q-input>
            <q-input autocomplete="off" square filled v-model="middleName" type="text" label="Middle Name (Optional)" class="main-input-bg">
              <template v-slot:prepend>
                <q-icon name="img:statics/icons/user.png" color="gray"/>
              </template>
            </q-input>
            <q-input autocomplete="off" square filled v-model="lastName" type="text" label="Last Name" class="main-input-bg">
              <template v-slot:prepend>
                <q-icon name="img:statics/icons/user.png" color="gray"/>
              </template>
            </q-input>
            <q-input autocomplete="off" square filled v-model="email" type="email" label="Enter email address" class="main-input-bg">
              <template v-slot:prepend>
                <q-icon name="email" color="gray"/>
              </template>
            </q-input>
            <q-input  square filled v-model="dob" mask="##-##-####" label="Date of birth" class="main-input-bg">
              <template v-slot:prepend>
                <q-icon name="img:statics/icons/calendar.png" color="gray">
                </q-icon>
              </template>
            </q-input>
            <q-input autocomplete="off" square filled v-model="phone" type="text" label="Cellphone number" class="main-input-bg">
              <template v-slot:prepend>
                <q-icon name="img:statics/icons/phone.png" color="gray"/>
              </template>
            </q-input>
            <q-input autocomplete="off" square filled v-model="street1" type="text" label="Street address 1" class="main-input-bg">
              <template v-slot:prepend>
                <q-icon name="img:statics/icons/address.png" color="gray"/>
              </template>
            </q-input>
            <q-input autocomplete="off" square filled v-model="street2" type="text" label="Street address 2" class="main-input-bg">
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
          </q-form>
        </q-card-section>
        <q-card-actions>
          <div class="row full-width items-center">
            <div class="col-12 text-center q-mb-xl">
              <q-btn size="md"  label="SAVE" text-color="white" :loading="loading" class="main-button-bg full-width q-mt-sm" @click="updateData" />
            </div>
          </div>
        </q-card-actions>
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
      city: '',
      state: '',
      stateOptions: [],
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

    fetchData () {
      this.$axios.get('/rest-auth/user/')
        .then(res => {
          this.firstName = res.data.first_name
          this.middleName = res.data.middle_name
          this.lastName = res.data.last_name
          this.email = res.data.email
          const dateOfBirth = res.data.dob.split('-')
          this.dob = dateOfBirth[1] + '-' + dateOfBirth[2] + '-' + dateOfBirth[0]
          this.phone = res.data.phone
          this.street1 = res.data.street1
          this.street2 = res.data.street2
          this.city = res.data.city
          this.state = res.data.state
          this.zip = res.data.zip
        }).catch(e => {
          console.log(e)
        })
    },

    updateData () {
      if (this.email === '' || this.firstName === '' || this.lastName === '' || this.dob === '' || this.phone === '' || this.city === '' || this.zip === '' || this.state === '' || this.street1 === '') {
        this.$q.notify({
          type: 'negative',
          message: 'Please fill all fields.'
        })
        return false
      }
      console.log(this.dob)
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
        zip: this.zip
      }
      this.$axios.patch('/rest-auth/user/', formData)
        .then(res => {
          console.log(res)
          this.loading = false
          this.$q.notify({
            type: 'positive',
            message: 'Profile details updated!'
          })
        })
        .catch(e => {
          console.log(e)
          this.$q.notify({
            type: 'negative',
            message: 'Error, please try again!'
          })
          this.loading = false
          console.log(e.response)
        })
    }
  },
  mounted () {
    this.fetchData()
  }
}
</script>

<style>

</style>
