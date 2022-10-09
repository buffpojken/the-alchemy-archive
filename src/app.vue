<template>
  <Layout />
</template>

<script>
  import Layout from './layout.vue'

  export default {
    data: function(){
      return {}
    }, 
    inject: ["mq"],
    components: {Layout},
  }
</script>