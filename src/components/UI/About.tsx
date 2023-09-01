import "../../styles/about.css";

import aboutImg from "../../images/about-us.jpg";

const chooseData = [
  {
    icon: "ri-wifi-line",
    title: "Reliable and accurate tracking",
    desc: "Ensure everything is tracked. We support cookie-less, digital fingerprinting and click-less tracking.",
  },
  {
    icon: "ri-team-line",
    title: "Full control and transparency",
    desc: "Know where all sales came from, what currency they were recorded in and who is responsible.",
  },
  {
    icon: "ri-customer-service-2-line",
    title: "Weekly and automated payments",
    desc: "Get paid every week, automatically on all approved transactions - no more waiting!",
  },
  {
    icon: "ri-customer-service-2-line",
    title: "Real-time reporting",
    desc: "Real-time, as-it-happens access to your data and transactions in order to optimise on-the-fly.",
  },
];

function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about_wrapper">
          <div className="about_content">
            <h6 className="subtitle">Why choose us</h6>
            <h2>Simple, feature rich affiliate software</h2>
            <p className="description about_content_desc">
              With automation and optimised design, we've taken out all the
              hassle and track in real-time - no waiting to see how your
              affiliate campaign is progressing. Log in at any time and view
              your sales and stats or browse our affiliate and advertiser
              marketplace.
            </p>

            <div className="choose_us-wrapper">
              {chooseData.map((item, index) => (
                <div className="choose_us-item" key={index}>
                  <span className="choose_us-icon">
                    <i className={item.icon}></i>
                  </span>
                  <div>
                    <h4 className="choose_us-title">{item.title}</h4>
                    <p className="description">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="about_img">
            <img src={aboutImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
