import { SKILLS } from '@/data/portfolio'

export default function Skills() {
  return (
    <div className="sw" id="skills">
      <div className="skills-section reveal">
        <div className="sec-label">// habilidades</div>
        <h2 className="sec-title">Stack Técnico</h2>
        <div className="skills-grid">
          {SKILLS.map(({ icon, name, level }) => (
            <div key={name} className="skill-card">
              <span className="skill-icon">{icon}</span>
              <div className="skill-name">{name}</div>
              <div className="skill-bar">
                <div className="skill-fill" data-level={level} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
