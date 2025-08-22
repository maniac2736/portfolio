import { projects } from "../data/projects";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const cardStyle = {
  backgroundColor: "#343a40",
  height: "100%",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  borderRadius: "15px",
  position: "relative",
  transition: "all 0.3s ease",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
};

const badgeStyle = {
  position: "absolute",
  top: "10px",
  left: "10px",
  display: "flex",
  flexWrap: "wrap",
  gap: "5px",
};

const techBadge = {
  backgroundColor: "#fea2c5",
  color: "#343a40",
  padding: "2px 8px",
  fontSize: "12px",
  borderRadius: "5px",
  fontWeight: "500",
  transition: "all 0.2s ease",
};

const ribbonStyle = {
  position: "absolute",
  bottom: "15px",
  right: "0",
  backgroundColor: "#dc3545",
  color: "white",
  padding: "5px 15px",
  fontSize: "12px",
  fontWeight: "bold",
  borderTopLeftRadius: "8px",
  borderBottomLeftRadius: "8px",
  boxShadow: "0 2px 3px rgba(0,0,0,0.2)",
};

export default function ProjectsPage() {
  const navigate = useNavigate();
  const [showAll, setShowAll] = useState(false);

  const handleDetailsClick = (projectId) => {
    navigate(`/projects/${projectId}`);
  };

  const visibleProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <section id="projects" className="py-5 bg-dark">
      <div className="container px-5" style={{ maxWidth: "70rem" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="row justify-content-center"
        >
          <h3
            className="mb-5 text-center"
            style={{
              fontFamily: "'Press Start 2P', sans-serif",
              color: "#fea2c5",
              fontSize: "clamp(1rem, 4vw, 1.5rem)",
            }}
          >
            Projects
          </h3>

          {visibleProjects.map((project) => (
            <motion.div
              key={project.id}
              className="col-md-4 mb-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <motion.div
                className="card"
                style={cardStyle}
                whileHover={{ y: -5 }}
              >
                <div style={ribbonStyle}>{project.type.toUpperCase()}</div>

                {project.image && (
                  <div style={{ position: "relative" }}>
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="card-img-top"
                      style={{
                        height: "200px",
                        width: "100%",
                        objectFit: "cover",
                      }}
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.3 }}
                    />
                    {project.stack && (
                      <div style={badgeStyle}>
                        {project.stack.map((tech, idx) => (
                          <motion.span
                            key={idx}
                            style={techBadge}
                            whileHover={{ scale: 1.05 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                <div className="card-body text-start">
                  <h6 className="card-title" style={{ color: "#fea2c5" }}>
                    {project.title}
                  </h6>
                  <p
                    className="card-text text-white"
                    style={{
                      fontSize: "0.9rem",
                      opacity: 0.7,
                      lineHeight: "1.5",
                    }}
                  >
                    {project.description}
                  </p>
                </div>

                <div className="card-footer bg-transparent border-top-0 d-flex align-items-center gap-3 mb-2">
                  <div
                    onClick={() => handleDetailsClick(project.id)}
                    className="btn-sm"
                    style={{
                      color: "#999",
                      fontWeight: "500",
                      cursor: "pointer",
                    }}
                  >
                    <i className="fas fa-external-link-alt fa-sm"></i>
                  </div>

                  <a
                    href="https://thamanthapa.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-sm"
                    style={{
                      color: "#999",
                      fontWeight: "500",
                      cursor: "pointer",
                      textDecoration: "none",
                    }}
                  >
                    <i className="fab fa-github fa-sm"></i>
                  </a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {projects.length > 6 && (
          <div className="text-center mb-5">
            <button
              onClick={() => setShowAll(!showAll)}
              className="btn btn-md btn-outline-light"
              style={{
                borderColor: "#fea2c5",
                borderWidth: "2px",
                borderRadius: "15px",
              }}
            >
              {showAll ? "View Less" : "View More"}
            </button>
          </div>
        )}
      </div>

      <style>
        {`
          @media (max-width: 768px) {
            #projects .container.px-5 {
              padding-left: 1rem !important;
              padding-right: 1rem !important;
            }

            #projects .row.justify-content-center {
              justify-content: flex-start !important;
            }

            #projects .col-md-4 {
              flex: 0 0 100% !important;
              max-width: 100% !important;
            }

            #projects .card {
              width: 100% !important;
              margin-left: 0 !important;
              margin-right: 0 !important;
            }
          }
        `}
      </style>
    </section>
  );
}
