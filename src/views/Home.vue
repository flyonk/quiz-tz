<template>
  <FormQuize :questions="questions" />
</template>

<script lang="ts">
  import Vue from "vue"
  import FormQuize from "@/components/FormQuize.vue"

  export default Vue.extend({
    name: "HomePage",
    components: {
      FormQuize,
    },
    data() {
      return {
        questions: {},
      }
    },
    created(): void {
      let {questions} = require("@/data/questions.ts")
      this.questions = questions
    },
  })
</script>
