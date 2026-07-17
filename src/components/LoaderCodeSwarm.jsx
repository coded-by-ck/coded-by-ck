import '../styles/loader-code-swarm.css'
import logoCabecalho from '../assets/logos/logo-cabecalho.png'

const codeSwarm = [
  { text: '< />', orbit: '118px', angle: '-8deg', size: '0.72rem', delay: '0s' },
  { text: 'const', orbit: '172px', angle: '22deg', size: '0.64rem', delay: '0.12s' },
  { text: '01', orbit: '136px', angle: '50deg', size: '0.72rem', delay: '0.22s' },
  { text: '{ }', orbit: '198px', angle: '76deg', size: '0.66rem', delay: '0.04s' },
  { text: 'api', orbit: '150px', angle: '106deg', size: '0.62rem', delay: '0.28s' },
  { text: 'function', orbit: '214px', angle: '135deg', size: '0.58rem', delay: '0.16s' },
  { text: 'UI', orbit: '126px', angle: '164deg', size: '0.7rem', delay: '0.36s' },
  { text: 'deploy', orbit: '184px', angle: '196deg', size: '0.6rem', delay: '0.1s' },
  { text: 'npm', orbit: '146px', angle: '225deg', size: '0.64rem', delay: '0.42s' },
  { text: 'CK', orbit: '220px', angle: '252deg', size: '0.68rem', delay: '0.18s' },
  { text: '</>', orbit: '132px', angle: '282deg', size: '0.72rem', delay: '0.3s' },
  { text: 'root', orbit: '192px', angle: '312deg', size: '0.58rem', delay: '0.46s' },
  { text: 'git', orbit: '158px', angle: '338deg', size: '0.62rem', delay: '0.24s' },
  { text: 'build', orbit: '204px', angle: '356deg', size: '0.58rem', delay: '0.34s' },
  { text: '404', orbit: '112px', angle: '242deg', size: '0.56rem', delay: '0.2s' },
  { text: 'run()', orbit: '166px', angle: '118deg', size: '0.58rem', delay: '0.4s' },
]

const statusMessages = [
  'BUILDING DIGITAL EXPERIENCE',
  'CODED BY CK',
  'INTERFACE READY',
]

function Loader() {
  return (
    <div className="ck-loader ck-code-swarm" role="status" aria-label="Inicializando interface Coded by CK">
      <div className="ck-code-swarm__grid" aria-hidden="true" />
      <div className="ck-code-swarm__glow" aria-hidden="true" />
      <div className="ck-code-swarm__scan" aria-hidden="true" />

      <main className="ck-code-swarm__core">
        <div className="ck-code-swarm__orbit" aria-hidden="true">
          {codeSwarm.map((item) => (
            <span
              className="ck-code-swarm__token"
              key={`${item.text}-${item.angle}`}
              style={{
                '--orbit': item.orbit,
                '--angle': item.angle,
                '--size': item.size,
                '--delay': item.delay,
              }}
            >
              {item.text}
            </span>
          ))}
        </div>

        <span className="ck-code-swarm__ring ck-code-swarm__ring--outer" aria-hidden="true" />
        <span className="ck-code-swarm__ring ck-code-swarm__ring--inner" aria-hidden="true" />

        <span className="ck-code-swarm__brand">
          <img src={logoCabecalho} alt="Coded by CK" />
        </span>

        <div className="ck-code-swarm__status" aria-hidden="true">
          {statusMessages.map((message) => (
            <span key={message}>{message}</span>
          ))}
        </div>

        <div className="ck-code-swarm__progress" aria-hidden="true">
          <i />
        </div>
      </main>

      <span className="ck-code-swarm__sr">Coded by CK interface ready</span>
    </div>
  )
}

export default Loader
