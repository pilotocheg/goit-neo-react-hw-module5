import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.headers.common["Authorization"] =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYTFiNmQ4YWQxZGVkMWFlMDgxMmI2YjlhODU5MzAwNSIsIm5iZiI6MTc1NTAxODc5NC44OTkwMDAyLCJzdWIiOiI2ODliNzYyYWFhMmY2M2M2MWM4ZWI4NmIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.jDXmPa3uqIthvGxwQLq0IYwTejJfxSK03Cu9yBeSnUs";

const makeFetch = async (url, { errorTitle, ...options }) => {
  try {
    const response = await axios.get(url, options);
    return response.data;
  } catch (error) {
    console.error(`${errorTitle}:`, error);
    throw error;
  }
};

export const fetchPopularMovies = () =>
  makeFetch("/trending/movie/day", {
    errorTitle: "Error fetching popular movies",
  });

export const searchMovies = (query) =>
  makeFetch("/search/movie", {
    errorTitle: "Error searching movies",
    params: { query },
  });

export const fetchMovieDetails = (movieId) =>
  makeFetch(`/movie/${movieId}`, {
    errorTitle: "Error fetching movie details",
  });

export const fetchMovieCast = (movieId) =>
  makeFetch(`/movie/${movieId}/credits`, {
    errorTitle: "Error fetching movie cast",
  });

export const fetchMovieReviews = (movieId) =>
  makeFetch(`/movie/${movieId}/reviews`, {
    errorTitle: "Error fetching movie reviews",
  });
