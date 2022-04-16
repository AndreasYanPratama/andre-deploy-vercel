import { createContext, useContext, useState } from 'react';
// import NavbarComponent from '@/components/navbar'
import { NavbarBiasa, NavbarTransparantPutih} from '@/components/navbar'
import { FooterBesar, FooterKecil, FooterSosmed } from '@/components/footer'

const LandingLayoutContext = createContext();

export const useLandingLayoutContext = () => useContext(LandingLayoutContext);

export default function LandingLayout({ children }) {
    const [data, setData] = useState();
    return (
        <LandingLayoutContext.Provider value={{
            data,
            setData,
          }}
          >
            <div className="text-gray-700 bg-white">
              <NavbarBiasa />
              {children}
              <FooterKecil />
            </div>
        </LandingLayoutContext.Provider>
    );
}

export function LandingLayout1({ children }) {
  const [data, setData] = useState();
  return (
      <LandingLayoutContext.Provider value={{
          data,
          setData,
        }}
        >
          <div className="min-h-screen w-screen relative">
            <div className="flex bg-cover" style={{backgroundImage: `url('/img/img-contact-us.png')`}}>
                <div className="hidden lg:block lg:w-1/2 bg-cover md:block md:w-1/2 bg-gray-100 opacity-0"/>
                <NavbarTransparantPutih />
                { children }
            </div>
        </div>
      </LandingLayoutContext.Provider>
  );
}