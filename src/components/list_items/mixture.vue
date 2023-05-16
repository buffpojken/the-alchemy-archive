<template>
  <li @click="$router.push(`/drinks/`+item.slug)" @touchend="$router.push(`/drinks/`+item.slug)" class="font-aviano text-xl pb-4 cursor-pointer flex flex-row items-end group">
    <span class="pt-5 text-center text-xs w-8 h-[42px] mr-3 bg-mixture-list-icon group-hover:bg-mixture-list-icon-filled group-hover:text-black">
      {{item.objectID}}
    </span> 
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