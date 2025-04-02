import AppHeader from "./AppHeader";
import Body from "./Body";
import Services from "./Services";
import AppFooter from "./AppFooter";
import Intro from "./Intro";

const Portfolio = () => {
  return (
    <div className="d-flex flex-column align-items-center bg-dark text-dark">
      <AppHeader />
      <section id="home">
        <Body />
      </section>
      <section id="about">
        <Intro />
      </section>
      <section id="services">
        <Services />
      </section>
      <AppFooter />
    </div>
  );
};

export default Portfolio;