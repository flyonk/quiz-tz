<template>
  <div class="about">
    <h2>Hello World</h2>
    <!-- <div v-for="q in questions" :key="q.title">
      <ul>
        <li class="question">{{ q.title }}</li>
        <li class="answer" v-for="answer in q.answer_blocks" :key="answer">
          <div class="answer1">{{ answer }}</div>
        </li>
      </ul>
    </div> -->
  </div>
</template>

<script>
  import Vue from "vue"
  import {questions} from "@/data/questions"
  export default Vue.extend({
    name: "About",
    data() {
      return {
        questions,
      }
    },
    computed: {},
    methods: {},
  })
</script>
