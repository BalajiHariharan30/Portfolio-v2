import Header from "./components/Header";
import Banner from "./components/Banner";
import StatsBar from "./components/StatsBar";
import Experience from "./components/Experience";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Footer from "./components/Footer";
import ParticleCanvas from "./components/ParticleCanvas";
import ScrollProgress from "./components/ScrollProgress";
import CursorGlow from "./components/CursorGlow";
import BackToTop from "./components/BackToTop";

export default function Home(): React.JSX.Element {
  return (
    <main className="min-h-screen bg-[#110720] text-white selection:bg-purple-500 selection:text-white relative">
      {/* Global animation layers */}
      <ParticleCanvas />
      <ScrollProgress />
      <CursorGlow />
      <BackToTop />

      {/* Page sections */}
      <Header />
      <Banner />
      <StatsBar />
      <Experience />
      <About />
      <Projects />
      <Skills />
      <Certifications />
      <Footer />
    </main>
  );
}
