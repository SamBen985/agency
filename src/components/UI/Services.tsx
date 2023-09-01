import "../../styles/services.css";

const serviceData = [
  {
    icon: "ri-apps-line",
    title: "Affiliates",
    desc: "If you're interested in promoting our online retailers take a look at some of the benefits of our network.",
  },
  {
    icon: "ri-code-s-slash-line",
    title: "Advertisers",
    desc: "Looking to get started in affiliate marketing or comparing your options? Take the quick tour of our product.",
  },
  {
    icon: "ri-landscape-line",
    title: "Agencies",
    desc: "From small to large agencies we can cater to them all and help you achieve growth for your clients.",
  },
];

function Services() {
  return (
    <section id="service">
      <div className="container">
        <div className="services_top-content">
          <h3 className="subtitle">Join our network</h3>
          <h5 className="desc">
            Our platform combined with fantastic support gives our partners
            everything they need to grow their online business using affiliate
            marketing in Australia. Brands and influencers can increase their
            revenue with our latest tracking technology and user-friendly
            network interface.
          </h5>
        </div>

        <div className="service_item-wrapper">
          {serviceData.map((item, index) => (
            <div className="services-item" key={index}>
              <span className="service_icon">
                <i className={item.icon}></i>
              </span>
              <h3 className="service_title">{item.title}</h3>
              <p className="description">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
