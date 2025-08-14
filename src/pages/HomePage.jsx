import { fetchPopularMovies } from "../api/movies";
import MovieList from "../components/MovieList";
import PageContainer from "../components/PageContainer";
import { useDataLoader } from "../hooks/use-data-loader";

export default function HomePage() {
  const [movies, loading] = useDataLoader(fetchPopularMovies, []);

  return (
    <PageContainer title="Trending today">
      <MovieList loading={loading} movies={movies?.results} />
    </PageContainer>
  );
}
