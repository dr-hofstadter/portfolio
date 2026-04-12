import siteContent from "../../content/siteContent.json"
import FadeIn from "../ui/FadeIn.jsx"
import SectionLabel from "../ui/SectionLabel.jsx"

const { awards } = siteContent

export default function Awards() {
  return (
    <section id="awards">
      <SectionLabel>Things I&apos;m proud of</SectionLabel>
      <div style={{ paddingBottom: 96 }}>
        {awards.map((award, index) => (
          <FadeIn key={award.num} delay={index * 50} x={-10} y={0}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "44px 1fr auto",
                gap: 24,
                alignItems: "start",
                padding: "22px 0",
                borderTop: index === 0 ? "1px solid #f5f5f5" : "none",
                borderBottom: "1px solid #f5f5f5",
              }}
            >
              <span
                style={{
                  fontFamily: "'Instrument Serif', Georgia, serif",
                  fontSize: 18,
                  color: "#ccc",
                  fontStyle: "italic",
                }}
              >
                {award.num}
              </span>
              <div>
                <div style={{ fontSize: 13, color: "#0a0a0a", marginBottom: 3 }}>{award.title}</div>
                <div style={{ fontSize: 12, color: "#666", lineHeight: 1.6 }}>{award.desc}</div>
              </div>
              <div style={{ fontSize: 11, color: "#999", whiteSpace: "nowrap", paddingTop: 2 }}>{award.year}</div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
