import { useEffect, useRef } from 'react'

export function useTypingEffect(elementId, phrases) {
  const phrasesRef = useRef(phrases)

  useEffect(() => {
    const el = document.getElementById(elementId)
    if (!el) return

    const list = phrasesRef.current
    let pi = 0, ci = 0, del = false
    let timeout

    function type() {
      const cur = list[pi]
      if (!del) {
        el.textContent = cur.slice(0, ++ci)
        if (ci === cur.length) {
          del = true
          timeout = setTimeout(type, 2200)
          return
        }
      } else {
        el.textContent = cur.slice(0, --ci)
        if (ci === 0) {
          del = false
          pi = (pi + 1) % list.length
        }
      }
      timeout = setTimeout(type, del ? 35 : 75)
    }

    type()
    return () => clearTimeout(timeout)
  }, [elementId])
}
