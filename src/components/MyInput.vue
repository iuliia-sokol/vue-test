<template>
    <input :value="modelValue" @input="updateInput" class="input" type="text">
  </template>
  
  <script>
  export default {
    name: 'MyInput',
    props: {
      modelValue: [String, Number]
    },
    methods: {
      updateInput(event) {
        this.$emit('update:modelValue', event.target.value)
      }
    }
  }
  </script>
  
  <style scoped>
  .input {
    width: 100%;
    border: 1px solid teal;
    padding: 10px 15px;
    margin-top: 15px;
    margin-bottom: 6px;
    border-radius: 8px;
  }
  
  </style>