'use client'
import React from "react";
import { PrismaClient } from '@prisma/client';
import Link from "next/link";
import { useSession } from 'next-auth/react'

const prisma = new PrismaClient();

const Navbar = () => {
const { status, data: session} = useSession();

  return (
    <nav className="flex bg-gray-800 p-4 text-white flex-row justify-between">
      <ul className="flex space-x-4">
        <li>
          {status === 'authenticated' && <div>
            <Link href="/protected/movies" className="ml-3">Movies</Link>
            </div>}
        </li>
        <li>
          {status === 'authenticated' && <div>
            <Link href="/admin/edit" className="ml-3">Edit Movies</Link>
            </div>}
        </li>
      </ul>
      <ul className="flex space-x-4">
        <li>
            {status === 'loading' && <div>Loading ...</div>}
          {status === 'unauthenticated' && <Link href="/api/auth/signin">Login</Link>}
          {status === "authenticated" && <div>{session.user.email}</div>}
        </li>
        <li>
          {status === 'unauthenticated' && <Link href="/register">Register</Link>}
          {status === 'authenticated' && <div>
            <Link href="/api/auth/signout" className="ml-3">Logout</Link>
            </div>}
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;

