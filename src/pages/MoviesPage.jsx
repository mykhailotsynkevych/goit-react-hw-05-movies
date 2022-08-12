import PageHeading from '../components/PageHeading/PageHeading';

export default function MoviesPage() {
  return (
    <>
      <PageHeading text="Movies" />

      <form className="SearchForm">
        <input
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />
        <button type="submit" className="SearchForm-button">
          <span style={{ fontSize: 30 }}>&#9906;</span>
        </button>
      </form>
    </>
  );
}
