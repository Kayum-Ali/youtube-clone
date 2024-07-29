import "./Feed.css";
import thumbnail1 from "../../assets/thumbnail1.png";
import thumbnail2 from "../../assets/thumbnail2.png";
import thumbnail3 from "../../assets/thumbnail3.png";
import thumbnail4 from "../../assets/thumbnail4.png";
import thumbnail5 from "../../assets/thumbnail5.png";
import thumbnail6 from "../../assets/thumbnail6.png";
import thumbnail7 from "../../assets/thumbnail7.png";
import thumbnail8 from "../../assets/thumbnail8.png";
import { Link } from "react-router-dom";

const Feed = () => {
  return (
    <div className="feed">
      
        <Link to={`video/20/4521`} className="card">
                <img src={thumbnail1} alt="thumbnail1..." />
                <h2>
                Best Channer to learn coding that help you to be a web developer
                </h2>
                <h3>LanaDev</h3>
                <p>15k views &bull; 2 days ago</p>
        </Link>

        <div className="card">
                <img src={thumbnail2} alt="thumbnail2..." />
                <h2>
                Amazing Facts About Space
                </h2>
                <h3>Space Enthusiast</h3>
                <p>1.2M views &bull; 1 week ago</p>
        </div>

        <div className="card">
                <img src={thumbnail3} alt="thumbnail3..." />
                <h2>
                Top 10 Cooking Tips
                </h2>
                <h3>Chef s Delight</h3>
                <p>800k views &bull; 5 days ago</p>
        </div>

        <div className="card">
                <img src={thumbnail4} alt="thumbnail4..." />
                <h2>
                Learn Python in 10 Minutes
                </h2>
                <h3>Code Master</h3>
                <p>1.5M views &bull; 3 week ago</p>
        </div>

        <div className="card">
                <img src={thumbnail5} alt="thumbnail5..." />
                <h2>
                Travel Vlog: Japan Adventures
                </h2>
                <h3>Wanderlust</h3>
                <p>2.3M views &bull; 5 days ago</p>
        </div>

        <div className="card">
                <img src={thumbnail6} alt="thumbnail6..." />
                <h2>
                Latest Tech News
                </h2>
                <h3>Tech Today</h3>
                <p>900k views &bull; 1 days ago</p>
        </div>

        <div className="card">
                <img src={thumbnail7} alt="thumbnail7..." />
                <h2>
                Yoga for Beginners
                </h2>
                <h3>Health & Wellness</h3>
                <p>1.1M views &bull; 4 days ago</p>
        </div>

        <div className="card">
                <img src={thumbnail8} alt="thumbnail8..." />
                <h2>
                Unboxing New Gadgets
                </h2>
                <h3>Gadget Geek</h3>
                <p>500k views &bull; 2 week ago</p>
        </div>

        <div className="card">
                <img src={thumbnail1} alt="thumbnail1..." />
                <h2>
                Best Channer to learn coding that help you to be a web developer
                </h2>
                <h3>LanaDev</h3>
                <p>15k views &bull; 2 days ago</p>
        </div>

        <div className="card">
                <img src={thumbnail2} alt="thumbnail2..." />
                <h2>
                Amazing Facts About Space
                </h2>
                <h3>Space Enthusiast</h3>
                <p>1.2M views &bull; 1 week ago</p>
        </div>

        <div className="card">
                <img src={thumbnail3} alt="thumbnail3..." />
                <h2>
                Top 10 Cooking Tips
                </h2>
                <h3>Chef s Delight</h3>
                <p>800k views &bull; 5 days ago</p>
        </div>

        <div className="card">
                <img src={thumbnail4} alt="thumbnail4..." />
                <h2>
                Learn Python in 10 Minutes
                </h2>
                <h3>Code Master</h3>
                <p>1.5M views &bull; 3 week ago</p>
        </div>

        <div className="card">
                <img src={thumbnail5} alt="thumbnail5..." />
                <h2>
                Travel Vlog: Japan Adventures
                </h2>
                <h3>Wanderlust</h3>
                <p>2.3M views &bull; 5 days ago</p>
        </div>

        <div className="card">
                <img src={thumbnail6} alt="thumbnail6..." />
                <h2>
                Latest Tech News
                </h2>
                <h3>Tech Today</h3>
                <p>900k views &bull; 1 days ago</p>
        </div>

        <div className="card">
                <img src={thumbnail7} alt="thumbnail7..." />
                <h2>
                Yoga for Beginners
                </h2>
                <h3>Health & Wellness</h3>
                <p>1.1M views &bull; 4 days ago</p>
        </div>

        <div className="card">
                <img src={thumbnail8} alt="thumbnail8..." />
                <h2>
                Unboxing New Gadgets
                </h2>
                <h3>Gadget Geek</h3>
                <p>500k views &bull; 2 week ago</p>
        </div>
    </div>
  );
};

export default Feed;
