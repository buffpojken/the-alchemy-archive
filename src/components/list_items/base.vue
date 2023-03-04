<template>
  <li @click="$router.push(`/bases/`+item.key)">
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