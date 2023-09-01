import { Link } from "react-router-dom";
import adImg from "../images/ad2.png";
import "../styles/adblocks2.css";

function AdBlock2() {
  return (
    <section className="block_section">
      <div className="container4">
        <div className="ad-block_wrapper">
          <div className="ad-block_img">
            <img src={adImg} alt="" />
          </div>
          <div className="ad-block_content">
            <div>
              <h2 className="highlight">Transparency and control</h2>
            </div>

            <p className="">
              The Commission Factory platform gives you 100% control and
              transparency over your performance marketing campaigns. Establish
              relationships and collaborate with affiliates or added services
              all maintaining and protecting your brand integrity.
            </p>
            <Link to="/register">
              <button className="btn btn-primary">Become an advetiser</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AdBlock2;
