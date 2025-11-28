import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4 flex gap-6 text-lg">
      <Link to="/" className="hover:text-yellow-400">Home</Link>
      <Link to="/about" className="hover:text-yellow-400">About</Link>
      <Link to="/gallery" className="hover:text-yellow-400">Gallery</Link>
      <Link to="/contact" className="hover:text-yellow-400">Contact</Link>
    </nav>
  );
}

export default Navbar;
