<template>
  <div class="overflow-auto h-full mb-6">


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