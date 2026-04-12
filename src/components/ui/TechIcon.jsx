import {
  SiDjango,
  SiDocker,
  SiNextdotjs,
  SiPostgresql,
  SiReact,
  SiRust,
  SiSolana,
  SiTypescript,
} from "react-icons/si"
import { FaAws } from "react-icons/fa"

const techIconMap = {
  rust: { Icon: SiRust, color: "#000000" },
  solana: { Icon: SiSolana, color: "#14f195" },
  "solana rpc": { Icon: SiSolana, color: "#14f195" },
  typescript: { Icon: SiTypescript, color: "#3178c6" },
  postgres: { Icon: SiPostgresql, color: "#336791" },
  postgresql: { Icon: SiPostgresql, color: "#336791" },
  pgvector: { Icon: SiPostgresql, color: "#336791" },
  docker: { Icon: SiDocker, color: "#2496ed" },
  react: { Icon: SiReact, color: "#61dafb" },
  "next.js": { Icon: SiNextdotjs, color: "#0a0a0a" },
  django: { Icon: SiDjango, color: "#092e20" },
  aws: { Icon: FaAws, color: "#ff9900" },
}

function resolveIcon(label) {
  const normalized = String(label).trim().toLowerCase()
  return techIconMap[normalized] || null
}

export default function TechIcon({ label, size = 11 }) {
  const match = resolveIcon(label)
  if (!match) {
    return null
  }

  const { Icon, color } = match

  return <Icon aria-hidden="true" size={size} color={color} style={{ flexShrink: 0 }} />
}
