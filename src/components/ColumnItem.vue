<template>
    <div class="column">
      <div>
        <!-- <div>{{ column.id }}</div> -->
        <h4 class="column__title">{{ column.title }}</h4>
        <!-- <div><strong>Описание:</strong> {{ column.body }}</div> -->
      </div>
      <div class="column__btns">
        <my-button
          @click="$router.push(`/columns/${column.id}`)"
        >
          Відкрити
        </my-button>
       <my-button
         @click="$emit('remove', column)"
       >
         Видалити
       </my-button>
      </div>
    </div>
  </template>
  
  <script>
  import MyButton from '@/components/MyButton.vue'
  export default {
    components: {MyButton},
    props: {
        column: {
        type: Object,
        required: true,
      }
    }
  }
  </script>
  
  <style scoped>
  .column {
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
  .column__title {
    color: #fff;
  }
  .column__btns {
    display: flex;
  }
  </style>