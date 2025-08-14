import { fetchMovieReviews } from "../api/movies";
import { formatDate } from "../utils/formatters";
import { useScrollWhen } from "../hooks/use-scroll-when";
import { useMovieDataLoader } from "../hooks/use-movie-data-loader";

import Loader from "./Loader";
import EmptyMessage from "./EmptyMessage";
import css from "./MovieReviews.module.css";

export default function MovieReviews() {
  const [data, loading] = useMovieDataLoader(fetchMovieReviews);

  const reviews = data?.results;

  useScrollWhen(reviews?.length, 300);

  if (loading) {
    return <Loader />;
  }

  if (!reviews?.length) {
    return <EmptyMessage message="No reviews available for this movie." />;
  }

  return (
    <div className={css.reviewsContainer}>
      <h2 className={css.title}>Reviews</h2>
      <div className={css.reviewsList}>
        {reviews.map((review) => (
          <div key={review.id} className={css.reviewCard}>
            <div className={css.reviewHeader}>
              <div className={css.authorInfo}>
                <h3 className={css.authorName}>{review.author}</h3>
                {review.author_details?.rating && (
                  <div className={css.rating}>
                    <span className={css.ratingIcon}>⭐</span>
                    <span className={css.ratingValue}>
                      {review.author_details.rating}/10
                    </span>
                  </div>
                )}
              </div>
              <div className={css.reviewDate}>
                {formatDate(review.created_at)}
              </div>
            </div>
            <div className={css.reviewContent}>
              <p className={css.reviewText}>{review.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
