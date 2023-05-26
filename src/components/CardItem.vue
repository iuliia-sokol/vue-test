<template>

        <li :card='card' class="card">
      <div class="card__top-wrapper">
        
        <h4 class="card__title">{{ card.title }}</h4>
        <my-button
         @click="$emit('remove', card)"
       >
        X
       </my-button>
      </div>
      <div class="card__content">
        <p>{{ card.deadline }}</p>
      </div>
    </li>

</template>

<script>
import MyButton from '@/components/MyButton.vue'
    export default {
        name:'CardItem',
        components:{MyButton},
        props: {
        card: {
        type: Object,
        required: true,
      },
    }
    }
</script>

<style  scoped>
.card {
    width: 100%;
    display: flex;
    flex-direction: column;
}
.card__top-wrapper{
    display: flex;
    justify-content: space-between;
}
.card__content{
    display: flex;
    flex-direction: column;
}
</style>