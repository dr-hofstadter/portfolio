import TechIcon from "./TechIcon.jsx"

export default function Pill({ children }) {
  return (
    <span
      style={{
        fontSize: 10,
        letterSpacing: "0.05em",
        textTransform: "uppercase",
        color: "#999",
        border: "1px solid #e5e5e5",
        padding: "3px 8px",
        borderRadius: 2,
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        lineHeight: 1,
      }}
    >
      <TechIcon label={children} />
      {children}
    </span>
  )
}
