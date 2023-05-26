<template>
    <ul v-if="cards.length > 0" :cards="cards" class="cards"> 
        <card-item  :cards="cards" v-for="card in cards"
        :card="card"
        :key="card.id"
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
        @create="createCard"
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
    }},
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
    
}
    }
</script>

<style scoped>
.cards{
    width: 100%;
    display: flex;
    flex-direction: column;
}
.btn-wrapper{
    display: flex;
    justify-content: center;
}
</style>