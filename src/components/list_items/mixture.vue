<template>
  <li @click="$router.push(`/drinks/`+item.slug)" class="font-aviano text-xl pb-4 cursor-pointer">
    <span class="mixture-list-decorator">{{item.objectID}}</span> {{item.name}} 
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