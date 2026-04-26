import { EXPERIENCE } from '@/data/portfolio'

export default function Experience() {
  return (
    <div className="sw" id="experience">
      <div className="reveal">
        <div className="sec-label">// trajetória</div>
        <h2 className="sec-title">Experiência Profissional</h2>
      </div>

      <div className="timeline">
        {EXPERIENCE.map((item, index) => (
          <div key={index} className="tl-item reveal">
            <div className="tl-card">
              <div className="tl-period">{item.period}</div>
              <div className="tl-company">{item.company}</div>
              <div className="tl-role">{item.role}</div>
              <div className="tl-desc">{item.description}</div>
              <div className="tags">
                {item.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
