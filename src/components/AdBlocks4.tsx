import { Link } from "react-router-dom";
import adImg2 from "../images/trade.png";
import "../styles/adblocks2.css";

function AdBlock4() {
  return (
    <section className="block_section">
      <div className="container4">
        <div className="ad-block_wrapper">
          <div className="ad-block_img">
            <img src={adImg2} alt="" />
          </div>
          <div className="ad-block_content">
            <div>
              <h2 className="highlight">Single platform, multiple solutions</h2>
            </div>

            <p className="">
              Setup and oversee more than one store or brand all from the one
              account for easy management and reporting. We support all 165
              currencies worldwide with real-time currency conversion and manage
              all of your affiliate commission payments.
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

export default AdBlock4;
