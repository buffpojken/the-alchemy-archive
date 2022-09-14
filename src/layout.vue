<template>

    <template v-if="mobile">
      <div class="overflow-hidden w-screen max-h-screen flex flex-col">
        <router-view></router-view>
      </div>
    </template>
    <template v-else>
      ipad
    </template>

</template>

<script>


  export default {
    data: function(){
      return {
        mobile: true
      }
    }, 
    components: {}
  }
</script>