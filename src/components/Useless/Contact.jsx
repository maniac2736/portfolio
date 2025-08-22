import AppHeader from "../AppHeader";
import "./Contact.css";

const ContactMe = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center bg-dark text-center p-4 vh-100">
      <AppHeader />
      <h2 className="text-white">To Contact Me</h2>
      <p className="text-white">
        Feel free to reach out to me via the platforms below!
      </p>
      <div className="d-flex gap-4 ">
        <a
          href="https://mail.google.com/mail/?view=cm&to=birakmzac@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i
            className="fas fa-envelope fa-2x social-icon"
            style={{ color: "#E4405F" }}
          ></i>
        </a>
        <a
          href="https://www.facebook.com/sugam.magat"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i
            className="fab fa-facebook fa-2x social-icon"
            style={{ color: "#E4405F" }}
          ></i>
        </a>
        <a
          href="https://x.com/anon11656230"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i
            className="fab fa-twitter fa-2x social-icon"
            style={{ color: "#E4405F" }}
          ></i>
        </a>
        <a
          href="https://www.linkedin.com/in/thaman-thapa-33386b334/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i
            className="fab fa-linkedin fa-2x social-icon"
            style={{ color: "#E4405F" }}
          ></i>
        </a>
        <a
          href="https://www.instagram.com/sugamagar11/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i
            className="fab fa-instagram fa-2x social-icon"
            style={{ color: "#E4405F" }}
          ></i>
        </a>
      </div>
    </div>
  );
};

export default ContactMe;
