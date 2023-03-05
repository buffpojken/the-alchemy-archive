<template>
  <header class="item-page-header flex-none mb-8">
    <div class=" cursor-pointer absolute rounded-full w-24 h-24 bg-black top-11 left-[calc(50%-50px)] z-20 border-2 border-white" @click="$router.push('/mixtures')">EE</div>
    <div class="minor-icon cursor-pointer" @click="$router.push('/')"></div>
    <div class="border-holder"></div>
  </header>
</template>

<script>
  export default {
    data: function(){
      return {}
    }
  }
</script>