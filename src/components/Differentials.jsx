import { differentials } from '../data/differentials'

function Differentials() {
  return (
    <section className="section content-section" id="sobre">
      <div className="container">
        <div className="section-heading">
          <p className="section-kicker">Diferenciais</p>
          <h2>O que eu faço diferente</h2>
          <p className="section-support">
            Projeto com estética, estratégia e código pensando no valor real para o negócio.
          </p>
        </div>

        <div className="card-grid">
          {differentials.map((differential, index) => (
            <article
              className="glass-card differential-card reveal"
              style={{ '--reveal-delay': `${index * 70}ms` }}
              key={differential.title}
            >
              <div className="differential-card-top">
                <span className="symbol-icon">{differential.icon}</span>
                <span className="differential-tag">{differential.tag}</span>
              </div>
              <h3>{differential.title}</h3>
              <p>{differential.description}</p>
              <strong>{differential.detail}</strong>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Differentials
