export default function SectionLabel({ children, paddingTop = 96 }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 16,
        fontSize: 10,
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        color: "#999",
        marginBottom: 48,
        paddingTop,
      }}
    >
      {children}
      <div style={{ flex: 1, height: 1, background: "#e5e5e5" }} />
    </div>
  )
}
