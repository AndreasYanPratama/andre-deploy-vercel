import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css';
// import styles from './styles/Home.module.css'
// import LandingLayout from '@/layouts/landingLayout';
// import LandingLayout from '@/layouts/landingLayout';
// import LandingPage from '@/containers/landingpage/';
import LandingPage2 from '@/containers/landingpage/libraries/landing1';
import UnderConstruction from '@/containers/landingpage/libraries/underconstruction';

// export default function Home() {
//     return(
//         <>
//         <Head>
//             <title>Andre's Web</title>
//         </Head>
//         <LandingPage2/>
//         </>
//     );
// }

export default function UnderConstructionPage() {  
    return(
      <>
      <Head>
          <title>Andre's Web</title>
      </Head>
      <UnderConstruction />
      </>
    );
}