<script setup>
import Card from '@/components/Card.vue';
import { onMounted, ref, watch } from 'vue';
import useIdeas from '@/composables/useIdeas.js';
import SelectInput from '@/components/SelectInput.vue';

const { fetchIdeas, params, listData, metaData } = useIdeas();

params.value = {
  'page[number]': 1,
  'page[size]': 10,
  append: 'medium_image',
  sort: 'published_at',
};

const optionShowPerPage = {
  placeholder: [10, 20, 50],
  value: [10, 20, 50]
};

const optionSortBy = {
  placeholder: ['Newest', 'Oldest'],
  value: ['published_at', '-published_at']
};

const selectedSize = ref(params.value['page[size]']);
const selectedSortBy = ref(params.value.sort);
const selectedPage = ref(params.value['page[number]']);

watch(selectedSize, async (newSize) => {
  if (params.value) {
    params.value['page[size]'] = newSize;
    localStorage.setItem('page_size', newSize);
    await fetchIdeas();
    if(metaData.value.current_page > metaData.value.last_page) {
      selectedPage.value = metaData.value.last_page;
    }
  }
});

watch(selectedPage, (newPage) => {
  if (params.value) {
    params.value['page[number]'] = newPage;
    localStorage.setItem('current_page', newPage);
    fetchIdeas();
  }
});

function updatePage(page) {
  if (page === 'Next &raquo;') {
    if (page === metaData?.value?.last_page) { return }
    else {
      page = metaData?.value?.last_page;
    }
  }
  if (page === "&laquo; Previous") {
    if (page === 1) { return }
    else {
      page = 1;
    }
  }
  if(page === metaData?.value?.current_page) {
    return;
  }
  selectedPage.value = page;
}

function labelPage(page) {
  if (page === 'Next &raquo;') {
    return 'Last Page'
  }
  if (page === '&laquo; Previous') {
    return 'First Page'
  }
  return page;
}

watch(selectedSortBy, (newSortBy) => {
  if (params.value) {
    params.value.sort = newSortBy;
    localStorage.setItem('sort_by', newSortBy);
    fetchIdeas();
  }
});


onMounted(async () => {
  await fetchIdeas();
  selectedPage.value = localStorage.getItem('current_page') || 1;
  selectedSize.value = localStorage.getItem('page_size') || 10;
  selectedSortBy.value = localStorage.getItem('sort_by') || 'published_at';
  console.log(metaData.value);
});


</script>

<template>
  <Suspense>
    <template class="container" #default>
      <div class="flex justify-center items-center flex-col lg:justify-between">
        <div class="flex flex-col lg:flex-row justify-between my-9 lg:w-[100%] lg:px-4 2xl:px-8">
          <div class="flex items-center text-center mx-auto lg:text-start lg:mx-0">
            <p>Showing {{ metaData?.from }}-{{ metaData?.to }} of {{ metaData?.total }}</p>
          </div>
          <div class="flex flex-col lg:flex-row w-64 sm:min-w-full lg:min-w-fit gap-4">
            <SelectInput labelName="Show per page" :options="optionShowPerPage" v-model="selectedSize" />
            <SelectInput labelName="Sort by" :options="optionSortBy" v-model="selectedSortBy" />
          </div>
        </div>
        <div
          class="container grid xl:grid-cols-5 lg:grid-cols-4 sm:grid-cols-2 sm:px-0 px-6 grid-cols-1 auto-rows-auto gap-7 md:gap-4 place-items-center">
          <Card v-for="data in listData" :key="data.id" v-bind="data" />
        </div>

        <!-- START PAGINATION -->
          <ul class="container justify-center flex flex-wrap items-center my-24 -space-x-px h-8 text-sm">
            <!-- Previous Button -->
            <li>
              <a :href="metaData?.current_page > 1 ? metaData?.links.prev : '#'"
                class="flex flex-wrap items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white  rounded-xl hover:bg-orange-100 hover:text-gray-700 cursor-pointer ">
                <span class="sr-only">Previous</span>
                <svg class="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                  fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M5 1 1 5l4 4" />
                </svg>
              </a>
            </li>

            <!-- Button Angka -->
            <li v-for="link in metaData?.links" :key="link.label">
              <a @click='updatePage(link.label)' :class="[
                'flex items-center justify-center px-3 h-8 py-5 rounded-xl',
                link.active
                  ? 'z-10 text-white bg-suitmedia-primary border-orange-300 '
                  : 'text-black  hover:bg-orange-100 hover:text-gray-700 cursor-pointer'
              ]">
                {{ labelPage(link.label) }}
              </a>
            </li>

            <!-- Next Button -->
            <li>
              <a @click="metaData?.current_page < metaData?.last_page ? selectedPage++ : '#'"
                class="rounded-xl flex items-center justify-center px-3 h-8 leading-tight text-gray-500 hover:bg-orange-100 hover:text-orange-700 cursor-pointer">
                <span class="sr-only">Next</span>
                <svg class="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                  fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m1 9 4-4-4-4" />
                </svg>
              </a>
            </li>
          </ul>
        <!-- END PAGINATION -->
      </div>
    </template>
    <template #fallback>
      Loading...
    </template>
  </Suspense>
</template>
