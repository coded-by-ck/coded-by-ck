const whatsappUrl = 'https://wa.me/5567982094572'
const instagramUrl = 'https://www.instagram.com/codedby.ck/'

function Footer() {
  return (
    <footer className="site-footer" id="contato">
      <div className="container footer-container">
        <div className="footer-cta reveal">
          <p className="section-kicker">Contato</p>
          <h2>Bora construir?</h2>
          <p>
            Tem um site, um projeto ou só quer tirar do papel? Me chama e vamos
            criar algo épico.
          </p>

          <div className="footer-actions">
            <a
              className="button button-primary"
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
            >
              Chamar no WhatsApp
            </a>
            <a
              className="button button-secondary"
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
            >
              Ver Instagram
            </a>
          </div>
        </div>

        <p className="footer-copy">
          © 2026 Coded by CK. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}

export default Footer
