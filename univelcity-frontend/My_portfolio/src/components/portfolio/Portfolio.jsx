import React from 'react';
import IMG1 from '../../assets/ecom-site.png';
import IMG2 from '../../assets/calculator.png';
import IMG4 from '../../assets/RandomQuoteGenerator.png';

import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'e-commerce website',
      img: IMG1,
      description:
        'An Shoe e-shop, implementing different filtering methods using react + vite.',
      technologies: 'React | Vite | CSS | JavaScript',
      link: 'https://ecom-clone-react.netlify.app/',
      github: 'https://github.com/Evarmedia/ecom-clone',
    },
    {
      id: 2,
      title: 'Random Quotes Generator',
      img: IMG4,
      description:
        'A Random Quote Generator built using Javascript, React and Css',
      technologies: 'React | JavaScript | API | CSS',
      link: 'https://dt9g3g.csb.app/',
      github: 'https://codesandbox.io/s/randomquotegenerator-dt9g3g',
    },
    {
      id: 3,
      title: 'Calculator',
      img: IMG2,
      description: "A calculator built using JavaScript, React and Css during the completion of FreeCodeCamps Frontend's Development Libraries Certificcation",
      technologies: 'JavaScript | React | Webpack | Tailwind',
      link: 'https://myfcc-calculator-project.netlify.app/',
      github: 'https://github.com/Evarmedia/calculator_FCC',
    }
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                Source Code
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Preview
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
