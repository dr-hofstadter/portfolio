import { useRef, useState } from "react"

import siteContent from "../../content/siteContent.json"
import useInView from "../../hooks/useInView.js"
import { PAD } from "../../styles/globalStyles.js"
import Pill from "../ui/Pill.jsx"
import SectionLabel from "../ui/SectionLabel.jsx"

const { projects } = siteContent

function ProjectCard({ project, index }) {
  const ref = useRef(null)
  const visible = useInView(ref)
  const [hovered, setHovered] = useState(false)

  return (
    <div
      ref={ref}
      className="hoverable"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "#f5f5f5" : "#fff",
        padding: "36px clamp(20px, 3vw, 40px)",
        position: "relative",
        overflow: "hidden",
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(16px)",
        transition: `opacity 0.5s ease ${index * 60}ms, transform 0.5s ease ${index * 60}ms, background 0.2s ease`,
        cursor: "default",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 1,
          background: "#0a0a0a",
          transform: hovered ? "scaleX(1)" : "scaleX(0)",
          transformOrigin: "left",
          transition: "transform 0.4s ease",
        }}
      />

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
        <span style={{ fontSize: 10, color: "#ccc", letterSpacing: "0.08em" }}>{project.num}</span>
        <div style={{ display: "flex", gap: 12 }}>
          {project.live ? (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              style={{
                fontSize: 11,
                color: "#999",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: 3,
                transition: "color 0.2s",
              }}
              onMouseEnter={(event) => {
                event.currentTarget.style.color = "#0a0a0a"
              }}
              onMouseLeave={(event) => {
                event.currentTarget.style.color = "#999"
              }}
            >
              {project.liveLabel || "live"}{" "}
              <span
                style={{
                  display: "inline-block",
                  transition: "transform 0.2s",
                  transform: hovered ? "translate(2px,-2px)" : "none",
                }}
              >
                ↗
              </span>
            </a>
          ) : null}

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            style={{
              fontSize: 11,
              color: "#999",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: 3,
              transition: "color 0.2s",
            }}
            onMouseEnter={(event) => {
              event.currentTarget.style.color = "#0a0a0a"
            }}
            onMouseLeave={(event) => {
              event.currentTarget.style.color = "#999"
            }}
          >
            github{" "}
            <span
              style={{
                display: "inline-block",
                transition: "transform 0.2s",
                transform: hovered ? "translate(2px,-2px)" : "none",
              }}
            >
              ↗
            </span>
          </a>
        </div>
      </div>

      <div
        style={{
          fontFamily: "'Instrument Serif', Georgia, serif",
          fontSize: 22,
          letterSpacing: "-0.02em",
          color: "#0a0a0a",
          marginBottom: 10,
          lineHeight: 1.2,
        }}
      >
        {project.name}
      </div>

      <div style={{ fontSize: 12, color: "#666", lineHeight: 1.7, marginBottom: 16 }}>{project.desc}</div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 4, marginBottom: 12 }}>
        {project.stack.map((item) => (
          <Pill key={item}>{item}</Pill>
        ))}
      </div>

      <div style={{ fontSize: 11, color: "#999" }}>{project.meta}</div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" style={{ padding: `0 ${PAD}` }}>
      <SectionLabel>Proof of Work</SectionLabel>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 1,
          background: "#e5e5e5",
          marginBottom: 96,
        }}
        className="projects-grid"
      >
        {projects.map((project, index) => (
          <ProjectCard key={project.num} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}
