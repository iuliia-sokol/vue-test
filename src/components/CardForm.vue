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
      <my-input
        v-model="card.deadline"
        type="date"
        placeholder="Строк виконання"
      />
      <div class="btns-wrapper">
      <my-button
        style="align-self: flex-end; margin-top: 15px"
        @click="createCard"
      >
        Додати
      </my-button>
      <my-button v-model:show="dialogVisible"
        style="align-self: flex-start; margin-top: 15px"
        @click="$emit('hide', false)"
      >
        Вийти
      </my-button>
    </div>
    </form>
  </template>
  
  <script>
  import MyInput from '@/components/MyInput.vue'
  import MyButton from '@/components/MyButton.vue'
  export default {
    name: 'CardForm',
    components: {MyInput, MyButton},
    props: {
     
    },
    data() {
      return {
        card: {
          id: '',
          title: '',
          body: '',
          deadline: '',
        },    
      }
    },
    methods: {
      createCard() {
        this.$emit('create', this.card)
        this.card = {
          id: Date.now(),
          title: '',
          body: '',
          deadline: '',
        }
      },
    },
  }
  </script>
  
  <style scoped>
  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    z-index: 10;
  }
  .btns-wrapper {
    display: flex;
    justify-content: space-between;
  }
  
  </style>