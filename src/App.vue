<script setup>
import Blog from './components/Blog.vue'
</script>

<template>
 <Service/>
  <About/>
  <People/>
</template>





<script>
import Service from './components/Service.vue';
import About from './components/About.vue';
import People from './components/People.vue';
  export default {
    components:{
      About,
      People,Service
    }
  }
</script>

<style scoped>

</style>
