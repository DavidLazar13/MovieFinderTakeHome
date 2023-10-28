<template>
  <SearchBar :initialText="searchText" @search="handleSearch" />
  <!-- Movie list -->
  <Carousel v-if="movies && movies.length" :breakpoints="breakpoints">
    <Slide v-for="movie in movies" :key="movie.imdbID">
      <nuxt-link
        :to="`/movie/${movie.imdbID}`"
        class="text-blue-500 hover:text-blue-700 transition duration-150"
      >
        <MovieCard :movie="movie" />
      </nuxt-link>
    </Slide>
    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
</template>

<script setup lang="ts">
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
const movieStore = useMovieStore();
const { fetchMovieList } = movieStore;
const { movies } = storeToRefs(movieStore);

const searchText = ref<string>('');
const breakpoints = ref({
  // 700px and up
  700: {
    itemsToShow: 1,
  },
  1024:{
    itemsToShow: 2,
  },
  // 1024 and up
  1280: {
    itemsToShow: 3,
  },
});
const handleSearch = async (query: string) => {
  searchText.value = query;
  await fetchMovieList(query);
};
</script>
<style>
@import 'vue3-carousel/dist/carousel.css';
</style>
