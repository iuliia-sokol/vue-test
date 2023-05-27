<template>
    <form @submit.prevent>
      <h4>Створити картку</h4>
      <label class="label">
      <my-input
        v-focus
        v-model="card.title"
        type="text"
        placeholder="Назва"
        @input="onInputChange"
        :class="isInputValid? 'valid-input': 'invalid-input'"
      />
      Назвіть картку
    </label>
    <label class="label"> 
      <my-input
        v-model="card.body"
        type="text"
        placeholder="Опис"
      />
      Додайте опис (необов'язково)
    </label>
    <label class="label">
      <my-input
        v-model="card.deadline"
        type="date"
        placeholder="Строк виконання"
      />
      Вкажіть дедлайн (необов'язково)
    </label>
      <div class="btns-wrapper">
      <my-button
        @click="createCard"
      >
        Додати
      </my-button>
      <my-button class="exit-btn" v-model:show="dialogVisible"
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
        column: {
        type: Object,
        required: true,
      },
    },
    data(props) {
      return {
        card: {
          id: Date.now(),
          title: '',
          body: '',
          deadline: '',
          mark:[],
          columnId: props.column.id
        },    
        dialogVisible: false,
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
      createCard() {
        if (!this.card.title) {
          alert('Введіть назву картки')
          this.isInputValid = false
          return
        }
        this.$emit('create', this.card)
        this.card = {
          id: '',
          title: '',
          body: '',
          deadline: '',
          mark:[],
          columnId:''
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
  .label {
  font-size: x-small;
  }
  .btns-wrapper {
    margin-top: 15px;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
  }
  .valid-input {
    outline: 2px solid green;
  }
  .invalid-input {
    outline: 2px solid red;
  }
  .exit-btn {
    background-color: transparent;
    border: 2px solid orange;
  }
  </style>