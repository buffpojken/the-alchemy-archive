<template>
  <div class="text-white flex flex-col h-full w-full">

    <div class="three-side-three-border-wrap md:w-6/12 w-full mb-8 mt-32 md:mb-0 md:ml-24 h-full flex flex-col" v-if="currentItem">

      <MqResponsive target="sm-">
        <MobileItemPageHeader :type="type" />
      </MqResponsive>
      <MqResponsive target="md+">
        <ItemPageHeader :type="type" />
      </MqResponsive>

      <section class="flex-1 flex flex-col h-full mt-4">      
        <h1 class="font-louvette text-5xl text-center">
          {{currentItem.name}}
        </h1>
        <div class="flex flex-col flex-grow h-0">
          <div class="overflow-y-auto">
            <component :is="recipeViewType" :currentItem="currentItem"/>
          </div>
        </div>
      </section>
    </div>

  </div>
</template>

<script>
  import { MqResponsive } from "vue3-mq";
  import {mapState} from 'vuex'
  import {nextTick} from 'vue'

  import MobileItemPageHeader from './../components/mobile/item_page_header.vue';
  import ItemPageHeader from './../components/tablet/item_page_header.vue';

  import MixtureView from './../components/recipe_views/mixtures.vue';
  import DecoctionView from './../components/recipe_views/decoctions.vue';
  import BasesView from './../components/recipe_views/bases.vue';

  export default {
    props: ['slug', 'type'],
    components: {MqResponsive,MixtureView,MobileItemPageHeader,ItemPageHeader},
    computed: {
      ...mapState(['currentItem']), 
      recipeViewType: function(){
        switch(this.type){
          case 'mixtures':
            return MixtureView
          case 'decoctions':
            return DecoctionView
          case 'bases':
            return BasesView
        }
      }
    },
    watch: {
      slug: function(){
        this.$store.commit('CURRENT_ITEM', {slug: this.slug, type: this.type})        
      }, 
      type: function(){
        this.$store.commit('CURRENT_ITEM', {slug: this.slug, type: this.type})
      }
    },
    mounted: function(){
      this.$store.commit('CURRENT_ITEM', {slug: this.slug, type: this.type})
    },
    data: function(){
      return {}
    }  
  }
</script>