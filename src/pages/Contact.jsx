export default function Contact() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 text-gray-800">

      {/* Title */}
      <h1 className="text-4xl font-bold text-center mb-10 text-green-600">
        Contact Us
      </h1>

      {/* Intro */}
      <p className="text-center text-lg text-gray-600 mb-12">
        Have a project in mind? Need photography, designs or travel planning?
        Get in touch — we’d love to help you!
      </p>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* Contact Details */}
        <div className="space-y-6">

          <div>
            <h2 className="text-2xl font-semibold text-green-600 mb-2">Horseman</h2>
            <p className="text-gray-700">
              Capturing outdoor stories through photography, design, and adventure.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-1">WhatsApp</h3>
            <a
              href="https://wa.me/919150124346"
              target="_blank"
              className="text-green-600 hover:underline"
            >
              +91 91501 24346
            </a>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-1">Instagram</h3>
            <a
              href="https://instagram.com/horse_man_of_411"
              target="_blank"
              className="text-green-600 hover:underline"
            >
              @horse_man_of_411
            </a>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-1">Email</h3>
            <a
              href="mailto:horsemenof411@gmail.com"
              className="text-green-600 hover:underline"
            >
              horsemenof411@gmail.com
            </a>
          </div>

        </div>

        {/* Contact Form */}
        <div>
          <form className="space-y-6 bg-white p-8 shadow-lg rounded-xl">

            <div>
              <label className="block mb-1 font-semibold">Name</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold">Email</label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500"
                placeholder="Your Email"
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold">Message</label>
              <textarea
                rows="5"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 resize-none focus:ring-2 focus:ring-green-500"
                placeholder="Your Message"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
            >
              Send Message
            </button>

          </form>
        </div>

      </div>
    </div>
  );
}
