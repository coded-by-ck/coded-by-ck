import { services } from '../data/services'

const whatsappUrl = 'https://wa.me/5567982094572'

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
              <div className="service-card-top">
                <span className="card-icon">{service.icon}</span>
                <span className="service-tag">{service.tag}</span>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="service-benefits" aria-label={`Entregas de ${service.title}`}>
                {service.benefits.map((benefit) => (
                  <li key={benefit}>{benefit}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="services-cta reveal">
          <p>Quer transformar sua ideia em presença digital?</p>
          <a
            className="button button-primary"
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
          >
            Chamar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}

export default Services
