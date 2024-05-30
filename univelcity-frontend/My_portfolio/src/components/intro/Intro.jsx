import React from 'react';
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
import ME from '../../assets/me.jpg';
import './intro.css';

const Intro = () => {
  return (
    <section id="about">
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image crop">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ year</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>15+ Completed Projects</small>
            </article>
          </div>
          <p>I am a dynamic and dedicated fullStack Web Developer with a passion for crafting visually appealing and intuitive user experiences. With a strong aesthetic sense and a keen eye for details, I pride myself on creating websites that seamlessly blend form and function.
With expertise in cutting-edge tools and frameworks such as React and Angular. I'm able to bring ideas to life, converting visions into interactive and engaging online spaces.
</p>
          <a href="#contact" className="btn btn-primary">Say hi</a>
        </div>
      </div>
    </section>
  )
}

export default Intro
