import { createContext, useContext, useState } from 'react';
// import NavbarComponent from '@/components/navbar'
import { NavbarBiasa, NavbarTransparantPutih} from '@/components/navbar';
import { FooterBesar, FooterKecil, FooterSosmed } from '@/components/footer';
import Toggle from '@/components/toggle/Toggle';
import { useToggleDispatch } from '@/redux/reducers/toggle/slice';
import { useEffect } from 'react';
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

export function LandingToggle({ children }) {
  const [data, setData] = useState();
  const {
    toggleDark,
    doDark,
  } = useToggleDispatch();

  const dm = (process.browser && localStorage.getItem('themeDark')) ? JSON.parse(localStorage.getItem('themeDark')) : false;
  const theme = dm.dark !== undefined ? dm.dark : toggleDark.dark;
  
  useEffect(() => {
    if (!toggleDark.dark) {
      doDark(theme);
    }
  }, [toggleDark.dark, doDark]);
  
  return (
      <LandingLayoutContext.Provider value={{
          data,
          setData,
        }}
        >
          <div>
            <Toggle 
              isDark={toggleDark.dark}
              closeDark={() => doDark(!toggleDark.dark)}
            />
            <div style={{backgroundColor: toggleDark.dark ? '#222' : 'white', color: toggleDark.dark && "white"  }}>
              { children }
            </div>
          </div>
      </LandingLayoutContext.Provider>
  );
}