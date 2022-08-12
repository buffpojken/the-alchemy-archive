<template>
  <div class="py-3 w-screen h-screen box-border transition-transform bg-background">
    <h3 class="text-white text-center my-6 text-2xl">The Alchemy Archive</h3>
    <nav class="h-full w-full flex flex-col">
      <ul class="relative h-full mobile-menu-bg">
        <li class="mobile-menu-item mixtures bg-icon-mixtures" @click.prevent="$router.push('/mixtures')">          
          <a href="#" class="text-white">Mixtures</a>
        </li>
        <li class="mobile-menu-item bases bg-icon-bases" @click.prevent="$router.push('/bases')">
          <a href="#" class="text-white">Bases</a>
        </li>
        <li class="mobile-menu-item decoctions bg-icon-decoctions" @click.prevent="$router.push('/decoctions')">
          <a href="#" class="text-white">Dekokter</a>
        </li>
        <li class="mobile-menu-item substantia bg-icon-substantia" @click.prevent="$router.push('/substantia')">
          <a href="#" class="text-white">Substantia</a>
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