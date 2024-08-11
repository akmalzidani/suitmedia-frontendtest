<script setup>
const props = defineProps({
  labelName: {
    type: String,
    required: true,
  },
  options: {
    type: Object,
    required: true,
  },
  modelValue: {
    type: [String, Number],
    required: true,
  }
});

const emit = defineEmits(['update:modelValue']);

const updateValue = (event) => {
  emit('update:modelValue', event.target.value);
};

</script>

<template>
  <form class="flex items-center flex-col lg:flex-row justify-center gap-4">
    <label :for="labelName" class="mb-2 font-medium text-gray-900 min-w-max">{{ labelName }}:</label>
    <select :id="labelName" :value="modelValue" @change="updateValue"
      class="bg-gray-50 border border-gray-300 text-gray-900 rounded-full focus:ring-orange-500 focus:border-orange-500 block w-full px-4">
      <option 
        v-for="(placeholder, index) in options.placeholder" 
        :key="index" 
        :value="options.value[index]">
        {{ placeholder }}
      </option>
    </select>
  </form>
</template>
