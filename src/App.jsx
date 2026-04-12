import Cursor from "./components/Cursor.jsx"
import About from "./components/sections/About.jsx"
import Awards from "./components/sections/Awards.jsx"
import Experience from "./components/sections/Experience.jsx"
import Footer from "./components/sections/Footer.jsx"
import Hero from "./components/sections/Hero.jsx"
import Projects from "./components/sections/Projects.jsx"
import { globalStyles, PAD } from "./styles/globalStyles.js"

export default function App() {
  return (
    <>
      <style>{globalStyles}</style>

      <Cursor />

      <div style={{ padding: `0 ${PAD}` }}>
        <Hero />
        <About />
        <Experience />
      </div>

      <Projects />

      <div style={{ padding: `0 ${PAD}` }}>
        <Awards />
      </div>

      <Footer />
    </>
  )
}
