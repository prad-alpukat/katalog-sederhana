export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white">
      <div className="container flex py-4 justify-between items-center">
        {/* logo */}
        <a href="/">
          <h1>Katalog Sederhana</h1>
        </a>

        {/* menus */}
        <div className="flex gap-4">
          <a href="/">Home</a>
        </div>
      </div>
    </nav>
  );
}
