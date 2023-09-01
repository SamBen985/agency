import "../../styles/counter.css";
import tommyImg from "../../images/tommy.png";
import luluImg from "../../images/Lululemon.png";
import adairsImg from "../../images/adairs.png";
import underImg from "../../images/armor.png";
import amartImg from "../../images/amart.png";

const counterData = [
  {
    image: tommyImg,
  },
  {
    image: luluImg,
  },
  {
    image: adairsImg,
  },
  {
    image: underImg,
  },
  {
    image: amartImg,
  },
];

function AdCounter() {
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

export default AdCounter;
