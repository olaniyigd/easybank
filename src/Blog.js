import "./Blog.css";
import currency from "./image/currency.jpg";
import restaurant from "./image/restaurant.jpg";
import plane from "./image/plane.jpg";
import confetti from "./image/confetti.jpg";
export default function Blog (){
    return(
        <div className="blog">
            <p className="blog-title">Latest Article</p>
            <div className="blogs">
                <figure className="fig">
                    <img src={currency} alt="currency" className="currency" />
                    <div className="hed">
                    <p className="title">By Claire Robinson</p>
                    <p className="titles">Receive money in any currency with no fees</p>
                    <p className="texty">The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single..</p>
                    </div>    
                </figure>
                <figure className="fig">
                <img src={restaurant} alt="restaurant" className="restaurant" />
                <div className="hed">
                <p className="title">By Wilson Hutton</p>
                <p className="titles">Treat yourself without worrying about money</p>
                <p className="texty">Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you...</p>
                </div>
                </figure>
                <figure className="fig">
                <img src={plane} alt="plane" className="plane" />
                <div className="hed">
                <p className="title">By Wilson Hutton</p>
                <p className="titles">Take your Easybank card wherever you go</p>
                <p className="texty">We want you to enjoy your travels. This is why we don't change any fees on purchases while you're abroad. We'll even show you...</p>
                </div>
                </figure>
                <figure className="fig">
                <img src={confetti} alt="confetti" className="confetti" />
                <div className="hed">
                <p className="title">By Claire Robinson</p>
                <p className="titles">Our invite-only Beta accounts are now live!</p>
                <p className="texty">After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite through the site...</p>
                </div>
                </figure>
            </div>
        </div>
    )
}