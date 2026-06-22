import StatusPanel from './StatusPanel'
import logoHero from '../assets/logos/logo-hero.png'

const whatsappUrl = 'https://wa.me/5567982094572'

function Hero() {
  return (
    <section className="hero-section" id="inicio">
      <div className="container hero-grid">
        <div className="hero-copy hero-left">
          <p className="section-kicker">PORTFÓLIO PESSOAL</p>
          <h1 className="hero-title">
            <span className="hero-title-prefix">Coded by</span>
            <img className="hero-logo" src={logoHero} alt="CK" />
          </h1>
          <p className="hero-subtitle">
            Sites, sistemas e experiências digitais que impulsionam negócios e
            constroem marca.
          </p>

          <div className="hero-actions" aria-label="Ações principais">
            <a className="button button-primary" href="#projetos">
              Ver projetos
            </a>
            <a
              className="button button-secondary"
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
            >
              Chamar no WhatsApp
            </a>
          </div>

          <ul className="terminal-list" aria-label="Status de operação">
            <li>&gt; estética carregada</li>
            <li>&gt; função ativada</li>
            <li>&gt; presença digital online</li>
            <li>&gt; código limpo, resultado real.</li>
          </ul>
        </div>

        <div className="hero-panel hero-right" aria-label="Painel de status do sistema">
          <StatusPanel />
        </div>
      </div>
    </section>
  )
}

export default Hero
