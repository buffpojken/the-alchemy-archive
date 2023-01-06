<template>
  <div class="w-screen h-screen box-border bg-black transition-transform flex flex-col px-4 pt-20 menu-page pb-4">
    <div class="header-icon" :class="iconClass" @click.prevent="$router.push('/')"></div>

    <div class="section-container h-full flex flex-col">

      <div class="menu-section-scroll-wrapper h-full">
        <div class="border-2 border-white flex flex-col h-full justify-start">

          <h4 class="mt-14 text-3xl text-white font-louvette text-center">
            {{$route.meta.key}}
          </h4>

          <div class="menu-section-scroll-container h-full mt-10">
            <ul class="px-3 pb-10">
              <component :is="$route.meta.key" v-for="item in itemList" :item="item" />
            </ul>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>

  import {mapState} from 'vuex'
  import MixtureItem from './../list_items/mixture.vue'
  import BaseItem from './../list_items/base.vue'
  import DecoctionItem from './../list_items/decoction.vue'
  import SubstantiaItem from './../list_items/substantia.vue'

  export default {
    components: {'mixtures': MixtureItem, 'bases': BaseItem, 'decoctions': DecoctionItem, 'substantia': SubstantiaItem},
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
          case 'decoctions': 
            return this.decoctions
          case 'substantia':
            return this.substantia
          default: 
            return []
        }
      }
    }
  }
</script>