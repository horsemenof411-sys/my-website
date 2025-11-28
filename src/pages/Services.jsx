export default function Services() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16 text-gray-800">

      {/* Page Title */}
      <h1 className="text-4xl font-bold text-center mb-10 text-green-600">
        Our Services
      </h1>

      {/* Subtext */}
      <p className="text-center text-lg text-gray-600 mb-16">
        Premium creative services crafted to bring your ideas to life through photography, design, and travel experiences.
      </p>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">

        {/* Service 1 */}
        <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
          <h2 className="text-xl font-bold text-green-600 mb-3">Outdoor & Travel Photography</h2>
          <p className="text-gray-700">
            Capturing breathtaking landscapes, portraits, and adventure moments with professional quality.
          </p>
        </div>

        {/* Service 2 */}
        <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
          <h2 className="text-xl font-bold text-green-600 mb-3">Custom Wallpapers</h2>
          <p className="text-gray-700">
            Personalized phone and laptop wallpapers created from scratch or using your photos.
          </p>
        </div>

        {/* Service 3 */}
        <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
          <h2 className="text-xl font-bold text-green-600 mb-3">Logo & Poster Design</h2>
          <p className="text-gray-700">
            Clean, professional, and unique logo/poster designs tailored to your brand identity.
          </p>
        </div>

        {/* Service 4 */}
        <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
          <h2 className="text-xl font-bold text-green-600 mb-3">Video Editing</h2>
          <p className="text-gray-700">
            High-quality video edits for travel, events, reels, brand stories, and cinematic visuals.
          </p>
        </div>

        {/* Service 5 */}
        <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
          <h2 className="text-xl font-bold text-green-600 mb-3">Motorcycle Travel Planning</h2>
          <p className="text-gray-700">
            Curated routes, itineraries, and full adventure planning for riders who love exploring.
          </p>
        </div>

        {/* Service 6 */}
        <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
          <h2 className="text-xl font-bold text-green-600 mb-3">Social Media Content Editing</h2>
          <p className="text-gray-700">
            Professionally edited posts, banners, reels, thumbnails, and branding materials.
          </p>
        </div>

      </div>
    </div>
  );
}
