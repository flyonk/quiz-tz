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
      <select v-model="value" class="text_input">
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
      <input type="text" v-model="value" class="text_input" />
    </template>

    <div v-if="completed">
      <button @click="$emit('finish')" :disabled="!value" class="custom-btn">
        Finish
      </button>
    </div>

    <div v-else>
      <button @click="$emit('next')" :disabled="!value" class="custom-btn">
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
  }
</script>

<style scoped>
  .mb-20 {
    margin-bottom: 20px;
  }

  .custom-btn {
    width: 100px;
    height: 30px;
    margin-top: 10px;
    color: white;
    background: #70e16e;
    border: none;
    outline: none;
    border-radius: 10px;
  }

  .text_input {
    border-radius: 15px;
    width: 30%;
    padding: 6px;
    outline: none;
    border: 1px solid #77c7e1;
  }
</style>
