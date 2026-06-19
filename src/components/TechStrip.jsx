const technologies = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Firebase',
  'GitHub Pages',
  'VS Code',
]

function TechStrip() {
  return (
    <section className="tech-strip" aria-label="Tecnologias e ferramentas">
      <div className="container tech-strip-container">
        <p>TECNOLOGIAS &amp; FERRAMENTAS</p>
        <ul>
          {technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default TechStrip
