import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const CustomAccordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-item">
      <div className="accordion-header" onClick={toggleAccordion}>
        <h3>{title}</h3>
        <div className="accordion-icon">
          {isOpen ? <FaMinus /> : <FaPlus />}
        </div>
      </div>
      {isOpen && <div className="accordion-body">{content}</div>}
    </div>
  );
};

const Accordion = () => {
  const accordionData = [
    {
      title: "Cloud Migration & Integration",
      content:
        "We help businesses transition smoothly to the cloud, migrating your data, applications, and workloads while minimizing disruption.",
    },
    {
      title: "Data Backup & Disaster Recovery",
      content:
        "We provide reliable backup solutions and disaster recovery plans that ensure your business data is always protected, even in case of unexpected events.",
    },
    {
      title: "Cloud Security & Compliance",
      content:
        "We implement industry-leading security measures to protect your cloud infrastructure and ensure compliance with data protection regulations.",
    },
    {
      title: "Infrastructure as a Service (IaaS)",
      content:
        "Our IaaS offerings provide flexible, scalable cloud resources that allow businesses to avoid the costs and complexities of managing physical servers.",
    },
    {
      title: "Cost Optimization & Resource Management",
      content:
        "We help you optimize cloud usage to reduce costs while ensuring high performance and availability of resources, all managed through a centralized platform.",
    },
  ];

  return (
    <div className="accordion">
      <h2
        style={{
          textAlign: "center",
          //   background: "linear-gradient(to right, #007bff, #00c6ff)",
          color: "#00c6ff",
          marginBottom: "10px",
        }}
      >
        We Offer Website Development Services
      </h2>
      {accordionData.map((item, index) => (
        <CustomAccordion
          key={index}
          title={item.title}
          content={item.content}
        />
      ))}
    </div>
  );
};

export default Accordion;
