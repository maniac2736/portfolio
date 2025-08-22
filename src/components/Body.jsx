import profileImage from "../assets/images/man3.png";
import cvFile from "../assets/docs/ThamanThapa_CV.pdf";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.2,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0 },
};

const Portfolio = () => {
  return (
    <div className="container-fluid mt-5">
      <div className="d-flex align-items-center justify-content-center min-vh-90 my-5">
        <div className="container my-5">
          <div className="row align-items-center my-5 flex-md-row flex-column-reverse">
            {/* Text Content with animation */}
            <motion.div
              className="col-md-5 text-md-start text-center mt-md-0 mt-4"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h1 className="text-white" variants={childVariants}>
                Hi There!
              </motion.h1>

              <motion.h1 className="fw-bold" variants={childVariants}>
                <span className="text-white">I am a </span>
                <span
                  className="d-block d-md-inline"
                  style={{ color: "#fea2c5" }}
                >
                  <ReactTyped
                    strings={["Developer", "Designer"]}
                    typeSpeed={80}
                    backSpeed={50}
                    backDelay={1500}
                    smartBackspace={false}
                    loop
                  />
                </span>
              </motion.h1>

              <motion.p className="text-white" variants={childVariants}>
                Turning ideas into reality with code.
              </motion.p>

              <motion.div className="mt-4" variants={childVariants}>
                <a
                  href={cvFile}
                  download="Thaman_Thapa_CV.pdf"
                  className="btn d-flex align-items-center justify-content-center text-white mx-auto mx-md-0"
                  style={{
                    borderColor: "#fea2c5",
                    color: "#fea2c5",
                    borderWidth: "3px",
                    borderRadius: "12px",
                    transition: "all 0.3s ease",
                    width: "100%",
                    maxWidth: "180px",
                  }}
                >
                  <span className="btn-text">Download CV</span>
                  <i className="fas fa-download fa-lg btn-icon"></i>
                </a>
              </motion.div>

              <motion.div className="mt-4" variants={childVariants}>
                <div className="row text-white text-center text-md-start fw-bold">
                  <div className="col-12 col-md-4 mb-3">
                    <div>Email</div>
                    <div className="fw-normal">birakmzac@gmail.com</div>
                  </div>
                  <div className="col-12 col-md-4 mb-3">
                    <div>Phone</div>
                    <div className="fw-normal">+977-9816669757</div>
                  </div>
                  <div className="col-12 col-md-4">
                    <div>Location</div>
                    <div className="fw-normal">Nepal, Pokhara</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Image with separate animation */}
            <motion.div
              className="col-md-6 d-flex justify-content-center align-items-center mb-4 mb-md-0"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            >
              <img
                src={profileImage}
                alt="My Profile"
                className="img-fluid rounded-circle"
                style={{
                  maxWidth: "300px",
                  marginLeft: "0",
                  width: "100%",
                  height: "auto",
                }}
              />
            </motion.div>
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
