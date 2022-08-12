<template>
  <li class="text-white">
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