<template>
  <div class="text-white h-screen w-screen flex flex-col">
    <div class="flex flex-col h-full relative md:mt-32 md:ml-24 md:mb-24 justify-start md:w-[750px] md:three-border-wrap" v-if="currentItem">

      <MqResponsive target="sm-">
        <MobileItemPageHeader />
      </MqResponsive>
      <MqResponsive target="md+">
        <ItemPageHeader :type="type" />
      </MqResponsive>

      <h2 class="text-5xl text-white font-louvette text-center">{{currentItem.name}}</h2>
      <component :is="recipeViewType" :currentItem="currentItem"/>

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
  import SubstantiaView from './../components/recipe_views/substantia.vue';
  import BasesView from './../components/recipe_views/bases.vue';

  export default {
    props: ['slug', 'type'],
    components: {MobileItemPageHeader, ItemPageHeader,MqResponsive,MixtureView},
    computed: {
      ...mapState(['currentItem']), 
      recipeViewType: function(){
        switch(this.type){
          case 'mixtures':
            return MixtureView
          case 'substantia':
            return SubstantiaView
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
      nextTick(() => {
        console.log(this.currentItem)
      })
    },
    data: function(){
      return {}
    }  
  }
</script>