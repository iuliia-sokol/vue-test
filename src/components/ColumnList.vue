<template>
     <div v-if="columns.length > 0">
    <h3>Список колонок</h3>

    <transition-group name="user-list">
      <column-item
        v-for="column in columns"
        :column="column"
        :key="column.id"
        @remove="$emit('remove', column)"
      />
    </transition-group>
  </div>

  <h2 v-else style="color: red">
    Додайте колонку
  </h2>

  </template>

<script>
import ColumnItem from "@/components/ColumnItem";
export default {
  components: {ColumnItem},
  props: {
    columns: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.user-list-item {
  display: inline-block;
  margin-right: 10px;
}
.user-list-enter-active,
.user-list-leave-active {
  transition: all 0.4s ease;
}
.user-list-enter-from,
.user-list-leave-to {
  opacity: 0;
  transform: translateX(130px);
}
.user-list-move {
  transition: transform 0.4s ease;
}
</style>