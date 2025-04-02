import { servicesData } from '../data/ServicesData';

const cardStyle = {
    backgroundColor: "#343a40",
    height: "200px", 
    overflow: "hidden",  
    display: "flex",  
    flexDirection: "column"
  };

const Services = () => {
  return (
    <div className="container px-5" style={{ maxWidth: "70rem" }}>
      <div className="row justify-content-center">
        <h5 className="text-white mb-4">My Services</h5>
        {servicesData.map((service, index) => (
          <div key={index} className="col-md-4 mb-5">
            <div className="card" style={cardStyle}>
              <div className="card-body text-start">
                <i className={`mb-3 ${service.icon} fa-2x`} style={{ color: '#fea2c5' }}></i>
                <h5 className="card-title text-white">{service.title}</h5>
                <p className="card-text text-white">{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
