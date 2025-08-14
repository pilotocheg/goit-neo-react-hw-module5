import { useMemo } from "react";
import { useParams } from "react-router";

import { useDataLoader } from "./use-data-loader";

export const useMovieDataLoader = (fetchFn) => {
  const { movieId } = useParams();

  const fetchMovieData = useMemo(() => {
    if (!movieId) {
      return;
    }
    return () => fetchFn(movieId);
  }, [movieId, fetchFn]);

  return useDataLoader(fetchMovieData);
};
