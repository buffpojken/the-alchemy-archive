<template>
  <div class="overflow-auto h-full mb-6">
    <ul class="px-6 font-aviano text-lg md:text-2xl mt-6 mb-8">
      <li v-for="(drink, idx) in currentItem.drinks" class="cursor-pointer" @click="$router.push('/drinks/'+drink.slug)">
         {{drink.name}}
      </li>
    </ul>

    <div class="px-6 font-aviano text-lg md:text-2xl mb-8" v-html="currentItem.description">
    </div>
  </div>
</template>

<script>
  export default {
    props: ['currentItem'],
    data: function(){
      return {}
    }
  }
</script>