import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
// import logo from '@/public/img/logo.png';
// import logo_alt from '@/public/img/logo-1.png';

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
      <nav className="fixed w-full z-10 flex flex-wrap items-center justify-between px-2 py-0.5 bg-white border-b border-gray-200 lg:backdrop-filter lg:backdrop-blur-lg lg:bg-opacity-25">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <div className="lg:hidden">
              <Link href="/" className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase">
                <a>
                {/* <Image
                  src={logo}
                  width="100"
                  height="45"
                  alt="logo-fundraisey"
                /> */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://teamrrq.com/images/logo/logo-rrq-black.png" width="50" height="50" alt="" />
                </a>
              </Link>
            </div>
            <div className="block">
              <Link href="/" className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase">
                <a>
                {/* <Image
                  src={logo_alt}
                  width="100"
                  height="45"
                  alt="logo-fundraisey"
                /> */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://teamrrq.com/images/logo/logo-rrq-white.png" width="50" height="50" alt="" />
                </a>
              </Link>
            </div>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-0 border border-solid border-transparent border-gray-400 rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <svg
                className="fill-current h-3 w-3 bg-gray-500"
                viewBox="0 0 20 20"
                xmlns="http://wwww.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
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
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto flex justify-center items-center">
              <li className="nav-item">
                <Link href="/howitworks" className="ml-2">
                  <a className="px-3 py-2 flex items-center text-xs lg:font-bold leading-snug text-blue-500 lg:text-blue-500 hover:bg-gray-500 rounded-full sm:text-black">
                    How it works
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/contact-us" className="ml-2">
                  <a className="px-3 py-2 flex items-center text-xs lg:font-bold leading-snug text-blue-500 lg:text-blue-500 hover:bg-gray-500 rounded-full">
                    Contact us
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                  <Link href="/startup/login" className="ml-2">
                    <a className="px-3 py-2 flex items-center text-xs  leading-snug text-blue-500 hover:opacity-75">
                      <button type="button" className="bg-white border-2 font-bold border-blue-500 rounded px-5 py-2 hover:bg-gray-500 hover:text-white">
                        Login as Startup
                      </button>
                    </a>
                  </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
