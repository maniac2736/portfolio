import { useParams } from "react-router-dom";
import { projects } from "../data/projects";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="text-white bg-dark min-vh-100 d-flex align-items-center justify-content-center">
        Project not found
      </div>
    );
  }

  const handleBackClick = () => {
    navigate("/", { replace: false });

    setTimeout(() => {
      const section = document.getElementById("projects");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 50);
  };

  return (
    <div className="container-fluid bg-dark min-vh-100 py-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container"
      >
        {/* Small Back Button Top-Left */}
        <div className="mb-5">
          <button
            onClick={handleBackClick}
            className="btn btn-md btn-outline-light d-flex align-items-center position-relative overflow-hidden"
            style={{
              borderColor: "#fea2c5",
              borderWidth: "2px",
              borderRadius: "15px",
            }}
          >
            <span className="btn-text small">Back to Projects</span>
            <i
              className="fa fa-reply fa-sm btn-icon position-absolute"
              style={{
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            ></i>
          </button>

          <style>
            {`
              .btn-text, .btn-icon {
                transition: all 0.3s ease;
              }
              .btn-icon {
                opacity: 0;
                transform: translateY(-100%);
              }
              .btn:hover {
                background-color: #fea2c5 !important;
                border-color: #fea2c5 !important;
                color: white !important;
              }
              .btn:hover .btn-text {
                opacity: 0;
                transform: translateY(100%);
              }
              .btn:hover .btn-icon {
                opacity: 1;
                transform: translateY(0);
                color: white !important;
              }
            `}
          </style>
        </div>

        <div className="row g-4">
          {/* Left Side */}
          <div className="col-12 col-md-6">
            <h1 className="fw-bold" style={{ color: "#fea2c5" }}>
              {project.title}
            </h1>

            {project.company && (
              <div className="d-flex align-items-center mb-3">
                <h5 className="text-white mb-0 me-2">{project.company}</h5>
                {project.companyImg && (
                  <img
                    src={project.companyImg}
                    alt={project.company}
                    style={{
                      width: "10rem",
                      height: "auto",
                      objectFit: "contain",
                    }}
                  />
                )}
              </div>
            )}

            {project.role && (
              <p className="text-secondary">Role: {project.role}</p>
            )}

            {project.type === "corporate" && (
              <div
                className="badge bg-warning text-dark mb-3 d-inline-block text-wrap"
                style={{ maxWidth: "500px" }}
              >
                <i className="fa fa-exclamation-triangle fa-sm me-1"></i>I
                contributed to this project as part of my work at the company
                mentioned above.
              </div>
            )}

            {project.type === "personal" && (
              <div
                className="badge bg-info text-dark mb-3 d-inline-block text-wrap"
                style={{ maxWidth: "500px" }}
              >
                <i className="fa fa-lightbulb fa-sm me-1"></i>
                This project was independently designed and developed from the
                ground up using the listed technologies.
              </div>
            )}

            <p className="text-white mt-3">{project.description}</p>

            {/* Technologies Used */}
            <div className="mt-4">
              <h5 style={{ color: "#fea2c5" }}>Technologies Used</h5>
              <div className="d-flex flex-wrap">
                {project.technologiesUsed &&
                  project.technologiesUsed.map((tech, idx) => (
                    <div
                      key={idx}
                      className="badge me-2 mb-2 d-flex flex-column align-items-center justify-content-center p-2"
                      style={{
                        backgroundColor: "#2c3e50",
                        color: "#ecf0f1",
                        minWidth: "60px",
                        gap: "0.5rem",
                        borderRadius: "10px",
                      }}
                    >
                      <i
                        className={`${tech.icon} fa-2x`}
                        style={{ color: tech.color }}
                      ></i>
                      <span>{tech.name}</span>
                    </div>
                  ))}
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="col-12 col-md-6">
            {project.image && (
              <div className="mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="img-fluid rounded w-100"
                  style={{ maxHeight: "300px", objectFit: "cover" }}
                />
              </div>
            )}

            {project.contributions && (
              <div className="mt-4">
                <h5 style={{ color: "#fea2c5" }}>
                  {project.type === "corporate"
                    ? "Key Contributions"
                    : "Key Features"}
                </h5>
                <div className="d-flex flex-wrap gap-3">
                  <div
                    className="card p-3"
                    style={{
                      flex: "1 1 30%",
                      backgroundColor: "#2c3e50",
                      color: "white",
                      borderRadius: "15px",
                      fontSize: "16px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "12px",
                      }}
                    >
                      {project.contributions.map((item, idx) => (
                        <div
                          key={idx}
                          style={{
                            borderLeft: "2px solid #fea2c5",
                            paddingLeft: "10px",
                            paddingTop: "4px",
                            paddingBottom: "4px",
                          }}
                        >
                          <p
                            style={{
                              margin: 0,
                              fontSize: "15px",
                              opacity: 0.9,
                            }}
                          >
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
