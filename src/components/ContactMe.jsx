import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState(""); // "", "sending", "success", "error"

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://formspree.io/f/mrblnqdg", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        e.target.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }

    // Auto-hide message after 5 seconds
    setTimeout(() => setStatus(""), 2000);
  };

  return (
    <section id="contact" className="text-light mb-5">
      <div className="container">
        <h3
          className="mb-5 text-center"
          style={{
            fontFamily: "'Press Start 2P', sans-serif",
            color: "#fea2c5",
            fontSize: "clamp(1rem, 4vw, 1.5rem)",
          }}
        >
          Contact
        </h3>

        <div className="row g-4">
          {/* Left: Contact Form */}
          <div className="col-lg-6">
            <div
              className="card border-0 shadow-lg h-100"
              style={{ background: "#343a40" }}
            >
              <div className="card-body p-4">
                <h4 className="fw-bold mb-4 text-center text-white">
                  Send a Message
                </h4>

                {/* Notification Alert */}
                {status === "success" && (
                  <div
                    className="alert alert-success text-center fw-semibold py-2"
                    role="alert"
                  >
                    <i className="fas fa-check-circle me-2"></i>
                    Your message has been sent successfully!
                  </div>
                )}
                {status === "error" && (
                  <div
                    className="alert alert-danger text-center fw-semibold py-2"
                    role="alert"
                  >
                    <i className="fas fa-times-circle me-2"></i>
                    Oops! Something went wrong. Please try again.
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label text-white">Name</label>
                      <input
                        type="text"
                        className="form-control text-white"
                        style={{ backgroundColor: "#3B4758" }}
                        name="name"
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label text-white">Email</label>
                      <input
                        type="email"
                        className="form-control text-white"
                        style={{ backgroundColor: "#3B4758" }}
                        name="email"
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="form-label text-white">Subject</label>
                    <input
                      type="text"
                      className="form-control text-white"
                      style={{ backgroundColor: "#3B4758" }}
                      name="subject"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label text-white">Message</label>
                    <textarea
                      className="form-control text-white"
                      style={{ backgroundColor: "#3B4758" }}
                      name="message"
                      rows="4"
                      required
                    ></textarea>
                  </div>

                  <div className="d-flex justify-content-center">
                    <button
                      type="submit"
                      className="btn d-flex align-items-center justify-content-center text-white w-100 w-md-50 fw-semibold"
                      style={{
                        borderColor: "#fea2c5",
                        color: "#fea2c5",
                        borderWidth: "3px",
                        borderRadius: "12px",
                        position: "relative",
                        overflow: "hidden",
                        transition: "all 0.3s ease",
                        padding: "0.5rem 1rem",
                        fontSize: "0.9rem",
                        maxWidth: "12rem",
                      }}
                      disabled={status === "sending"}
                    >
                      <span className="btn-text">
                        {status === "sending" ? "Sending..." : "Send Message"}
                      </span>
                      <i className="fas fa-paper-plane btn-icon"></i>

                      <style>
                        {`
                        .btn-text, .btn-icon {
                          transition: all 0.4s ease;
                        }
                        .btn-icon {
                          position: absolute;
                          opacity: 0;
                          transform: translateY(-100%);
                          color: white;
                        }
                        .btn:hover:not(:disabled) {
                          background-color: #fea2c5;
                          border-color: #fea2c5;
                          color: white;
                        }
                        .btn:hover:not(:disabled) .btn-text {
                          opacity: 0;
                          transform: translateY(100%);
                        }
                        .btn:hover:not(:disabled) .btn-icon {
                          opacity: 1;
                          transform: translateY(0);
                        }
                        `}
                      </style>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Right: Contact Info */}
          <div className="col-lg-6">
            <h4 className="fw-bold mb-4 text-center text-lg-start">
              Get in Touch
            </h4>

            <div className="card bg-info border-0 shadow-sm p-3 mb-3">
              <small>
                <i className="fa fa-exclamation-triangle fa-lg me-2"></i>
                You have a project in mind or just want to say hello? Feel free
                to reach out!
              </small>
            </div>

            <div className="mb-3 d-flex align-items-start">
              <i className="fas fa-envelope fa-lg me-3 text-warning mt-1"></i>
              <div>
                <h6 className="mb-0">Email</h6>
                <small>birakmzac@gmail.com</small>
              </div>
            </div>

            <div className="mb-3 d-flex align-items-start">
              <i className="fas fa-map-marker-alt fa-lg me-3 text-warning mt-1"></i>
              <div>
                <h6 className="mb-0">Location</h6>
                <small>Pokhara, Nepal</small>
              </div>
            </div>

            <div className="mb-3 d-flex align-items-start">
              <i className="fas fa-phone fa-lg me-3 text-warning mt-1"></i>
              <div>
                <h6 className="mb-0">Phone</h6>
                <small>+977 9816669757</small>
              </div>
            </div>

            {/* Connect With Me */}
            <h6 className="text-white mb-3 mt-4 text-center text-lg-start">
              Connect With Me
            </h6>
            <div className="d-flex flex-wrap gap-3 mt-2 justify-content-center justify-content-lg-start">
              <a
                href="https://mail.google.com/mail/?view=cm&to=birakmzac@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className="fas fa-envelope fa-2x social-icon"
                  style={{ color: "#fea2c5" }}
                ></i>
              </a>
              <a
                href="https://www.facebook.com/sugam.magat"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className="fab fa-facebook fa-2x social-icon"
                  style={{ color: "#fea2c5" }}
                ></i>
              </a>
              <a
                href="https://x.com/anon11656230"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className="fab fa-twitter fa-2x social-icon"
                  style={{ color: "#fea2c5" }}
                ></i>
              </a>
              <a
                href="https://github.com/maniac2736"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className="fab fa-github fa-2x social-icon"
                  style={{ color: "#fea2c5" }}
                ></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
