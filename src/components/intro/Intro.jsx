import styles from "./intro.module.css";
import Me from "../../../public/me1.png";
import Image from 'next/image';
import { useToggleDispatch } from '@/redux/reducers/toggle/slice';
import { sessionDark } from '@/helpers/darkMode';

const Intro = () => {
    const {
        toggleDark,
    } = useToggleDispatch();

    // const youKnow = sessionDark();
    // console.log(youKnow.dark !== undefined ? youKnow.dark : false );
    // console.log("=> ",(window !== "undefined"))

    // console.log(sessionDark());

    return (
        // class i
        <div className="i"> 
            {/* i-left */}
            <div className="i-left">
                {/* .i-left-wrapper */}
                <div className="i-left-wrapper">
                    {/* <h2 className="text-4xl font-light">Hello, My name is</h2>
                    <h2 className="text-6xl font-black">Andreas Yan Pratama</h2>
                    <div className="truncate pb-14" style={{height: '800px'}}>
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Front End Developer</div>
                            <div className="i-title-item">Web Developer</div>
                            <div className="i-title-item">Tester</div>
                        </div>
                    </div> */}
                    {/* .i-intro */}
                    <h2 className="i-intro">Hello, My name is</h2>
                    {/* .i-name */}
                    <h2 className="i-name">Andreas Yan Pratama</h2>
                    {/* <div className="truncate pb-14" style={{height: '800px'}}> */}
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Front End Developer</div>
                            <div className="i-title-item">Web Developer</div>
                            <div className="i-title-item">Tester</div>
                        </div>
                    </div>
                    {/* i-desc */}
                    <p className="i-desc">
                        I design and develop services for customers of all sizes, 
                        specializing in creating a stylish and modern website front end 
                    </p>
                </div>
                {/* i-scroll */}
                <svg
                    width="75"
                    height="75"
                    viewBox="0 0 75 75"
                    fill="none"
                    stroke={toggleDark.dark ? "white" : "black"}
                    // stroke="black"
                    className="i-scroll"
                    // style={{bottom: '20px'}}
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <g id="scroll">
                        <path
                        id="Vector"
                        d="M40.5 15L34.5 9L28.5 15"
                        strokeWidth="3"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        />
                        <path
                        id="Vector_2"
                        d="M28.5 24L34.5 30L40.5 24"
                        strokeWidth="3"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        />
                        <g id="Group">
                        <path
                            id="Vector_3"
                            d="M9 37.5H60"
                            strokeWidth="3"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        </g>
                        <path
                        id="Vector_4"
                        d="M34.5 27V9"
                        strokeWidth="2.9895"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        />
                        <g id="Group_2">
                        <path
                            id="Vector_5"
                            d="M9 27C9 12.918 20.418 1.5 34.5 1.5C48.5859 1.5 60 12.918 60 27C60 29.8906 60 45.1094 60 48C60 62.082 48.5859 73.5 34.5 73.5C20.418 73.5 9 62.082 9 48C9 45.1094 9 29.8906 9 27Z"
                            strokeWidth="3"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        </g>
                    </g>
                </svg>
            </div>
            {/* CSS clip-path maker (Clippy) */}
            {/* .i-right */}
            <div className="i-right">
                {/* asas */}
                {/* i-bg */}
                <div className="i-bg"></div>
                {/* <div className="h-full w-full bg-gray-600 absolute" style={{top: '0', right: '0', clipPath: 'polygon(100% 0%, 100% 52%, 100% 100%, 25% 100%, 0% 50%, 25% 0%)'}}>as</div> */}
                {/* i-img */}
                <img src="/me1.png" className="i-img" alt="dev logo"/>
                {/* <img src="/me1.png" className="h-full w-full object-contain absolute" style={{bottom: '0'}} alt="dev logo"/> */}
            </div>
        </div>
    )
};

export default Intro;