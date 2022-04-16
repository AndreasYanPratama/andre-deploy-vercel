import Image from 'next/image';
import bg from '../../../../public/background-under-construction.png';

export default function LandingPage() {
    return(
        <>
        <div style={{marginLeft: '0px', marginTop: '0px', marginRight: '0px', marginBottom: '0px', background: '#eff2fb'}}>
            {/* <img src="https://www.rumahweb.com/journal/wp-content/uploads/2021/03/background-under-construction-download.png" alt="" /> */}
            <Image src={bg} alt="underconstruction"/>
        </div>
        </>
    );
}