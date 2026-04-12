import siteContent from "../../content/siteContent.json"
import FadeIn from "../ui/FadeIn.jsx"
import Pill from "../ui/Pill.jsx"
import SectionLabel from "../ui/SectionLabel.jsx"

const { aboutParagraphs, aboutStack } = siteContent

export default function About() {
  return (
    <section id="about">
      <SectionLabel paddingTop={32}>About</SectionLabel>
      <div style={{ maxWidth: 760, paddingBottom: 96 }}>
        <FadeIn y={0} x={-8}>
          <div>
            {aboutParagraphs.map((paragraph) => (
              <p
                key={paragraph}
                style={{
                  fontSize: 13,
                  color: "#666",
                  lineHeight: 1.9,
                  marginBottom: 18,
                }}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={80} y={8}>
          <div style={{ paddingTop: 18, marginTop: 10, borderTop: "1px solid #f5f5f5" }}>
            <div
              style={{
                fontSize: 10,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#999",
                marginBottom: 14,
              }}
            >
              Stack
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
              {aboutStack.map((item) => (
                <Pill key={item}>{item}</Pill>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
