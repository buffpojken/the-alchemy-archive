<template>
  <div class="text-white h-screen w-screen flex flex-col">

    <div class="flex flex-col h-full relative md:mt-32 md:ml-24 md:mb-24 justify-start md:w-[750px] md:three-border-wrap" v-if="currentCocktail">

      <MqResponsive target="sm-">
        <MobileItemPageHeader />
      </MqResponsive>
      <MqResponsive target="md+">
        <ItemPageHeader />
      </MqResponsive>


      <h2 class="text-5xl text-white font-louvette text-center">{{currentCocktail.name}}</h2>

      <div class="overflow-auto h-full mb-6">
        <ul class="px-6 font-aviano text-lg md:text-2xl mt-6 mb-8">
          <li v-for="spi in currentCocktail.spirits">
            {{spi.amount}} {{spi.name}}
          </li>
          <li v-for="ing in currentCocktail.ingredients">
            {{ing}}
          </li>
        </ul>

        <div class="px-6 font-aviano text-lg md:text-2xl mb-8" v-html="currentCocktail.description">

        </div>
      </div>

    </div>
  </div>
</template>

<script>

  import { MqResponsive } from "vue3-mq";
  import {mapState} from 'vuex'

  import MobileItemPageHeader from './../components/mobile/item_page_header.vue';
  import ItemPageHeader from './../components/tablet/item_page_header.vue';

  export default {
    props: ['slug'],
    components: {MobileItemPageHeader, ItemPageHeader,MqResponsive},
    computed: {
      ...mapState(['currentCocktail'])
    },
    mounted: function(){
      this.$store.commit('CURRENT_MIXTURE', this.slug)
      console.log(this.currentCocktail)
    },
    data: function(){
      return {}
    }
  }
</script>