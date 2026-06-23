import { useEffect, useState } from 'react'
import logoCabecalho from '../assets/logos/logo-cabecalho.png'

const whatsappUrl = 'https://wa.me/5567982094572'

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`site-header${isScrolled ? ' is-scrolled' : ''}`}>
      <div className="container header-container">
        <a className="brand" href="#inicio" aria-label="Coded by CK - Início">
          <img
            className="brand-mark"
            src={logoCabecalho}
            alt=""
            aria-hidden="true"
          />
        </a>

        <nav className="site-nav" aria-label="Navegação principal">
          <a href="#inicio">Início</a>
          <a href="#projetos">Projetos</a>
          <a href="#servicos">Serviços</a>
          <a href="#sobre">Sobre</a>
          <a href="#contato">Contato</a>
        </nav>

        <a
          className="header-action"
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
        >
          Chamar no WhatsApp
        </a>
      </div>
    </header>
  )
}

export default Header
