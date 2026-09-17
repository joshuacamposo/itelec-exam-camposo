function MovieCard({ movie, openMovie }) {
  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "https://via.placeholder.com/500x750?text=No+Poster";

  return (
    <div
      onClick={() => openMovie(movie)}
      className="cursor-pointer overflow-hidden rounded-lg bg-white shadow-md transition duration-200 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl"
    >
      <img
        src={imageUrl}
        alt={movie.title}
        className="h-[330px] w-full object-cover"
      />

      <div className="p-3">
        <h3 className="line-clamp-2 text-lg font-semibold">
          {movie.title}
        </h3>
      </div>
    </div>
  );
}

export default MovieCard;