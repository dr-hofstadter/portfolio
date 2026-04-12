import { useEffect, useEffectEvent } from "react"

export default function useWindowEvent(eventName, handler) {
  const onEvent = useEffectEvent(handler)

  useEffect(() => {
    window.addEventListener(eventName, onEvent)
    return () => window.removeEventListener(eventName, onEvent)
  }, [eventName])
}
