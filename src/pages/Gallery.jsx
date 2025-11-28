export default function Gallery() {
  // Add your image URLs here
  const images = [
    "/images/img1.jpg",
    "/images/img2.jpg",
    "/images/img3.jpg",
    "/images/img4.jpg",
    "/images/img5.jpg",
    "/images/img6.jpg",
    "/images/img7.jpg",
    "/images/img8.jpg",
    "/images/img9.jpg",
    "/images/img10.jpg",
    "/images/img11.jpg",
    "/images/img12.jpg",
    "/images/img13.jpg",
    "/images/img14.jpg",
    "/images/img15.jpg",
    "/images/img16.jpg",


    
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">

      {/* Title */}
      <h1 className="text-4xl font-bold text-center text-green-600 mb-10">
        Gallery
      </h1>

      <p className="text-center text-gray-600 text-lg mb-16">
        A collection of adventure, travel and creative photography captured by Horseman.
      </p>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {images.map((src, index) => (
          <div key={index} className="overflow-hidden rounded-xl shadow-lg group">
            <img
              src={src}
              alt="Gallery"
              className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
            />
          </div>
        ))}
      </div>

    </div>
  );
}
