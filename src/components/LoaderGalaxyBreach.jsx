import '../styles/loader-galaxy-breach.css'
import logoCabecalho from '../assets/logos/logo-cabecalho.png'

const codeSignals = [
  { text: 'const portfolio = "Coded by CK";', x: '7%', y: '18%', drift: '36px', delay: '0.1s' },
  { text: 'function initInterface() {}', x: '62%', y: '14%', drift: '-42px', delay: '0.35s' },
  { text: 'npm run build', x: '76%', y: '31%', drift: '30px', delay: '0.65s' },
  { text: 'git push origin main', x: '11%', y: '43%', drift: '-28px', delay: '0.5s' },
  { text: '<HeroSection />', x: '70%', y: '56%', drift: '38px', delay: '0.18s' },
  { text: '<ProjectsSection />', x: '14%', y: '66%', drift: '34px', delay: '0.82s' },
  { text: 'deploy.status = "ready";', x: '54%', y: '78%', drift: '-36px', delay: '0.28s' },
  { text: 'system.boot("ck-portfolio");', x: '31%', y: '28%', drift: '32px', delay: '0.74s' },
  { text: 'api.connect("/coded-by-ck");', x: '81%', y: '74%', drift: '-30px', delay: '1.02s' },
  { text: 'interface.ready = true;', x: '5%', y: '82%', drift: '26px', delay: '1.12s' },
]

const dataNodes = Array.from({ length: 22 }, (_, index) => ({
  id: `node-${index}`,
  style: {
    '--x': `${4 + ((index * 23) % 92)}%`,
    '--y': `${5 + ((index * 37) % 88)}%`,
    '--size': `${index % 6 === 0 ? 3 : index % 3 === 0 ? 2 : 1}px`,
    '--delay': `${(index % 9) * 0.12}s`,
  },
}))

const statusMessages = ['BUILDING DIGITAL EXPERIENCE', 'INTERFACE READY']

function Loader() {
  return (
    <div className="ck-loader ck-galaxy-breach" role="status" aria-label="Inicializando interface Coded by CK">
      <div className="ck-galaxy-breach__nebula" aria-hidden="true" />
      <div className="ck-galaxy-breach__grid" aria-hidden="true" />
      <div className="ck-galaxy-breach__scan ck-galaxy-breach__scan--horizontal" aria-hidden="true" />
      <div className="ck-galaxy-breach__scan ck-galaxy-breach__scan--diagonal" aria-hidden="true" />

      <div className="ck-galaxy-breach__nodes" aria-hidden="true">
        {dataNodes.map((node) => (
          <span key={node.id} style={node.style} />
        ))}
      </div>

      <div className="ck-galaxy-breach__code-field" aria-hidden="true">
        {codeSignals.map((signal) => (
          <span
            key={signal.text}
            className="ck-galaxy-breach__code"
            style={{
              '--x': signal.x,
              '--y': signal.y,
              '--drift': signal.drift,
              '--delay': signal.delay,
            }}
          >
            {signal.text}
          </span>
        ))}
      </div>

      <main className="ck-galaxy-breach__core">
        <span className="ck-galaxy-breach__halo ck-galaxy-breach__halo--outer" aria-hidden="true" />
        <span className="ck-galaxy-breach__halo ck-galaxy-breach__halo--inner" aria-hidden="true" />

        <span className="ck-galaxy-breach__brand">
          <img src={logoCabecalho} alt="Coded by CK" />
        </span>

        <div className="ck-galaxy-breach__status" aria-hidden="true">
          {statusMessages.map((message) => (
            <span key={message}>{message}</span>
          ))}
        </div>

        <div className="ck-galaxy-breach__progress" aria-hidden="true">
          <i />
        </div>
      </main>

      <span className="ck-galaxy-breach__sr">Coded by CK interface ready</span>
    </div>
  )
}

export default Loader
