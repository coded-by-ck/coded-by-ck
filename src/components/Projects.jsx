import { projects } from '../data/projects'

function Projects() {
  return (
    <section className="section content-section" id="projetos">
      <div className="container">
        <div className="section-heading">
          <p className="section-kicker">Projetos</p>
          <h2>Projetos com presença e função.</h2>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <article
              className="glass-card project-card reveal"
              style={{ '--reveal-delay': `${index * 80}ms` }}
              key={project.title}
            >
              <div className="project-visual">
                <span>{project.initials}</span>
                <strong>{project.title}</strong>
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <ul className="tag-list" aria-label={`Tags de ${project.title}`}>
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>

                <div className="project-actions">
                  {project.actions.map((action, index) => (
                    <a
                      className={index === 0 ? 'button button-primary' : 'button button-secondary'}
                      href="#contato"
                      key={action}
                    >
                      {action}
                    </a>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
