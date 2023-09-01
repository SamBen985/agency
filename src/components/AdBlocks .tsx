import { Link } from "react-router-dom";
import adImg from "../images/adimg.png";
import "../styles/adblocks.css";

function AdBlock() {
  return (
    <section className="block_section">
      <div className="container4">
        <div className="ad-block_wrapper">
          <div className="ad-block_content">
            <div>
              <h2 className="highlight">Simple setup and flexibility</h2>
            </div>

            <p className="">
              Our integration with all of the major shopping carts and tag
              management software means you can get started easily with
              flexible, resource friendly fully managed, self managed options.
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

export default AdBlock;
