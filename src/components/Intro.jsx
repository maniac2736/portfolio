// import myImage from "../assets/images/profile.jpg";
import lolo from "../assets/images/PP.jpg";
import { techStack } from "../data/Stack";

// Education data
const educationList = [
  {
    university: "Informatics College, Pokhara",
    duration: "2022 - 2024",
    course: "BSc Hons Computing",
  },
  {
    university: "Global Collegiate School",
    duration: "2019 - 2021",
    course: "High School, CS",
  },
];

// Skills data
const skillsList = [
  "FullStack Web Development",
  "Graphics Design",
  "Blockchain Development",
  "UI/UX Design",
  "Testing",
];

const Intro = () => {
  return (
    <section
      className="d-flex align-items-center justify-content-center flex-column min-vh-90 mt-5 intro-section"
      style={{ color: "white" }}
    >
      <div
        className="d-flex flex-wrap align-items-stretch justify-content-center intro-wrapper"
        style={{
          maxWidth: "1100px",
          width: "100%",
          textAlign: "left",
        }}
      >
        {/* Profile Image */}
        <div
          className="p-3 d-flex profile-image"
          style={{
            flex: "1 1 150px",
            textAlign: "center",
            minWidth: "250px",
            maxWidth: "350px",
          }}
        >
          <img
            src={lolo}
            alt="Not found!"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "15px",
              border: "5px solid #fea2c5",
            }}
          />
        </div>

        {/* Intro Text */}
        <div
          className="p-3 text-white intro-text"
          style={{
            flex: "2 1 400px",
            fontSize: "18px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <h2 style={{ color: "#fea2c5", fontSize: "28px" }}>Who am I?</h2>
          <h2 className="text-white" style={{ fontSize: "22px" }}>
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
            I’m a passionate and detail-oriented Web Developer specializing in
            frontend and backend development, dedicated to crafting modern,
            scalable, and user-centric digital experiences. My goal is to create
            seamless and user-friendly experiences through high-quality software
            solutions. I have strong communication and collaboration skills that
            I have developed through team projects, extracurricular activities,
            and community initiatives.
          </p>

          {/* Cards Section */}
          <div
            className="d-flex flex-wrap gap-4 mt-4 cards-section"
            style={{ width: "100%" }}
          >
            {/* Education Card */}
            <div
              className="card p-3"
              style={{
                flex: "1 1 30%",
                backgroundColor: "#343a40",
                color: "white",
                borderRadius: "15px",
                fontSize: "13px",
              }}
            >
              <h4
                style={{
                  textAlign: "left",
                  marginBottom: "12px",
                  fontSize: "14px",
                  color: "#fea2c5",
                }}
              >
                Education
              </h4>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "15px",
                }}
              >
                {educationList.map((edu, index) => (
                  <div
                    key={index}
                    style={{
                      borderLeft: "2px solid #fea2c5",
                      paddingLeft: "10px",
                      paddingTop: "4px",
                      paddingBottom: "4px",
                    }}
                  >
                    <p
                      style={{
                        margin: "0",
                        fontWeight: "bold",
                        fontSize: "12px",
                      }}
                    >
                      {edu.university}
                    </p>
                    <p
                      style={{
                        margin: "0",
                        opacity: 0.8,
                        fontSize: "11px",
                        color: "#fea2c5",
                      }}
                    >
                      {edu.duration}
                    </p>
                    <p style={{ margin: "0", opacity: 0.9, fontSize: "11px" }}>
                      {edu.course}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills Card */}
            <div
              className="card p-3"
              style={{
                flex: "1 1 30%",
                backgroundColor: "#343a40",
                color: "white",
                borderRadius: "15px",
                fontSize: "13px",
              }}
            >
              <h4
                style={{
                  textAlign: "left",
                  marginBottom: "12px",
                  fontSize: "14px",
                  color: "#fea2c5",
                }}
              >
                Skills
              </h4>
              <div className="d-flex flex-wrap gap-2">
                {skillsList.map((skill, index) => (
                  <span
                    key={index}
                    style={{
                      padding: "5px 10px",
                      borderRadius: "20px",
                      border: "1px solid #fea2c5",
                      backgroundColor: "transparent",
                      color: "white",
                      fontSize: "11px",
                      fontWeight: "500",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Tech Stack Card */}
            <div
              className="card p-3"
              style={{
                flex: "1 1 30%",
                backgroundColor: "#343a40",
                color: "white",
                borderRadius: "15px",
                fontSize: "13px",
              }}
            >
              <h4
                style={{
                  textAlign: "left",
                  marginBottom: "12px",
                  fontSize: "14px",
                  color: "#fea2c5",
                }}
              >
                Tech Stack
              </h4>

              <div
                className="tech-grid"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(4, 1fr)",
                  gap: "20px",
                  justifyItems: "center",
                  marginTop: "10px",
                }}
              >
                {techStack.map((tech) => (
                  <div key={tech.id} style={{ textAlign: "center" }}>
                    <i
                      className={tech.iconClass}
                      style={{ fontSize: "28px", color: tech.color }}
                    ></i>
                    <p
                      style={{
                        fontSize: "7px",
                        marginTop: "5px",
                        color: "white",
                        wordWrap: "break-word",
                      }}
                    >
                      {tech.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile-specific CSS */}
      <style>
        {`
        @media (max-width: 768px) {
          .intro-wrapper {
            flex-direction: column !important;
            align-items: center !important;
            text-align: center !important;
          }
          .intro-text {
            font-size: 16px !important;
            text-align: center !important;
          }
          .cards-section {
            flex-direction: column !important;
            gap: 20px !important;
          }
          .tech-grid {
            grid-template-columns: repeat(4, 1fr) !important; /* 4 icons per row even on mobile */
            gap: 10px !important;
          }
          .profile-image {
            max-width: 250px !important;
            margin-bottom: 20px !important;
          }
        }
        `}
      </style>
    </section>
  );
};

export default Intro;
