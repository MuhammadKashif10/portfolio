import React, { useState } from "react";
import './App.css';

function ServicesExperience() {
  const [services] = useState([
    {
      icon: "fa-paintbrush",
      title: "UI Design",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
      active: false,
    },
    {
      icon: "fa-brands fa-connectdevelop",
      title: "Web Development",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
      active: true,
    },
    {
      icon: "fa-brands fa-app-store",
      title: "App Development",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
      active: false,
    },
  ]);
  return (
    <section className="services-experience">
      <div className="container">
        <div className="services" id="services">
          {services.map((service, i) => (
            <div
              key={i}
              className={`service ${service.active ? "active" : ""}`}
            >
              <i className={`fas ${service.icon}`} />
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <button className="btn">Know More</button>
            </div>
          ))}
        </div>
        <div className="experiences" id="experiences">
          <div className="experience">
            <h3>02</h3>
            <p>Year Experience</p>
          </div>
          <div className="portfolios">
            <div className="portfolio">
              <h4>30+</h4>
              <p>Clients</p>
            </div>
            <div className="portfolio">
              <h4>01</h4>
              <p>Years Experience</p>
            </div>
            <div className="portfolio">
              <h4>22+</h4>
              <p>Completed Projects</p>
            </div>
            <div className="portfolio">
              <h4>10</h4>
              <p>Achievements</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesExperience;
