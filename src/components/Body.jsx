import profileImage from "../assets/images/man3.png";

const Portfolio = () => {
  return (
    <div className="container-fluid mt-5">
      <div className="d-flex align-items-center justify-content-center min-vh-90 my-5">
        <div className="container my-5">
          <div className="row align-items-center my-5  flex-md-row flex-column-reverse">
            {/* Text Content - order changes on mobile */}
            <div className="col-md-5 text-md-start text-center mt-md-0 mt-4">
              <h1 className="text-white">Hi There!</h1>
              <h1 className="fw-bold text-white">I am a Developer</h1>
              <p className="text-white">
                Turning ideas into reality with code.
              </p>
              <div className="mt-4 d-flex justify-content-md-start justify-content-center">
                <a
                  href="https://discord.com/users/670520444075376672"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn d-flex align-items-center text-white"
                  style={{
                    borderColor: "#fea2c5",
                    color: "#fea2c5",
                    borderWidth: "3px",
                    borderRadius: "12px",
                    transition: "all 0.3s ease",
                    maxWidth: "9.8rem",
                  }}
                >
                  <span>Contact Me</span>
                  <i className="fab fa-discord fa-lg ms-2 text-white"></i>
                </a>
              </div>

              <div className="mt-4">
                <div className="d-md-flex justify-content-between fw-bold text-white text-center text-md-start">
                  <div className="mb-2 mb-md-0">
                    <div>Email</div>
                    <div className="fw-normal">birakmzac@gmail.com</div>
                  </div>
                  <div className="mb-2 mb-md-0">
                    <div>Phone</div>
                    <div className="fw-normal">+977-9816669757</div>
                  </div>
                  <div>
                    <div>Location</div>
                    <div className="fw-normal">Nepal, Pokhara</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Image - comes first on mobile */}
            <div className="col-md-6 d-flex justify-content-center align-items-center mb-4 mb-md-0">
              <img
                src={profileImage}
                alt="My Profile"
                className="img-fluid rounded-circle"
                style={{ 
                  maxWidth: "300px", 
                  marginLeft: "0", 
                  width: "100%",
                  height: "auto"
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .btn:hover {
          background-color: #fea2c5;
          border-color: #fea2c5;
        }
        
        @media (min-width: 768px) {
          .col-md-6 img {
            margin-left: 25rem !important;
          }
        }
        
        @media (max-width: 767px) {
          .d-md-flex div {
            margin-bottom: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Portfolio;