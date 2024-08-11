<script setup>
const links = [
  { name: 'Work', to: '/' },
  { name: 'About', to: '/about' },
  { name: 'Services', to: '/services' },
  { name: 'Ideas', to: '/ideas' },
  { name: 'Careers', to: '/careers' },
  { name: 'Contacts', to: '/contacts' },
];
</script>

<template>
  <button data-collapse-toggle="navbar-default" type="button"
    class="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-white rounded-lg md:hidden"
    aria-controls="navbar-default" aria-expanded="false">
    <span class="sr-only">Open main menu</span>
    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        d="M1 1h15M1 7h15M1 13h15" />
  </svg>
  </button>
  <div class="hidden w-full md:block md:w-auto" id="navbar-default">
    <ul
      class="flex flex-col p-0 mt-6 font-regular rounded-lg md:p-0 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
      <li v-for="link in links" :key="link.name">
        <RouterLink :to="link.to" active-class="text-suitmedia-primary rounded bg-white md:border-b-4 md:border-white"
          class="block px-0 py-3 text-center md:rounded-none text-white md:bg-transparent md:py-2 md:text-white"
          aria-current="page">{{ link.name }}</RouterLink>
      </li>
    </ul>
  </div>
</template>
