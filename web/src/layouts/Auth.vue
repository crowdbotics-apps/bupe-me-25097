<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container style="background: #f3f3f3">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

export default {
  name: 'MainLayout',
  data () {
    return {
      leftDrawerOpen: false
    }
  }
}
</script>
