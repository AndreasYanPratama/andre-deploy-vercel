import Link from 'next/link';

export default function footer(){
    return(
        <>
        <footer>
            <div className="rounded-social-buttons p-2">
                {/* <a className="social-button facebook" href="https://www.facebook.com/" target="_blank">
                    <i class="fab fa-facebook-f"></i>
                </a> */}
                {/* <a className="social-button twitter" href="https://www.twitter.com/" target="_blank">
                    <i class="fab fa-twitter"></i>
                </a> */}
                <a className="social-button linkedin" href="https://www.linkedin.com/" target="_blank">
                    <i class="fab fa-linkedin"></i>
                </a>
                {/* <a className="social-button youtube" href="https://www.youtube.com/" target="_blank">
                    <i class="fab fa-youtube"></i>
                </a> */}
                {/* <a className="social-button instagram" href="https://www.instagram.com/" target="_blank">
                    <i class="fab fa-instagram"></i>
                </a> */}
                <a className="social-button twitter" href="https://www.instagram.com/" target="_blank">
                    <i class="fab fa-telegram-plane"></i>
                </a>
            </div>
        </footer>
        </>
    );
}