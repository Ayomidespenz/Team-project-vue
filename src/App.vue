<script setup>
import Navbar from './components/Navbar.vue';
import Footer from '../components/Footer.vue';


</script>

<template>
 <Service/>
  <About/>
  <People/>

  <div>
  <Navbar/>
    <router-view></router-view>
    <Footer/>
  </div>

</template>
<script>


</script>


<style scoped></style>
