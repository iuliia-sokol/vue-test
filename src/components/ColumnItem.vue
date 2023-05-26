<template>
    <li :column='column' class="column">
      <div class="column__top-wrapper">
        <h4 class="column__title">{{ column.title }}</h4>
        <my-button
         @click="$emit('remove', column)"
       >
        X
       </my-button>
      </div>
      
      <CardsList :cards="cards" />

      <div class="column__btns">
        <my-button
        @click="showDialog"
        >
          Додати картку
        </my-button>
      </div>
    </li>


    <my-dialog v-model:show="dialogVisible">
      <card-form
        @create="createCard"
      />
    </my-dialog>

  </template>
  
  <script>
  import MyButton from '@/components/MyButton.vue'
  import MyDialog from '@/components/MyDialog.vue'
  import CardForm from "@/components/CardForm.vue";
  import CardsList from "@/components/CardsList.vue";
  export default {
    name: 'ColumnItem',
    components: {MyButton, MyDialog, CardForm, CardsList},
    props: {
        column: {
        type: Object,
        required: true,
      },
      cards: {
      type: Array,
      default: ()=>[],
      required: true
    }
    },
    data() {
    return {
      dialogVisible: false,
    }
  },
  methods: {
  showDialog() {
      this.dialogVisible = true;
    },
    createCard(card) {
      this.cards.push(card);
      this.dialogVisible = false;
    },
    removeCard(card) {
      this.cards = this.cards.filter(p => p.id !== card.id)
    },
    
}
  }
  </script>
  
  <style scoped>
  .column {
    width: calc(100% / 4 - 80px);
    padding: 15px;
    border: 2px solid whitesmoke;
    border-radius: 16px;
    background: rgba(255, 255, 255, 0.19);
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(5px);
-webkit-backdrop-filter: blur(5px);
border: 1px solid rgba(255, 255, 255, 0.3);
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    gap:16px;
    align-items: center;
    justify-content: space-between;
  }
  .column__top-wrapper{
    width: 100%;
    display: flex;
    justify-content: space-between;

  }
  .column__title {
    color: #fff;
  }
  .column__btns {
    display: flex;
  }
  </style>