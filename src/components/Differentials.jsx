import { differentials } from '../data/differentials'

function Differentials() {
  return (
    <section className="section content-section" id="sobre">
      <div className="container">
        <div className="section-heading">
          <p className="section-kicker">Diferenciais</p>
          <h2>Design, código e leitura de negócio.</h2>
        </div>

        <div className="card-grid">
          {differentials.map((differential, index) => (
            <article
              className="glass-card differential-card reveal"
              style={{ '--reveal-delay': `${index * 70}ms` }}
              key={differential.title}
            >
              <span className="symbol-icon">{differential.icon}</span>
              <h3>{differential.title}</h3>
              <p>{differential.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Differentials
