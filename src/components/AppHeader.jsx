import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const AppHeader = () => {
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();

  useEffect(() => {
    // If we're on the contact page, set active section
    if (location.pathname === "/contact") {
      setActiveSection("contact");
      return;
    }

    // Handle scroll-based active state only on home page
    if (location.pathname === "/") {
      const handleScroll = () => {
        const sections = document.querySelectorAll("section");
        let current = "home";

        sections.forEach((section) => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;
          if (window.scrollY >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute("id");
          }
        });

        setActiveSection(current);
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [location.pathname]);

  const isContactPage = location.pathname === "/contact";

  // Function to close the navbar collapse
  const closeNavbar = () => {
    const navbarCollapse = document.getElementById("navbarContent");
    if (navbarCollapse.classList.contains("show")) {
      const bsCollapse = new window.bootstrap.Collapse(navbarCollapse, {
        toggle: false
      });
      bsCollapse.hide();
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-transparent position-absolute top-0 start-0 w-100 px-3 px-sm-5 py-3">
      <div className="container-fluid">
        <Link
          className="navbar-brand me-0 me-lg-3"
          to="/"
          onClick={closeNavbar}
          style={{
            fontFamily: "'Press Start 2P', sans-serif",
            color: "#fea2c5",
            fontSize: "clamp(0.8rem, 3vw, 1rem)"
          }}
        >
          Thaman
        </Link>

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
            <li className="nav-item mx-1 mx-lg-2">
              <Link
                className={`nav-link ${activeSection === "home" && !isContactPage ? "active" : ""}`}
                to="/"
                onClick={closeNavbar}
              >
                Home
              </Link>
            </li>
            <li className="nav-item mx-1 mx-lg-2">
              <a
                className={`nav-link ${activeSection === "about" ? "active" : ""} ${
                  isContactPage ? "disabled" : ""
                }`}
                href={isContactPage ? "#!" : "#about"}
                onClick={closeNavbar}
              >
                About
              </a>
            </li>
            <li className="nav-item mx-1 mx-lg-2">
              <a
                className={`nav-link ${activeSection === "services" ? "active" : ""} ${
                  isContactPage ? "disabled" : ""
                }`}
                href={isContactPage ? "#!" : "#services"}
                onClick={closeNavbar}
              >
                Services
              </a>
            </li>
            <li className="nav-item mx-1 mx-lg-2">
              <Link
                className={`nav-link ${isContactPage ? "active" : ""}`}
                to="/contact"
                onClick={closeNavbar}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default AppHeader;