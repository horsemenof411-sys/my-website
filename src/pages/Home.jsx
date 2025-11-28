export default function Home() {
  return (
    <div className="w-full">

      {/* HERO SECTION */}
      <section
        className="h-[80vh] flex items-center justify-center bg-cover bg-center relative"
        style={{ backgroundImage: "url('/images/img1.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 text-center text-white px-4 animate__animated animate__fadeInDown">
          <h1 className="text-5xl md:text-6xl font-bold drop-shadow-lg">
            Capture. Create. Explore.
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto animate__animated animate__fadeInUp animate__delay-1s">
            Outdoor adventures, stunning photography, custom designs and curated motorcycle travel plans.
          </p>

          <div className="mt-6 flex justify-center gap-4 animate__animated animate__fadeInUp animate__delay-2s">
            <a
              href="/gallery"
              className="px-6 py-3 bg-green-600 hover:bg-green-700 rounded-md text-lg font-semibold transition-all"
            >
              View Gallery
            </a>
            <a
              href="/contact"
              className="px-6 py-3 border border-white hover:bg-white hover:text-black rounded-md text-lg font-semibold transition-all"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* MOTORCYCLE TRAVEL PLANS */}
       <section className="max-w-6xl mx-auto px-6 py-16">
  <h2 className="text-3xl font-bold text-center mb-10">Motorcycle Travel Plans</h2>

  <div className="grid md:grid-cols-3 gap-8">

    <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition">
      <img src="/assets/ride1.jpeg" alt="Ride Plan" className="w-full h-48 object-cover" />
      <div className="p-5">
        <h3 className="text-xl font-semibold mb-2">Weekend Adventure Ride</h3>
        <p className="text-gray-600 text-sm">
          A 1-day curated route with scenic viewpoints, food stops & photography spots.
        </p>
      </div>
    </div>

    <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition">
      <img src="/assets/ride2.jpeg" alt="Ride Plan" className="w-full h-48 object-cover" />
      <div className="p-5">
        <h3 className="text-xl font-semibold mb-2">2-Day Hills Trip</h3>
        <p className="text-gray-600 text-sm">
          Perfect for riders who want a refreshing 2-day journey with stay suggestions.
        </p>
      </div>
    </div>

    <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition">
      <img src="/assets/ride3.jpeg" alt="Ride Plan" className="w-full h-48 object-cover" />
      <div className="p-5">
        <h3 className="text-xl font-semibold mb-2">Custom Ride Plans</h3>
        <p className="text-gray-600 text-sm">
          Tell your destination — I create a unique plan with timings, food, fuel, and safety notes.
        </p>
      </div>
    </div>

  </div>
</section>


      {/* GALLERY PREVIEW */}
      <section className="bg-gray-100 py-16">
        <h2 className="text-3xl font-bold text-center mb-6 animate__animated animate__fadeInUp">
          Recent Shots
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto px-6">
          <img src="/images/img1.jpg" className="rounded-lg hover:scale-105 transition" />
          <img src="/images/img2.jpg" className="rounded-lg hover:scale-105 transition" />
          <img src="/images/img3.jpg" className="rounded-lg hover:scale-105 transition" />
          <img src="/images/img4.jpg" className="rounded-lg hover:scale-105 transition" />
        </div>

        <div className="text-center mt-6">
          <a
            href="/gallery"
            className="px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800"
          >
            View Full Gallery
          </a>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4 animate__animated animate__fadeInUp">
          Plan Your Next Adventure
        </h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto animate__animated animate__fadeInUp animate__delay-1s">
          From curated motorcycle routes to immersive outdoor experiences, we help you explore the world differently.
        </p>

        <a
          href="/contact"
          className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-md text-lg font-semibold"
        >
          Book Now
        </a>
      </section>
    </div>
  );
}