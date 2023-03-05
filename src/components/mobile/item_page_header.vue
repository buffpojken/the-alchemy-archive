<template>
  <header class="item-page-header flex-none mb-8">
    <div class=" cursor-pointer absolute rounded-full w-24 h-24 bg-black top-11 left-[calc(50%-50px)] z-20 border-2 border-white flex flex-col justify-center items-center" @click="$router.push('/mixtures')">
       <h3 class="font-louvette text-2xl text-black bg-no-repeat w-[60px] h-[95px] text-center" :class="itemClasses">
        {{currentItem.objectID}} 
      </h3>
    </div>
    <div class="minor-icon cursor-pointer" @click="$router.push('/')"></div>
    <div class="border-holder"></div>
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
        }        
      }
    }
  }
</script>