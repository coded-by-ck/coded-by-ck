import { useState } from 'react'
import { clientModes } from '../data/clientModes'

const whatsappUrl = 'https://wa.me/5567982094572'

function ClientMode() {
  const [selectedModeId, setSelectedModeId] = useState('barbearia')
  const selectedMode =
    clientModes.find((mode) => mode.id === selectedModeId) ?? clientModes[0]

  return (
    <section className="section content-section client-mode-section">
      <div className="container">
        <div className="section-heading">
          <p className="section-kicker">Modo cliente</p>
          <h2>Modo cliente</h2>
          <p>
            Escolha seu tipo de negócio e veja como eu pensaria uma solução
            digital para ele.
          </p>
        </div>

        <div className="client-mode-layout">
          <div className="client-mode-options" aria-label="Tipos de negócio">
            <p className="client-mode-options-label">Escolha o cenário</p>
            {clientModes.map((mode, index) => {
              const isActive = mode.id === selectedModeId

              return (
                <button
                  className={`client-mode-card reveal${isActive ? ' is-active' : ''}`}
                  style={{ '--reveal-delay': `${index * 60}ms` }}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setSelectedModeId(mode.id)}
                  key={mode.id}
                >
                  <span className="client-mode-card-index">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span>{mode.label}</span>
                </button>
              )
            })}
          </div>

          <article
            className="client-mode-panel reveal"
            aria-labelledby="client-mode-title"
            aria-live="polite"
          >
            <p className="panel-label">Solução pensada</p>
            <span className="client-mode-panel-status">Simulador ativo</span>
            <h3 id="client-mode-title">{selectedMode.title}</h3>
            <p>{selectedMode.description}</p>

            <p className="panel-section-label">Pontos principais</p>
            <ul>
              {selectedMode.benefits.map((benefit) => (
                <li key={benefit}>{benefit}</li>
              ))}
            </ul>

            <div className="client-mode-result">
              <span>Resultado esperado</span>
              <p>{selectedMode.result}</p>
            </div>

            <a
              className="button button-primary client-mode-cta"
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
            >
              Quero uma solução assim
            </a>
          </article>
        </div>
      </div>
    </section>
  )
}

export default ClientMode
