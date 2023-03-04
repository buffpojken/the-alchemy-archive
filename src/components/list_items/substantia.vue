<template>
  <li @click="$router.push(`/substantia/`+item.slug)">
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