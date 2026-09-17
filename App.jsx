import { useEffect, useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import MovieModal from "./components/MovieModal";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);

  const fetchMovies = async (query = "") => {
    setLoading(true);
    setError("");

    try {
      let url;

      if (query.trim() !== "") {
        url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
          query
        )}&language=en-US&page=1`;
      } else {
        url = `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
      }

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Failed to get movies");
      }

      const data = await response.json();

      const sortedMovies = (data.results || []).sort(
        (a, b) => b.vote_average - a.vote_average
      );

      setMovies(sortedMovies);
    } catch (error) {
      console.error(error);
      setError("Failed to fetch movies.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const searchMovies = () => {
    fetchMovies(search);
  };

  const openMovie = async (movie) => {
    try {
      const response = await fetch(
        `${BASE_URL}/movie/${movie.id}?api_key=${API_KEY}&language=en-US`
      );

      if (!response.ok) {
        throw new Error("Failed to get movie details");
      }

      const data = await response.json();

      setSelectedMovie(data);
    } catch (error) {
      console.error("Error getting movie details:", error);
    }
  };

  const closeMovie = () => {
    setSelectedMovie(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <Header />

      <main className="mx-auto max-w-7xl px-5 py-8">
        <h2 className="mb-5 text-2xl font-bold">
          Movie Search
        </h2>

        <SearchBar
          search={search}
          setSearch={setSearch}
          searchMovies={searchMovies}
        />

        {loading && (
          <p className="py-10 text-center text-lg">
            Loading movies...
          </p>
        )}

        {error && (
          <p className="py-10 text-center text-red-600">
            {error}
          </p>
        )}

        {!loading && !error && (
          <MovieList
            movies={movies}
            openMovie={openMovie}
          />
        )}
      </main>

      {selectedMovie && (
        <MovieModal
          movie={selectedMovie}
          closeMovie={closeMovie}
        />
      )}
    </div>
  );
}

export default App;