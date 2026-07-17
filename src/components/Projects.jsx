import { useState } from 'react'
import auauPhoneShowcase from '../assets/devices/auau-phone-showcase.png'
import invictusNotebookMockup from '../assets/devices/notebook.png'
import invictusPhoneShowcase from '../assets/devices/invictus-phone-showcase.png'
import ladoPhoneShowcase from '../assets/devices/lado-phone-showcase.png'
import invictusLogo from '../assets/logos/invictus-logo.png'
import ladoLogo from '../assets/logos/lado-a-deus.png'
import cryptoDashboardImage from '../assets/projects/crypto-dashboard.png.png'
import invictusAdminDashboardImage from '../assets/projects/invictus-admin-dashboard.png.png'
import retificaDashboardImage from '../assets/projects/retifica-dashboard.png.png'
import { projects } from '../data/projects'

const notebookPhoneShowcases = {
  'Invictus Barber': {
    variant: 'invictus',
    notebookMockup: invictusNotebookMockup,
    phoneShowcase: invictusPhoneShowcase,
    phoneAlt: 'Invictus Barber mobile showcase',
  },
  'Lado a Lado': {
    variant: 'lado',
    notebookMockup: invictusNotebookMockup,
    phoneShowcase: ladoPhoneShowcase,
    phoneAlt: 'Lado a Lado mobile showcase',
  },
  'Au-Au / Dog do AuAu': {
    variant: 'auau',
    notebookMockup: invictusNotebookMockup,
    phoneShowcase: auauPhoneShowcase,
    phoneAlt: 'Dog do AuAu mobile showcase',
  },
}

const projectBrandAssets = {
  'Invictus Barber': {
    logo: invictusLogo,
    logoAlt: 'Invictus Barber Studio',
    logoVariant: 'invictus',
    title: 'Invictus Barber',
    logoAsTitle: true,
  },
  'Lado a Lado': {
    logo: ladoLogo,
    logoAlt: 'Lado a Lado',
    logoVariant: 'lado',
    title: 'Lado a Lado',
    logoAsTitle: true,
    subtitle: 'BARBEARIA CLÁSSICA COM IDENTIDADE MARCANTE',
  },
  'Au-Au / Dog do AuAu': {
    logoVariant: 'auau',
    title: 'Dog do AuAu',
  },
}

const systemProjects = [
  {
    id: 'barber-dashboard',
    index: '01',
    name: 'Barber Dashboard',
    short: 'Gestão operacional para barbearias premium.',
    eyebrow: 'Dashboard',
    kind: 'Sistema Web',
    area: 'Gestão',
    tone: 'gold',
    image: invictusAdminDashboardImage,
    imageAlt: 'Print do painel administrativo Invictus para gestão de barbearia',
    description:
      'Sistema de gestão para barbearia, com foco em agendamentos, clientes, barbeiros, horários, painel administrativo e controle operacional.',
    features: ['Agendamentos', 'Clientes', 'Barbeiros', 'Horários', 'Painel admin', 'Gestão operacional'],
    metrics: [
      ['Agenda', '86%'],
      ['Clientes', '248'],
      ['Receita', 'R$ 12k'],
    ],
    rows: ['Corte premium', 'Barba completa', 'Horario confirmado'],
    actions: [
      { label: 'Ver sistema', href: '#' },
      { label: 'Ver detalhes', href: '#' },
    ],
  },
  {
    id: 'retifica-os',
    index: '02',
    name: 'Retífica OS',
    short: 'Controle interno de produção e ordens de serviço.',
    eyebrow: 'Operacional',
    kind: 'Sistema Web',
    area: 'Produção',
    tone: 'copper',
    image: retificaDashboardImage,
    imageAlt: 'Print do sistema Retífica OS com painel operacional',
    description:
      'Sistema interno para retífica, focado em ordens de serviço, clientes, peças, status, etiquetas, financeiro e controle de produção.',
    features: ['Ordens de serviço', 'Clientes', 'Status', 'Etiquetas', 'Financeiro', 'Impressão', 'Produção'],
    metrics: [
      ['OS abertas', '34'],
      ['Producao', '71%'],
      ['Etiquetas', '128'],
    ],
    rows: ['Motor em analise', 'Pecas separadas', 'Financeiro pendente'],
    actions: [
      { label: 'Ver sistema', href: '#' },
      { label: 'Ver detalhes', href: '#' },
    ],
  },
  {
    id: 'crypto-dashboard',
    index: '03',
    name: 'Crypto Dashboard',
    short: 'Análise visual de ativos, cards e indicadores.',
    eyebrow: 'Analytics',
    kind: 'Dashboard',
    area: 'Tech',
    tone: 'violet',
    image: cryptoDashboardImage,
    imageAlt: 'Print do Crypto Dashboard com indicadores e gráficos',
    description:
      'Dashboard visual para acompanhamento de criptoativos, indicadores, cards financeiros e interface moderna de análise.',
    features: ['Dashboard', 'Criptomoedas', 'Indicadores', 'Cards financeiros', 'Interface analítica', 'Visual tech'],
    metrics: [
      ['BTC', '+4.8%'],
      ['Volume', '2.4M'],
      ['Risco', 'Medio'],
    ],
    rows: ['Bitcoin acumulando', 'Ethereum em alta', 'Liquidez monitorada'],
    actions: [
      { label: 'Ver sistema', href: '#' },
      { label: 'Ver detalhes', href: '#' },
    ],
  },
]

const getExternalLinkProps = (href) =>
  href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {}

function NotebookPhoneCaseShowcase({ project, showcase }) {
  const variantClass = `case-device-showcase--${showcase.variant}`

  return (
    <div
      className={`case-device-showcase ${variantClass} invictus-device-showcase`}
      aria-label={`Showcase responsivo do projeto ${project.title}`}
    >
      <span className="case-device-showcase__glow invictus-device-showcase__glow" aria-hidden="true" />
      <span className="case-device-showcase__floor invictus-device-showcase__floor" aria-hidden="true" />

      <div className="case-device-showcase__stage invictus-showcase-stage">
        <div className="case-device-showcase__laptop invictus-laptop-wrap">
          <img className="case-device-showcase__laptop-mockup invictus-laptop-mockup" src={showcase.notebookMockup} alt="" aria-hidden="true" />
          <div className="case-device-showcase__laptop-screen invictus-laptop-screen">
            <img src={project.devices.laptop.image} alt={project.devices.laptop.alt} />
          </div>
        </div>

        <div className="case-device-showcase__phone invictus-phone-wrap">
          <img
            className="case-device-showcase__phone-image invictus-phone-showcase"
            src={showcase.phoneShowcase}
            alt={showcase.phoneAlt}
          />
        </div>
      </div>
    </div>
  )
}

function ProjectShowcase({ index, project }) {
  const isReversed = index % 2 === 1
  const isFeatured = index === 0

  const getProjectTheme = (title) => {
    if (title.includes('Invictus')) return 'invictus'
    if (title.includes('Lado a Lado')) return 'lado'
    if (title.includes('Au-Au')) return 'auau'

    return 'default'
  }

  const notebookPhoneShowcase = notebookPhoneShowcases[project.title]
  const projectTheme = getProjectTheme(project.title)
  const brandAsset = projectBrandAssets[project.title]
  const projectTitle = brandAsset?.title ?? project.title
  const isInvictus = projectTheme === 'invictus'

  return (
    <article
      className={`project-case${isReversed ? ' project-case--reverse' : ''}${
        isFeatured ? ' project-case--featured' : ''
      } project-case--${isReversed ? 'reverse' : 'normal'} project-case--${projectTheme} project-theme--${projectTheme}`}
    >
      <span className="project-case__divider" aria-hidden="true" />

      <div className={`project-case__content${isInvictus ? ' project-case__content--invictus' : ''}`}>
        <div className="project-case__eyebrow">
          <span className="project-case__mark" aria-hidden="true" />
          <span className="project-case__index">0{index + 1}.</span>
          <p className="project-case__category">{project.category}</p>
        </div>

        {brandAsset?.logo && (
          <img
            className={`project-brand-logo project-brand-logo--${brandAsset.logoVariant} project-brand--${brandAsset.logoVariant}`}
            src={brandAsset.logo}
            alt={brandAsset.logoAlt}
          />
        )}

        <h3 className={brandAsset?.logoAsTitle ? 'project-case__title--logo-backed' : undefined}>
          {projectTitle}
        </h3>
        {brandAsset?.subtitle && <p className="project-brand-subtitle">{brandAsset.subtitle}</p>}
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

      <NotebookPhoneCaseShowcase project={project} showcase={notebookPhoneShowcase} />
    </article>
  )
}

function SystemScreenPreview({ system }) {
  return (
    <div className={`systems-display systems-display--${system.tone} systems-display--${system.id}`}>
      <div className="systems-display__chrome" aria-hidden="true">
        <span />
        <span />
        <span />
        <strong>{system.name}</strong>
      </div>

      <div className="systems-display__screen">
        {system.image ? (
          <img src={system.image} alt={system.imageAlt} />
        ) : (
          <div className="systems-display__empty" aria-hidden="true" />
        )}
      </div>
    </div>
  )
}

function SystemsHub() {
  const [activeSystemId, setActiveSystemId] = useState(systemProjects[0].id)
  const activeSystem = systemProjects.find((system) => system.id === activeSystemId) ?? systemProjects[0]

  return (
    <section className="systems-hub-section" aria-labelledby="systems-hub-title">
      <div className="systems-hub__header">
        <p className="systems-hub__kicker">// CONSOLE DE SISTEMAS CK</p>
        <h3 id="systems-hub-title">CENTRAL DE SISTEMAS</h3>
        <p>
          Sistemas reais desenvolvidos para gestão, operação e análise com interfaces prontas para uso.
        </p>
      </div>

      <div className="systems-hub">
        <div className="systems-hub__ambient" aria-hidden="true" />

        <div className="systems-hub__console">
        <div className="systems-hub__menu" role="tablist" aria-label="Sistemas">
          {systemProjects.map((system) => {
            const isActive = system.id === activeSystem.id

            return (
              <button
                aria-controls={`system-panel-${system.id}`}
                aria-selected={isActive}
                className={`systems-menu-item systems-menu-item--${system.tone}${isActive ? ' is-active' : ''}`}
                id={`system-tab-${system.id}`}
                key={system.id}
                onClick={() => setActiveSystemId(system.id)}
                role="tab"
                type="button"
              >
                <span className="systems-menu-item__icon" aria-hidden="true">
                  {system.index}
                </span>
                <span className="systems-menu-item__copy">
                  <strong>{system.name}</strong>
                  <small>{system.short}</small>
                </span>
                <span className="systems-menu-item__arrow" aria-hidden="true">
                  ›
                </span>
              </button>
            )
          })}

          <div className="systems-hub__status" aria-hidden="true">
            <span />
            <strong>Todos os sistemas</strong>
            <small>100% operacionais</small>
          </div>
        </div>

          <div className="systems-command">
          <article
            aria-labelledby={`system-tab-${activeSystem.id}`}
            className={`systems-panel systems-panel--${activeSystem.tone}`}
            id={`system-panel-${activeSystem.id}`}
            role="tabpanel"
          >
            <div className="systems-panel__intro">
              <div className="systems-panel__content">
                <span className="systems-panel__status">Sistema ativo</span>

                <h4>{activeSystem.name}</h4>
                <span className="systems-panel__underline" aria-hidden="true" />
                <p>{activeSystem.description}</p>

                <div className="systems-panel__meta">
                  <span>Status ativo</span>
                  <span>{activeSystem.kind}</span>
                  <span>{activeSystem.area}</span>
                </div>
              </div>
            </div>

            <div className="systems-panel__preview">
              <SystemScreenPreview system={activeSystem} />
            </div>

            <div className="systems-panel__features">
              <span>Recursos principais</span>
              {activeSystem.features.map((feature) => (
                <i key={feature}>{feature}</i>
              ))}
            </div>

            <div className="systems-panel__actions">
              {activeSystem.actions.map((action, index) => {
                const showArrow = index === 0 && !action.label.includes('→')

                return (
                  <a
                    className={index === 0 ? 'button button-primary' : 'button button-secondary'}
                    href={action.href}
                    key={action.label}
                    {...getExternalLinkProps(action.href)}
                  >
                    <span>{action.label}</span>
                    {showArrow && <span aria-hidden="true">{'→'}</span>}
                  </a>
                )
              })}
            </div>
          </article>
          </div>
        </div>
      </div>
    </section>
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
            Projetos como cases digitais
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

        <SystemsHub />

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
