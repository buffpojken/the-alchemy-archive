<template>
  <MqResponsive target="sm-">
    <div class="overflow-hidden w-screen max-h-screen flex flex-col">
      <router-view :key="$route.fullpath"></router-view>
    </div>
  </MqResponsive>
  <MqResponsive target="md+" class="w-full flex flex-row items-stretch h-full">
    <router-view :key="$route.fullpath"></router-view>
  </MqResponsive>
</template>

<script>
  import { MqResponsive } from "vue3-mq";

  export default {
    components: {MqResponsive},
    data: function(){
      return {
        mobile: true
      }
    }
  }
</script>