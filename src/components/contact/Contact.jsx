// import "./contact.css";
// import Phone from "../../img/phone.png";
// import Email from "/phone.png";
// import Address from "/address.png";
import { useContext, useRef, useState } from "react";
import emailjs from '@emailjs/browser';
// import { ThemeContext } from "../../context";
import { useToggleDispatch } from '@/redux/reducers/toggle/slice';

const Contact = () => {
    const formRef = useRef();
    const [done, setDone] = useState(false);
    // const theme = useContext(ThemeContext);
    // const darkMode = theme.state.darkMode;
    const {
        toggleDark,
    } = useToggleDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            'service_h6ehkwm', 
            'template_6pssv4n', 
            formRef.current, 
            'user_JVfMU3DttFCnMcBWwYTrS'
        )
        .then((result) => {
            console.log(result.text);
            setDone(true)
        }, (error) => {
            console.log(error.text);
        });
    }

    return(
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Let's discuss your project</h1>
                    <div className="c-info">
                        <a style={{color: toggleDark.dark && "white"}} href="https://t.me/andreasyanpratama" target="_blank" rel="noreferrer">
                            <div className="c-info-item">
                                <svg className="c-icon" width="30px" height="30px" viewBox="0 0 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid">
                                    <g>
                                        <path d="M128,0 C57.307,0 0,57.307 0,128 L0,128 C0,198.693 57.307,256 128,256 L128,256 C198.693,256 256,198.693 256,128 L256,128 C256,57.307 198.693,0 128,0 L128,0 Z" fill="#40B3E0"></path>
                                        <path d="M190.2826,73.6308 L167.4206,188.8978 C167.4206,188.8978 164.2236,196.8918 155.4306,193.0548 L102.6726,152.6068 L83.4886,143.3348 L51.1946,132.4628 C51.1946,132.4628 46.2386,130.7048 45.7586,126.8678 C45.2796,123.0308 51.3546,120.9528 51.3546,120.9528 L179.7306,70.5928 C179.7306,70.5928 190.2826,65.9568 190.2826,73.6308" fill="#FFFFFF"></path>
                                        <path d="M98.6178,187.6035 C98.6178,187.6035 97.0778,187.4595 95.1588,181.3835 C93.2408,175.3085 83.4888,143.3345 83.4888,143.3345 L161.0258,94.0945 C161.0258,94.0945 165.5028,91.3765 165.3428,94.0945 C165.3428,94.0945 166.1418,94.5735 163.7438,96.8115 C161.3458,99.0505 102.8328,151.6475 102.8328,151.6475" fill="#D2E5F1"></path>
                                        <path d="M122.9015,168.1154 L102.0335,187.1414 C102.0335,187.1414 100.4025,188.3794 98.6175,187.6034 L102.6135,152.2624" fill="#B5CFE4"></path>
                                    </g>
                                </svg>
                                andreasyanpratama
                            </div>
                        </a>
                        <a style={{color: toggleDark.dark && "white"}} href="https://id.linkedin.com/in/andreas-yan-pratama-2a78951a5" target="_blank" rel="noreferrer">
                            <div className="c-info-item">
                                <svg className="c-icon" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                    viewBox="0 0 291.319 291.319" style={{backgroundColor: "0 0 291.319 291.319"}} xmlSpace="preserve">
                                    <g>
                                        <path fill="#0E76A8" d="M145.659,0c80.45,0,145.66,65.219,145.66,145.66s-65.21,145.659-145.66,145.659S0,226.1,0,145.66
                                            S65.21,0,145.659,0z"/>
                                        <path fill="#FFFFFF" d="M82.079,200.136h27.275v-90.91H82.079V200.136z M188.338,106.077
                                            c-13.237,0-25.081,4.834-33.483,15.504v-12.654H127.48v91.21h27.375v-49.324c0-10.424,9.55-20.593,21.512-20.593
                                            s14.912,10.169,14.912,20.338v49.57h27.275v-51.6C218.553,112.686,201.584,106.077,188.338,106.077z M95.589,100.141
                                            c7.538,0,13.656-6.118,13.656-13.656S103.127,72.83,95.589,72.83s-13.656,6.118-13.656,13.656S88.051,100.141,95.589,100.141z"/>
                                    </g>
                                </svg>
                                Andreas Yan Pratama
                            </div>
                        </a>
                        <div className="c-info-item">
                            <img className="c-icon" src="/email.png" alt="" />
                            andreasyanpratama@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img className="c-icon" src="/address.png" alt="" />
                            Manado, Indonesia
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>What’s your story?</b> Get in touch. Always available for
                        freelancing if the right project comes along. me.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input style={{backgroundColor: toggleDark.dark && "#333", color: toggleDark.dark && "white", borderBottom: toggleDark.dark && "1px solid white"}} type="text" placeholder="Name" name="user_name" />
                        <input style={{backgroundColor: toggleDark.dark && "#333", color: toggleDark.dark && "white", borderBottom: toggleDark.dark && "1px solid white"}} type="text" placeholder="Subject" name="user_subject" />
                        <input style={{backgroundColor: toggleDark.dark && "#333", color: toggleDark.dark && "white", borderBottom: toggleDark.dark && "1px solid white"}} type="text" placeholder="Email" name="user_email" />
                        <textarea style={{backgroundColor: toggleDark.dark && "#333", color: toggleDark.dark && "white", borderBottom: toggleDark.dark && "1px solid white"}} rows="5" placeholder="Message" name="message" />
                        <button>Submit</button><br/>
                        {done && "Thank you for sending your message..."}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;