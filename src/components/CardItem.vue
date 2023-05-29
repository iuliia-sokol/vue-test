<template>
    <li class="card"
      >
      <div class="card__top-wrapper">
        
        <h4 class="card__title">{{ card.title }}</h4>
        <button class="card__delete-btn"
        
         @click="handleCardRemove"
       >
       <font-awesome-icon icon="fa-solid fa-xmark" />
       </button>
      </div>
      <div class="card__content">
        <div class="markers-wrapper" >
         <span 
          v-for="mark in cardMarks" 
         :key="mark"
         class="marker" :style="{'background-color': mark}"></span>
        </div>
        <p class="card__description"  v-if="card.body !== ''">{{ card.body }}</p>
        <p class="card__deadline" 
         :style= "checkDeadline? 'background-color: red;' : 'background-color: green;'"
         v-if="card.deadline !== ''">{{ card.deadline }}</p>
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
    data(props) {
    return {
      cardMarks: props.card.marks,
    }},
    computed:{
      checkDeadline(){
        if(this.card.deadline){
        const date = Date.now()
        const today = new Date(this.card.deadline).valueOf() 
        if(date<today){
          return false
        }
        return true
      }
        return true
      },
  
    },
    methods: {
      handleCardRemove(){
        this.$emit('remove', this.card.id)
      }
    }
    }
   
</script>

<style  scoped>
.card {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 12px;
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.3);
}
.card__top-wrapper{
    display: flex;
    justify-content: space-between;
}
.card__title{
  overflow: hidden;
    white-space: nowrap;
    max-width: 80%;
    text-overflow: ellipsis;
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
.card__description{
  font-size: x-small;
  overflow: hidden;
    white-space: nowrap;
    max-width: 80%;
    text-overflow: ellipsis;
}
.card__deadline {
    display: flex;
    justify-content: center;
    padding: 6px;
    border-radius: 8px;
    background-color: yellow;
    width: fit-content;
    font-size: small;
  }
.markers-wrapper{
  display: flex;
  gap:6px;
}
  .marker{
    display: inline-block;
    width: 15px;
    height: 15px;
    border-radius: 12px;
  }
</style>