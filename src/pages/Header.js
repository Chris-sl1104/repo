import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from "../images/IFFA_logo_2024_Logo Gold (1).png";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="relative flex flex-col w-full bg-black px-8 py-4 text-white">
      <div className="flex items-center justify-between w-full pb-4">
        <img src={Logo} alt='IFFA-logo' className='h-24 w-32' />

        <button
          className="sm:hidden text-dark-gold"
          onClick={toggleMenu}
        >
          {isMenuOpen ? 'Close' : 'Menu'}
        </button>

        <div className="hidden sm:flex space-x-7 ml-auto text-dark-gold text-lg font-sans pt-3">
          <Link to="/" className="hover:text-gray-200">Home</Link>
          <Link to="/about" className="hover:text-gray-200">About</Link>
          <Link to="/" className="hover:text-gray-200">Watch List</Link>
          <Link to="/submission" className="hover:text-gray-200">Film List</Link>
          <Link to="/sponsor-us" className="hover:text-gray-200">Sponsor Us</Link>
          <Link to="/contact" className="hover:text-gray-200">Contact Us</Link>
          <Link to="https://www.ticketmaster.com.au/international-film-festival-tickets/artist/1347704" target='_blank' className="hover:text-gray-200">Get Tickets</Link>
        </div>
      </div>

      <div className={`sm:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="flex flex-col items-start space-y-4 text-dark-gold text-lg font-sans ">
          <Link to="/" className="hover:text-gray-200">Home</Link>
          <Link to="/about" className="hover:text-gray-200">About</Link>
          <Link to="/" className="hover:text-gray-200">Watch List</Link>
          <Link to="/submission" className="hover:text-gray-200">Film List</Link>
          <Link to="/sponsor-us" className="hover:text-gray-200">Sponsor Us</Link>
          <Link to="/contact" className="hover:text-gray-200">Contact Us</Link>
          <Link to="https://www.ticketmaster.com.au/international-film-festival-tickets/artist/1347704" target='_blank' className="hover:text-gray-200">Get Tickets</Link>
        </div>
      </div>

      <hr className='hr-custom mt-4 sm:mt-8'></hr>

      <div className='flex flex-col items-center w-full pt-4'>
        <h2 className="text-dark-gold text-xl sm:text-2xl md:text-4xl font-sans text-center name">
          International Film Festival of Australia
        </h2>
        <h3 className="text-dark-gold text-lg sm:text-xl md:text-3xl font-sans  text-center mt-2">
          Awards Night 2024
        </h3>
      </div>
    </header>
  );
}

export default Header;
