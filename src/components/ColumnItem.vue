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

    },
    data() {
    return {
      cards: []
    }
  },

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
    color: #fff;
  }
  </style>