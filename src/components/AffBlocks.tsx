import { Link } from "react-router-dom";
import pcImg from "../images/hero-img.png";
import "../styles/affblocks.css";

function AffBlock() {
  return (
    <section className="block_section">
      <div className="container4">
        <div className="block_wrapper">
          <div className="block_content">
            <div>
              <h2 className="highlight">Start earning easily</h2>
            </div>

            <p className="">
              Whether you have a website, blog, mobile app, Facebook Fan Page or
              utilise Tumblr, you can take advantage of the tools on offer to
              easily generate revenue through links, banners, click-less
              tracking, coupon codes and our comprehensive API.
            </p>
            <Link to="/register">
              <button className="btn btn-primary">Become an Affiliate</button>
            </Link>
          </div>

          <div className="block_img">
            <img src={pcImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AffBlock;
