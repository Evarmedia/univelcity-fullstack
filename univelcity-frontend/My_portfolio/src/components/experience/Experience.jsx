import React from 'react';
import Skills from './Skills';
import './experience.css';
// import Skills from './components/experience/Skill';

const Experience = () => {
  return (
    <section id="experience">
      <h2>Skills</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Front-end Development</h3>
          <div className="experience__content">
            <Skills skill="Html5"/>
            <Skills skill="CSS3"/>
            <Skills skill="JavaScript"/>
            <Skills skill="React"/>
            <Skills skill="Redux"/>
            <Skills skill="Bootstrap/Jquery"/>
            <Skills skill="Next.js"/>
            <Skills skill="TailWInd"/>
          </div>
        </div>

        <div className="experience__backend">
          <h3>Back-end Development</h3>
          <div className="experience__content">
            <Skills skill="SQL/MySQL"/>
            <Skills skill="MongoDB"/>
            <Skills skill="Node.js"/>
            <Skills skill="Python-Django"/>
            <Skills skill="ExpressDB"/>
          </div>
        </div>

        <div className="experience__backend">
          <h3>Others</h3>
          <div className="experience__content">
            <Skills skill="Python"/>
            <Skills skill="Linux/Bash"/>
            <Skills skill="Graphics Design"/>
            <Skills skill="UI/UX"/>
            <Skills skill="Photography"/>
            <Skills skill="Chess"/>
            <Skills skill="Git/Github"/>
            <Skills skill="General IT skills"/>
            <Skills skill="NoSQL"/>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Experience