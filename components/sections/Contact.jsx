import { LINKS } from '@/data/portfolio'
import { GitHubIcon, LinkedInIcon } from '@/components/ui/Icons'

export default function Contact() {
  return (
    <div className="sw" id="contact">
      <div className="contact-wrap reveal">
        <div className="sec-label" style={{ justifyContent: 'center' }}>// contato</div>
        <h2 className="sec-title">Vamos Conversar</h2>
        <p>
          Aberto a novas oportunidades, freelas e conexões profissionais.
          Entre em contato pelo LinkedIn ou explore meus projetos no GitHub.
        </p>
        <div className="contact-btns">
          <a
            href={LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <LinkedInIcon /> Conectar no LinkedIn
          </a>
          <a
            href={LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            <GitHubIcon /> Ver GitHub
          </a>
        </div>
      </div>
    </div>
  )
}
