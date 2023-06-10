<template>
  <div class="mb-6">
    <ul class="px-6 font-aviano text-lg md:text-2xl mt-6 mb-8">
      <li v-for="spi in currentItem.spirits">
        {{spi.amount}} {{spi.name}}
      </li>
      <li v-for="ing in currentItem.ingredients">
        {{ing}}
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