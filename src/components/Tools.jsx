import { tools } from '../data/tools'

function Tools() {
  return (
    <section className="section content-section">
      <div className="container">
        <div className="section-heading">
          <p className="section-kicker">Ferramentas</p>
          <h2>Stack prática para entregar bem.</h2>
        </div>

        <div className="tools-grid">
          {tools.map((group, index) => (
            <article
              className="glass-card tool-card reveal"
              style={{ '--reveal-delay': `${index * 70}ms` }}
              key={group.title}
            >
              <div className="tool-card-top">
                <span>{group.code}</span>
                <small>{String(index + 1).padStart(2, '0')}</small>
              </div>
              <h3>{group.title}</h3>
              <p>{group.description}</p>
              <ul className="tool-list">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Tools
