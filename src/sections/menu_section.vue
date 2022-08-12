<template>
  <div class="w-screen h-screen box-border bg-red-200 transition-transform">
    <header class="mobile-menu-section-header">

      <div class="w-full bg-black pt-6 flex flex-row justify-center items-center">
        <div class="w-[94px] h-[94px] bg-white rounded-full cursor-pointer" @click.prevent="$router.push('/')"></div>
      </div>

      <h4 class="py-4 text-3xl text-white text-center">
        {{$route.meta.sectionName}}
      </h4>
    </header>
  </div>
</template>

<script>
  export default {
    data: function(){
      return {}
    }
  }
</script>