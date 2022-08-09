<template>
  <div class="overflow-hidden w-screen max-h-screen flex flex-col">

    <div id="scroll-window" class="transition-transform">
      <div class="py-3 px-3 w-screen h-screen box-border bg-green-200">
        <nav class="border border-white h-full w-full flex flex-col">
          <a href="#" class="text-white" @click="$router.push('/mixtures')" id="mix">Mixtures</a>
          <a href="#" class="text-white" @click="$router.push('/bases')">Bases</a>
          <a href="#" class="text-white" @click="$router.push('/decoctions')">Dekokter</a>
          <a href="#" class="text-white" @click="$router.push('/substantia')">Substantia</a>
        </nav>
      </div>

      <div class="w-screen h-screen box-border bg-red-200">
        <a href="#" id="mungo">mungo</a>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    data: function(){
      return {}
    }
  }
</script>