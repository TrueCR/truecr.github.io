/*
  CPRG306 Assignment #3

  The footer layout at the end of each page within
  the website with all required information on the company.

  Input: None

  Processing: None

  Output: 
  - Renders a footer section with company name and contact information.

  Authors: Julien Lam, Elvis Chizoba, Tyler Gettle
  Version: 2023-12-04
*/

import React from 'react';

// Functional component for the footer section
const Footer = () => {
  return (
    // Footer JSX with styling classes
    <footer className='py-4 bg-gray-700 text-white w-full'>
        <div className='mx-4'>
            {/* Company name */}
            <div className='text-xl mb-4 font-semibold'>
                Internet Movies Rental Company
            </div>
            {/* Contact information heading */}
            <div className='text-lg mb-1 font-semibold'>
                Contact Information
            </div>
            {/* Contact information list */}
            <ul className='text-sm list-disc mx-10'>
                <li>Phone Number: (403) 555-5555</li>
                <li>Email: InternetMovies@gmail.com</li>
            </ul>
        </div>
    </footer>
  );
}

// Exporting the Footer component for external use
export default Footer;
