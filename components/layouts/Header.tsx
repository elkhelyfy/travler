"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="mx-auto flex items-center justify-between p-3 lg:px-8 shadow-sm" aria-label="Global">
      <div className="flex lg:flex-1">
        <Link href="/" className="-m-1.5 p-1.5"> {/* Use Link for homepage */}
          <span className="sr-only">Your Company</span>
          <Image 
            src="/images/logo.svg" 
            width={40} 
            height={40} 
            alt='Your Company Logo' 
            priority // Prioritize loading for better user experience
          />
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="flex lg:hidden">
        <button 
          type="button" 
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          onClick={toggleMobileMenu} 
          aria-expanded={isMobileMenuOpen}
        >
          <span className="sr-only">
            {isMobileMenuOpen ? 'Close main menu' : 'Open main menu'} 
          </span>
          {/* You might want to consider a more accessible icon here, or at least add a descriptive 'aria-label' */}
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>

      {/* Navigation Links (hidden on mobile) */}
      <div className="hidden lg:flex lg:flex-1 lg:justify-end">
        <Link href="/api/register" className="text-sm font-semibold leading-6 text-gray-900">
          Sign In <span aria-hidden="true">&rarr;</span> 
        </Link>
      </div>

      {/* Mobile Menu (hidden by default) */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white p-4 shadow-lg">
          {/* Add your mobile menu links here */}
          <Link href="/api/register" className="block text-sm font-semibold leading-6 text-gray-900 mb-2">
            Sign In
          </Link>
          {/* ... other mobile menu links */}
        </div>
      )}
    </nav>
  );
};

export default Header;