import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";
import { Toaster } from "react-hot-toast";

import Navigation from "./Navigation";
import Loader from "./Loader";
import css from "./App.module.css";

const MovieCast = lazy(() => import("./MovieCast"));
const MovieReviews = lazy(() => import("./MovieReviews"));
const HomePage = lazy(() => import("../pages/HomePage"));
const MovieDetailsPage = lazy(() => import("../pages/MovieDetailsPage"));
const MoviesPage = lazy(() => import("../pages/MoviesPage"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));

export default function App() {
  return (
    <div className={css.app}>
      <Navigation />

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>

      <Toaster position="top-right" />
    </div>
  );
}
