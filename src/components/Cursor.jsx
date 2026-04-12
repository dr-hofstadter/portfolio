import { useEffect, useRef, useState } from "react"

import useWindowEvent from "../hooks/useWindowEvent.js"

export default function Cursor() {
  const cursorRef = useRef(null)
  const [expanded, setExpanded] = useState(false)
  const frameRef = useRef(0)

  useWindowEvent("mousemove", (event) => {
    if (frameRef.current) {
      cancelAnimationFrame(frameRef.current)
    }

    frameRef.current = requestAnimationFrame(() => {
      const cursor = cursorRef.current
      if (!cursor) {
        return
      }

      cursor.style.left = `${event.clientX}px`
      cursor.style.top = `${event.clientY}px`
    })
  })

  useWindowEvent("mouseover", (event) => {
    setExpanded(Boolean(event.target instanceof Element && event.target.closest("a, button, .hoverable")))
  })

  useWindowEvent("mouseout", () => {
    setExpanded(false)
  })

  useEffect(() => {
    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current)
      }
    }
  }, [])

  return (
    <div
      ref={cursorRef}
      style={{
        position: "fixed",
        pointerEvents: "none",
        zIndex: 9999,
        width: expanded ? 30 : 6,
        height: expanded ? 30 : 6,
        background: "#0a0a0a",
        borderRadius: "50%",
        transform: "translate(-50%,-50%)",
        transition: "width 0.2s ease, height 0.2s ease, opacity 0.2s ease",
        opacity: expanded ? 0.12 : 1,
        mixBlendMode: "difference",
      }}
    />
  )
}
