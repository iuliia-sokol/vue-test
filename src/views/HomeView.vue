
<template>
  <main>
    <div class="container">
     <h3 class="title">Список панелей</h3>
     <ColumnList />
    </div>
  </main>
</template>

<script>
import ColumnList from "../components/ColumnList.vue";

export default {
  components: {
    ColumnList,
  },
}
</script>

<style scoped>
main {
  width: fit-content;
  min-width: 100%;
  overflow-x: scroll;
  padding-top: 120px;
}
.container {
  display: flex;
  flex-direction: column;
}
 .title {
  font-weight: 700;
  color:#fff;
 }
</style>