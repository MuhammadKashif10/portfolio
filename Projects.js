/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useState } from "react";
import './App.css';

function Projects() {
  const [projects] = useState([
    {
      title: "Project 1",
      img: "Home.jpeg",
      gLink: "https://github.com/Kashif6666",
      lLink: "https://me-hafiz.netlify.app/",
    },
    {
      title: "Project 2",
      img: "login.png",
      gLink: "https://github.com/Kashif6666",
      lLink: "https://me-hafiz.netlify.app/",
    },
    {
      title: "Project 3",
      img: "sign.jpeg",
      gLink: "https://github.com/Kashif6666",
      lLink: "https://me-hafiz.netlify.app/",
    },
    {
      title: "Project 4",
      img: "1.png",
      gLink: "https://github.com/Kashif6666",
      lLink: "https://me-hafiz.netlify.app/",
    },
    {
      title: "Project 5",
      img: "2.png",
      gLink: "https://github.com/Kashif6666",
      lLink: "https://me-hafiz.netlify.app/",
    },
    {
      title: "Project 6",
      img: "3.png",
      gLink: "https://github.com/kashif6666",
      lLink: "https://me-hafiz.netlify.app/",
    },
  ]);
  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="title">
          <h3>Featured Projects</h3>
          <a
            href="https://github.com/Kashif6666"
            target="_blank"
            className="btn"
            rel="noreferrer"
          >
            View All
          </a>
        </div>
        <div className="projects-wrapper">
          {projects.map((project, i) => (
            <div className="project" key={i}>
              <div className="img-container">
                <img src={project.img} alt={project.title} />
              </div>
              <div className="description">
                <h4>{project.title}</h4>
                <div className="links">
                  <a href={project.gLink} target="_blank" rel="noreferrer">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href={project.lLink} target="_blank" rel="noreferrer">
                    <i className="fa fa-globe"></i>
                  </a>
                </div>
              </div>
              <p>
              I'm experienced web developer with a passion for creating engaging and user-friendly web applications. With 1 year of experience in the field, I have developed a diverse range of technical skills in programming languages such as HTML, CSS, JavaScript, and WordPress.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;