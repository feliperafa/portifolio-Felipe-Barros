'use client'
import ParticlesCanvas from '@/components/ui/ParticlesCanvas'
import { GitHubIcon, LinkedInIcon } from '@/components/ui/Icons'
import { useTypingEffect } from '@/hooks/useTypingEffect'
import { TYPING_PHRASES, LINKS, AVAILABLE_FOR_WORK } from '@/data/portfolio'

export default function Hero() {
  useTypingEffect('typed', TYPING_PHRASES)

  return (
    <section id="hero">
      <ParticlesCanvas />

      <div className="hero-content">
        {AVAILABLE_FOR_WORK && (
          <div className="hero-badge">&#9679;&nbsp; Disponível para oportunidades</div>
        )}
        <h1 className="hero-name">
          <span className="glitch grad-text" data-text="Felipe Barros">
            Felipe Barros
          </span>
        </h1>
        <p className="hero-subtitle">Senior Frontend Engineer &amp; Tech Lead</p>
        <div className="hero-typing">
          <span id="typed" />
          <span className="cursor-blink" />
        </div>
        <div className="hero-cta">
          <a
            href={LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <GitHubIcon /> GitHub
          </a>
          <a
            href={LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            <LinkedInIcon /> LinkedIn
          </a>
        </div>
      </div>

      <div className="scroll-hint">
        <span>scroll</span>
        <div className="line" />
      </div>
    </section>
  )
}
