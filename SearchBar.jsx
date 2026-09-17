function SearchBar({ search, setSearch, searchMovies }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    searchMovies();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-8 flex gap-3"
    >
      <input
        type="text"
        placeholder="Search for a movie..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="flex-1 rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-gray-500 focus:ring-2 focus:ring-gray-300"
      />

      <button
        type="submit"
        className="rounded-lg bg-gray-900 px-6 py-3 font-semibold text-white transition hover:bg-gray-700"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;