import { EDUCATION } from '@/data/portfolio'

export default function Education() {
  return (
    <div className="sw" id="education">
      <div className="reveal">
        <div className="sec-label">// formação</div>
        <h2 className="sec-title">Educação &amp; Certificações</h2>
      </div>

      <div className="edu-grid">
        {EDUCATION.map((item, index) => (
          <div key={index} className="edu-card reveal">
            <span className="edu-icon">{item.icon}</span>
            <div className="edu-degree">{item.degree}</div>
            <div className="edu-inst">{item.institution}</div>
            <div className="edu-period">{item.period}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
