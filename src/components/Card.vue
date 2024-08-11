<script setup>
import { ref, onMounted } from 'vue';
import { formatDate } from '@/utils/helper.js'
import { RouterLink } from 'vue-router';

const props = defineProps({
  id: {
    type: Number,
  },
  title: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
  published_at: {
    type: String,
  },
  medium_image: {
    type: Array,
  },
});

const urlImage = props?.medium_image[0]?.url ?? 'https://placehold.jp/3d4070/ffffff/300x150.png';
const imgSrc = ref('');  // Start with an empty source

const setImageSrc = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      imgSrc.value = urlImage; // Set the actual image URL
      observer.unobserve(entry.target); // Stop observing once the image is loaded
    }
  });
};

onMounted(() => {
  const observer = new IntersectionObserver(setImageSrc, { rootMargin: '0px', threshold: 0.1 });
  const img = document.querySelector('img[data-src]');
  if (img) {
    observer.observe(img);
  }
});
</script>

<template>
  <RouterLink :to="`/idea/${slug}`">
    <div
      class="container w-64 min-h-min pb-4 max-w-96 sm:pb-0 sm:w-60 sm:min-h-[21rem] md:w-80 md:h-[19rem] lg:w-56 lg:min-h-96 
      2xl:w-72 xl:h-96 bg-white shadow-xl rounded-lg overflow-hidden hover:translate-y-1 transition-all">
      <div class="relative h-48 max-h-48 lg:h-60 lg:max-h-60">
        <img
          data-src="https://placehold.jp/3d4070/ffffff/300x150.png"
          :src="imgSrc"
          loading="lazy"
          alt="Gambar dari API"
          class="absolute inset-0 object-cover w-full h-full"
        />
      </div>
      <div class="container p-4 lg:p-6">
        <p class="text-gray-400 font-medium uppercase">{{ formatDate(published_at) }}</p>
        <h1 class="text-lg font-medium text-wrap line-clamp-3">{{ title }}</h1>
      </div>
    </div>
  </RouterLink>
</template>
