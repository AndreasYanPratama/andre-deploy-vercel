import Head from 'next/head';
import LandingPage2 from '@/containers/landingpage/libraries/landing1';
import UnderConstruction from '@/containers/landingpage/libraries/underconstruction';

export default function Home() {
    return(
        <>
        <Head>
            <title>Andre's Personal Website</title>
        </Head>
        <LandingPage2/>
        </>
    );
}
