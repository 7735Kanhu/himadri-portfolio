import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 py-4 text-center">
      <div className="container mx-auto">
        <p>&copy; All rights reserved.</p>
        <div className="flex justify-center mt-4">
          <a href="#" className="text-gray-500 hover:text-gray-700 mx-2">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-700 mx-2">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-700 mx-2">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;