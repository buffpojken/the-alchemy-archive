<template>
  <MediaQueryProvider :queries="{mobile: '(max-width: 760px)'}">
    <Layout />
  </MediaQueryProvider>
</template>

<script>
  import Layout from './layout.vue'

  export default {
    data: function(){
      return {}
    }, 
    inject: ["mq"],
    components: {Layout},
    mounted: function(){
      console.log(this.mq)
    }
  }
</script>