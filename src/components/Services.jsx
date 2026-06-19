import { services } from '../data/services'

function Services() {
  return (
    <section className="section content-section" id="servicos">
      <div className="container">
        <div className="section-heading">
          <p className="section-kicker">Serviços</p>
          <h2>Construção digital com intenção.</h2>
        </div>

        <div className="card-grid">
          {services.map((service, index) => (
            <article
              className="glass-card service-card reveal"
              style={{ '--reveal-delay': `${index * 70}ms` }}
              key={service.title}
            >
              <span className="card-icon">{service.icon}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
