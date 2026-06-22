import cardStatus from '../assets/card-status.png'

function StatusPanel() {
  return (
    <div className="hero-status-visual">
      <div className="hero-status-image-wrap">
        <img
          className="hero-status-image"
          src={cardStatus}
          alt="CK System Status"
        />
      </div>
    </div>
  )
}

export default StatusPanel
