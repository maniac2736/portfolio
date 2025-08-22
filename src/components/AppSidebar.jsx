import { socialLinks } from "../data/FooterIcons";
import "./Footer.css"; // we will add responsive CSS here

const Sidebar = () => {
  return (
    <div className="social-sidebar">
      {socialLinks.map((link) => (
        <a
          key={link.id}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="footer-social-icon"
        >
          <i className={`${link.iconClass} fa-lg`}></i>
        </a>
      ))}
    </div>
  );
};

export default Sidebar;
