import Head from 'next/head';
import {LandingToggle} from "@/layouts/landingLayout/";
import { products } from "@/libraries/repositories/data";
import { useToggleDispatch } from '@/redux/reducers/toggle/slice';

export default function detail() {
    const {
        toggleDark,
    } = useToggleDispatch();

    return(
        <>
        <Head>
            <title>Detail</title>
        </Head>
        <LandingToggle>
        <div className="dp">
            <div className="dp-texts">
                {/* <h2>Judul Portfolio</h2> */}
                <h2> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius elit mauris, id efficitur diam aliquet eget. </h2>
                <p>2022</p>
            </div>
            <div className="dp-desc">
                {/* <button className="back-button">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
                    </svg>
                </button> */}
                <h5 className="dp-roles">
                    <span>Frontend Developer</span>
                    <span>Tech Lead</span>
                    <span>Backend Developer</span>
                </h5>
                <div className="dp-par">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius elit mauris, id efficitur diam aliquet eget. 
                        Ut quis bibendum libero. Nulla iaculis tellus eget pellentesque congue. 
                        Sed pulvinar elit purus, posuere tempor dui sollicitudin ac. 
                        Sed dolor metus, rutrum sed nisl et, mollis condimentum est. 
                        Sed dolor leo, dapibus sed facilisis non, suscipit in tortor. 
                        Vivamus eros metus, facilisis id vestibulum et, dignissim in ex. 
                        Nulla posuere rutrum enim, non vulputate ligula semper eget. 
                        Ut tempor augue dolor, ut viverra nunc lobortis molestie. 
                        Phasellus posuere vestibulum justo, in lobortis eros vehicula sed. 
                        Morbi sodales, nunc quis blandit scelerisque, sem purus vestibulum augue, et vehicula diam est ut justo. 
                        Proin quis enim mauris. Donec lectus tortor, maximus consectetur quam non, bibendum gravida tellus. 
                        Ut ligula dolor, lobortis vulputate magna nec, lacinia lobortis ex. 
                        Quisque dictum diam eu mattis pharetra. 
                        Integer dolor dui, vulputate id sem a, imperdiet facilisis orci.  
                    </p>
                </div>
            </div>
            <div className="dp-container">
                {
                    // products.map((item) => (
                    //     <div className="dp-product" style={{ color: toggleDark.dark ? "#222" : "white", backgroundColor: toggleDark.dark ? "white" : "#222"}}>
                    //         <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"
                    //         alt="products/n1.jpg"/>
                    //         <div className="dp-des">
                    //             <span>pic 1</span>
                    //         </div>
                    //     </div>
                    // ))
                }
                <div className="dp-product" style={{ color: toggleDark.dark ? "#222" : "white", backgroundColor: toggleDark.dark ? "white" : "#222"}}>
                    <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"
                    alt="products/n1.jpg"/>
                    <div className="dp-img-des">
                        <span>pic 1</span>
                    </div>
                </div>
                <div className="dp-product" style={{ color: toggleDark.dark ? "#222" : "white", backgroundColor: toggleDark.dark ? "white" : "#222"}}>
                    <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"
                    alt="products/n1.jpg"/>
                    <div className="dp-img-des">
                        <span>pic 1</span>
                    </div>
                </div>
                <div className="dp-product" style={{ color: toggleDark.dark ? "#222" : "white", backgroundColor: toggleDark.dark ? "white" : "#222"}}>
                    <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"
                    alt="products/n1.jpg"/>
                    <div className="dp-img-des">
                        <span>pic 1</span>
                    </div>
                </div>
            </div>
        </div>
        </LandingToggle>
        </>
    );
}