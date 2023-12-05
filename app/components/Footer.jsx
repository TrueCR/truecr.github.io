import React from 'react'

const Footer = () => {
  return (
    <footer className='py-4 bg-gray-700 text-white w-full'>
        <div className='mx-4'>
            <div className='text-xl mb-4 font-semibold'>
                Internet Movies Rental Company
            </div>
            <div className='text-lg mb-1 font-semibold'>
                Contact Information
            </div>
            <ul className='text-sm list-disc mx-10'>
                <li>Phone Number: (403) 555-5555</li>
                <li>Email: InternetMovies@gmail.com</li>
            </ul>
        </div>
    </footer>
  )
}

export default Footer