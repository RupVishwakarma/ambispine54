
import React, { useState } from "react";
import { PlusIcon, MinusIcon, ChevronRightIcon } from "lucide-react";
import "./webapp.css";

const WebDevelopmentPage = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [consultactive, setConsultActive] = useState(false);
  const services = [
    {
      title: "Custom Website Development",
      description:
        "Crafting bespoke web solutions that transform your digital vision into a powerful online presence, tailored precisely to your business needs.",
      icon: "💻",
      color: "#3b82f6", // Soft blue
    },
    {
      title: "WordPress Development",
      description:
        "Harness the full potential of WordPress with our expert development services, creating robust, scalable, and user-friendly websites that stand out.",
      icon: "🌐",
      color: "#10b981", // Emerald green
    },
    {
      title: "CMS or SaaS Development",
      description:
        "Develop cutting-edge content management systems and software-as-a-service platforms that streamline your business operations and drive efficiency.",
      icon: "🚀",
      color: "#6366f1", // Indigo
    },
    {
      title: "Web App Development",
      description:
        "Transform innovative business ideas into interactive, responsive web applications that deliver exceptional user experiences and drive engagement.",
      icon: "📱",
      color: "#f43f5e", // Rose
    },
    {
      title: "Enterprise Solutions",
      description:
        "Create comprehensive Enterprise Resource Planning solutions that integrate seamlessly, optimize processes, and provide actionable business insights.",
      icon: "📊",
      color: "#8b5cf6", // Purple
    },
  ];

  const toggleSection = (index) => {
    setActiveSection(activeSection === index ? null : index);
  };
  const handleConsult = () =>{
    setConsultActive(true);
  }

  return (
    <div className="web-development-container">
      <header className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Innovative Web Development</h1>
            <p style={{ color: "#eee" }}>
              Transforming digital landscapes with cutting-edge web solutions
              that elevate your business to new heights.
            </p>
            <button className="cta-button">
              Start Your Project <ChevronRightIcon size={20} />
            </button>
          </div>
        </div>
      </header>

      <section className="services-section">
        <div className="section-header">
          <h2>Our Web Development Services</h2>
          <p>
            Comprehensive digital solutions designed to drive your business
            forward
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={index}
              className={`service-card ${
                activeSection === index ? "expanded" : ""
              }`}
              style={{ borderTop: `4px solid ${service.color}` }}
            >
              <div
                className="service-header"
                onClick={() => toggleSection(index)}
              >
                <div className="service-title">
                  <span
                    className="service-icon"
                    style={{ color: service.color }}
                  >
                    {service.icon}
                  </span>
                  <h3>{service.title}</h3>
                </div>
                {activeSection === index ? (
                  <MinusIcon size={24} style={{ color: service.color }} />
                ) : (
                  <PlusIcon size={24} style={{ color: service.color }} />
                )}
              </div>

              {activeSection === index && (
                <div
                  className="service-description"
                  style={{
                    display: "block", // Ensure description is visible
                    opacity: 1,
                    height: "auto",
                  }}
                >
                  <p>{service.description}</p>
                  <button
                    className="learn-more-btn"
                    style={{
                      backgroundColor: service.color,
                      borderRadius: "8px",
                    }}
                  >
                    Learn More
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="process-section">
        <h2>Our Development Process</h2>
        <div className="process-grid">
          <div className="process-step">
            <div className="step-number">1</div>
            <div className="step-content">
              <h3>Strategy & Planning</h3>
              <p>
                In-depth consultation to understand your unique business
                requirements and goals.
              </p>
            </div>
          </div>
          <div className="process-step">
            <div className="step-number">2</div>
            <div className="step-content">
              <h3>Design & Prototype</h3>
              <p>
                Create intuitive, visually compelling designs that reflect your
                brand identity.
              </p>
            </div>
          </div>
          <div className="process-step">
            <div className="step-number">3</div>
            <div className="step-content">
              <h3>Development</h3>
              <p>
                Implement robust, scalable solutions using latest web
                technologies.
              </p>
            </div>
          </div>
          <div className="process-step">
            <div className="step-number">4</div>
            <div className="step-content">
              <h3>Launch & Support</h3>
              <p>
                Seamless deployment with ongoing maintenance and technical
                support.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="consultation-section">
        <div className="consultation-content">
          <div className="consultation-text">
            <h3 style={{ color: "#ccc" }}>
              Ready to Elevate Your Digital Presence?
            </h3>
            <p style={{ color: "#ccc" }}>
              Let's collaborate and create a powerful web solution that drives
              your business forward.
            </p>
          </div>
          <button className="consultation-button" onClick={handleConsult}>
            Book Free Consultation <ChevronRightIcon size={20} />
          </button>
        </div>
      </section>
      <section>
      {
          consultactive &&  (
            <div><QuotationForm /></div> 
          )
        }
      </section>
    </div>
  );
};

export default WebDevelopmentPage;
