<script setup>
import Banner from '@/components/Banner.vue';
import { onMounted } from 'vue';
import useIdeas from '@/composables/useIdeas.js';
import { useRoute } from 'vue-router';

const route = useRoute();
const { getIdeaItem, itemData } = useIdeas();

const banner = {
  urlImage: 'https://id.yamaha.com/id/files/news_events/id_ID/2016/yamaha_live_loud/liveloud_4.jpg',
};

onMounted( () => {
  getIdeaItem(route.params.slug);
  console.log(route.params);
});
</script>

<template>
  <Suspense>
    <template #default>
      <div>
        <Banner :url-image="banner.urlImage" :title="itemData.title"/>
        <div class="container mx-auto my-9 p-6 min-h-[55vh] min-w-96 bg-white" v-html="itemData.content">
        </div>
      </div>
    </template>
    <template #fallback>
      Loading...
    </template>
  </Suspense>
</template>