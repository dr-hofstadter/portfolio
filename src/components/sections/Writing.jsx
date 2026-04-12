import siteContent from "../../content/siteContent.json"
import FadeIn from "../ui/FadeIn.jsx"
import SectionLabel from "../ui/SectionLabel.jsx"

const { writing } = siteContent

export default function Writing() {
  if (writing.length === 0) {
    return null
  }

  return (
    <section id="writing">
      <SectionLabel>Writing & Content</SectionLabel>
      <div style={{ paddingBottom: 32 }}>
        {writing.map((entry, index) => (
          <FadeIn key={entry.title} delay={index * 50}>
            <a
              href={entry.href}
              target={entry.href ? "_blank" : undefined}
              rel={entry.href ? "noreferrer" : undefined}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr auto",
                gap: 24,
                alignItems: "start",
                padding: "24px 0",
                borderBottom: "1px solid #f5f5f5",
                borderTop: index === 0 ? "1px solid #f5f5f5" : "none",
                cursor: "pointer",
                textDecoration: "none",
              }}
              className="writing-row hoverable"
            >
              <div>
                <div
                  style={{
                    fontFamily: "'Instrument Serif', Georgia, serif",
                    fontSize: 18,
                    letterSpacing: "-0.01em",
                    color: "#0a0a0a",
                    marginBottom: 5,
                  }}
                >
                  {entry.title}
                </div>
                <div style={{ fontSize: 11, color: "#999" }}>{entry.tags}</div>
              </div>
              <div
                style={{
                  fontSize: 10,
                  letterSpacing: "0.07em",
                  textTransform: "uppercase",
                  color: "#999",
                  paddingTop: 4,
                  whiteSpace: "nowrap",
                }}
              >
                {entry.platform}
              </div>
            </a>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
