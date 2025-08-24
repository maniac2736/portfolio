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
    <section className="d-flex flex-column align-items-center justify-content-center text-white min-vh-90 mt-5">
      <div className="container">
        <div className="row align-items-center justify-content-center g-0">
          {/* Profile Image */}
          <div className="col-12 col-md-4 mb-4 text-center mt-2">
            <img
              src={lolo}
              alt="Not found!"
              className="img-fluid rounded"
              style={{
                border: "3px solid #fea2c5",
                width: "16.875rem",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>

          {/* Intro Text and Cards */}
          <div className="col-12 col-md-8 p-2">
            <h2 className="fw-bold" style={{ color: "#fea2c5" }}>
              Who am I?
            </h2>
            <h2 className="fw-semibold">
              I am Thaman Thapa, a Web Developer and Designer
            </h2>
            <p className="mt-3 text-justify opacity-75">
              I’m a passionate and detail-oriented Web Developer specializing in
              frontend and backend development, dedicated to crafting modern,
              scalable, and user-centric digital experiences. My goal is to
              create seamless and user-friendly experiences through high-quality
              software solutions. I have strong communication and collaboration
              skills that I have developed through team projects,
              extracurricular activities, and community initiatives.
            </p>

            {/* Cards Section */}
            <div className="row mt-4 g-3">
              {/* Education Card */}
              <div className="col-12 col-md-4">
                <div
                  className="card text-white h-100 rounded"
                  style={{ backgroundColor: "#343a40" }}
                >
                  <div className="card-body">
                    <h4
                      className="card-title mb-3"
                      style={{ color: "#fea2c5", fontSize: "14px" }}
                    >
                      Education
                    </h4>
                    {educationList.map((edu, index) => (
                      <div
                        key={index}
                        className="border-start ps-2 mb-3"
                        style={{ borderColor: "#fea2c5", borderWidth: "2px" }}
                      >
                        <p
                          className="fw-bold mb-0"
                          style={{ fontSize: "12px" }}
                        >
                          {edu.university}
                        </p>
                        <p
                          className="mb-0"
                          style={{ fontSize: "11px", color: "#fea2c5" }}
                        >
                          {edu.duration}
                        </p>
                        <p
                          className="mb-0 opacity-75"
                          style={{ fontSize: "11px" }}
                        >
                          {edu.course}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Skills Card */}
              <div className="col-12 col-md-4">
                <div
                  className="card text-white h-100 rounded"
                  style={{ backgroundColor: "#343a40" }}
                >
                  <div className="card-body">
                    <h4
                      className="card-title mb-3"
                      style={{ color: "#fea2c5", fontSize: "14px" }}
                    >
                      Skills
                    </h4>
                    <div className="d-flex flex-wrap gap-2">
                      {skillsList.map((skill, index) => (
                        <span
                          key={index}
                          className="badge rounded-pill"
                          style={{
                            border: "1px solid #fea2c5",
                            fontSize: "11px",
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Tech Stack Card */}
              <div className="col-12 col-md-4">
                <div
                  className="card text-white h-100 rounded"
                  style={{ backgroundColor: "#343a40" }}
                >
                  <div className="card-body">
                    <h4
                      className="card-title mb-3"
                      style={{ color: "#fea2c5", fontSize: "14px" }}
                    >
                      Tech Stack
                    </h4>
                    <div className="row row-cols-4 g-3 text-center">
                      {techStack.map((tech) => (
                        <div key={tech.id}>
                          <i
                            className={tech.iconClass}
                            style={{ fontSize: "28px", color: tech.color }}
                          ></i>
                          <p className="mb-0" style={{ fontSize: "7px" }}>
                            {tech.name}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
