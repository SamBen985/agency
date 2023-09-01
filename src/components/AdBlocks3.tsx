import { Link } from "react-router-dom";
import adImg from "../images/chart.png";
import "../styles/adblocks.css";

function AdBlock3() {
  return (
    <section className="block_section">
      <div className="container4">
        <div className="ad-block_wrapper">
          <div className="ad-block_content">
            <div>
              <h2 className="highlight">Industry leading platform</h2>
            </div>

            <p className="">
              The Commission Factory platform is not only visually stunning but
              feature rich and allows you to intelligently grow, manage and
              optimise your affiliate program. The scalability of it's features
              become more obvious and grow as you grow, reporting down to the
              exact impression, click or transaction.
            </p>
            <Link to="/register">
              <button className="btn btn-primary">Become an advetiser</button>
            </Link>
          </div>

          <div className="ad-block_img">
            <img src={adImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AdBlock3;
