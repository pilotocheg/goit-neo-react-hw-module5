import { Outlet, Link } from "react-router";

import PageContainer from "../components/PageContainer";
import { fetchMovieDetails } from "../api/movies";
import Loader from "../components/Loader";
import EmptyMessage from "../components/EmptyMessage";
import MovieImage from "../components/MovieImage";
import InfoCard from "../components/InfoCard";
import {
  formatRuntime,
  formatRating,
  formatDate,
  formatCurrency,
} from "../utils/formatters";
import { useMovieDataLoader } from "../hooks/use-movie-data-loader";

import css from "./MovieDetailsPage.module.css";

export default function MovieDetailsPage() {
  const [movie, loading] = useMovieDataLoader(fetchMovieDetails);

  const renderMovieDetails = () => {
    if (loading) {
      return <Loader />;
    }

    if (!movie) {
      return <EmptyMessage message="No movie details available." />;
    }

    return (
      <div className={css.movieDetails}>
        <div className={css.heroSection}>
          <div className={css.backdropContainer}>
            {movie.backdrop_path && (
              <MovieImage
                className={css.backdropImage}
                src={movie.backdrop_path}
                alt={`${movie.title} backdrop`}
                width="original"
              />
            )}
            <div className={css.backdropOverlay} />
          </div>

          <div className={css.heroContent}>
            <div className={css.movieHeader}>
              <div className={css.posterContainer}>
                <MovieImage
                  className={css.posterImage}
                  src={movie.poster_path}
                  alt={`${movie.title} poster`}
                  width={300}
                />
              </div>

              <div className={css.movieInfo}>
                <h1 className={css.title}>{movie.title}</h1>

                {movie.tagline && (
                  <p className={css.tagLine}>"{movie.tagline}"</p>
                )}

                <div className={css.metaData}>
                  <div className={css.rating}>
                    <span className={css.ratingIcon}>⭐</span>
                    <span className={css.ratingText}>
                      {formatRating(movie.vote_average)}/10
                    </span>
                    <span className={css.voteCount}>
                      ({movie.vote_count} votes)
                    </span>
                  </div>

                  <div className={css.widget}>
                    🕐 {formatRuntime(movie.runtime)}
                  </div>

                  <div className={css.widget}>
                    📅 {formatDate(movie.release_date)}
                  </div>
                </div>

                {!!movie.genres?.length && (
                  <div className={css.genres}>
                    {movie.genres.map((genre) => (
                      <span key={genre.id} className={css.genre}>
                        {genre.name}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className={css.contentSection}>
          {movie.overview && (
            <div className={css.overview}>
              <h2 className={css.overviewTitle}>Overview</h2>
              <p className={css.overviewText}>{movie.overview}</p>
            </div>
          )}

          <div className={css.additionalInfo}>
            <InfoCard
              title="Production Companies"
              items={movie.production_companies}
              renderItem={(company) => (
                <li key={company.id}>
                  {company.name}
                  {company.origin_country && ` (${company.origin_country})`}
                </li>
              )}
            />

            <InfoCard
              title="Production Countries"
              items={movie.production_countries}
              renderItem={(country) => (
                <li key={country.iso_3166_1}>{country.name}</li>
              )}
            />

            <InfoCard
              title="Languages"
              items={movie.spoken_languages}
              renderItem={(language) => (
                <li key={language.iso_639_1}>{language.english_name}</li>
              )}
            />

            <InfoCard
              title="Box Office"
              items={[
                { type: "budget", value: movie.budget },
                { type: "revenue", value: movie.revenue },
              ].filter((item) => item.value)}
              renderItem={(item) => (
                <li key={item.type}>
                  {item.type === "budget" ? "Budget" : "Revenue"}:{" "}
                  {formatCurrency(item.value)}
                </li>
              )}
            />
          </div>

          <div className={css.additionalNavigation}>
            <h2 className={css.additionalTitle}>Additional Information</h2>
            <div className={css.navigationLinks}>
              <Link to="cast" className={css.navLink}>
                👥 Cast
              </Link>
              <Link to="reviews" className={css.navLink}>
                📝 Reviews
              </Link>
            </div>
          </div>

          <Outlet />
        </div>
      </div>
    );
  };

  return (
    <PageContainer title="Movie Details" showGoBack defaultBackLink="/movies">
      {renderMovieDetails()}
    </PageContainer>
  );
}
