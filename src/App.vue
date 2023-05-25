<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="logo-wrapper">
    <img alt="logo" class="logo" src="./assets/images/logo.png" width="75" />
    <h2>Trello Generic</h2>
  </div>
    <div class="wrapper">
      <nav>
        <RouterLink class="header-link" to="/">Home</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
h2 {
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
.wrapper {
  display: flex;
}
</style>
