<template>
  <div>
    <h1 class="mb-20">{{ questions.title }}</h1>
    <div v-if="end">
      <h2>Finish</h2>
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
      }
    },
    watch: {
      activeTab() {
        console.log(this.activeTab === this.questions.answer_blocks.length - 1)
      },
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
        console.log(this.answers)
        this.end = true
      },
    },
    // created() {
    //   this.questions.answer_blocks.forEach((_, index) => {
    //     this.answers[index] = ""
    //   })
    // },
  }
</script>

<style scoped>
  .mb-20 {
    margin-bottom: 20px;
  }
</style>
