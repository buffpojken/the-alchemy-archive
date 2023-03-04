<template>
  <li @click="$router.push(`/drinks/`+item.slug)" class="font-aviano text-2xl pb-3 cursor-pointer">
    {{item.objectID}}. {{item.name}} 
  </li>
</template>

<script>
  export default {
    props: ['item'],
    data: function(){
      return {}
    }
  }
</script>