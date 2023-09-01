import "../../styles/counter.css";
import asicsImg from "../../images/Asics-Logo.png";
import luluImg from "../../images/Lululemon.png";
import catchImg from "../../images/catch.jpg";
import airImg from "../../images/air-new-zealand-1-logo-black-and-white.png";
import platImg from "../../images/platypus-vector-logo.png";

const counterData = [
  {
    image: asicsImg,
  },
  {
    image: luluImg,
  },
  {
    image: catchImg,
  },
  {
    image: airImg,
  },
  {
    image: platImg,
  },
];

function Counter() {
  return (
    <section className="counter">
      <div className="container2">
        <div id="title">
          <h4>We've partnered with some of the world's largest brands</h4>
        </div>
        <div className="container_wrapper">
          {counterData.map((item, index) => (
            <div className="counter_item" key={index}>
              <img src={item.image} alt="" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Counter;
