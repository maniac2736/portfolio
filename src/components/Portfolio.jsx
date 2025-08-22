import AppHeader from "./AppHeader";
import Body from "./Body";
import AppFooter from "./AppFooter";
import AppSidebar from "./AppSidebar";
import Project from "./Projects";
import Intro from "./Intro";
import Contact from "./ContactMe";

const Portfolio = () => {
  return (
    <div className="d-flex flex-column align-items-center bg-dark text-dark">
      <AppHeader />
      <section id="home" className="mt-5">
        <Body />
      </section>
      <section id="about">
        <Intro />
      </section>
      <section id="projects">
        <Project />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <AppFooter />
      <AppSidebar />
    </div>
  );
};

export default Portfolio;
