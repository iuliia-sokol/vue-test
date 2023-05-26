<template>
    <ul v-if="cards.length > 0" :cards="cards" class="cards"> 
        <card-item  :cards="cards" v-for="card in cards"
        :card="card"
        :key="card.id"
      />
    </ul>
    <div  v-else class="no-cards__wrapper">
  <p class='no-cards__text'>
    Карток поки немає
  </p>
  </div>
</template>

<script>
import CardItem from '@/components/CardItem.vue'
    export default {
    name:'CardsList',
    components: {CardItem},
    data() {
    return {
      cards: 'cards',
    }
  },
    }
</script>

<style lang="scss" scoped>

</style>