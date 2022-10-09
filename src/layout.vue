<template>

    <MqResponsive target="sm-">
      <div class="overflow-hidden w-screen max-h-screen flex flex-col">
        <router-view></router-view>
      </div>
    </MqResponsive>
    <MqResponsive target="md+" class="w-full flex flex-row items-stretch h-full">
      <a href="why.html" class="the-great-eye">&nbsp;</a>


      <div class="stars-container hidden md:flex flex">
        <div class="stars-inner"></div>
        <div class="stars-middle rotate-counter-30"></div>
        <div class="stars-outer  rotate-60" ></div>
      </div>

      <main class="text-white relative w-full md:w-[550px]">
        <div class="px-12 mt-12 w-full box-border content-enclosure">
          <div class="box-border border w-full content-container h-full">

            <div class="content-list-page-decorator-1 move-decorator-1-animate"></div>
            <div class="content-list-page-decorator-2 move-decorator-2-animate"></div>

            <router-view></router-view>

          </div> <!-- End .content-container -->

        </div>
      </main>

      <RotaryMenu />

    </MqResponsive>

</template>

<script>
  import { MqResponsive } from "vue3-mq";
  import RotaryMenu from './components/rotary_menu.vue'

  export default {
    components: {MqResponsive, RotaryMenu},
    data: function(){
      return {
        mobile: true
      }
    }
  }
</script>