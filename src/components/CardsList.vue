<template>
    <TransitionGroup name="list" tag="ul" v-if="cards.length > 0" :cards=this.cards class="cards"> 
        <card-item  
        :cards='cards'
        :card="card"
        :key="card.id"
        draggable="true"
        v-for="(card,index) in updatedCards"
        @remove="removeCard"
        
        @dragstart.self="pickupElem($event, card);"
        @dragover.prevent="showOverElem(card);"
        @drop="moveElem(index);"
        @dragend.prevent="dragEndClear"
        :style="overElem? 'background-color: rgba(0, 400, 255, 0.1); opacity: 0.6' : dragedElem ? 'background-color: white;' : 'background-color: rgba(255, 255, 255, 0.5); opacity:1'"   
      />
    </TransitionGroup>

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
  emits:['updateCards', 'addCards', 'shiftCards'],
  computed: {
   countCards(){
    return this.cards.filter(elem=> elem.columnId == this.column.id).length
  },
  updatedCards(){
   return this.cards.filter(card => card.columnId==this.column.id)
  }
  },

  data() {
    return {
      dialogVisible: false,
      dragedElem: null,
      overElem: null,
      cardsArr: this.cards.filter(card => card.columnId==this.column.id)
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
      this.dialogVisible = false;
      this.$emit('addCards', card)
    },
    removeCard(id) {
    this.$emit('updateCards', id)

    },
    pickupElem(event, elem) {
      event.dataTransfer.effectAllowed = 'move'
      event.dataTransfer.dropEffect = "move";
      this.dragedElem = elem;
      event.dataTransfer.setData('itemId', elem.id.toString())
    },
    moveElem(index) {
      if(this.dragedElem){
      this.$emit('shiftCards', {index:index, dragedElem:this.dragedElem})
    }
    },
    dragEndClear() {
      this.dragedElem = null;
      this.overElem = null;
    },
    showOverElem(elem) {
      if(this.dragedElem){     
      if (elem.id !== this.dragedElem.id) {
        this.overElem = elem;
      } else {
        this.overElem = null;
      }
    }
    },    
    // updateArray(){
    //   this.cardsArr=this.updatedCards()
    // }

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
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
/* .list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
} */
.list-move, /* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
  position: absolute;
}
</style>