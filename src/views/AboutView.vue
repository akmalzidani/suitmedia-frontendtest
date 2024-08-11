<script setup>
import Banner from '@/components/Banner.vue';


const banner = {
  title: 'About Us',
  subtitle: 'We are the best company in the world',
  urlImage: 'https://id.yamaha.com/id/files/news_events/id_ID/2016/yamaha_live_loud/liveloud_4.jpg',
};

</script>

<template>
  <div>
    <Banner v-bind="banner" />
    <div class="min-h-[55vh] min-w-96 bg-white">
      HALOA
    </div>
  </div>
</template>