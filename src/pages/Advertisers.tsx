import "../styles/advertisers.css";
import adImg from "../images/last.png";
import AffLinks from "../components/UI/AffLinks";
import AffBlock2 from "../components/AffBlocks2";
import AffBlock3 from "../components/AffBlocks3";
import AffBlock4 from "../components/AffBlocks4";
import AdCounter from "../components/UI/AdCounter";
import AdBlock from "../components/AdBlocks ";
import AdBlock2 from "../components/AdBlocks2";
import AdBlock3 from "../components/AdBlocks3";
import AdBlock4 from "../components/AdBlocks4";
import AdBlock5 from "../components/AdBlocks5";

function Advertisers() {
  return (
    <>
      <div className="ad_top">
        <div className="container">
          <section className="ad_section">
            <div className="ad_wrapper">
              <div className="ad_content">
                <div>
                  <h2>Increase Traffic and Sales with Affiliates</h2>
                </div>
                <div className="ad_btns">
                  <button className="primary_btn">Become an Advertiser</button>
                </div>
              </div>
              <div className="ad_img">
                <img src={adImg} alt="" />
              </div>
            </div>
          </section>
        </div>
      </div>
      <AdCounter />
      <AffLinks />
      <AdBlock />
      <AdBlock2 />
      <AdBlock3 />
      <AdBlock4 />
      <AdBlock5 />
    </>
  );
}

export default Advertisers;
