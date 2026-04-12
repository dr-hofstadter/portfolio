import { useRef } from "react"

import useInView from "../../hooks/useInView.js"

export default function FadeIn({ children, delay = 0, x = 0, y = 12, style = {} }) {
  const ref = useRef(null)
  const visible = useInView(ref)

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : `translate(${x}px, ${y}px)`,
        transition: `opacity 0.55s ease ${delay}ms, transform 0.55s ease ${delay}ms`,
        ...style,
      }}
    >
      {children}
    </div>
  )
}
