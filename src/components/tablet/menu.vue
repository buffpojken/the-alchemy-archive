<template>
  <a href="why.html" class="the-great-eye">&nbsp;</a>

  <div class="stars-container hidden md:flex flex">
    <div class="stars-inner"></div>
    <div class="stars-middle rotate-counter-30"></div>
    <div class="stars-outer  rotate-60" ></div>
  </div>

  <main class="text-white relative w-full md:w-[550px]">
    <div class="px-12 mt-12 w-full box-border content-enclosure">
      <div class="box-border border w-full content-container h-full">

        <div class="content-list-page-decorator-1 move-decorator-1-animate"></div>
        <div class="content-list-page-decorator-2 move-decorator-2-animate"></div>

        <div class="w-full h-full">
          <div class="content-list-outer h-full">
            <div class="content-list-inner h-full">
              <div class="h-full flex flex-col w-full">
                <div class="content-list-medalion">
                  <div class="moon-container"></div>
                </div>
                <h1 class="content-list-header">{{t('sections.titles.'+routeMetaKey)}}</h1>
                <div class="flex-grow w-full overflow-hidden overflow-y-scroll">
                  <ul class="drink-list">
                    <component :is="routeMetaKey" v-for="item in itemList" :item="item" />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  <RotaryMenu :startValue="routeMetaKey" />
</template>

<script>
  import {mapState} from 'vuex'

  import RotaryMenu from './rotary_menu.vue'
  import MixtureItem from './../list_items/mixture.vue'
  import BaseItem from './../list_items/base.vue'
  import DecoctionItem from './../list_items/decoction.vue'

  export default {
    components: {
      'mixtures': MixtureItem, 
      'bases': BaseItem, 
      'decoctions': DecoctionItem, 
      RotaryMenu
    },
    data: function(){
      return {

      }
    }, 
    computed: {
      ...mapState(['mixtures', 'bases', 'decoctions']), 
      routeMetaKey: function(){
        if(this.$route.meta.key){
          return this.$route.meta.key
        }else{
          return 'mixtures'
        }
      },
      iconClass: function(){
        if(this.$route.meta.key){
          return `bg-icon-black-${this.routeMetaKey}`
        }
      }, 
      itemList: function(){
        switch(this.routeMetaKey){
          case 'mixtures': 
            return this.mixtures
          case 'bases': 
            return this.bases
          case 'decoctions': 
            return this.decoctions
          default: 
            return []
        }
      }
    }
  }
</script>