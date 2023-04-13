import "./Footer.css";
import facebook from "./image/facebook.svg";
import youtube from "./image/youtube.svg";
import twitter from "./image/twitter.svg";
import pinterest from "./image/pinterest.svg";
import instagram from "./image/instagram.svg";
import easybank from "./image/easybank.jpg";
export default function Footer () {
    return(
        <div className="footer">
            <div className="footer-left">
                <div className="foot-left">
                    <img src={easybank} alt="easybank" className="easybank" />
                    <div className="social">
                    <img src={facebook} alt="facebook" className="facebook" />
                    <img src={youtube} alt="youtube" className="youtube" />
                    <img src={twitter} alt="twitter" className="twitter" />
                    <img src={pinterest} alt="pinterest" className="pinterest" />
                    <img src={instagram} alt="instagram" className="instagram" />
                    </div>

                </div>
                <div className="foot-center">
                    <ul className="center">
                        <a href="."><li>About Us</li></a>
                        <a href="."><li>Contact</li></a>
                        <a href="."><li>Blog</li></a>
                    </ul>
                </div>
                <div className="foot-right">
                    <ul className="center">
                        <a href="."><li>Careers</li></a>
                        <a href="."><li>Support</li></a>
                        <a href="."><li>Privacy Policy</li></a>
                    </ul>
                </div>

            </div>
            <div className="footer-right">
                <a id="sent" href=".">Request Invite</a>
                <p className="copy">&copy; Easybank. All Rights Reserved</p>
            </div>

        </div>
    )
}