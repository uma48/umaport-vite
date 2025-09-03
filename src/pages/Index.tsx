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
          © 2024 Umasankar Soubhagya Kumar Dash hello.
        </p>
      </footer>
    </div>
  );
};

export default Index;