<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="container">
    <div class="logo-wrapper">
    <img alt="logo" class="logo" src="./assets/images/logo.png" width="75" />
    <h2 class="logo-title">Trello Generic</h2>
  </div>
   
      <nav  class="nav">
        <RouterLink class="header-link" to="/">Home</RouterLink>
      </nav>
   
  </div>
  </header>

  <RouterView />
</template>

<style >
header {
  position: fixed;
  top:0;
  left:0;
  width: 100vw;
  padding-top: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
 
}
.logo-title {
  font-family: 'Lotus';
  color: #fff;
}
.header-link {
  color: #fff;
}
.logo-wrapper{
  display: flex;
  align-items: center;
}
.nav {
  display: flex;
  gap:30px;
}
.container {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 30px;
}
</style>
