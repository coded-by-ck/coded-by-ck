import { projects } from '../data/projects'

function Projects() {
  const getExternalLinkProps = (href) =>
    href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {}

  return (
    <section className="section content-section" id="projetos">
      <div className="container">
        <div className="section-heading">
          <p className="section-kicker">Projetos</p>
          <h2>Projetos com presença e função.</h2>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => {
            const isMobileShowcase = project.layout === 'mobile'
            const isResponsiveShowcase = project.responsiveShowcase
            const isInvictus = project.title === 'Invictus Barber Studio'

            return (
              <article
                className={`glass-card project-card project-card--${project.layout ?? 'default'}${
                  isMobileShowcase ? ' project-showcase--mobile' : ''
                }${isResponsiveShowcase ? ' project-showcase--responsive' : ''}${
                  isInvictus ? ' project-card--invictus' : ''
                } reveal`}
                style={{ '--reveal-delay': `${index * 80}ms` }}
                key={project.title}
              >
                {isMobileShowcase ? (
                  <>
                    <div
                      className={`project-mobile-showcase-visual${
                        isResponsiveShowcase ? ' project-preview--responsive-showcase' : ''
                      }${isInvictus ? ' project-preview' : ''
                      }`}
                    >
                      {isResponsiveShowcase ? (
                        <>
                          <img
                            className="project-screen--desktop"
                            src={project.desktopImage}
                            alt={`Preview desktop do projeto ${project.title}`}
                          />
                          <img
                            className="project-screen--mobile"
                            src={project.image}
                            alt={`Preview mobile do projeto ${project.title}`}
                          />
                        </>
                      ) : (
                        <img
                          className={isInvictus ? 'project-image' : undefined}
                          src={project.image}
                          alt={`Preview do projeto ${project.title}`}
                        />
                      )}
                    </div>

                    <div className="project-showcase-actions">
                      {project.actions.map((action, actionIndex) => (
                        <a
                          className={
                            actionIndex === 0 ? 'button button-primary' : 'button button-secondary'
                          }
                          href={action.href}
                          key={action.label}
                          {...getExternalLinkProps(action.href)}
                        >
                          {action.label}
                        </a>
                      ))}
                    </div>

                    <div className="project-showcase-info">
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>

                      <ul className="tag-list" aria-label={`Tags de ${project.title}`}>
                        {project.tags.map((tag) => (
                          <li key={tag}>{tag}</li>
                        ))}
                      </ul>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="project-visual project-preview--desktop">
                      <img src={project.image} alt={`Preview do projeto ${project.title}`} />
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
                        {project.actions.map((action, actionIndex) => (
                          <a
                            className={
                              actionIndex === 0
                                ? 'button button-primary'
                                : 'button button-secondary'
                            }
                            href={action.href}
                            key={action.label}
                            {...getExternalLinkProps(action.href)}
                          >
                            {action.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Projects
