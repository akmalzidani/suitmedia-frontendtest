import axios from "axios";
import { ref } from "vue";

export default function useIdeas() {
  const listData = ref([]);
  const metaData = ref({});
  const itemData = ref({});

  const params = ref({
    'page[number]': 1,
    'page[size]': 10,
    append: 'medium_image',
    sort: 'published_at',
  });

  const fetchIdeas = async () => {
    try {
      const response = await axios.get(
        "https://suitmedia-backend.suitdev.com/api/ideas",
        {
          headers: {
            Accept: "application/json",
          },
          params: {
            'page[number]': params.value['page[number]'],
            'page[size]': params.value['page[size]'],
            append: params.value.append,
            sort: params.value.sort,
          },
        }
      );
      const metas = response.data.meta;
      const datas = response.data.data;
      metaData.value = metas;
      listData.value = datas;
    } catch (error) {
      console.error(error);
    }
  };

  const getIdeaItem = async (slug) => {
    try {
      const response = await axios.get(
        `https://suitmedia-backend.suitdev.com/api/ideas/${slug}`,
        {
          headers: {
            Accept: "application/json",
          },
        }
      );
      itemData.value = response.data.data;
    } catch (error) {
      console.error(error);
    }
  };

  return { fetchIdeas, getIdeaItem, params, listData, metaData, itemData };
}
