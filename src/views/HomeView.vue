<!-- <script setup>
import ColumnList from '../components/ColumnList.vue'
</script> -->

<template>
  <main>
    <ColumnList />
  </main>
</template>

<script>
import ColumnList from "@/components/ColumnList.vue";
// import axios from 'axios';
// import {ref} from 'vue'
// import {usePosts} from "@/hooks/usePosts";
// import useSortedPosts from "@/hooks/useSortedPosts";
// import useSortedAndSearchedPosts from "@/hooks/useSortedAndSearchedPosts";
export default {
  components: {
    ColumnList,
   
  },
  data() {
    return {
      dialogVisible: false,
      sortOptions: [
        {value: 'title', name: 'По названию'},
        {value: 'body', name: 'По содержимому'},
      ]
    }
  },
  setup(props) {
    // const {posts, totalPages, isPostsLoading} = usePosts(10);
    // const {sortedPosts, selectedSort} = useSortedPosts(posts);
    // const {searchQuery, sortedAndSearchedPosts} = useSortedAndSearchedPosts(sortedPosts)

    return {
      // posts,
      // totalPages,
      // isPostsLoading,
      // sortedPosts,
      // selectedSort,
      // searchQuery,
      // sortedAndSearchedPosts,
    }
  }
}
</script>

<style scoped>

</style>