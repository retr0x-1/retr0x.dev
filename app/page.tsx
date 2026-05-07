import ParticleBackground from './components/ParticleBackground';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
// import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0f0f23] overflow-x-hidden">
      {/* Particle Background */}
      <ParticleBackground />

      {/* Scanline Overlay */}
      <div className="scanline-overlay" />

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <div className="relative z-10">
        <Hero />

        <div className="section-divider" />

        <About />

        <div className="section-divider" />

        <Projects />

        <div className="section-divider" />

        {/* <Blog /> */}

        <div className="section-divider" />

        <Contact />

        <Footer />
      </div>
    </main>
  );
}
