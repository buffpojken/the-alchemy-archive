<template>
  <div class="text-white h-screen w-screen flex flex-col">
    <div class="flex flex-col h-full justify-start" v-if="currentCocktail">
      <header class="item-page-header flex-none mb-8">
        <div class="main-icon cursor-pointer" @click="$router.push('/mixtures')"></div>
        <div class="minor-icon"></div>
        <div class="border-holder"></div>
      </header>
      <h2 class="text-5xl text-white font-louvette text-center">{{currentCocktail.name}}</h2>
      <div class="overflow-auto h-full">

        <ul>
          <li v-for="spi in currentCocktail.spirits">
            {{spi.amount}} {{spi.name}}
          </li>
          <li v-for="ing in currentCocktail.ingredients">
            {{ing}}
          </li>
        </ul>

        <div class="" v-html="currentCocktail.description">

        </div>
      </div>
    </div>
  </div>
</template>

<script>

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