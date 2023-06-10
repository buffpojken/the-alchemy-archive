<template>
  <header class="item-page-header flex-none mb-8 relative top-[-95px] mb-[-98px]">
    <div class="cursor-pointer absolute rounded-full w-24 h-24 bg-black top-11 left-[calc(50%-50px)] z-20 border-2 border-white flex flex-col justify-center items-center" @click="$router.push('/'+type)">
       <h3 class="font-louvette text-l text-black bg-no-repeat w-[30px] h-[52px] text-center pl-0.5" :class="itemClasses">
        {{currentItem.objectID}}
      </h3>
    </div>
    <div class="cursor-pointer absolute rounded-full w-20 h-20 bg-black -top-4 left-[calc(50%-40px)] z-12 border-2 §border-white flex flex-col justify-center items-center " @click="$router.push('/')"> 
      <h3 class="font-louvette text-l text-black bg-no-repeat bg-center w-20 h-20 " :class="backButtonClasses">
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
          return ['bg-mixture-mobile-pageheader-icon', ' mr-1', 'pt-[20px]']
          break;
        case 'decoctions': 
          return ['bg-decoctions-mobile-pageheader-icon','pt-[23px]' ]
          break;
        case 'bases': 
          return 'bg-bases-mobile-pageheader-icon'
          break;
        }        
      },
      backButtonClasses: function(){
        switch(this.type) {
        case 'mixtures': 
          return ['bg-icon-mobile-back-mixtures']
          break;
        case 'decoctions': 
          return ['bg-icon-mobile-back-decoctions']
          break;
        case 'bases': 
          return ['bg-icon-mobile-back-bases']
          break;
        }        
      }
    }
  }
</script>