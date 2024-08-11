<script setup>
import Banner from '@/components/Banner.vue';
import CardList from '@/components/CardList.vue'

const banner = {
  title: 'Ideas',
  subtitle: 'Where all our great things start',
  urlImage: 'https://id.yamaha.com/id/files/news_events/id_ID/2016/yamaha_live_loud/liveloud_4.jpg',
};

</script>

<template>
  <div>
    <Banner v-bind="banner" />
    <div class="my-9 container mx-auto min-h-min bg-white">
      <CardList/>
    </div>
  </div>
</template>