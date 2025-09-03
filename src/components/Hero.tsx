import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 sm:pt-32">

      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-background/90" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="space-y-6 animate-fade-in">
          <div className="space-y-4">
         <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold bg-gradient-hero bg-clip-text text-transparent leading-snug sm:leading-tight">
  Umasankar Soubhagya Kumar Dash
</h1>
<h2 className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-light mt-2 sm:mt-4">
  Software Developer & Full-Stack Engineer
</h2>

          </div>
          
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Seeking a role in a dynamic industry where I can continuously enhance my skills and drive the company's growth and success. 
            Meticulous software professional with 1+ year of experience in the software development lifecycle.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-lg px-8 py-6"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary/30 hover:border-primary hover:bg-primary/10 text-lg px-8 py-6"
              onClick={() => window.open('/lovable-uploads/fd574d83-eda2-4dfd-859b-d7ae63493b6c.png', '_blank')}
            >
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6 pt-8">
            <Button 
              variant="ghost" 
              size="icon" 
              className="hover:text-primary hover:scale-110 transition-all"
              onClick={() => window.open('https://github.com/uma548', '_blank')}
            >
              <Github className="h-6 w-6" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="hover:text-primary hover:scale-110 transition-all"
              onClick={() => window.open('https://linkedin.com/in/umasankar-dash', '_blank')}
            >
              <Linkedin className="h-6 w-6" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="hover:text-primary hover:scale-110 transition-all"
              onClick={() => window.location.href = 'mailto:udash2024@gmail.com'}
            >
              <Mail className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ArrowDown className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
      </button>
    </section>
  );
};

export default Hero;