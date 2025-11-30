import React from "react";

export default function Contact() {
  return (
    <div className="min-h-screen p-6 pt-20 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-green-600 mb-4">Contact Us</h1>

      <p className="text-gray-600 text-center max-w-2xl mb-12">
        Have a project in mind? Need photography, designs or travel planning?
        Get in touch — we’d love to help you!
      </p>

      <div className="flex flex-col md:flex-row gap-16 items-start justify-center w-full max-w-6xl">
        
        {/* LEFT SECTION – YOUR DETAILS */}
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-semibold text-green-600 mb-2">
            Horseman
          </h2>

          <p className="text-gray-700 mb-6">
            Capturing outdoor stories through photography, design, and adventure.
          </p>

          <div className="mb-6">
            <h3 className="font-semibold text-gray-800">WhatsApp</h3>
            <p className="text-green-600">+91 91501 24346</p>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold text-gray-800">Instagram</h3>
            <p className="text-green-600">@horse_man_of_411</p>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold text-gray-800">Email</h3>
            <p className="text-green-600">horsemener0411@gmail.com</p>
          </div>
        </div>

        {/* EMPTY RIGHT SECTION (FORM REMOVED) */}
        <div className="hidden md:block w-1/2"></div>
      </div>
    </div>
  );
}
