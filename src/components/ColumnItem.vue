<template>
    <div class="column">
      <div>
        <div>{{ column.id }}</div>
        <div><strong>Название:</strong> {{ column.title }}</div>
        <div><strong>Описание:</strong> {{ column.body }}</div>
      </div>
      <div class="column__btns">
        <my-button
          @click="$router.push(`/columns/${column.id}`)"
        >
          Открыть
        </my-button>
       <my-button
         @click="$emit('remove', column)"
       >
         Удалить
       </my-button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
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
    border: 2px solid teal;
    margin-top: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .column__btns {
    display: flex;
  }
  </style>