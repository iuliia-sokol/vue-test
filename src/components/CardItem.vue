<template>
    <li :cards='cards' :card='card' class="card"  draggable="true"
      @dragstart="dragCard"
        
      >
      <div class="card__top-wrapper">
        
        <h4 class="card__title">{{ card.title }}</h4>
        <button class="card__delete-btn"
        
         @click="this.$emit('remove', this.card.id)"
       >
        X
       </button>
      </div>
      <div class="card__content">
        <p class="card__deadline" v-if="card.deadline !== ''">{{ card.deadline }}</p>
      </div>
    </li>

</template>

<script>
    export default {
        name:'CardItem',
        components:{},
        props: {
        card: {
        type: Object,
        required: true, 
      },
      cards: {
      type: Array,
      default: ()=>[],
      required: true
    },
    },
    // data() {
    // return {
    //   cardCurrent: props.card.id,
    // }},
    setup(props) {
      return {
      cardCurrent: props.card,}
  },
    methods: {
        dragCard(event){
        console.log(event, this.cardCurrent);
        this.$emit('drag', (event, this.cardCurrent))
    }
    },

  
    

    }
   
</script>

<style  scoped>
.card {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 12px;
    border-radius: 16px;
    background: rgba(255, 255, 255, 0.4);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.3);
}
.card__top-wrapper{
    display: flex;
    justify-content: space-between;
}
.card__content{
    display: flex;
    flex-direction: column;
    gap:12px;
}
.card__delete-btn {
    background-color: transparent;
    border: none;
    padding: 8px;
}
.card__deadline {
    display: flex;
    justify-content: center;
    padding: 8px;
    border-radius: 8px;
    background-color: yellow;
    width: fit-content;
    font-size: small;
}
</style>