import { useEffect, useState } from "react";
import "./Header.css";

const AppHeader = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let current = "home";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 80; // offset for navbar height
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          current = section.getAttribute("id");
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // set initial active link on page load

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id); // update active immediately
    }
  };

  const closeNavbar = () => {
    const navbarCollapse = document.getElementById("navbarContent");
    if (navbarCollapse.classList.contains("show")) {
      const bsCollapse = new window.bootstrap.Collapse(navbarCollapse, { toggle: false });
      bsCollapse.hide();
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-transparent position-fixed top-0 start-0 w-100 px-3 px-sm-5 py-3 mb-4">
      <div className="container-fluid">
        <span
          className="navbar-brand me-0 me-lg-3"
          onClick={() => { scrollToSection("home"); closeNavbar(); }}
          style={{ fontFamily: "'Press Start 2P', sans-serif", color: "#fea2c5", fontSize: "clamp(0.8rem, 3vw, 1rem)", cursor: "pointer" }}
        >
          Thaman
        </span>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            {["home", "about", "projects","contact"].map((section) => (
              <li className="nav-item mx-1 mx-lg-2" key={section}>
                <span
                  className={`nav-link ${activeSection === section ? "active" : ""}`}
                  onClick={() => { scrollToSection(section); closeNavbar(); }}
                  style={{ cursor: "pointer" }}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default AppHeader;
