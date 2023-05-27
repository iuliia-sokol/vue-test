<template>
    <form @submit.prevent>
      <h4>Створити колонку</h4>
      <my-input
        v-focus
        v-model="column.title"
        type="text"
        @input="onInputChange"
        placeholder="Назва"
        :class="isInputValid? 'valid-input': 'invalid-input'"
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
    },
    
  },

    data() {
      return {
        column: {
          id: '',
          title: '',
        },
        isInputValid: true
      }
    },
    methods: {
      onInputChange(event){
        this.isInputValid = true
        if(!event.target.value) {
        this.isInputValid = false
        }
      },

      createColumn() {
        this.column.id = Date.now();
        if (!this.column.title) {
          alert('Введіть назву панелі')
          this.isInputValid = false
          return
        }

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
  .valid-input {
    outline: 2px solid green;
  }
  .invalid-input {
    outline: 2px solid red;
  }
  </style>