import {
  SiDjango,
  SiDocker,
  SiNextdotjs,
  SiPostgresql,
  SiReact,
  SiRust,
  SiSolana,
  SiTypescript,
  SiPython,
} from "react-icons/si"

import {
  FaAws,
  FaDatabase,
  FaChartLine,
  FaBrain,
  FaFileExcel,
} from "react-icons/fa"

const techIconMap = {
  // --- Tech ---
  rust: { Icon: SiRust, color: "#000000" },
  solana: { Icon: SiSolana, color: "#14f195" },
  typescript: { Icon: SiTypescript, color: "#3178c6" },
  postgres: { Icon: SiPostgresql, color: "#336791" },
  docker: { Icon: SiDocker, color: "#2496ed" },
  react: { Icon: SiReact, color: "#61dafb" },
  "next.js": { Icon: SiNextdotjs, color: "#0a0a0a" },
  django: { Icon: SiDjango, color: "#092e20" },
  aws: { Icon: FaAws, color: "#ff9900" },

  // --- Data ---
  python: { Icon: SiPython, color: "#3776AB" },
  sql: { Icon: FaDatabase, color: "#4479A1" },

  // --- Finance ---
  excel: { Icon: FaFileExcel, color: "#217346" },
  factset: { Icon: FaChartLine, color: "#0A66C2" },
  research: { Icon: FaChartLine, color: "#6B7280" },
  "private equity": { Icon: FaChartLine, color: "#111827" },

  // --- Added ---
  "financial modelling": { Icon: FaChartLine, color: "#16a34a" },
  "business intelligence": { Icon: FaBrain, color: "#9333ea" },
}

function resolveIcon(label) {
  const normalized = String(label).trim().toLowerCase()
  return techIconMap[normalized] || null
}

export default function TechIcon({ label, size = 12 }) {
  const match = resolveIcon(label)

  if (!match) return null

  const { Icon, color } = match

  return (
    <Icon
      aria-hidden="true"
      size={size}
      color={color}
      style={{ flexShrink: 0 }}
    />
  )
}
