import { Link } from "react-router-dom";
import pcImg2 from "../images/trade.png";
import "../styles/affblocks2.css";

function AffBlock2() {
  return (
    <section className="block_section">
      <div className="container4">
        <div className="block_wrapper2">
          <div className="block2_img2">
            <img src={pcImg2} alt="" />
          </div>
          <div className="block_content2">
            <div>
              <h2 className="highlight">Fast global payments</h2>
            </div>

            <p className="">
              Get paid weekly for all of your approved commissions, paid out via
              PayPal, Bank Transfer, Cheque or PrePaid MasterCard. We are a
              global network so our payments are global with up to 150 payout
              currencies supported.
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

export default AffBlock2;
