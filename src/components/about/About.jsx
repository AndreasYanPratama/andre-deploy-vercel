// import "./about.css";
import Me from "@/public/me1.png";
import { useToggleDispatch } from '@/redux/reducers/toggle/slice';

const About = () => {
    const {
        toggleDark,
    } = useToggleDispatch();
    
    return(
        <div className="a">
            <div className="a-left">
                <div className="a-card bg" style={{backgroundColor: toggleDark.dark && "white"}}></div>
                <div className="a-card">
                    <img 
                        src="/me1.png"
                        alt="" 
                        className="a-img" 
                    />
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-sub">
                    Hey friends, you can call me Andre
                </p>
                <p className="a-desc">
                    I am a freelancer in web development, especially in frontend development. 
                    I am also familiar with developing websites with CMS Wordpress. 
                    Besides that I am also a tester and designer
                </p>
            </div>
        </div>
    )
}

export default About;