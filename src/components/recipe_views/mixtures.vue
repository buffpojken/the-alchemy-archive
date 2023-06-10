<template>
  <div class="mb-6">
    <ul class="px-6 font-aviano text-lg md:text-2xl mt-6 mb-8 bg-zinc-900 p-6">
      <li v-for="spi in currentItem.spirits" class="pb-2">
        <span class="text-2xl">{{spi.amount}}</span> {{spi.name}} <span class="inline-block w-4 h-[21px] ml-1 bg-base-list-icon-filled bg-no-repeat bg-contain">
    </span> 
      </li>
      <li v-for="ing in currentItem.ingredients" class="pb-2">
        {{ing}}
      </li>
    </ul>
    <div class="px-6 font-aviano text-lg md:text-2xl mb-8 leading-loose" v-html="currentItem.description">
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