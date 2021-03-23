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
              <span class="auth-title">Sign Up</span>
            </div>
          </div>
        </q-card-section>
        <!-- END Logo & App Name -->

        <!-- 1 Registration Form -->
        <q-card-section class="text-grey-8" v-if="screen == 0">
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
            <q-input  square filled v-model="dob" mask="####-##-##" label="Date of birth" class="main-input-bg">
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
            <q-input autocomplete="off" square filled v-model="phone" type="text" label="Cellphone number" class="main-input-bg">
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
            <q-select square filled v-model="city" input-debounce="0" use-input @filter="filterFn" :options="cityOptions" class="main-select-bg">
              <template v-slot:selected>
                <template v-if="city">
                  <span style="font-family: Roboto; font-size:16px; font-style:normal;color:rgba(0, 0, 0, 0.87); padding-left: 10px">{{ city }}</span>
                </template>
                <template v-else>
                  <span style="font-family: Roboto; font-size:16px; font-style:normal;color:rgba(0, 0, 0, 0.6); padding-left: 10px">City</span>
                </template>
              </template>
            </q-select>
            <q-input autocomplete="off" square filled v-model="zip" type="text" label="Zip code" class="main-input-bg">
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
  'Aberdeen', 'Abilene', 'Akron', 'Albany', 'Albuquerque', 'Alexandria', 'Allentown', 'Amarillo', 'Anaheim', 'Anchorage', 'Ann Arbor', 'Antioch', 'Apple Valley', 'Appleton', 'Arlington', 'Arvada', 'Asheville', 'Athens', 'Atlanta', 'Atlantic City', 'Augusta', 'Aurora', 'Austin', 'Bakersfield', 'Baltimore', 'Barnstable', 'Baton Rouge', 'Beaumont', 'Bel Air', 'Bellevue', 'Berkeley', 'Bethlehem', 'Billings', 'Birmingham', 'Bloomington', 'Boise', 'Boise City', 'Bonita Springs', 'Boston', 'Boulder', 'Bradenton', 'Bremerton', 'Bridgeport', 'Brighton', 'Brownsville', 'Bryan', 'Buffalo', 'Burbank', 'Burlington', 'Cambridge', 'Canton', 'Cape Coral', 'Carrollton', 'Cary', 'Cathedral City', 'Cedar Rapids', 'Champaign', 'Chandler', 'Charleston', 'Charlotte', 'Chattanooga', 'Chesapeake', 'Chicago', 'Chula Vista', 'Cincinnati', 'Clarke County', 'Clarksville', 'Clearwater', 'Cleveland', 'College Station', 'Colorado Springs', 'Columbia', 'Columbus', 'Concord', 'Coral Springs', 'Corona', 'Corpus Christi', 'Costa Mesa', 'Dallas', 'Daly City', 'Danbury', 'Davenport', 'Davidson County', 'Dayton', 'Daytona Beach', 'Deltona', 'Denton', 'Denver', 'Des Moines', 'Detroit', 'Downey', 'Duluth', 'Durham', 'El Monte', 'El Paso', 'Elizabeth', 'Elk Grove', 'Elkhart', 'Erie', 'Escondido', 'Eugene', 'Evansville', 'Fairfield', 'Fargo', 'Fayetteville', 'Fitchburg', 'Flint', 'Fontana', 'Fort Collins', 'Fort Lauderdale', 'Fort Smith', 'Fort Walton Beach', 'Fort Wayne', 'Fort Worth', 'Frederick', 'Fremont', 'Fresno', 'Fullerton', 'Gainesville', 'Garden Grove', 'Garland', 'Gastonia', 'Gilbert', 'Glendale', 'Grand Prairie', 'Grand Rapids', 'Grayslake', 'Green Bay', 'GreenBay', 'Greensboro', 'Greenville', 'Gulfport-Biloxi', 'Hagerstown', 'Hampton', 'Harlingen', 'Harrisburg', 'Hartford', 'Havre de Grace', 'Hayward', 'Hemet', 'Henderson', 'Hesperia', 'Hialeah', 'Hickory', 'High Point', 'Hollywood', 'Honolulu', 'Houma', 'Houston', 'Howell', 'Huntington', 'Huntington Beach', 'Huntsville', 'Independence', 'Indianapolis', 'Inglewood', 'Irvine', 'Irving', 'Jackson', 'Jacksonville', 'Jefferson', 'Jersey City', 'Johnson City', 'Joliet', 'Kailua', 'Kalamazoo', 'Kaneohe', 'Kansas City', 'Kennewick', 'Kenosha', 'Killeen', 'Kissimmee', 'Knoxville', 'Lacey', 'Lafayette', 'Lake Charles', 'Lakeland', 'Lakewood', 'Lancaster', 'Lansing', 'Laredo', 'Las Cruces', 'Las Vegas', 'Layton', 'Leominster', 'Lewisville', 'Lexington', 'Lincoln', 'Little Rock', 'Long Beach', 'Lorain', 'Los Angeles', 'Louisville', 'Lowell', 'Lubbock', 'Macon', 'Madison', 'Manchester', 'Marina', 'Marysville', 'McAllen', 'McHenry', 'Medford', 'Melbourne', 'Memphis', 'Merced', 'Mesa', 'Mesquite', 'Miami', 'Milwaukee', 'Minneapolis', 'Miramar', 'Mission Viejo', 'Mobile', 'Modesto', 'Monroe', 'Monterey', 'Montgomery', 'Moreno Valley', 'Murfreesboro', 'Murrieta', 'Muskegon', 'Myrtle Beach', 'Naperville', 'Naples', 'Nashua', 'Nashville', 'New Bedford', 'New Haven', 'New London', 'New Orleans', 'New York', 'New York City', 'Newark', 'Newburgh', 'Newport News', 'Norfolk', 'Normal', 'Norman', 'North Charleston', 'North Las Vegas', 'North Port', 'Norwalk', 'Norwich', 'Oakland', 'Ocala', 'Oceanside', 'Odessa', 'Ogden', 'Oklahoma City', 'Olathe', 'Olympia', 'Omaha', 'Ontario', 'Orange', 'Orem', 'Orlando', 'Overland Park', 'Oxnard', 'Palm Bay', 'Palm Springs', 'Palmdale', 'Panama City', 'Pasadena', 'Paterson', 'Pembroke Pines', 'Pensacola', 'Peoria', 'Philadelphia', 'Phoenix', 'Pittsburgh', 'Plano', 'Pomona', 'Pompano Beach', 'Port Arthur', 'Port Orange', 'Port Saint Lucie', 'Port St. Lucie', 'Portland', 'Portsmouth', 'Poughkeepsie', 'Providence', 'Provo', 'Pueblo', 'Punta Gorda', 'Racine', 'Raleigh', 'Rancho Cucamonga', 'Reading', 'Redding', 'Reno', 'Richland', 'Richmond', 'Richmond County', 'Riverside', 'Roanoke', 'Rochester', 'Rockford', 'Roseville', 'Round Lake Beach', 'Sacramento', 'Saginaw', 'Saint Louis', 'Saint Paul', 'Saint Petersburg', 'Salem', 'Salinas', 'Salt Lake City', 'San Antonio', 'San Bernardino', 'San Buenaventura', 'San Diego', 'San Francisco', 'San Jose', 'Santa Ana', 'Santa Barbara', 'Santa Clara', 'Santa Clarita', 'Santa Cruz', 'Santa Maria', 'Santa Rosa', 'Sarasota', 'Savannah', 'Scottsdale', 'Scranton', 'Seaside', 'Seattle', 'Sebastian', 'Shreveport', 'Simi Valley', 'Sioux City', 'Sioux Falls', 'South Bend', 'South Lyon', 'Spartanburg', 'Spokane', 'Springdale', 'Springfield', 'St. Louis', 'St. Paul', 'St. Petersburg', 'Stamford', 'Sterling Heights', 'Stockton', 'Sunnyvale', 'Syracuse', 'Tacoma', 'Tallahassee', 'Tampa', 'Temecula', 'Tempe', 'Thornton', 'Thousand Oaks', 'Toledo', 'Topeka', 'Torrance', 'Trenton', 'Tucson', 'Tulsa', 'Tuscaloosa', 'Tyler', 'Utica', 'Vallejo', 'Vancouver', 'Vero Beach', 'Victorville', 'Virginia Beach', 'Visalia', 'Waco', 'Warren', 'Washington', 'Waterbury', 'Waterloo', 'West Covina', 'West Valley City', 'Westminster', 'Wichita', 'Wilmington', 'Winston', 'Winter Haven', 'Worcester', 'Yakima', 'Yonkers', 'York', 'Youngstown'
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
      cityOptions: [],
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
          this.cityOptions = options
        })
        return
      }

      update(() => {
        const needle = val.toLowerCase()
        this.cityOptions = options.filter(v => v.toLowerCase().indexOf(needle) > -1)
      })
    },
    registration () {
      if (this.email === '' || this.firstName === '' || this.lastName === '' || this.dob === '' || this.phone === '' || this.city === '' || this.zip === '' || this.password === '') {
        this.$q.notify({
          type: 'negative',
          message: 'Please fill all fields.'
        })
        return false
      }
      this.loading = true
      const formData = {
        email: this.email,
        first_name: this.firstName,
        middle_name: this.middleName,
        last_name: this.lastName,
        dob: this.dob,
        phone: this.phone,
        street1: this.street1,
        street2: this.street2,
        city: this.city,
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
