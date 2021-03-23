<template>
  <q-page style="padding:50px">
    <div class="row" style="padding-top:15vh" v-if="!loading">
      <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12 offset-lg-2 offset-md-2">
        <q-card style="border-radius: 10px; padding: 50px; margin:20px" class="no-shadow main-card">
          <q-card-section class="text-center main-text">Daily Question</q-card-section>
          <q-card-section class="text-center question-text">
            {{ data.question }}
          </q-card-section>
        </q-card>
      </div>
      <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12 offset-lg-2 offset-md-2 text-center" v-if="!is_answered">
        <q-btn size="md" label="YES" text-color="white" :loading="loading" class=" yes-button-bg" @click="answerQuestion(1)" />
        <q-btn size="md" label="NO" text-color="white" :loading="loading" class=" no-button-bg " @click="answerQuestion(0)" />
      </div>
      <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12 offset-lg-2 offset-md-2 text-center" v-else>
      <span class="main-text">Thanks for answer, please come back tomorrow.</span>
      </div>
    </div>

    <div class="row" style="padding-top:15vh" v-else>
      <q-spinner style="display: block; margin: auto" size="xl" />
    </div>

  </q-page>
</template>

<script>
export default {
  name: 'DailyQuestion',
  data () {
    return {
      loading: true,
      data: [],
      answer: [],
      is_answered: false
    }
  },
  methods: {
    fetchQuestion () {
      this.$axios.get('/api/v1/question')
        .then(res => {
          this.data = res.data.question
          this.answer = res.data.answer
          this.is_answered = res.data.is_answered
          this.loading = false
        })
        .catch(e => {
          console.log(e)
          this.loading = false
          this.$q.notify({
            type: 'negative',
            message: 'Error, please try again.'
          })
          console.log(e.response)
        })
    },

    answerQuestion (answer) {
      const formData = {
        question: this.data.id,
        answer: answer
      }
      this.$axios.post('/api/v1/answer', formData)
        .then(res => {
          console.log(res)
          this.$q.notify({
            type: 'positive',
            message: 'Thanks for answering question.'
          })
          this.fetchQuestion()
        }).catch(e => {
          console.log(e)
          this.loading = false
          this.$q.notify({
            type: 'negative',
            message: 'Error, please try again.'
          })
          console.log(e.response)
        })
    }
  },
  created () {
    this.loading = true
    this.fetchQuestion()
  }
}
</script>
