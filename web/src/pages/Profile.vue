<template>
  <q-page class="row justify-center items-center">

    <div class="col-md-6 col-xl-6 col-sm-12 col-xs-12">
      <q-card  class="q-pa-md no-shadow q-ma-md bg-white main-card-bg">
        <q-card-section class="q-mt-md q-mb-sm">
          <div class="row justify-center items-center">
              <span class="auth-title">Profile</span>
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
            <q-input  square filled v-model="dob" mask="####-##-##" label="Date of birth" class="main-input-bg">
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

    fetchData () {
      this.$axios.get('/rest-auth/user/')
        .then(res => {
          this.firstName = res.data.first_name
          this.middleName = res.data.middle_name
          this.lastName = res.data.last_name
          this.email = res.data.email
          this.dob = res.data.dob
          this.phone = res.data.phone
          this.street1 = res.data.street1
          this.street2 = res.data.street2
          this.city = res.data.city
          this.zip = res.data.zip
        }).catch(e => {
          console.log(e)
        })
    },

    updateData () {
      if (this.firstName === '' || this.lastName === '' || this.dob === '' || this.phone === '' || this.city === '' || this.zip === '' || this.email === '' || this.street1 === '' || this.street2 === '') {
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
