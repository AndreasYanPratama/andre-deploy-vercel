import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
// import logo from '@/public/img/dum-logo.png';
// import logo from '@/public/img/logo.png';

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
      {/* <nav className="fixed w-full z-10 flex flex-wrap items-center justify-between px-2 py-0.5 bg-white border border-blue-500"> */}
      <nav className="fixed w-full z-10 flex flex-wrap items-center justify-between px-2 py-0.5 bg-white border-b border-gray-200 backdrop-filter backdrop-blur-lg bg-opacity-40">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link href="/" className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase">
              <a>
              {/* <Image
                  src={logo}
                  width="110"
                  height="45"
                  alt="logo-fundraisey"
              /> */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://teamrrq.com/images/logo/logo-rrq-black.png" width="50" height="50" alt="" />
              </a>
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent border-gray-900 rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          <div
            className={
              `lg:flex flex-grow items-center${
                navbarOpen ? ' flex' : ' hidden'}`
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto flex justify-center items-center text-gray-900">
              <li className="nav-item">
                <Link href="#" className="ml-2">
                  <a className="px-3 py-2 flex items-center text-xl font-bold leading-snug hover:bg-gray-600 hover:text-white rounded">
                    Skills
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#" className="ml-2">
                  <a className="px-3 py-2 flex items-center text-xl font-bold leading-snug hover:bg-gray-600 hover:text-white rounded">
                    Project
                  </a>
                </Link>
              </li>
              {/* <li className="nav-item">
                  <Link href="/startup/login" className="ml-2">
                    <a className="px-3 py-4 flex items-center text-xs leading-snug hover:opacity-75">
                      <button type="button" className="bg-white border-2 font-bold border-blue-500 rounded px-5 py-2 hover:bg-gray-500 lg:hover:bg-gray-500 lg:hover:text-white lg:bg-white ">
                        Login as Startup
                      </button>
                    </a>
                  </Link>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
