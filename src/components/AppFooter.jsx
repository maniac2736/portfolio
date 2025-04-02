import { socialLinks } from "../data/FooterIcons";

const Footer = () => {
  return (
    <footer
      className="d-flex flex-column justify-content-center align-items-center text-white"
      style={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        background: "transparent",
        transition: "opacity 0.3s ease-in-out",
        opacity: 0.5,
      }}
      onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
      onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.5")}
    >
 <div className="d-flex gap-3" style={{ marginLeft: "20px" }}>
        {socialLinks.map((link) => (
          <a
            key={link.id}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "35px",
              height: "35px",
              backgroundColor: "#fea2c5",
              borderRadius: "50%",
              textDecoration: "none",
            }}
          >
            <i
              className={`${link.iconClass} fa-lg`}
              style={{ color: "white" }}
            ></i>
          </a>
        ))}
      </div>

      <p className="text-center mt-2 text-white" style={{ fontSize: "14px" }}>
        © All Rights Reserved. | 2025 <br/>
        Connecting You to the Best Services
      </p>

      
    </footer>
  );
};

export default Footer;
