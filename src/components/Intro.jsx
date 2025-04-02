import myImage from "../assets/images/profile.jpg";
import { techStack } from "../data/Stack"; 

const Intro = () => {
  return (
    <section
      className="d-flex align-items-center justify-content-center min-vh-90 mb-5"
      style={{
        color: "white",
      }}
    >
      <div
        className="d-flex flex-wrap align-items-center"
        style={{
          maxWidth: "900px",
          width: "100%",
          textAlign: "left",
        }}
      >
        <div className="p-3" style={{ flex: "1 1 300px", textAlign: "center" }}>
          <img
            src={myImage}
            alt="Your Name"
            style={{
              width: "250px",
              height: "250px",
              borderRadius: "50%",
              objectFit: "cover",
              border: "5px solid #fea2c5",
            }}
          />
        </div>

        <div
          className="p-3 text-white"
          style={{
            flex: "2 1 400px",
            fontSize: "18px",
          }}
        >
          <h2 style={{ color: "#fea2c5", fontSize: "28px" }}>Who am I?</h2>
          <h2 className="text-white" style={{ fontSize: "28px" }}>
            I am Thaman Thapa, a Web Developer and Designer
          </h2>
          <p
            style={{
              fontSize: "16px",
              lineHeight: "1.6",
              opacity: 0.8,
              textAlign: "justify",
            }}
          >
            I am a passionate developer with expertise in frontend and backend
            development. I specialize in building modern, scalable applications
            using React, Node.js, and more. My goal is to create seamless and
            user-friendly experiences through high-quality software solutions.
          </p>

          <hr style={{ borderColor: "#fea2c5", borderWidth: "2px", margin: "20px 0" }} />

          <h3 style={{ color: "#fea2c5", fontSize: "22px", marginBottom: "10px" }}>
            My Tech Stack
          </h3>
          <div className="d-flex flex-wrap gap-3">
            {techStack.map((tech) => (
              <i
                key={tech.id}
                className={`${tech.iconClass} fa-2x`}
                style={{ color: tech.color }}
                title={tech.name} 
              ></i>
            ))}
          </div>

          <div className="mt-4">
            <a
              href="https://example.com/my-cv.pdf" 
              download
              className="btn d-flex align-items-center text-white"
              style={{
                borderColor: "#fea2c5",
                color: "#fea2c5",
                borderWidth: "3px",
                borderRadius: "12px",
                transition: "all 0.3s ease",
                maxWidth: "11rem",
              }}
            >
              <span>Download CV</span>
              <i className="fas fa-download fa-lg ms-2 text-white"></i>
            </a>
            <style>
              {`
                .btn:hover {
                  background-color: #fea2c5;
                  border-color: #fea2c5;
                }
              `}
            </style>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
