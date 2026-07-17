import { useEffect, useState } from 'react'
import logoCabecalho from '../assets/logos/logo-cabecalho.png'

const whatsappUrl = 'https://wa.me/5567982094572'

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!isMenuOpen) return undefined

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
      }
    }

    const handleResize = () => {
      if (window.innerWidth > 860) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('resize', handleResize)
    }
  }, [isMenuOpen])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className={`site-header${isScrolled ? ' is-scrolled' : ''}${isMenuOpen ? ' is-menu-open' : ''}`}>
      <div className="container header-container">
        <a className="brand" href="#inicio" aria-label="Coded by CK - Inicio" onClick={closeMenu}>
          <img
            className="brand-mark"
            src={logoCabecalho}
            alt=""
            aria-hidden="true"
          />
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-controls="site-navigation"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>

        <nav
          className={`site-nav${isMenuOpen ? ' is-open' : ''}`}
          id="site-navigation"
          aria-label="Navegacao principal"
        >
          <a href="#inicio" onClick={closeMenu}>Inicio</a>
          <a href="#projetos" onClick={closeMenu}>Projetos</a>
          <a href="#servicos" onClick={closeMenu}>Servicos</a>
          <a href="#sobre" onClick={closeMenu}>Sobre</a>
          <a href="#contato" onClick={closeMenu}>Contato</a>
        </nav>

        <a
          className="header-action"
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          onClick={closeMenu}
        >
          Chamar no WhatsApp
        </a>
      </div>
    </header>
  )
}

export default Header
