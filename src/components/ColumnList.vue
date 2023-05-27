<template>
  <div class="columns__wrapper">
   
    <ul  v-if="columnsArr.length > 0" :columns=this.columnsArr class="columns__list">
      <column-item
        v-for="column in this.columnsArr"
        :column="column"
        :columns=this.columnsArr
        :key="column.id"
        :cards="cards"
        @remove="removeColumn"
      />
    </ul>

  <div  v-else class="no-columns__wrapper">
  <p class='no-columns__text'>
    Створіть вашу першу панель
  </p>
  </div>

  <button class="add-column-btn"  @click="showDialog">
    <font-awesome-icon icon="fa-solid fa-calendar-plus" size="lg"  beat-fade style="--fa-animation-duration: 2s; --fa-beat-scale: 2.0;"  />
  </button>
</div>
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
  name:'ColumnList',
  components: {ColumnItem, ColumnForm, MyDialog},
  props: {
    columns: {
      type: Array,
      default: ()=>[],
      required: true
    },
    cards: {
      type: Array,
      default: ()=>[],
      required: true
    }
  },
data(props) {
    return {
      dialogVisible: false,
      columnsArr: props.columns
    }
  },
methods: {
  showDialog() {
      this.dialogVisible = true;
    },
    createColumn(column) {
      this.columnsArr.push(column);
      this.dialogVisible = false;
    },
    removeColumn(column) {
      this.columnsArr = this.columnsArr.filter(item => item.id !== column.id)
    },

}
}
</script>

<style scoped>
.columns__wrapper {
  width: 100%;
  display: flex;
  gap:20px;
  justify-content: flex-start;
}
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
.no-columns__text {
  color: #fff;
}
.columns__list {
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  gap:20px;
}
</style>