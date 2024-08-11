<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <div>
    <RouterLink to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/65/PT.Kreasi_online_indonesia_logo.png" class="h-8 logo-invert" alt="Suitmedia Logo" />
    </RouterLink>
  </div>
</template>

<style scoped>
.logo-invert{
  filter: brightness(0) invert(1);
}
</style>


