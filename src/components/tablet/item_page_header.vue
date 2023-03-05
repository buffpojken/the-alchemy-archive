<template>
  <header class="faded-circles flex-none w-[170px] h-[170px] rounded-full border border-white relative mb-[-65px] top-[-95px] mx-auto bg-black flex flex-col justify-center items-center cursor-pointer" @click="$router.push('/'+type)">
    <div class="main-icon"></div>
    <h3 class="font-louvette text-2xl text-black bg-no-repeat w-[60px] h-[95px] text-center" :class="itemClasses">
      {{currentItem.objectID}}
    </h3>
  </header>
</template>

<script>

  import {mapState} from 'vuex'

  export default {
    props: ['type'],
    data: function(){
      return {}
    }, 
    computed: {
      ...mapState(["currentItem"]), 
      itemClasses: function(){
        switch(this.type) {
        case 'mixtures': 
          return ['bg-mixture-pageheader-icon', ' mr-3', 'pt-[40px]']
          break;
        case 'decoctions': 
          return ['bg-decoctions-pageheader-icon','pt-[50px]' ]
          break;
        case 'bases': 
          return 'bg-bases-pageheader-icon'

          break;
        case 'substantia':

          break; 
        }        
      }
    }
  }
</script>