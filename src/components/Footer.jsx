export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-xl font-bold text-white mb-3">Horseman</h2>
          <p className="text-gray-400">
            Capturing outdoor and travel stories through photography, design and adventure.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-green-400">Home</a></li>
            <li><a href="/services" className="hover:text-green-400">Services</a></li>
            <li><a href="/gallery" className="hover:text-green-400">Gallery</a></li>
            <li><a href="/about" className="hover:text-green-400">About</a></li>
            <li><a href="/contact" className="hover:text-green-400">Contact</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Connect</h3>
          <div className="flex flex-col space-y-3">

            {/* Instagram */}
            <a
              href="https://www.instagram.com/horse_man_of_411"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400"
            >
              Instagram
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/919150124346"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400"
            >
              WhatsApp
            </a>

            {/* Email */}
            <a
              href="mailto:horsemenof411@gmail.com"
              className="hover:text-green-400"
            >
              Email
            </a>

          </div>
        </div>

      </div>

      <div className="border-t border-gray-700 p-4 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Horseman. All rights reserved.
      </div>
    </footer>
  );
}
