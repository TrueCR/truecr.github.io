/*
  CPRG306 Assignment #3

  The navbar layout at the top of each page

  Input: None

  Processing:
  - Uses the useSession hook from next-auth to retrieve authentication status and user data.

  Output: 
  - Renders a navigation bar with links to movies, edit movies, login, register, and user-related actions.

  Authors: Julien Lam, Elvis Chizoba, Tyler Gettle
  Version: 2023-12-04
*/

'use client'
import React from "react";
import { PrismaClient } from '@prisma/client';
import Link from "next/link";
import { useSession } from 'next-auth/react'

// Creating a Prisma client instance
const prisma = new PrismaClient();

// Functional component for the Navbar
const Navbar = () => {
  // Using the useSession hook from next-auth to get authentication status and data
  const { status, data: session } = useSession();

  // JSX rendering for the Navbar component
  return (
    <nav className="flex bg-gray-800 p-4 text-white flex-row justify-between">
      {/* Navigation links for movies and edit movies, visible when authenticated */}
      <ul className="flex space-x-4">
        <li>
          {status === 'authenticated' && (
            <div>
              <Link href="/protected/movies" className="ml-3">Movies</Link>
            </div>
          )}
        </li>
        <li>
          {status === 'authenticated' && (
            <div>
              <Link href="/admin/edit" className="ml-3">Edit Movies</Link>
            </div>
          )}
        </li>
      </ul>
      {/* Authentication and user-related links */}
      <ul className="flex space-x-4">
        <li>
          {/* Display loading message while session status is being determined */}
          {status === 'loading' && <div>Loading ...</div>}
          {/* Display login link when unauthenticated */}
          {status === 'unauthenticated' && <Link href="/api/auth/signin">Login</Link>}
          {/* Display user email when authenticated */}
          {status === "authenticated" && <div>{session.user.email}</div>}
        </li>
        <li>
          {/* Display register link when unauthenticated */}
          {status === 'unauthenticated' && <Link href="/register">Register</Link>}
          {/* Display logout link when authenticated */}
          {status === 'authenticated' && (
            <div>
              <Link href="/api/auth/signout" className="ml-3">Logout</Link>
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
};

// Exporting the Navbar component for external use
export default Navbar;
