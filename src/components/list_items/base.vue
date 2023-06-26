<template>
  <li @click="$router.push(`/bases/`+item.key)" class="font-aviano text-l pb-4 cursor-pointer flex flex-row items-end group">
    <span class="pt-5 text-center text-xs w-8 h-[42px] mr-3 bg-base-list-icon group-hover:bg-base-list-icon-filled group-hover:text-black bg-no-repeat bg-contain">
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