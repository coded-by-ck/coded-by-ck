import '../styles/loader.css'

const systemLogs = [
  'ck@root:~$ breach --cosmic-shell',
  'trace.node[042] :: masked',
  'hash: 9C11_A7F9_FF03',
  'inject(CK_PAYLOAD, universe.memory)',
  'firewall.status = bypassed',
  'interface://coded-by-ck/online',
  'root_access :: granted',
  'visual_core.override = true',
]

const scanTags = ['TRACE', 'DECRYPT', 'INJECT', 'OVERRIDE', 'ROOT', 'CK']

const dataStreams = [
  'SIGNAL_INTERCEPTED',
  'TARGET_LOCKED',
  'BREACH_ACTIVE',
  '0xCK13',
  'ROOT_ACCESS',
  'A7F9',
  'PAYLOAD_ARMED',
  'SYSTEM_OVERRIDE',
  'FF03',
  'ACCESS_GRANTED',
  'cipher.rotate()',
  'BREACH_PROTOCOL',
  'CK_INTERFACE',
  'CK_INTERFACE_ONLINE',
  'E1B4',
]

const galaxyArms = Array.from({ length: 260 }, (_, index) => {
  const arm = index % 2
  const step = Math.floor(index / 2)
  const radius = 28 + step * 4.2
  const spiral = step * 8.7
  const jitter = ((step * 19) % 13) - 6
  const angle = arm * 180 + spiral + jitter
  const size = step < 14 ? 4.8 : step % 9 === 0 ? 3.4 : step % 4 === 0 ? 2.7 : 1.9
  const color = step % 10 === 0 ? '#d8f8ff' : arm === 0 ? '#ff2d4d' : '#b45cff'

  return {
    id: `cosmic-arm-${index}`,
    className: `cosmic-arm__particle cosmic-arm__particle--${arm === 0 ? 'red' : 'violet'}`,
    style: {
      '--angle': `${angle}deg`,
      '--radius': `${radius}px`,
      '--size': `${size}px`,
      '--z': `${-120 + (step % 36) * 7}px`,
      '--color': color,
      '--delay': `${(step % 18) * 0.045}s`,
    },
  }
})

const starField = Array.from({ length: 360 }, (_, index) => {
  const angle = (index * 137.5 + (index % 11) * 7) % 360
  const radius = 30 + ((index * 47) % 720)
  const size = index % 31 === 0 ? 3.2 : index % 13 === 0 ? 2.1 : index % 5 === 0 ? 1.45 : 1
  const color = index % 17 === 0 ? '#d2f7ff' : index % 19 === 0 ? '#fff' : index % 7 === 0 ? '#ff96aa' : '#ffe5ee'

  return {
    id: `cosmic-star-${index}`,
    style: {
      '--angle': `${angle}deg`,
      '--radius': `${radius}px`,
      '--size': `${size}px`,
      '--z': `${-260 + ((index * 23) % 520)}px`,
      '--color': color,
      '--delay': `${(index % 24) * 0.04}s`,
    },
  }
})

const cosmicDust = Array.from({ length: 150 }, (_, index) => {
  const angle = (index * 43 + (index % 6) * 17) % 360
  const radius = 72 + ((index * 37) % 620)

  return {
    id: `cosmic-dust-${index}`,
    style: {
      '--angle': `${angle}deg`,
      '--radius': `${radius}px`,
      '--length': `${26 + ((index * 9) % 72)}px`,
      '--z': `${-240 + ((index * 29) % 480)}px`,
      '--color': index % 4 === 0 ? 'rgba(255, 34, 68, 0.72)' : index % 3 === 0 ? 'rgba(180, 92, 255, 0.68)' : 'rgba(210, 247, 255, 0.42)',
      '--delay': `${(index % 18) * 0.05}s`,
    },
  }
})

const codeFragments = Array.from({ length: 38 }, (_, index) => {
  const labels = ['CK_PAYLOAD', 'ROOT_ACCESS', 'SYSTEM_OVERRIDE', 'ACCESS_GRANTED', '0xCK_PROTOCOL', 'BREACH_ACTIVE', 'sha256:8f13', 'TRACE_MASKED']
  const angle = (index * 37 + 12) % 360
  const mid = angle + 52
  const end = angle + 128

  return {
    id: `code-fragment-${index}`,
    text: labels[index % labels.length],
    style: {
      '--angle': `${angle}deg`,
      '--angle-mid': `${mid}deg`,
      '--angle-end': `${end}deg`,
      '--radius': `${240 + ((index * 31) % 470)}px`,
      '--radius-mid': `${112 + ((index * 17) % 160)}px`,
      '--delay': `${0.18 + (index % 14) * 0.09}s`,
    },
  }
})

const hudMetrics = [
  ['SIGNAL', 'INTERCEPTED'],
  ['TARGET', 'LOCKED'],
  ['BREACH', 'ACTIVE'],
  ['CK_INTERFACE', 'ONLINE'],
  ['TRACE', 'MASKED'],
]

function Loader() {
  return (
    <div className="ck-loader ck-loader--cosmic" role="status" aria-label="Inicializando interface Coded by CK">
      <div className="ck-loader__noise" aria-hidden="true" />
      <div className="cosmic-grid" aria-hidden="true" />
      <div className="cosmic-scan" aria-hidden="true" />

      <div className="cosmic-galaxy" aria-hidden="true">
        <span className="cosmic-nebula cosmic-nebula--red" />
        <span className="cosmic-nebula cosmic-nebula--violet" />
        <div className="cosmic-stars">
          {starField.map((star) => (
            <span className="cosmic-star" key={star.id} style={star.style} />
          ))}
        </div>
        <div className="cosmic-dust">
          {cosmicDust.map((dust) => (
            <span className="cosmic-dust__particle" key={dust.id} style={dust.style} />
          ))}
        </div>
        <div className="cosmic-arm cosmic-arm--red">
          {galaxyArms.filter((particle) => particle.className.includes('red')).map((particle) => (
            <span className={particle.className} key={particle.id} style={particle.style} />
          ))}
        </div>
        <div className="cosmic-arm cosmic-arm--violet">
          {galaxyArms.filter((particle) => particle.className.includes('violet')).map((particle) => (
            <span className={particle.className} key={particle.id} style={particle.style} />
          ))}
        </div>
        <span className="cosmic-core" />
      </div>

      <div className="code-gravity" aria-hidden="true">
        {codeFragments.map((fragment) => (
          <span className="code-gravity__fragment" key={fragment.id} style={fragment.style}>
            {fragment.text}
          </span>
        ))}
      </div>

      <div className="loader-hud loader-hud--left" aria-hidden="true">
        <span>CK BREACH PROTOCOL</span>
        {hudMetrics.map(([label, value]) => (
          <b key={label}>{label}: {value}</b>
        ))}
      </div>

      <div className="loader-hud loader-hud--right" aria-hidden="true">
        <span>SYSTEM TRACE</span>
        {systemLogs.slice(2, 6).map((line) => (
          <b key={line}>{line}</b>
        ))}
      </div>

      <div className="loader-terminal" aria-hidden="true">
        {systemLogs.map((line) => (
          <span key={line}>{line}</span>
        ))}
      </div>

      <div className="loader-stream" aria-hidden="true">
        {dataStreams.map((item, index) => (
          <span key={`${item}-${index}`}>{item}</span>
        ))}
      </div>

      <main className="loader-core" aria-hidden="true">
        <span className="loader-core__eyebrow">CK BREACH PROTOCOL</span>
        <span className="loader-core__mark">CK</span>
        <h1>CK SYSTEM OVERRIDE</h1>
        <p>CODED BY CK</p>
        <div className="loader-core__tags">
          {scanTags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <div className="loader-core__progress">
          <i />
        </div>
      </main>

      <span className="ck-loader__final-flash" aria-hidden="true">WELCOME TO CK INTERFACE</span>
      <span className="ck-loader__sr">Coded by CK interface online</span>
    </div>
  )
}

export default Loader
