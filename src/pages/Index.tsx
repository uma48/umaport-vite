import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      
      <main>
        <section id="home">
          <Hero />
        </section>
        
        <About />
        
        <section id="skills">
          <Skills />
        </section>
        
        <Projects />
        
        <Contact />
      </main>
{/* Footer */}
<footer className="bg-background border-t border-primary/20 py-8">
  <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">

    {/* Left: Copyright */}
    <div className="text-center md:text-left text-muted-foreground text-sm">
      © 2024 <strong>Umasankar Soubhagya Kumar Dash</strong>. All rights reserved.
    </div>

    {/* Center: Buttons */}
    <div className="flex flex-wrap justify-center gap-3">
      <Link
        to="/credits"
        className="px-4 py-2 bg-primary text-white font-medium rounded hover:bg-primary/80 transition"
      >
        Credits
      </Link>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="px-4 py-2 bg-gray-200 text-gray-900 font-medium rounded hover:bg-gray-300 transition"
      >
        Back to Top
      </button>
    </div>

    {/* Right: Social Links */}
    <div className="flex gap-4 justify-center md:justify-end mt-4 md:mt-0">
      <a
        href="https://www.linkedin.com/in/umasankar-dash-a1b5b3202/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-500 transition"
        aria-label="LinkedIn"
      >
        LinkedIn
      </a>
      <a
        href="https://github.com/uma548"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-700 hover:text-black transition"
        aria-label="GitHub"
      >
        GitHub
      </a>
    </div>

  </div>
</footer>





    </div>
  );
};

export default Index;