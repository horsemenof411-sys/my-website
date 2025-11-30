function Contact() {
  return (
    <div className="space-y-6"> 
      <h2 className="text-2xl font-semibold text-green-600">Horseman</h2>
      <p className="text-gray-600">
        Capturing outdoor stories through photography, design, and adventure.
      </p>

      <div>
        <h3 className="text-lg font-medium text-gray-800">WhatsApp</h3>
        <a
          href="https://wa.me/919150124346"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-600 hover:underline"
        >
          +91 91501 24346
        </a>
      </div>

      <div>
        <h3 className="text-lg font-medium text-gray-800">Instagram</h3>
        <a
          href="https://instagram.com/horse_man_of_411"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-600 hover:underline"
        >
          @horse_man_of_411
        </a>
      </div>

      <div>
        <h3 className="text-lg font-medium text-gray-800">Email</h3>
        <a
          href="mailto:horsemenof411@gmail.com"
          className="text-green-600 hover:underline"
        >
          horsemenof411@gmail.com
        </a>
      </div>
    </div>
  );
}

export default Contact;
