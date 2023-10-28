<template>
  <div
    class="h-500 bg-cover bg-center bg-no-repeat relative text-white p-8 rounded-lg shadow-lg flex flex-col justify-between space-y-6 mb-10"
  >
    <div class="z-10">
      <h1 class="text-3xl font-bold">Welcome</h1>
      <p class="text-lg">Millions of movies, TV shows and people to discover. Explore now.</p>
    </div>

    <div class="relative w-full z-10">
      <input
        v-model="localSearchText"
        @keydown.enter="search"
        placeholder="Search movies..."
        class="w-full p-4 pl-10 rounded-md bg-gray-900 bg-opacity-80 placeholder-gray-500 focus:outline-none focus:border-blue-500"
      />
      <button
        @click="search"
        class="absolute top-2 right-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Search
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  initialText: string;
}>();

const localSearchText = ref('');
const emits = defineEmits(['search']);
const search = () => {
  emits('search', localSearchText.value);
};
</script>
