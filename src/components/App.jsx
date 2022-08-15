import { lazy } from "react";
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from "./SharedLayout/SharedLayout ";

const HomePage = lazy(() => import("../pages/HomePage"));
const MoviesPage = lazy(() => import("../pages/MoviesPage"));
const MoviesDetailsPage = lazy(() => import("../pages/MoviesDetailsPage"));
const Reviews = lazy(() => import("./Reviews/Reviews"));
const Cast = lazy(() => import("./Cast/Cast"));

export const App = () => {
  return (
        <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="movies/:id" element={<MoviesDetailsPage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
}
