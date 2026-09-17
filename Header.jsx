function Header() {
  return (
    <header className="bg-gray-900 px-6 py-5 text-white shadow-md">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-3 text-3xl font-bold">
          🎬 My Movie App
        </h1>

        <nav>
          <a
            href="/"
            className="mr-6 text-gray-300 transition hover:text-white"
          >
            Home
          </a>

        </nav>
      </div>
    </header>
  );
}

export default Header;