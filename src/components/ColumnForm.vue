<template>
    <form @submit.prevent>
      <h4>Створити колонку</h4>
      <my-input
        v-focus
        v-model="column.title"
        type="text"
        placeholder="Назва"
      />
      <my-button
        style="align-self: flex-end; margin-top: 15px"
        @click="createColumn"
      >
        Створити
      </my-button>
    </form>
  </template>
  
  <script>
  import MyInput from '@/components/MyInput.vue'
  import MyButton from '@/components/MyButton.vue'

  export default {
    components: {MyInput, MyButton},
  props: {
    columns: {
      type: Array,
      required: false
    }
  },

    data() {
      return {
        column: {
          title: '',
        }
      }
    },
    methods: {
      createColumn() {
        this.column.id = Date.now();
        this.$emit('create', this.column)
        this.column = {
          title: '',
        }
      }
    },
  }
  </script>
  
  <style scoped>
  form {
    display: flex;
    flex-direction: column;
  }
  
  </style>