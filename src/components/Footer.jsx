import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white max-w-full">

      {/* ===== TOP FOOTER ===== */}
      <div className="max-w-7xl mx-auto px-5 py-10 flex flex-col items-center">
        <h3 className="text-2xl font-bold mb-3">NIKE STORE</h3>

        <p className="text-gray-300 mb-5 max-w-xl">
        Discover the latest Nike shoes designed for speed, comfort, and performance. From running to street style, Nike delivers innovation in every step.Nike shoes are built for athletes and everyday movers. Experience lightweight comfort, bold design, and unstoppable performance.
        </p>

        {/* Social Icons */}
        <ul className="flex gap-4">
          <li>
            <a
              href="https://www.instagram.com/mu.zamil5040"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500"
            >
              <i className="fab fa-instagram text-xl"></i>
            </a>
          </li>

          <li>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
            >
              <i className="fab fa-facebook-f text-xl"></i>
            </a>
          </li>

          <li>
            <a
              href="https://wa.me/qr/ESYSWUOH5CMHF1"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500"
            >
              <i className="fab fa-whatsapp text-xl"></i>
            </a>
          </li>

          <li>
            <a
              href="https://www.tiktok.com/@muzamil25252"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <i className="fab fa-tiktok text-xl"></i>
            </a>
          </li>

          <li>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              <i className="fab fa-twitter text-xl"></i>
            </a>
          </li>
        </ul>
      </div>

      {/* ===== BOTTOM FOOTER (Navbar Style) ===== */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-5 py-4 flex flex-col md:flex-row items-center justify-between gap-3">

          <p className=" text-sm text-white">
            © 2025{" "}
            <a
              href="https://www.instagram.com/mu.zamil5040"
              className="hover:text-pink-500 text-white"
            >
              MUZAMIL HUSSAIN
            </a>
          </p>

          <ul className="flex gap-5 text-white text-sm">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">About</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
            <li><a href="#" className="hover:text-white">Blog</a></li>
          </ul>

        </div>
      </div>

    </footer>
  );
}

export default Footer;