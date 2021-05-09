<template>
  <div>
    <h1 class="mb-20" v-if="!end">{{ questions.title }}</h1>
    <div v-if="end">
      <h2>
        Тут сообщение о том что якобы данные улетели на сервер (на самом деле
        нет)
      </h2>
      <div class="result_data">
        <h4>Вот эти данные мы могли бы отправить на сервер</h4>
        <p>Answer 1: {{ resultData.answer1 }}</p>
        <p>Answer 2: {{ resultData.answer2 }}</p>
        <p>Answer 3: {{ resultData.answer3 }}</p>
      </div>
    </div>
    <template v-else v-for="(answer, index) in questions.answer_blocks">
      <FormQuizeCard
        :index="index"
        :answer="answer"
        :key="index"
        :completed="completed"
        v-if="activeTab === index"
        @change="changeHandler"
        @finish="finishHandler"
        @next="activeTab = activeTab + 1"
      />
    </template>
  </div>
</template>

<script>
  import FormQuizeCard from "./FormQuizeCard.vue"
  export default {
    name: "FormQuizeComponent",
    components: {
      FormQuizeCard,
    },
    props: {
      questions: {
        type: Object,
        default: () => ({}),
      },
    },
    data() {
      return {
        activeTab: 0,
        answers: {},
        end: false,
        resultData: {},
      }
    },
    computed: {
      completed() {
        return this.activeTab === this.questions.answer_blocks.length - 1
      },
    },
    methods: {
      changeHandler(payload) {
        this.answers[payload.index] = payload.text
      },
      finishHandler() {
        this.resultData = {
          answer1: this.answers[0],
          answer2: this.answers[1],
          answer3: this.answers[2],
        }

        this.end = true
      },
    },
  }
</script>

<style scoped>
  .mb-20 {
    margin-bottom: 20px;
  }
</style>
