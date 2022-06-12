import Intro from "@/components/intro/Intro";
import About from "@/components/about/About";
import ProductList from "@/components/productList/ProductList";
import Contact from "@/components/contact/Contact";
import Toggle from "@/components/toggle/Toggle";
import {LandingToggle} from "@/layouts/landingLayout/";

export default function landing(){
    return(
        <>
        <LandingToggle>
            <Intro/>
            <About/>
            <ProductList/>
            <Contact/>
        </LandingToggle>
        </>
    );
}