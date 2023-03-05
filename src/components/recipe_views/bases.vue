<template>
  <div class="overflow-auto h-full mb-6">
    <h2 class="px-6 font-aviano text-lg">Används i:</h2>
    <ul class="px-6 font-aviano text-lg md:text-2xl mt-6 mb-8">
      <li v-for="(drink, idx) in currentItem.drinks" class="cursor-pointer pb-4 group" @click="$router.push('/drinks/'+drink.slug)">
        <span class="inline-block pt-5 text-center text-xs w-8 h-[42px] mr-3 pl-1 bg-mixture-list-icon group-hover:bg-mixture-list-icon-filled group-hover:text-black">
      {{drink.objectID}}
    </span> 
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