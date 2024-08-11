<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle:{
    type: String,
  },
  urlImage: {
    type: String,
    default: 'https://placehold.jp/3d4070/ffffff/300x150.png',
  },
});

</script>

<template>
    <div class="relative overflow-hidden min-w-full">
      <div class="min-w-full bg-no-repeat bg-center bg-cover relative bg-fixed" :style="{ backgroundImage: `url(${urlImage})` }">
        <div class="min-h-[55vh] flex flex-col justify-center items-center bg-black/[0.6] backdrop-blur-sm">
          <h2 class="text-5xl text-white drop-shadow-2xl font-medium p-4">{{ title }}</h2>
          <p class="text-lg text-white drop-shadow-2xl font-light">
            {{ subtitle }}
          </p>
        </div>
      </div>
      <div class="rotated-shape"></div>
    </div>
</template>

<style scoped>
.rotated-shape{
  @apply absolute bottom-[-30vw] left-[50%] w-[110vw] h-[50%] bg-white -translate-x-1/2 rotate-[-7deg] sm:bottom-[-20vw] md:bottom-[-15vw] md:rotate-[-5.2deg] lg:bottom-[-10vw] xl:bottom-[-8vw]
}
</style>