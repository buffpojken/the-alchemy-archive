<template>
  <div class="w-screen h-screen box-border bg-black transition-transform flex flex-col">
    <header class="mobile-menu-section-header">
      <div class="icon-container">
        <div class="w-[94px] h-[94px] bg-white bg-no-repeat bg-center rounded-full cursor-pointer z-10" :class="iconClass" @click.prevent="$router.push('/')"></div>
      </div>

      <h4 class="text-3xl font-louvette text-white text-center">
        {{$route.meta.key}}
      </h4>
    </header>

    <div class="h-full overflow-auto">
      <ul class="">
        <component :is="$route.meta.key" v-for="item in itemList" :item="item" />
      </ul>
    </div>
  </div>
</template>

<script>

  import {mapState} from 'vuex'
  import MixtureItem from './../components/list_items/mixture.vue'
  import BaseItem from './../components/list_items/base.vue'

  export default {
    components: {'mixtures': MixtureItem, 'bases': BaseItem},
    data: function(){
      return {}
    }, 
    computed: {
      ...mapState(['mixtures', 'bases', 'decoctions', 'substantia']), 
      iconClass: function(){
        if(this.$route.meta.key){
          return `bg-icon-black-${this.$route.meta.key}`
        }
      }, 
      itemList: function(){
        switch(this.$route.meta.key){
          case 'mixtures': 
            return this.mixtures
          case 'bases': 
            return this.bases
          default: 
            return [4,5]
        }
      }
    }
  }
</script>