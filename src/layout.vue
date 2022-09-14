<template>

    <MqResponsive target="sm-">
      <div class="overflow-hidden w-screen max-h-screen flex flex-col">
        <router-view></router-view>
      </div>
    </MqResponsive>
    <MqResponsive target="md+">
      <p class="text-white">ipad</p>
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