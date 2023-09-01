import { Link } from "react-router-dom";
import ad5Img from "../images/adlast.png";
import "../styles/adblocks5.css";

function AdBlock5() {
  return (
    <section className="block_section">
      <div className="container4">
        <div className="ad-block_wrapper">
          <div className="ad-block_content">
            <div>
              <h2 className="highlight">Always on recruitment</h2>
            </div>

            <p className="">
              Whilst we have over 1000 affiliates organically join Commission
              Factory per month, our experienced Affiliate Recruitment team are
              always on the prowl for high value affiliate partners to recruit
              to your program.
            </p>
            <Link to="/register">
              <button className="btn btn-primary">Become an advetiser</button>
            </Link>
          </div>

          <div className="ad-block5_img">
            <img src={ad5Img} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AdBlock5;
