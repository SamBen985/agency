import { Link } from "react-router-dom";
import crmImg from "../images/last.png";
import "../styles/affblocks4.css";

function AffBlock4() {
  return (
    <section className="block_section">
      <div className="container4">
        <div className="block_wrapper4">
          <div className="block_img4">
            <img src={crmImg} alt="" />
          </div>
          <div className="block_content4">
            <div>
              <h2 className="highlight">Track your performance</h2>
            </div>

            <p className="">
              With our easy to use interface and real time tracking and
              reporting you can get instant, in-depth information about every
              sale and what customers are buying.
            </p>
            <Link to="/register">
              <button className="btn btn-primary">Become an Affiliate</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AffBlock4;
