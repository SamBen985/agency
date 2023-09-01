import About from "./About";
import Counter from "./Counter";
import Hero from "./Hero";
import Newsletter from "./Newsletter";
import Services from "./Services";
import Team from "./Team";
import Testimonial from "./Testimonial";

function Home() {
  return (
    <>
      <Hero />
      <Counter />
      <Services />
      <About />
      <Team />
      <Testimonial />
      <Newsletter />
    </>
  );
}

export default Home;
