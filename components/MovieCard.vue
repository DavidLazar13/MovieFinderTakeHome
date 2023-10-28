<template>
  <div class="w-96 lg:w-96 flex">
    <div
      class="h-48 lg:h-auto lg:w-48 flex-none rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
    >
      <img v-if="movie.Poster && movie.Poster !== 'N/A'" :src="movie.Poster" :alt="movie.Title" />
      <img v-else src="~/assets/img/no-image-available.png" alt="noImage" />
    </div>
    <div
      class="w-48 lg:w-48 border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal"
    >
      <div class="mb-8">
        <div class="text-gray-900 font-bold text-xl mb-2">{{ movie.Title }}</div>
        <p class="text-gray-700 text-base">{{ movie.Year }}</p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps<{
  movie: Movie;
}>();
</script>
