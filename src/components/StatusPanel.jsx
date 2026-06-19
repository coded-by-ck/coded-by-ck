const statusItems = [
  'Visual',
  'Responsivo ativo',
  'Código limpo',
  'Performance',
  'Identidade própria',
]

function StatusPanel() {
  return (
    <aside className="status-panel">
      <div className="status-panel-header">
        <h2>CK SYSTEM STATUS</h2>
        <span>ONLINE</span>
      </div>

      <div className="status-list">
        {statusItems.map((item) => (
          <div className="status-item" key={item}>
            <div className="status-meta">
              <span>{item}</span>
              <strong>100%</strong>
            </div>
            <div className="progress-track" aria-hidden="true">
              <div className="progress-bar" />
            </div>
          </div>
        ))}
      </div>

      <div className="status-footer">
        <span>Deploy contínuo</span>
        <span>v2.5.1</span>
      </div>
    </aside>
  )
}

export default StatusPanel
