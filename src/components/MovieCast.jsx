import { fetchMovieCast } from "../api/movies";
import Loader from "./Loader";
import EmptyMessage from "./EmptyMessage";
import MovieImage from "./MovieImage";
import css from "./MovieCast.module.css";
import { useScrollWhen } from "../hooks/use-scroll-when";
import { useMovieDataLoader } from "../hooks/use-movie-data-loader";

export default function MovieCast() {
  const [data, loading] = useMovieDataLoader(fetchMovieCast);

  const cast = data?.cast;

  useScrollWhen(cast?.length, 300);

  if (loading) {
    return <Loader />;
  }

  if (!cast?.length) {
    return <EmptyMessage message="No cast information available." />;
  }

  return (
    <div className={css.castContainer}>
      <h2 className={css.title}>Cast</h2>
      <div className={css.castGrid}>
        {cast.map((actor) => (
          <div key={actor.id} className={css.castCard}>
            <div className={css.imageContainer}>
              {actor.profile_path ? (
                <MovieImage
                  className={css.actorImage}
                  src={actor.profile_path}
                  alt={actor.name}
                  width={200}
                />
              ) : (
                <div className={css.noImage}>
                  <span>👤</span>
                </div>
              )}
            </div>
            <div className={css.actorInfo}>
              <h3 className={css.actorName}>{actor.name}</h3>
              <p className={css.character}>as {actor.character}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
