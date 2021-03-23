<template>
  <q-layout view="lhh lpR fFf">

    <!-- Header - Top Bar -->
    <q-header class="bg-white">
      <q-toolbar style="height:70px">
        <q-btn style="margin-left:40px" dense flat round icon="img:statics/icons/ic_baseline-contact-support.png" @click="drawer = !drawer" />

        <q-toolbar-title style="z-index: 9999">
          <img
            @click="$router.push('/')"
            class="cursor-pointer"
            alt="App logo"
            width="110px"
            src="~assets/LOGO.png"
            style="display: block; margin:auto; z-index: 9999; margin-top: 40px; border:10px solid white; border-radius: 50%"
          >
        </q-toolbar-title>
        <q-btn-dropdown
          color="white"
          push
          no-caps
          flat
          class="no-shadow"
        >
          <template v-slot:label>
            <div class="row items-center no-wrap">
              <div class="text-center q-mr-md">
                <q-icon name="img:statics/icons/user.png"/>
              </div>
            </div>
          </template>

          <q-list class="no-shadow" style="min-width: 190px;">

            <q-item clickable v-close-popup @click="$router.push('/profile')">
              <q-item-section >
                <q-icon  name="img:statics/icons/user.png"  />
              </q-item-section>
              <q-item-section>
                <q-item-label>Profile</q-item-label>
              </q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable v-close-popup @click="logOut">
              <q-item-section >
                <q-icon  name="img:statics/icons/address.png"  />
              </q-item-section>
              <q-item-section>
                <q-item-label>Sign out</q-item-label>
              </q-item-section>
            </q-item>

          </q-list>
        </q-btn-dropdown>
      </q-toolbar>
    </q-header>
    <!-- END Header - Top Bar -->

    <!-- Drawer - Side Menu
    <q-drawer
      v-model="drawer"
      show-if-above
      :width="250"
      :breakpoint="400"
      bordered
      content-class="bg-white"
    >
      <q-scroll-area style="height: calc(100% - 200px); margin-top: 200px;">
        <q-list padding >
          <q-item clickable v-ripple to="/" exact>
            <q-item-section avatar>
              <q-icon name="inbox" />
            </q-item-section>

            <q-item-section>
              Dashboard
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/users" exact>
            <q-item-section avatar>
              <q-icon name="people" />
            </q-item-section>

            <q-item-section>
              Users
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/customers" exact>
            <q-item-section avatar>
              <q-icon name="shopping_cart" />
            </q-item-section>

            <q-item-section>
              Customers
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="settings" />
            </q-item-section>

            <q-item-section>
              Settings
            </q-item-section>
          </q-item>

        </q-list>
      </q-scroll-area>

      <div class="absolute-top" style="height: 150px;">
        <div class="absolute-bottom bg-transparent">
          <img
            alt="App logo"
            width="130px"
            src="~assets/LOGO.png"
            style="display: block; margin:auto"
          >
        </div>
      </div>
    </q-drawer>
     END Drawer - Side Menu -->

    <q-page-container style="background: rgb(243, 243, 243)">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MainLayout',
  data () {
    return {
      drawer: false
    }
  },
  methods: {
    logOut () {
      localStorage.removeItem('token')
      this.$router.push('/login')
    }
  }
}
</script>

<style>
.q-item {
  font-size:1.2em;
  font-family: system-ui;
  font-weight: 400;
  color: #5a5a5a ;
}
.q-item .q-icon {
  background:#e4e4e485;
  padding:1em;
  border-radius: 50%
}
.user {
  font-family: system-ui;
  font-weight: 400;
  font-size:1.2em;
}
</style>
