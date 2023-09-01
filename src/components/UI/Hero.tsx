import "../../styles/hero.css";

import heroDarkImg from "../../images/heroImage.png";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero_section">
      <div className="container">
        <div className="hero_wrapper">
          <div className="hero_content">
            <div>
              <h2>Empowering Brands & Influencers</h2>

              <h2 className="highlight">to Grow Online</h2>
            </div>

            <p className="description">
              We connect affiliates to brands and brands to customers <br />
              All around the world
            </p>

            <div className="hero_btns">
              <Link to="/register">
                <button className="primary_btn">Become an Affiliate</button>
              </Link>
              <Link to="/register">
                <button className="secondary_btn">Become an Advertiser</button>
              </Link>
            </div>
          </div>

          <div className="hero_img">
            <img src={heroDarkImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
