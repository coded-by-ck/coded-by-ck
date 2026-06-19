import StatusPanel from './StatusPanel'

function Hero() {
  return (
    <section className="hero-section" id="inicio">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="section-kicker">PORTFÓLIO PESSOAL</p>
          <h1>
            Coded by <span>CK</span>
          </h1>
          <p className="hero-subtitle">
            Sites, sistemas e experiências digitais que impulsionam negócios e
            constroem marca.
          </p>

          <div className="hero-actions" aria-label="Ações principais">
            <a className="button button-primary" href="#projetos">
              Ver projetos
            </a>
            <a className="button button-secondary" href="#contato">
              Chamar no WhatsApp
            </a>
          </div>

          <ul className="terminal-list" aria-label="Status de operação">
            <li>&gt; estratégia carregada</li>
            <li>&gt; função ativa</li>
            <li>&gt; presença digital online</li>
          </ul>
        </div>

        <div className="hero-panel" aria-label="Painel de status do sistema">
          <StatusPanel />
        </div>
      </div>
    </section>
  )
}

export default Hero
