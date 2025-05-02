import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className="border-t border-amber-500 text-black dark:text-white py-8"
      id="contact"
    >
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4"> Conact us</h3>
          <p className="text-sm">123 main street</p>
          <p className="text-sm">City, State, Zıp</p>
          <p className="text-sm">Email: ahmet.aydin.aan28@gmail.com</p>
          <p className="text-sm">phone:(534 527 09 88)</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4"> Folow Us</h3>
          <div className="flex space-x-3">
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="w-6 h-6 hover:text-blue-500" />
            </Link>
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="w-6 h-6 hover:text-blue-500" />
            </Link>
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="w-6 h-6 hover:text-pink-500" />
            </Link>
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="w-6 h-6 hover:text-blue-900" />
            </Link>
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube className="w-6 h-6 hover:text-red-500" />
            </Link>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4"> Subscribe</h3>
          <p className="text-sm mb-4">
            Dont miss our latest updates on Youtube!
          </p>
          <Link
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Subscribe
          </Link>
        </div>
      </div>
      <div className="mt-8 border-t">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} AhmetAydın. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
