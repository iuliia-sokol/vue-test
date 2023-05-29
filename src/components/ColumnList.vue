<template>
  <div class="columns__wrapper">
   
    <TransitionGroup name="list" tag="ul"
     v-if="columns.length > 0" :columns='columns' class="columns__list">
      <column-item
        v-for="(column,index) in columns"
        :column="column"
        :columns='columns'
        :key="column.id"
        :cards="cards"
        draggable="true"
        @remove="removeColumn"
        @updateCards="handleRemoveCards"
        @addCards="handleAddCard"
        @shiftCards="handleShiftCards"

        @dragstart.self="pickupElem($event, column);"
        @dragover.prevent="showOverElem(column);"
   
        @drop="onDrop($event, column.id, cards, index)"
        @dragend.prevent="dragEndClear"
        :style="overElem? 'opacity: 0.6' : dragedElem ? 'background-color: white;' : 'background-color: rgba(255, 255, 255, 0.5); opacity:1'"
      />
    </TransitionGroup>

  <div  v-else class="no-columns__wrapper">
  <p class='no-columns__text'>
    Створіть вашу першу панель
  </p>
  </div>

  <button class="add-column-btn"  @click="showDialog">
    <font-awesome-icon icon="fa-solid fa-calendar-plus" size="lg"  beat-fade style="--fa-animation-duration: 2s; --fa-beat-scale: 2.0;"  />
  </button>
</div>
  <my-dialog v-model:show="dialogVisible">
      <column-form
        @create="createColumn"
      />
    </my-dialog>
  </template>

<script>
import ColumnForm from "@/components/ColumnForm.vue";
import MyDialog from '@/components/MyDialog.vue'
import ColumnItem from "@/components/ColumnItem.vue";
export default {
  name:'ColumnList',
  components: {ColumnItem, ColumnForm, MyDialog},
data() {
    return {
      columns: [],
      cards:[],
      dialogVisible: false,
      dragedElem: null,
      overElem: null,
    }
  },

methods: {
  showDialog() {
      this.dialogVisible = true;
    },
    createColumn(column) {
      this.columns.push(column);
      this.dialogVisible = false;
    },
    removeColumn(column) {
      this.columns = this.columns.filter(item => item.id !== column.id)
    },
    pickupElem(event, elem) {
      event.dataTransfer.effectAllowed = 'move'
      event.dataTransfer.dropEffect = "move";
      this.dragedElem = elem;
    },
    onDrop(e, columnId, items,index){
      if(e.dataTransfer.getData('itemId')){  
      const itemId=e.dataTransfer.getData('itemId')
      // if(!items){
      //   const item=this.cards.find((item)=> item.id==itemId)
      //   item.columnId=columnId
      // }
     if(items){ 
      const item=items.find((item)=> item.id==itemId)
      if(item.columnId == columnId) {
        return
      }
      item.columnId=columnId}
    }

    if(this.dragedElem){
      this.columns = this.columns.filter(elem => elem.id !== this.dragedElem.id);
      this.columns.splice(index, 0, this.dragedElem);
      this.columns.forEach((elem, index) => (elem.order = index + 1));
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
    handleRemoveCards(id){
    this.cards= this.cards.filter(elem => elem.id !== id)

    },
    handleAddCard(card){
    this.cards.push(card);
    },
    handleShiftCards({index,dragedElem}){
      
    //  const thisColumnCards = this.cards.filter(elem => elem.id ==dragedElem.columnId)
    // const filtered =  thisColumnCards.filter(elem => elem.id !==dragedElem.id)
      // console.log(this.cards);     
      // this.cards= filtered.splice(index, 0, dragedElem).forEach((elem, index) => (elem.order = index + 1));
    //  console.log(this.cards);     
    },

   
}
}
</script>

<style scoped>
.columns__wrapper {
  width: 100%;
  display: flex;
  gap:20px;
  justify-content: flex-start;
}
.add-column-btn {
  width:40px;
  height:40px;
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.29);
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(5px);
-webkit-backdrop-filter: blur(5px);
border: 1px solid rgba(255, 255, 255, 0.3);
}
.no-columns__text {
  color: #fff;
}
.columns__list {
  max-width:fit-content;
  min-height: 100vh;
  display: flex;
  flex-wrap: nowrap;
  gap:20px;
  overflow-y: visible;
}
</style>