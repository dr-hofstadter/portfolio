import { useEffect, useState } from "react"

export default function useInView(ref, { root = null, rootMargin = "0px", threshold = 0.12 } = {}) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) {
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) {
          return
        }

        setVisible(true)
        observer.disconnect()
      },
      { root, rootMargin, threshold },
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [ref, root, rootMargin, threshold])

  return visible
}
