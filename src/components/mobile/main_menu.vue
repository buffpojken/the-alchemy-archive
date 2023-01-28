<template>
  <div class="py-3 w-screen h-screen box-border transition-transform bg-background">
    <h3 class="text-white text-center my-6 text-4xl font-louvette">{{t('app.title')}}</h3>
    <nav class="h-full w-full flex flex-col">
      <ul class="relative h-full mobile-menu-bg">
        <li class="mobile-menu-item mixtures" @click.prevent="$router.push('/mixtures')">          
          <div class="bg-icon-mixtures w-[62px] h-[71px] bg-no-repeat bg-center mt-2 bg-cover"></div>
          <a href="#" class="text-white mt-2 font-louvette text-xl">{{t('sections.titles.mixtures')}}</a>
        </li>
        <li class="mobile-menu-item bases" @click.prevent="$router.push('/bases')">
          <div class="bg-icon-bases w-[76px] h-[73px] bg-no-repeat bg-center mt-2"></div>
          <a href="#" class="text-white mt-2 font-louvette text-xl">{{t('sections.titles.bases')}}</a>
        </li>
        <li class="mobile-menu-item decoctions" @click.prevent="$router.push('/decoctions')">
          <div class="bg-icon-decoctions w-[89px] h-[89px] bg-no-repeat bg-center mt-2"></div>
          <a href="#" class="text-white font-louvette text-xl">{{t('sections.titles.decoctions')}}</a>
        </li>
        <li class="mobile-menu-item substantia" @click.prevent="$router.push('/substantia')">
          <div class="bg-icon-substantia w-[61px] h-[70px] bg-no-repeat bg-center mt-2"></div>
          <a href="#" class="text-white mt-2 font-louvette text-xl">{{t('sections.titles.substantia')}}</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
  export default {
    data: function(){
      return {}
    }
  }
</script>