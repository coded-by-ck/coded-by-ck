import { processSteps } from '../data/processSteps'

function Process() {
  return (
    <section className="section content-section">
      <div className="container">
        <div className="section-heading">
          <p className="section-kicker">Processo</p>
          <h2>Da ideia ao deploy com direção.</h2>
        </div>

        <div className="process-timeline">
          {processSteps.map((step, index) => (
            <article
              className="process-step reveal"
              style={{ '--reveal-delay': `${index * 70}ms` }}
              key={step.title}
            >
              <span className="process-number">{String(index + 1).padStart(2, '0')}</span>
              <div>
                <span className="process-label">{step.label}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                <small>{step.detail}</small>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process
