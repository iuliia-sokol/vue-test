<template>
    <li :column='column' class="column"
    @dragover.prevent
         @dragenter.prevent
         @drop="onDrop($event, this.currentColumn.id, this.cards)"
    draggable="true">
      <div class="column__top-wrapper">
        <h4 class="column__title">{{ column.title }} <span class="cards-counter">{{countCards}}</span></h4>
        <my-button class="btn-transparent"
         @click="$emit('remove', column)"
       >
       <font-awesome-icon icon="fa-solid fa-trash" />
       </my-button>
      </div>
      
      <CardsList :cards=this.cardsArr :column=this.currentColumn />

    </li>

  </template>
  
  <script>
  import MyButton from '@/components/MyButton.vue'
  import CardsList from "@/components/CardsList.vue";
  export default {
    name: 'ColumnItem',
    components: {MyButton, CardsList},
    props: {
        column: {
        type: Object,
        required: true,
      },
        columns: {
        type: Array,
        default: ()=>[],
        required: true
      }, 
        cards: {
          type: Array,
          default: ()=>[],
          required: true
        }
    },
    data(props) {
    return {
      cardsArr: props.cards,
      currentColumn: props.column
    }
  },
  computed:{
    countCards() {
      return this.cardsArr.filter(item=> item.columnId == this.column.id).length
    }

  },
  methods: {
    onDrop(e, columnId, items){
      const itemId=e.dataTransfer.getData('itemId')
      const item=items.find((item)=> item.id==itemId)
      item.columnId=columnId
    }
  }

  }
  </script>
  
  <style scoped>
  .column {
    position: relative;
    height: fit-content;
    width: calc(100% / 4 - 80px);
    min-width: 200px;
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
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
    max-width: 80%;
    color: #fff;
    text-overflow: ellipsis;
  }
  .cards-counter{
    position: absolute;
    top:-10px;
    left:-10px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    background-color: rgba(0, 128, 0, 0.7);
    border-radius: 50%;
    padding: 4px;
    color:#fff;
    font-weight: lighter;
  }
  .btn-transparent{
    border: none;
    background-color: transparent;
  }
  </style>