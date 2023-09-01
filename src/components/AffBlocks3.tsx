import { Link } from "react-router-dom";
import brandsImg from "../images/brands.png";
import "../styles/affblocks3.css";

function AffBlock3() {
  return (
    <section className="block_section">
      <div className="container4">
        <div className="block_wrapper3">
          <div className="block_content3">
            <div>
              <h2 className="highlight">Big names, one platform</h2>
            </div>

            <p className="">
              With over 600 brands to choose from on our network you're sure to
              find a store or big name you know and love. From small brands to
              large global names there is plenty of choice.
            </p>
            <Link to="/register">
              <button className="btn btn-primary">Become an Affiliate</button>
            </Link>
          </div>

          <div className="block_img3">
            <img src={brandsImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AffBlock3;
