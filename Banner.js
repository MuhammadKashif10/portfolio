/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import './App.css';

function Banner() {
  return (
    <section className="banner" id="banner">
      <div className="container">
        <div className="banner-wrapper">
          <div className="banner-img">
            <img src="/person.jpg" alt="" className="person" />
          </div>
          <div className="banner-content">
            <h6>Hello, I'm Muhammad Kashif</h6>
            <h3>Web Developer</h3>
            <p>
            I'm experienced web developer with a passion for creating engaging and user-friendly web applications. With 1 year of experience in the field, I have developed a diverse range of technical skills in programming languages such as HTML, CSS, JavaScript, and WordPress.
            </p>
            <a className="btn" href="#projects">
              About Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;

