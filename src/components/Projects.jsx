import deviceShowcaseImage from '../assets/devices/device-showcase.png'
import { projects } from '../data/projects'

function DeviceShowcase({ project }) {
  return (
    <div className="unified-device-showcase" aria-label={`Showcase responsivo do projeto ${project.title}`}>
      <span className="unified-device-showcase__glow" aria-hidden="true" />
      <span className="unified-device-showcase__floor" aria-hidden="true" />

      <div className="unified-device-showcase__stage">
        <div
          className={`unified-device-showcase__screen unified-device-showcase__screen--laptop${
            project.devices.laptop.mode ? ` unified-device-showcase__screen--${project.devices.laptop.mode}` : ''
          }`}
          style={{ '--screen-backdrop': `url(${project.devices.laptop.image})` }}
        >
          <img src={project.devices.laptop.image} alt={project.devices.laptop.alt} />
        </div>

        <div
          className={`unified-device-showcase__screen unified-device-showcase__screen--tablet${
            project.devices.tablet.mode ? ` unified-device-showcase__screen--${project.devices.tablet.mode}` : ''
          }`}
          style={{ '--screen-backdrop': `url(${project.devices.tablet.image})` }}
        >
          <img src={project.devices.tablet.image} alt={project.devices.tablet.alt} />
        </div>

        <div
          className="unified-device-showcase__screen unified-device-showcase__screen--phone"
          style={{ '--screen-backdrop': `url(${project.devices.phone.image})` }}
        >
          <img src={project.devices.phone.image} alt={project.devices.phone.alt} />
        </div>

        <img
          className="unified-device-showcase__base"
          src={deviceShowcaseImage}
          alt=""
          aria-hidden="true"
        />
      </div>
    </div>
  )
}

function ProjectShowcase({ index, project }) {
  const isReversed = index === 1
  const isFeatured = index === 0

  const getProjectTheme = (title) => {
    if (title.includes('Invictus')) return 'invictus'
    if (title.includes('Lado a Lado')) return 'lado'
    if (title.includes('Au-Au')) return 'auau'

    return 'default'
  }

  const getExternalLinkProps = (href) =>
    href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {}

  return (
    <article
      className={`project-case${isReversed ? ' project-case--reverse' : ''}${
        isFeatured ? ' project-case--featured' : ''
      } project-case--${getProjectTheme(project.title)}`}
    >
      <span className="project-case__divider" aria-hidden="true" />

      <div className="project-case__content">
        <div className="project-case__eyebrow">
          <span className="project-case__mark" aria-hidden="true" />
          <span className="project-case__index">0{index + 1}.</span>
          <p className="project-case__category">{project.category}</p>
        </div>

        <h3>{project.title}</h3>
        <p className="project-case__description">{project.description}</p>

        <ul className="project-case__highlights">
          {project.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>

        <div className="project-case__actions">
          {project.actions.slice(0, 2).map((action, actionIndex) => {
            const actionLabel = action.label === 'Raio-X' || action.label === 'GitHub' ? 'Ver detalhes' : action.label

            return (
              <a
                className={actionIndex === 0 ? 'button button-primary' : 'button button-secondary'}
                href={action.href}
                key={action.label}
                {...getExternalLinkProps(action.href)}
              >
                <span>{actionLabel}</span>
                {actionIndex === 0 && (
                  <span className="project-case__button-icon" aria-hidden="true">
                    -&gt;
                  </span>
                )}
              </a>
            )
          })}
        </div>
      </div>

      <DeviceShowcase project={project} />
    </article>
  )
}

function Projects() {
  const projectOrder = ['Invictus Barber', 'Lado a Lado', 'Au-Au / Dog do AuAu']
  const sortedProjects = projects
    .filter((project) => projectOrder.includes(project.title))
    .sort((projectA, projectB) => projectOrder.indexOf(projectA.title) - projectOrder.indexOf(projectB.title))

  return (
    <section className="section content-section projects-showcase-section" id="projetos">
      <div className="projects-showcase-section__brand" aria-hidden="true">
        <strong>CK</strong>
        <span>Coded by CK</span>
      </div>

      <div className="container">
        <div className="section-heading projects-heading">
          <p className="section-kicker">Projetos</p>
          <h2>
            Projetos como cases digitais,
            <br />
            <span>nao apenas cards.</span>
          </h2>
          <p className="section-support">
            Interfaces com presenca visual, responsividade e foco em experiencia real de uso.
          </p>
        </div>

        <div className="projects-showcase-list">
          {sortedProjects.map((project, index) => (
            <ProjectShowcase index={index} key={project.title} project={project} />
          ))}
        </div>

        <div className="projects-showcase-footer" aria-hidden="true">
          <span />
          <strong>CK</strong>
          <span />
        </div>
      </div>
    </section>
  )
}

export default Projects
