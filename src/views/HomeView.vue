
<template>
  <main>
    <div class="container">
     <ColumnList   :columns='[]'/>
    </div>
  </main>
</template>

<script>
import ColumnList from "../components/ColumnList.vue";

export default {
  components: {
    ColumnList,
  },
  data(){
    return {
      columns: [],
    }

  }
}
</script>

<style scoped>
 
</style>