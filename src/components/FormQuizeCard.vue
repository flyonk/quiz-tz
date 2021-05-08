<template>
  <div>
    <!-- Radio -->
    <template v-if="answer.type === 'radio'">
      <div v-for="(answer, index) in answer.values" :key="index">
        <label :for="'input-' + index">{{ answer }}</label>
        <input
          type="radio"
          :id="'input-' + index"
          :name="'radio-' + _uid"
          :value="answer"
          v-model="value"
        />
      </div>
    </template>
    <!-- Select -->
    <template v-if="answer.type === 'select'">
      <select v-model="value">
        <option
          v-for="(answer, index) in answer.values"
          :value="answer"
          :key="index"
          >{{ answer }}</option
        >
      </select>
    </template>
    <!-- Input -->
    <template v-if="answer.type === 'input'">
      <input type="text" v-model="value" />
    </template>

    <div v-if="completed">
      <button @click="$emit('finish')" :disabled="!value">
        Finish
      </button>
    </div>

    <div v-else>
      <button @click="$emit('next')" :disabled="!value">
        Next
      </button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "FormQuizeCardComponent",
    props: {
      index: {
        type: Number | null,
        default: null,
      },
      completed: {
        type: Boolean,
        default: false,
      },
      answer: {
        type: Object,
        default: () => ({}),
      },
    },
    data() {
      return {
        activeTab: 0,
        value: "",
      }
    },
    watch: {
      value() {
        if (this.index !== null) {
          this.$emit("change", {
            index: this.index,
            text: this.value,
          })
        }
      },
    },
    created() {
      console.log("FormQuizeCardComponent", this._uid)
    },
    methods: {
      clickHandler() {
        console.log("clickHandler")
      },
    },
  }
</script>

<style scoped>
  .mb-20 {
    margin-bottom: 20px;
  }
</style>
