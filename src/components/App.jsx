import { Route, Routes } from 'react-router-dom';
import AppBar from './AppBar/AppBar';
import Container from './Container/Container';
import HomePage from '../pages/HomePage';
import MoviesPage from '../pages/MoviesPage';
// import BooksView from './views/BooksView';
// import BookDetailsView from './views/BookDetailsView';
import NotFoundPage from '../pages/NotFoundPage';

export default function App() {
  return (
    <Container>
      <AppBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Container>
  );
}
