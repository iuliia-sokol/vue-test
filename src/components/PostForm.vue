<template>
    <form @submit.prevent>
      <h4>Створити картку</h4>
      <my-input
        v-focus
        v-model="card.title"
        type="text"
        placeholder="Назва"
      />
      <my-input
        v-model="card.body"
        type="text"
        placeholder="Опис"
      />
      <my-button
        style="align-self: flex-end; margin-top: 15px"
        @click="createCard"
      >
        Додати
      </my-button>
    </form>
  </template>
  
  <script>
  import MyInput from '@/components/MyInput.vue'
  import MyButton from '@/components/MyButton.vue'

  export default {
    components: {MyInput, MyButton},

    data() {
      return {
        card: {
          title: '',
          body: ''
        }
      }
    },
    methods: {
      createPost() {
        this.card.id = Date.now();
        this.$emit('create', this.card)
        this.card = {
          title: '',
          body: ''
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