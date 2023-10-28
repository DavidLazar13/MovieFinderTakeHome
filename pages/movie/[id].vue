<template>
  <div v-if="movie" class="flex flex-col md:flex-row p-10">
    <div class="flex-none w-full md:w-1/3 mb-6 md:mb-0">
      <img :src="movie.Poster" alt="Movie Poster" class="rounded shadow-lg" />
    </div>
    <div class="flex-1 flex flex-col space-y-6">
      <h1 class="text-3xl font-bold">{{ movie.Title }}</h1>
      <div>
        <p><span class="font-semibold">Released:</span> {{ movie.Released }}</p>
        <p><span class="font-semibold">Runtime:</span> {{ movie.Runtime }}</p>
        <p><span class="font-semibold">Genre:</span> {{ movie.Genre }}</p>
        <p><span class="font-semibold">Director:</span> {{ movie.Director }}</p>
        <p><span class="font-semibold">Actors:</span> {{ movie.Actors }}</p>
        <p><span class="font-semibold">Plot:</span> {{ movie.Plot }}</p>
        <p><span class="font-semibold">Language:</span> {{ movie.Language }}</p>
        <p><span class="font-semibold">Country:</span> {{ movie.Country }}</p>
        <p><span class="font-semibold">Awards:</span> {{ movie.Awards }}</p>
        <div>
          <span class="font-semibold">Ratings:</span>
          <ul>
            <li v-for="rating in movie.Ratings" :key="rating.Source">
              {{ rating.Source }}: {{ rating.Value }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const movieId = route.params.id;
const movieStore = useMovieStore();
const { fetchMovieDetails } = movieStore;
const { movie } = storeToRefs(movieStore);
await fetchMovieDetails(movieId);
</script>
