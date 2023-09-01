import "../../styles/affLinks.css";

const affLinksData = [
  {
    icon: "bi bi-bullseye",
    title: "Real time",
    desc: "Our tracking is fast, reliable and results are real time.",
  },
  {
    icon: "bi bi-safe",
    title: "Easy to use",
    desc: "Our world-leading platform makes getting started easy.",
  },
  {
    icon: "bi bi-credit-card",
    title: "Global brands",
    desc: "We've partnered with the world's leading brands.",
  },
  {
    icon: "bi bi-pc-display-horizontal",
    title: "Friendly support",
    desc: "We're always here to help with experienced account managers.",
  },
];

function AffLinks() {
  return (
    <section id="service">
      <div className="container">
        <div className="aff_item-wrapper">
          {affLinksData.map((item, index) => (
            <div className="aff-item" key={index}>
              <span className="aff_icon">
                <i className={item.icon}></i>
              </span>
              <h3 className="aff_title">{item.title}</h3>
              <p className="description">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AffLinks;
