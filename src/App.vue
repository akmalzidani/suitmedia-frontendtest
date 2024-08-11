<script setup>
import { RouterView } from "vue-router";
import Navbar from "./components/layouts/Navbar.vue";
import Footer from "./components/layouts/Footer.vue";

</script>

<template>
  <main class="box-border">
    <Navbar />
    <RouterView class="mt-16 with-dark-bg" />
    <Footer/>
  </main>
</template>

<style scoped>
.with-dark-bg {
  position: relative;
  z-index: 0;
}

.with-dark-bg::before {
  content: '';
  position: absolute;
  top: -4rem; 
  left: 0;
  right: 0;
  height: 4rem; 
  background-color: rgba(0, 0, 0, 0.6); 
  z-index: -1; 
}
</style>

