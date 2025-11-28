export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 text-gray-800">
      
      {/* Title */}
      <h1 className="text-4xl font-bold text-center mb-10 text-green-600">
        About Horseman
      </h1>

      {/* Intro Section */}
      <div className="text-lg leading-relaxed mb-12">
        <p className="mb-6">
          Welcome to <span className="font-semibold">Horseman</span> — where adventure,
          creativity, and storytelling come together. We capture the magic of outdoor
          experiences, craft beautiful visuals, and help people create lasting memories
          through photography, design, and travel.
        </p>

        <p>
          From stunning travel photography to customized wallpapers, logo designs,
          video edits, and curated motorcycle travel routes — Horseman is built with
          passion and the love for the open road.
        </p>
      </div>

      {/* Image + Text Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16">
        
        {/* Image */}
        <div>
          <img
            src="/src/assets/about.jpg"
            alt="About Horseman"
            className="rounded-xl shadow-lg"
          />
        </div>

        {/* Text */}
        <div className="text-lg leading-relaxed">
          <h2 className="text-2xl font-bold text-green-600 mb-4">
            Our Journey
          </h2>
          <p className="mb-4">
            Horseman began with a simple idea — to document the thrill of exploring
            new places and turn them into digital stories. What started as a passion
            now helps others enhance their brand and travel experiences.
          </p>
          <p>
            Whether it’s a scenic ride on a motorcycle, a peaceful nature trail,
            or creating designs that reflect your personality, we aim to deliver
            visuals that inspire.
          </p>
        </div>
      </div>

      {/* What We Do Section */}
      <div>
        <h2 className="text-2xl font-bold text-green-600 text-center mb-8">
          What We Offer
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">

          <div className="p-6 shadow-md rounded-xl bg-white hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-3">Photography</h3>
            <p>Outdoor, travel, portraits, nature and event photography.</p>
          </div>

          <div className="p-6 shadow-md rounded-xl bg-white hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-3">Design</h3>
            <p>Logos, posters, wallpapers and creative visual content.</p>
          </div>

          <div className="p-6 shadow-md rounded-xl bg-white hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-3">Travel Plans</h3>
            <p>Motorcycle routes, adventure travel planning and experience curation.</p>
          </div>

        </div>
      </div>

    </div>
  );
}
