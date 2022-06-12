import { useEffect } from 'react';

// export const sessionDark = () => {
//     const dm = (process.browser && localStorage.getItem('themeDark')) ? JSON.parse(localStorage.getItem('themeDark')) : false;

//     const theme = dm.dark !== undefined ? dm.dark : false
//     // const colorTheme = theme === "dark" ? "light" : "dark";
    
//     useEffect(() => {
//         const root = window.document.documentElement;
    
//         // root.classList.remove(colorTheme);
//         root.classList.add(theme);
    
//         // if (typeof window !== "undefined") {
//         //   localStorage.setItem("themeDark", dm);
//         // }
//     }, [theme]);

//     return theme;
    
// }

export const sessionDark = () => {
    return (process.browser && localStorage.getItem('themeDark')) ? JSON.parse(localStorage.getItem('themeDark')) : false;
}