<template>
  <div id="scroll-window" class="transition-transform mobile-menu-main-container">
    <router-view v-slot="{Component, route}">
      <transition :name="route.meta.animation" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script>
  export default {
    data: function(){
      return {}
    }
  }
</script>