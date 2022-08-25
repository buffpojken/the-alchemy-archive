<template>
  <li class="text-white font-aviano mb-3.5 last:mb-0 cursor-pointer" @click="$router.push(`/drinks/`+item.slug)">
    {{item.name}}
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