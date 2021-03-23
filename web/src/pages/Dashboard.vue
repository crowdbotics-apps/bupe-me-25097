<template>
  <q-page style="padding:50px">
   <div class="row" style="padding-top:15vh">
     <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
       <q-card style="border-radius: 10px; padding: 10px; margin:20px" class="no-shadow main-card">
         <q-card-section>
           <q-img
           alt="App logo"
           width="80px"
           src="~assets/leaf.png"
           style="display: block; margin:auto"
         />
         </q-card-section>
         <q-card-section class="text-center main-text">Useful Information</q-card-section>
       </q-card>
     </div>
     <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
       <q-card style="border-radius: 10px; padding: 10px; margin:20px" class="no-shadow main-card cursor-pointer" @click="$router.push('/daily-question')">
         <q-img
           alt="App logo"
           width="80px"
           src="~assets/file-article.png"
           style="display: block; margin:auto; margin-top:20px; margin-bottom: 13px;"
         />
         <q-card-section class="text-center main-text">Daily Question</q-card-section>
       </q-card>
     </div>
   </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex'
}
</script>
