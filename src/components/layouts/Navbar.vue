<script setup>
import Logo from './Logo.vue';
import NavigationLinks from './NavigationLinks.vue';
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { initFlowbite } from 'flowbite';

const isScrollingUp = ref(true);  // Set default to true so the navbar is visible on page load
const lastScrollY = ref(0);
const isAtTop = ref(true);

const handleScroll = () => {
  const currentScrollY = window.scrollY;
  isAtTop.value = currentScrollY === 0;

  if (currentScrollY < lastScrollY.value) {
    isScrollingUp.value = true;
  } else {
    isScrollingUp.value = false;
  }

  lastScrollY.value = currentScrollY;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  initFlowbite();
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <nav 
    class="border-gray-200 transition-all duration-300 ease-in-out" 
    :class="[
      'fixed top-0 left-0 w-full z-50',
      isAtTop ? 'bg-suitmedia-primary' : 'backdrop-blur-sm bg-suitmedia-primary bg-opacity-90',
      isScrollingUp ? 'opacity-100' : '-translate-y-full opacity-0',
    ]">
    <div class="flex flex-wrap items-center justify-between container p-4 mx-auto">
      <Logo/>
      <NavigationLinks/>
    </div>
  </nav>
</template>

<style scoped>
nav {
  transition: transform 0.3s ease, opacity 0.3s ease;
}
</style>



<style scoped>
nav {
  transition: transform 0.3s ease, opacity 0.3s ease;
}
</style>