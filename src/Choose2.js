import "./Choose2.css";
import online from "./image/online.svg";
import budgeting from "./image/budgeting.svg";
import onboarding from "./image/onboarding.svg";
import api from "./image/api.svg";

export default function Choosen2 () {
    return(
             <div className="choosen">
                <figure>
                    <img src={online} alt="online" className="online"/>
                    <p className="choosen-title">Online Banking</p>
                    <p className="choosen-text">Our modern web and mobile applications allow you to keep track of your finances wherever you are in this world.</p>
                </figure>
                <figure>
                    <img src={budgeting} alt="budgeting" className="budgeting"/>
                    <p className="choosen-title">Simple Budgeting</p>
                    <p className="choosen-text">See exactly where your money goes each month. Receive notification when you're close to hitting your limits.</p>
                </figure>
                <figure>
                    <img src={onboarding} alt="onboarding" className="onboarding"/>
                    <p className="choosen-title">Fast Onboarding</p>
                    <p className="choosen-text">We don't do branches. Open your account in minutes online and start taking control of your finances right away. </p>
                </figure>
                <figure>
                    <img src={api} alt="api" className="api"/>
                    <p className="choosen-title">Open API</p>
                    <p className="choosen-text">Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.</p>
                </figure>
            </div>
    )
}