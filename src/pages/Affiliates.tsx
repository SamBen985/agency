import "../styles/affiliates.css";
import affImg from "../images/aff.png";
import Counter from "../components/UI/Counter";
import AffLinks from "../components/UI/AffLinks";
import AffBlock from "../components/AffBlocks";
import AffBlock2 from "../components/AffBlocks2";
import AffBlock3 from "../components/AffBlocks3";
import AffBlock4 from "../components/AffBlocks4";

function Affiliates() {
  return (
    <>
      <div className="top">
        <div className="container">
          <section className="aff_section">
            <div className="aff_wrapper">
              <div className="aff_content">
                <div>
                  <h2>Monetise your site by generating sales and leads</h2>
                </div>
                <div className="aff_btns">
                  <button className="primary_btn">Become an Affiliate</button>
                </div>
              </div>
              <div className="aff2_img">
                <img src={affImg} alt="" />
              </div>
            </div>
          </section>
        </div>
      </div>
      <Counter />
      <AffLinks />
      <AffBlock />
      <AffBlock2 />
      <AffBlock3 />
      <AffBlock4 />
    </>
  );
}

export default Affiliates;
