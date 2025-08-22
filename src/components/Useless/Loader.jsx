import "./Loader.css";

const Loader = () => (
  <div className="loader-container">
    <div className="spinner">
      {Array.from({ length: 12 }).map((_, i) => (
        <div key={i} className="spinner-bar" style={{ transform: `rotate(${i * 30}deg)` }}></div>
      ))}
    </div>
  </div>
);

export default Loader;
