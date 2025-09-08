import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

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
     <footer className="py-8 text-center border-t border-primary/20">
  <p className="text-muted-foreground">
    © 2024 Umasankar Soubhagya Kumar Dash.{" "}
    <a
      href="https://www.linkedin.com/in/umasankar-dash-a1b5b3202/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 hover:underline"
    >
      LinkedIn
    </a>
  </p>
</footer>

    </div>
  );
};

export default Index;