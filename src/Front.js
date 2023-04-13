import "./Front.css";
import phone from "./image/phone.png"
export default function Front () {
    return(
        <div className="front">
        <div className="desktop-front">
            <div className="desktop-front-left">
                <p className="front-head">Next generation digital banking</p>
                <p className="front-text">Take your financial life online. Your Easybank account will be a one-step-shop for spending, saving, budgeting, investing, and much more.</p>
                <a id="reqs" href=".">Request Invite</a>
            </div>
            <div className="desktop-front-right">
                <div className="front-image">
                    <img src={phone} alt="phone" />
                </div>
            </div>
        </div>
        <div className="mobile-front">
            <div className="mobile-front-left">
                <div className="mobile-front-image">
                <img src={phone} alt="phone" className="mobile-phone" />
                </div>
            </div>
            <div className="mobile-front-right">
                <p className="mobile-front-head">Next generation digital banking</p>
                <p className="mobile-front-text">Take your financial life online. Your Easybank account will be a one-step-shop for spending, saving, budgeting, investing, and much more.</p>
                <a id="mobilereqs" href=".">Request Invite</a>
            </div>
        </div>
        </div>
        
    )
}