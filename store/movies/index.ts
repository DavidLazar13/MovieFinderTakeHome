import type { Movie, ApiResponse } from '~/types/global';
interface MovieStoreState {
  movies?: Movie[];
  movie?: Movie;
}
export const useMovieStore = defineStore({
  id: 'movies',
  state: () =>
    ({
      movies: [],
      movie: {},
    }) as MovieStoreState,
  actions: {
    async fetchMovieList(searchText: string, currentPage: number = 1) {
      const { API_URL, API_KEY } = useRuntimeConfig().public;
      const apiUrl = `${API_URL}/?apikey=${API_KEY}`;
      const { data, error } = await useFetch<ApiResponse>(
        `${apiUrl}&s=${searchText}&page=${currentPage}`
      );

      if (data.value) {
        this.movies = data.value.Search;
      }
      if (error.value) {
        const message = 'An error has occurred while fetching data';
        console.log('=>(index.ts:26) message', message);
      }
    },
    async fetchMovieDetails(movieId: string) {
      const { API_URL, API_KEY } = useRuntimeConfig().public;
      const apiUrl = `${API_URL}/?apikey=${API_KEY}&i=${movieId}`;
      const { data, error } = await useFetch(apiUrl);
      if (data.value) {
        this.movie = data.value;
      }
      if (error.value) {
        const message = 'An error has occurred while fetching data';
        console.error('=>(index.ts:36) message', message);
      }
    },
  },
});
