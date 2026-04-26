import { useEffect } from 'react'

export function useScrollReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right')

    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return

          entry.target.classList.add('visible')

          entry.target.querySelectorAll('.skill-fill').forEach(bar => {
            bar.style.width = bar.dataset.level + '%'
          })

          entry.target.querySelectorAll('.stat-num[data-target]').forEach(el => {
            const tgt = +el.dataset.target
            let v = 0
            const step = tgt / 45
            const timer = setInterval(() => {
              v += step
              if (v >= tgt) {
                el.textContent = tgt + '+'
                clearInterval(timer)
              } else {
                el.textContent = Math.floor(v)
              }
            }, 28)
          })
        })
      },
      { threshold: 0.12 }
    )

    elements.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])
}
