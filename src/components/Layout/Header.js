import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-orange-500 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        
        {/* Logo */}
        <div className="text-2xl font-bold">
          Niro<span className="text-yellow-300">Weather</span>
        </div>

        {/* Hamburger Button (only show on mobile) */}
        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Navigation */}
        <nav className={`flex flex-col md:flex-row md:items-center md:space-x-6 absolute md:static bg-orange-500 w-full left-0 md:w-auto transition-all duration-300 ease-in-out ${isOpen ? 'top-16' : 'top-[-300px]'}`}>
          <a href="/" className="block p-4 hover:bg-orange-600 transition">Home</a>
          <a href="/menu" className="block p-4 hover:bg-orange-600 transition">Menu</a>
          <a href="/about" className="block p-4 hover:bg-orange-600 transition">About</a>
          <a href="/contact" className="block p-4 hover:bg-orange-600 transition">Contact</a>
        </nav>

      </div>
    </header>
  );
};

export default Header;
