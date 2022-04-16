import Image from 'next/image';
import Link from 'next/link';

export default function footer(){
  return(
    <footer className="bg-gray-200 text-center lg:text-left">
        <div className="text-gray-700 text-center p-4" style={{backgroundColor : `rgba(0, 0, 0, 0.2)`}}>
            © 2022 Copyright : Andreas Yan Pratama
            {/* <a className="text-gray-800" href="https://tailwind-elements.com/">Tailwind Elements</a> */}
        </div>
    </footer>
  );
}