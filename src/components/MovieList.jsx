import Loader from "./Loader";
import MovieListItem from "./MovieListItem";
import EmptyMessage from "./EmptyMessage";
import css from "./MovieList.module.css";

export default function MovieList({ movies, loading }) {
  if (loading) {
    return <Loader />;
  }

  if (!movies?.length) {
    return <EmptyMessage message="No movies found." />;
  }

  return (
    <ul className={css.movieList}>
      {movies.map((movie) => (
        <MovieListItem key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}
