import { STATS } from '@/data/portfolio'

export default function About() {
  return (
    <div className="sw">
      <div className="about-grid">
        <div className="about-text reveal-left">
          <div className="sec-label">// sobre mim</div>
          <h2 className="sec-title">Quem sou eu</h2>
          <p>
            Sou <span className="hl">Senior Frontend Engineer</span> e{' '}
            <span className="hl">Tech Lead</span> com mais de 6 anos de experiência
            construindo interfaces de alto impacto para empresas de grande porte como{' '}
            <span className="hl">Bradesco</span>, <span className="hl">NTT DATA</span> e{' '}
            <span className="hl">Accenture</span>.
          </p>
          <p>
            Especialista em <span className="hl">React.js</span>,{' '}
            <span className="hl">Next.js</span>, <span className="hl">Angular</span> e{' '}
            <span className="hl">Vue.js</span>, com sólida atuação em arquitetura frontend,
            performance, segurança e entrega contínua em ambientes bancários e corporativos.
          </p>
          <p>
            Além de codar, <span className="hl">lidero times</span>, facilito workshops
            técnicos e contribuo estrategicamente para produtos digitais de escala global —
            com foco em qualidade, mentoria e boas práticas.
          </p>
        </div>

        <div className="stats-grid reveal-right">
          {STATS.map(({ target, label }) => (
            <div key={label} className="stat-card">
              <span className="stat-num" data-target={target}>0</span>
              <div className="stat-lbl">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
