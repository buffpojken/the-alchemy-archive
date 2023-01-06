<template>
  <div class="text-white h-screen w-screen flex flex-col">

    <div class="flex flex-col h-full justify-start md:w-[750px] relative" v-if="currentCocktail">

      <header class="item-page-header flex-none mb-8">
        <div class="main-icon cursor-pointer" @click="$router.push('/mixtures')"></div>
        <div class="minor-icon"></div>
        <div class="border-holder"></div>
      </header>

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

      <div class="border-holder mb-3.5"></div>
    </div>
  </div>
</template>

<script>
  
  import { MqResponsive } from "vue3-mq";
  import {mapState} from 'vuex'

  export default {
    props: ['slug'],
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