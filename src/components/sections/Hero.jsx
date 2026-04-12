import siteContent from "../../content/siteContent.json"

const heroItems = [
  { style: { opacity: 0, animation: "fadeUp 0.7s ease 0.05s forwards" } },
  { style: { opacity: 0, animation: "fadeUp 0.8s ease 0.18s forwards" } },
  { style: { opacity: 0, animation: "fadeUp 0.8s ease 0.32s forwards" } },
  { style: { opacity: 0, animation: "fadeUp 0.8s ease 0.44s forwards" } },
]

const { links } = siteContent

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        paddingBottom: 24,
        paddingTop: "max(56px, env(safe-area-inset-top))",
      }}
    >
      <p
        style={{
          fontSize: 11,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: "#666",
          marginBottom: 20,
          display: "flex",
          alignItems: "flex-start",
          gap: 8,
          ...heroItems[0].style,
        }}
      >
        <span
          style={{
            width: 6,
            height: 6,
            background: "#22c55e",
            borderRadius: "50%",
            display: "inline-block",
            animation: "pulseGreen 2s infinite",
            flexShrink: 0,
            marginTop: 4,
          }}
        />
        <span>Protocol Engineer & Developer Relations — New Delhi, IN</span>
      </p>

      <h1
        style={{
          fontFamily: "'Instrument Serif', Georgia, serif",
          fontSize: "clamp(36px, 6.5vw, 88px)",
          fontWeight: 400,
          lineHeight: 1,
          letterSpacing: "-0.03em",
          color: "#0a0a0a",
          textTransform: "lowercase",
          marginBottom: 28,
          whiteSpace: "nowrap",
          ...heroItems[1].style,
        }}
      >
        raghav sharma
      </h1>

      <p
        style={{
          maxWidth: 480,
          fontSize: 13,
          color: "#666",
          lineHeight: 1.8,
          marginBottom: 40,
          ...heroItems[2].style,
        }}
      >
        Solana on-chain programs and Rust developer tooling. I also build education infrastructure that
        gets developers unstuck. Solana Foundation grantee. Superteam India Member.
      </p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "0 0", ...heroItems[3].style }}>
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noreferrer" : undefined}
            style={{
              fontSize: 11,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: "#0a0a0a",
              textDecoration: "none",
              padding: "10px 0",
              marginRight: 24,
              position: "relative",
            }}
            className="hero-link"
          >
            {link.label}
          </a>
        ))}
      </div>
    </section>
  )
}
