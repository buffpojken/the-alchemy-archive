<template>
  <div class="w-screen h-screen box-border bg-red-200 transition-transform">
    <header class="mobile-menu-section-header">

      <div class="icon-container">
        <div class="w-[94px] h-[94px] bg-white bg-no-repeat bg-center rounded-full cursor-pointer z-10" :class="iconClass" @click.prevent="$router.push('/')"></div>
      </div>

      <h4 class="text-3xl font-louvette text-white text-center">
        {{$route.meta.key}}
      </h4>
    </header>
  </div>
</template>

<script>
  export default {
    data: function(){
      return {}
    }, 
    computed: {
      iconClass: function(){
        if(this.$route.meta.key){
          return `bg-icon-black-${this.$route.meta.key}`
        }
      }
    }
  }
</script>