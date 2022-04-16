/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import Link from 'next/link';
// import logo from '@/public/img/dum-logo.png';
// import logo from '@/public/img/logo-1.png';
// import goplay from '@/public/img/googleplay.png';
// import ig from '@/public/img/ig.png';
// import link from '@/public/img/linked.png';
// import fb from '@/public/img/ig.png';

export default function footer(){
  return(
    <footer className="bg-blue-900 text-gray-100">
      <div className="container flex flex-col flex-wrap py-10 px-4 md:px-6 md:items-center lg:items-start md:flex-row md:flex-nowrap">
        {/* Box 1 */}
        <div className="m-1 md:mx-0 md:text-left md:px-10">
          <div className="flex text-center items-center font-bold md:justify-start md:text-left">
            <img src="https://teamrrq.com/images/logo/logo-rrq-black.png" width="80" height="80" alt="responsive" />
            {/* <h2 className="ml-5">FundRaisey</h2> */}
          </div>
          <p className="my-6 text-sm text-justify md:mx-0 md:text-left">
            Jl. Gejayan Indah F59 Condongcatur, Sleman, DI Yogyakarta<br/>55283
          </p>
          <p className="my-6 text-sm text-justify md:mx-0 md:text-left">
            0274 5053 492<br/>
            hello@fundraisey.com
          </p>
        </div>

        {/* Box 2 */}
        <div className=" m-1 text-center md:text-left lg:mx-20 md:mt-2 md:mx-10 ">
          <div className="mb-10 flex flex-col md:flex-row md:justify-start">
            <h2 className="rounded px-2 py-2 font-bold tracking-widest text-center md:text-left hover:bg-gray-500 hover:text-white">
              <Link href="/howitworks">
                How it works
              </Link>
            </h2>
            <h2 className="rounded mx-8 px-2 py-2 font-bold tracking-widest text-center md:text-left hover:bg-gray-500 hover:text-white">
              <Link href="/contact-us" >
                Contact us
              </Link>
            </h2>
          </div>
          <p className="mt-12 text-center md:text-left">Download our mobile applications for lender</p>
          <div className="mt-3 mx-auto flex items-center justify-center font-bold md:justify-start md:mx-0" style={{width: '120px'}}>
            {/* <Link href="https://play.google.com">
              <a>
                <Image
                  src={goplay}
                  alt="google play"
                />
              </a>
            </Link> */}
          </div>
        </div>

        {/* Box 3 */}
        <div className="text-left md:text-left lg:mx-0 md:mt-2 md:mx-10">
          <Link href="/startup/login">
            <a>
              <button className="bg-transparant text-sm border-2 hidden sm:block font-bold border-gray-100 rounded px-2 py-2 hover:bg-gray-500 hover:text-white">
                Login as Startup
              </button>
            </a>
          </Link>
          <h5 className="mt-8 text-md font-bold ">
            Find us on social media
          </h5>
          <div className="flex justify-start mt-4 lg:mt-2">
            {/* <a href="http://www.instagram.com/FundRaisey">
              <Image
                src={ig}
                alt="Instagram"
              />
            </a> */}
            {/* <a className="ml-3" href="http://www.linkedin.com/FundRaisey">
              <Image
                  src={link}
                  alt="Linkedin"
                />
            </a> */}
            {/* <a className="ml-3" href="http://www.facebook.com/FundRaisey">
              <Image
                src={fb}
                alt="Facebook"
              />
            </a> */}
          </div>

        </div>

      </div>
    </footer>
  );
}