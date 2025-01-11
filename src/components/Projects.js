import React from 'react';
import './Projects.scss';

// Importe as imagens dos projetos
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';

function Projects() {
  const projectList = [
    {
      id: 1,
      title: 'Projeto 1',
      description: 'Descrição breve sobre o projeto 1. Detalhes sobre funcionalidades ou tecnologias utilizadas.',
      image: project1,
      link: '#'
    },
    {
      id: 2,
      title: 'Projeto 2',
      description: 'Descrição breve sobre o projeto 2. Detalhes sobre funcionalidades ou tecnologias utilizadas.',
      image: project2,
      link: '#'
    },
    {
      id: 3,
      title: 'Projeto 3',
      description: 'Descrição breve sobre o projeto 3. Detalhes sobre funcionalidades ou tecnologias utilizadas.',
      image: project3,
      link: '#'
    }
  ];

  return (
    <section id="projetos" className="projects-wrapper">
      <div className="projects">
      <div className="container">
        <h2> Projects</h2>
        <hr />
        <div className="projects-list">
          {projectList.map((project, index) => (
            <div
              key={project.id}
              className={`project-card ${index % 2 === 0 ? 'left' : 'right'}`}
            >
              <img src={project.image} alt={project.title} />
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.link} className="btn">Ver Projeto</a>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>

    </section>
  );
}

export default Projects;
