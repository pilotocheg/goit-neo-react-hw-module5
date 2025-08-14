import { Link, useLocation } from "react-router";

import MovieImage from "./MovieImage";
import { formatRating } from "../utils/formatters";
import css from "./MovieListItem.module.css";

export default function MovieListItem({ movie }) {
  const location = useLocation();

  return (
    <li className={css.item}>
      <Link to={`/movies/${movie.id}`} className={css.link} state={location}>
        <div className={css.cardContainer}>
          <div className={css.backdropContainer}>
            <MovieImage
              className={css.backdropImage}
              src={movie.backdrop_path || movie.poster_path}
              alt={`${movie.title} backdrop`}
              width="original"
            />
            <div className={css.backdropOverlay} />
          </div>

          <div className={css.cardContent}>
            <div className={css.movieHeader}>
              <div className={css.posterContainer}>
                <MovieImage
                  className={css.posterImage}
                  src={movie.poster_path}
                  alt={`${movie.title} poster`}
                  width={200}
                />
              </div>

              <div className={css.movieInfo}>
                <h3 className={css.title}>{movie.title}</h3>

                <div className={css.metadata}>
                  <div className={css.rating}>
                    <span className={css.ratingIcon}>⭐</span>
                    <span className={css.ratingText}>
                      {formatRating(movie.vote_average)}/10
                    </span>
                  </div>

                  <div className={css.releaseDate}>
                    {movie.release_date &&
                      new Date(movie.release_date).getFullYear()}
                  </div>
                </div>

                {movie.overview && (
                  <p className={css.overview}>
                    {movie.overview.length > 120
                      ? `${movie.overview.substring(0, 120)}...`
                      : movie.overview}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
}
