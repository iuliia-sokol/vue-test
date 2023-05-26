<template>
    <button :type='type' class="btn">
      <slot></slot>
    </button>
  </template>
  
  <script>
  export default {
    name: 'MyButton',
    props:{
      type: {
        type: String,
        default: 'button'
      }
    }
  }
  </script>
  
  <style scoped>
  .btn {
    font-weight:bold;
    padding: 10px 15px;
    background: rgba(123, 97, 184, 0.7);;
    color: #000;
    border: 1px solid rgba(255, 255, 255, 0.7);
    border-radius: 8px;
  }
  </style>