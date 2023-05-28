<template>
    <ul v-if="cardsArr.length > 0" :cards=this.cardsArr class="cards"> 
        <card-item  
        :cards=this.cardsArr
        :card="card"
        :key="card.id"
        draggable="true"
        v-for="(card,index) in this.cardsArr.filter(card => card.columnId==this.column.id)"
        @remove="removeCard"
        @dragstart.self="pickupElem($event, card, index);"
        @dragover.prevent="showDropPlace(card);"
        @drop="moveElem(index);"
        @dragend.prevent="dragEndClear"
      />
    </ul>
    <div  v-if='countCards<=0' class="no-cards__wrapper">
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
      cardsArr: props.cards,
      dragedElem: null,
      overElem: null
    }
  },
  computed: {
   countCards(){
    return this.cardsArr.filter(elem=> elem.columnId == this.column.id).length
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
      return this.cardsArr = this.cardsArr.filter(elem => elem.id !== id)
    },
    pickupElem(event, elem, index) {
      console.log(elem, index);
      event.dataTransfer.effectAllowed = 'move'
      event.dataTransfer.dropEffect = "move";
      this.dragedElem = elem;
      event.dataTransfer.setData('itemId', elem.id.toString())
    },
    moveElem(index) {
      if(this.dragedElem){
      this.cardsArr = this.cardsArr.filter(elem => elem.id !== this.dragedElem.id);
      this.cardsArr.splice(index, 0, this.dragedElem);
      this.cardsArr.forEach((elem, index) => (elem.order = index + 1));
    }
    },
    dragEndClear() {
      this.dragedElem = null;
      this.overElem = null;
    },
    showDropPlace(elem) {
      if(this.dragedElem){     
        console.log('dragedElem', this.dragedElem);
      if (elem.id !== this.dragedElem.id) {
        this.overElem = elem;
      } else {
        this.overElem = null;
      }
    }
    },    
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