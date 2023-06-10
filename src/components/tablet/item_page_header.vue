<template>
  <header class="flex-none w-[100px] h-[100px] rounded-full border-3 border-white relative mb-[-60px] top-[-60px] mx-auto flex flex-col justify-center items-center cursor-pointer z-1 bg-black" @click="$router.push('/'+type)">
    <div class="w-full h-full bg-no-repeat bg-center" :class="itemClasses">
      <h3 class="font-louvette text-xl text-black text-center pl-0.5">
        {{currentItem.objectID}}
      </h3>      
    </div>
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
          return ['bg-mixture-pageheader-icon', 'mr-1', 'pt-[40px]']
          break;
        case 'decoctions': 
          return ['bg-decoctions-pageheader-icon','pt-[50px]' ]
          break;
        case 'bases': 
          return 'bg-bases-pageheader-icon'
          break;
        }        
      }
    }
  }
</script>