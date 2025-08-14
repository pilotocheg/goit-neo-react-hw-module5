import { useMemo } from "react";

import { searchMovies as apiSearchMovies } from "../api/movies";
import MovieList from "../components/MovieList";
import { useSearchParams } from "react-router";
import PageContainer from "../components/PageContainer";
import SearchBar from "../components/SearchBar";
import { useDataLoader } from "../hooks/use-data-loader";

export default function MoviesPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get("query");

  const searchMovies = useMemo(() => {
    if (!query) {
      return;
    }

    return () => apiSearchMovies(query);
  }, [query]);

  const [movies, loading, setMovies] = useDataLoader(searchMovies, []);

  const handleSearch = (newQuery) => {
    setMovies(null);
    setSearchParams({ query: newQuery });
  };

  return (
    <PageContainer title="Search movies">
      <SearchBar initialValue={query} onSearch={handleSearch} />
      <MovieList loading={loading} movies={movies?.results} />
    </PageContainer>
  );
}
