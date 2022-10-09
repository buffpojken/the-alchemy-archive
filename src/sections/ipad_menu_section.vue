<template>
  <div class="w-full h-full">
   <div class="content-list-outer h-full">
      <div class="content-list-inner h-full">
        <div class="h-full flex flex-col w-full">
          <div class="content-list-medalion">
            <div class="moon-container"></div>
          </div>
          <h1 class="content-list-header">Mixturer</h1>
          <div class="flex-grow w-full overflow-hidden overflow-y-scroll">
            <ul class="drink-list">
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

  import MixtureItem from './../components/list_items/mixture.vue'
  import BaseItem from './../components/list_items/base.vue'
  import DecoctionItem from './../components/list_items/decoction.vue'
  import SubstantiaItem from './../components/list_items/substantia.vue'

  export default {
    components: {'mixtures': MixtureItem, 'bases': BaseItem, 'decoctions': DecoctionItem, 'substantia': SubstantiaItem},
    data: function(){
      return {

      }
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