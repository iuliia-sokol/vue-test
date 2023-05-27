<template>
    <ul v-if="cardsArr.length > 0" :cards=this.cardsArr class="cards"> 
        <card-item  
        :cards=this.cardsArr
        v-for="card in this.cardsArr.filter(card => card.columnId==this.column.id)"
        :card="card"
        :key="card.id"
        @remove="removeCard"
      />
    </ul>
    <div  v-else class="no-cards__wrapper">
  <p class='no-cards__text'>
    Карток поки немає
  </p>
  </div>

  <div class="btn-wrapper">
        <my-button
        @click="showDialog"
        >
          Додати картку
        </my-button>
      </div>

    <my-dialog v-model:show="dialogVisible">
      <card-form
        :column="column"
        @create="createCard"
        @hide="hideDialog"   
      />
    </my-dialog>
</template>

<script>
import CardItem from '@/components/CardItem.vue'
import MyButton from '@/components/MyButton.vue'
import MyDialog from '@/components/MyDialog.vue'
import CardForm from "@/components/CardForm.vue";
    export default {
    name:'CardsList',
    components: {CardItem, MyButton, MyDialog, CardForm },
    props: { 
      cards: {
      type: Array,
      default: ()=>[],
      required: true
    },
        column: {
        type: Object,
        required: true,
      },
  },
    data(props) {
    return {
      dialogVisible: false,
      cardsArr: props.cards
    }
  },

  methods: {
    showDialog() {
      this.dialogVisible = true;
    },
    hideDialog() {
      this.dialogVisible = false;
    },
    createCard(card) {
      this.cardsArr.push(card);
      this.dialogVisible = false;
    },
    removeCard(id) {
      return this.cardsArr = this.cardsArr.filter(item => item.id !== id)
    }    
}
    }
</script>

<style scoped>
.cards{
    width: 100%;
    display: flex;
    flex-direction: column;
    gap:12px;
}
.btn-wrapper{
    display: flex;
    justify-content: center;
}
</style>