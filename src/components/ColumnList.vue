<template>
    <div v-if="columns.length > 0">
    <h3 >Список колонок</h3>

    <transition-group name="user-list">
      <column-item
        v-for="column in columns"
        :column="column"
        :key="column.id"
        @remove="$emit('remove', column)"
      />
    </transition-group>
  </div> 

  <p class='no-columns-text' v-else>
    Додайте вашу першу панель
  </p>

  <button class="add-column-btn"  @click="showDialog">
    <font-awesome-icon icon="fa-solid fa-calendar-plus" size="lg"  beat-fade style="--fa-animation-duration: 2s; --fa-beat-scale: 2.0;"  />
  </button>
  <my-dialog v-model:show="dialogVisible">
      <column-form
        @create="createColumn"
      />
    </my-dialog>
  </template>

<script>
import ColumnForm from "@/components/ColumnForm.vue";
import MyDialog from '@/components/MyDialog.vue'
import ColumnItem from "@/components/ColumnItem.vue";
export default {
  components: {ColumnItem, ColumnForm, MyDialog},
  props: {
    columns: {
      type: Array,
      required: true
    }
  },

data() {
    return {
      dialogVisible: false,
    }
  },
methods: {
  showDialog() {
      this.dialogVisible = true;
    },
    createColumn(column) {
      this.columns.push(column);
      this.dialogVisible = false;
    },
    removePost(column) {
      this.columns = this.columns.filter(p => p.id !== column.id)
    },
}
}
</script>

<style scoped>
.add-column-btn {
  width:40px;
  height:40px;
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.29);
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(5px);
-webkit-backdrop-filter: blur(5px);
border: 1px solid rgba(255, 255, 255, 0.3);
}
.no-columns-text {
  color: #fff;
}
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