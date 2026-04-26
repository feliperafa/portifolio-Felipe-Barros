'use client'
import { useEffect } from 'react'

export default function CursorEffect() {
  useEffect(() => {
    const dot = document.getElementById('cursor-dot')
    const ring = document.getElementById('cursor-ring')
    let mx = 0, my = 0, rx = 0, ry = 0
    let frame

    const onMouseMove = e => { mx = e.clientX; my = e.clientY }
    document.addEventListener('mousemove', onMouseMove)

    function animate() {
      rx += (mx - rx) * 0.14
      ry += (my - ry) * 0.14
      dot.style.left = mx + 'px'
      dot.style.top = my + 'px'
      ring.style.left = rx + 'px'
      ring.style.top = ry + 'px'
      frame = requestAnimationFrame(animate)
    }
    animate()

    const hoverEls = document.querySelectorAll('a, button')
    const onEnter = () => { dot.classList.add('hovered'); ring.classList.add('hovered') }
    const onLeave = () => { dot.classList.remove('hovered'); ring.classList.remove('hovered') }
    hoverEls.forEach(el => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    return () => {
      cancelAnimationFrame(frame)
      document.removeEventListener('mousemove', onMouseMove)
      hoverEls.forEach(el => {
        el.removeEventListener('mouseenter', onEnter)
        el.removeEventListener('mouseleave', onLeave)
      })
    }
  }, [])

  return (
    <>
      <div id="cursor-dot" />
      <div id="cursor-ring" />
    </>
  )
}
