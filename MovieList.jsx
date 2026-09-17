import MovieCard from "./MovieCard";

function MovieList({ movies, openMovie }) {
  if (movies.length === 0) {
    return (
      <p className="py-10 text-center text-gray-600">
        No movies found.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          openMovie={openMovie}
        />
      ))}
    </div>
  );
}

export default MovieList;