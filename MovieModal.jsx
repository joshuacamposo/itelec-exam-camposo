function MovieModal({ movie, closeMovie }) {
  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "https://via.placeholder.com/500x750?text=No+Poster";

  return (
    <div
      onClick={closeMovie}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-5"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative flex max-h-[90vh] w-full max-w-4xl flex-col gap-6 overflow-y-auto rounded-xl bg-white p-6 md:flex-row"
      >
        <button
          onClick={closeMovie}
          className="absolute right-4 top-3 text-3xl text-gray-600 transition hover:text-red-600"
        >
          ×
        </button>

        <img
          src={imageUrl}
          alt={movie.title}
          className="mx-auto h-[420px] w-[280px] rounded-lg object-cover md:mx-0"
        />

        <div className="flex-1">
          <h2 className="mb-5 text-3xl font-bold">
            {movie.title}
          </h2>

          <div className="space-y-3 text-gray-700">
            <p>
              ⭐ <strong>Rating:</strong>{" "}
              {movie.vote_average
                ? movie.vote_average.toFixed(1)
                : "N/A"}
            </p>

            <p>
              📅 <strong>Release Date:</strong>{" "}
              {movie.release_date || "Unknown"}
            </p>

            <p>
              🔥 <strong>Popularity:</strong>{" "}
              {movie.popularity
                ? movie.popularity.toFixed(0)
                : "N/A"}
            </p>

            <p>
              🎭 <strong>Genres:</strong>{" "}
              {movie.genres && movie.genres.length > 0
                ? movie.genres
                    .map((genre) => genre.name)
                    .join(", ")
                : "Unknown"}
            </p>
          </div>

          <h3 className="mb-2 mt-6 text-xl font-bold">
            Overview
          </h3>

          <p className="leading-7 text-gray-600">
            {movie.overview ||
              "No description available."}
          </p>
        </div>
      </div>
    </div>
  );
}

export default MovieModal;