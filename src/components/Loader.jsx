import '../styles/loader.css'

const terminalLines = [
  'SIGNAL_INTERCEPTED',
  'TARGET_LOCKED',
  'SCANNING_SOURCE_NODES...',
  'INJECTING_CK_PAYLOAD',
  'FIREWALL_BYPASSED',
  'ROOT_ACCESS_GRANTED',
  'SYSTEM_OVERRIDE',
]

const codeBlocks = [
  'sudo ck --breach /visual-firewall',
  'hash = 0x9C11_A7F9_FF03',
  'inject(CK_PAYLOAD, viewport.memory)',
  '<CodedByCK protocol="override" />',
]

const leftMetrics = [
  ['TRACE', 'MASKED'],
  ['SOURCE', 'LOCKED'],
  ['PORT 443', 'OPEN'],
]

const rightEvents = [
  'sha256:8f13.ck.0a91',
  '/usr/ck/root/override',
  'payload checksum valid',
  'CK_INTERFACE_ONLINE',
]

const dataStream = [
  'SIGNAL_INTERCEPTED',
  'A7F9',
  'ROOT_ACCESS',
  'INJECTING_CK_PAYLOAD',
  '9C11',
  'FIREWALL_BYPASSED',
  'TARGET_LOCKED',
  'FF03',
  'cipher.rotate()',
  'SYSTEM_OVERRIDE',
  'E1B4',
  'ACCESS_GRANTED',
]

const orbitLabels = ['SCAN', 'BREACH', 'DECRYPT', 'OVERRIDE']

const ambientLogs = [
  'ck@root:~$ trace --mask visitor',
  'packet[042] :: source.node.locked',
  'decrypt block 8f13: accepted',
  'visual_firewall.status = compromised',
  'payload://ck/interface/online',
  'force_access --grant CK',
]

const particles = Array.from({ length: 14 }, (_, index) => `particle-${index}`)

const vortexCodes = [
  { text: 'CK_PAYLOAD', angle: '0deg', mid: '88deg', end: '140deg', radius: '172px', midRadius: '100px', delay: '0.28s' },
  { text: 'ROOT_ACCESS', angle: '58deg', mid: '146deg', end: '198deg', radius: '142px', midRadius: '82px', delay: '0.46s' },
  { text: 'SYSTEM_OVERRIDE', angle: '122deg', mid: '210deg', end: '262deg', radius: '184px', midRadius: '106px', delay: '0.64s' },
  { text: '0xCK13', angle: '194deg', mid: '282deg', end: '334deg', radius: '124px', midRadius: '72px', delay: '0.82s' },
  { text: 'BYPASS', angle: '254deg', mid: '342deg', end: '394deg', radius: '162px', midRadius: '94px', delay: '1s' },
  { text: 'ACCESS_GRANTED', angle: '310deg', mid: '398deg', end: '450deg', radius: '148px', midRadius: '86px', delay: '1.18s' },
]

const vortexSparks = Array.from({ length: 10 }, (_, index) => `vortex-spark-${index}`)

function Loader() {
  return (
    <div className="ck-loader" role="status" aria-label="Inicializando interface Coded by CK">
      <div className="ck-loader__noise" aria-hidden="true" />
      <div className="ck-loader__floor" aria-hidden="true" />
      <div className="ck-loader__circuits" aria-hidden="true" />
      <div className="ck-loader__ambient" aria-hidden="true">
        {ambientLogs.map((line) => (
          <span key={line}>{line}</span>
        ))}
      </div>
      <div className="ck-loader__particles" aria-hidden="true">
        {particles.map((particle) => (
          <span key={particle} />
        ))}
      </div>
      <div className="ck-loader__stream" aria-hidden="true">
        {dataStream.map((item, index) => (
          <span key={`${item}-${index}`}>{item}</span>
        ))}
      </div>

      <div className="ck-loader__stage" aria-hidden="true">
        <div className="ck-loader__halo">
          {orbitLabels.map((label) => (
            <span key={label}>{label}</span>
          ))}
        </div>

        <div className="ck-loader__panel ck-loader__panel--left">
          <div className="ck-loader__panel-top">
            <span>SOURCE SCAN</span>
            <span>LIVE</span>
          </div>
          <div className="ck-loader__radar">
            <span />
            <span />
            <span />
          </div>
          <div className="ck-loader__metrics">
            {leftMetrics.map(([label, value]) => (
              <span key={label}>
                <b>{label}</b>
                {value}
              </span>
            ))}
          </div>
        </div>

        <div className="ck-loader__panel ck-loader__panel--right">
          <div className="ck-loader__panel-top">
            <span>CK MONITOR</span>
            <span>ROOT</span>
          </div>
          <div className="ck-loader__bars">
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className="ck-loader__events">
            {rightEvents.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </div>
        </div>

        <section className="ck-loader__dashboard">
          <div className="ck-loader__dashboard-top">
            <span>CK BREACH PROTOCOL</span>
            <span>ENCRYPTED SESSION</span>
          </div>

          <div className="ck-loader__identity">
            <div className="ck-loader__vortex">
              <span className="ck-loader__vortex-ring ck-loader__vortex-ring--outer" />
              <span className="ck-loader__vortex-ring ck-loader__vortex-ring--mid" />
              <span className="ck-loader__vortex-ring ck-loader__vortex-ring--inner" />
              <span className="ck-loader__vortex-ring ck-loader__vortex-ring--blade" />
              <span className="ck-loader__vortex-ring ck-loader__vortex-ring--signal" />
              <span className="ck-loader__vortex-core" />
              {vortexCodes.map((code) => (
                <span
                  className="ck-loader__vortex-code"
                  key={code.text}
                  style={{
                    '--angle': code.angle,
                    '--angle-mid': code.mid,
                    '--angle-end': code.end,
                    '--radius': code.radius,
                    '--radius-mid': code.midRadius,
                    animationDelay: code.delay,
                  }}
                >
                  {code.text}
                </span>
              ))}
              {vortexSparks.map((spark) => (
                <span className="ck-loader__vortex-spark" key={spark} />
              ))}
            </div>
            <span className="ck-loader__eyebrow">CK BREACH PROTOCOL</span>
            <span className="ck-loader__mark">CK</span>
            <span className="ck-loader__headline">CK SYSTEM OVERRIDE</span>
            <span className="ck-loader__confirmation">ACCESS GRANTED BY CK</span>
          </div>

          <div className="ck-loader__status-grid">
            <div className="ck-loader__terminal">
              {terminalLines.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </div>

            <div className="ck-loader__code">
              {codeBlocks.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </div>
          </div>

          <div className="ck-loader__progress">
            <span>VISUAL STATUS</span>
            <i />
            <span>100%</span>
          </div>
        </section>
      </div>

      <span className="ck-loader__final-flash" aria-hidden="true">WELCOME TO CK INTERFACE</span>

      <span className="ck-loader__sr">Coded by CK interface online</span>
    </div>
  )
}

export default Loader
