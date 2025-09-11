import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {/* Intro */}
            <p className="text-lg text-foreground/80 leading-relaxed">
              Welcome to the <strong>official portfolio of Umasankar Dash</strong>.  
              I’m <strong>Umasankar Dash</strong>, a dedicated 
              <strong> Full-Stack Developer from Bhubaneswar, Odisha, India</strong>.  
              I specialize in <strong>affordable web applications, mobile apps, and 
              custom software development</strong>. With <strong>1+ years of professional 
              experience</strong>, I help startups, small businesses, and students 
              bring their digital ideas to life with <strong>budget-friendly and 
              high-quality solutions</strong>.
            </p>

            {/* Experience */}
            <p className="text-lg text-foreground/80 leading-relaxed">
              Currently, I work as a <strong>Software Developer at IIG Technology</strong>, 
              where I’ve built <strong>SuiteCRM modules</strong>, 
              <strong> healthcare management platforms</strong>, 
              <strong> gate pass solutions</strong>, and <strong>patient management systems</strong>.  
              My tech stack includes <strong>React, Next.js, Laravel, Node.js, and MongoDB</strong>, 
              enabling me to deliver <strong>modern, scalable, and performance-driven applications</strong>.
            </p>

            {/* Freelance + Mission */}
            <p className="text-lg text-foreground/80 leading-relaxed">
              Alongside my full-time role, I also work as a <strong>freelance full-stack 
              developer in India</strong>. I provide <strong>low-cost websites, affordable 
              mobile apps</strong>, and <strong>student projects</strong> to support learning 
              and innovation. My mission is to make <strong>professional-grade technology 
              accessible to everyone</strong>.
            </p>
            
            {/* Highlights */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-2">1+</h3>
                <p className="text-muted-foreground">Years of Experience</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-accent mb-2">10+</h3>
                <p className="text-muted-foreground">Projects Completed</p>
              </div>
            </div>
          </div>
          
          {/* Personal Details */}
          <Card className="p-8 bg-gradient-card border-primary/20 shadow-card">
            <h3 className="text-2xl font-semibold mb-6 text-center">Personal Details</h3>
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p><span className="font-semibold text-primary">Full Name:</span> Umasankar Dash</p>
                  <p><span className="font-semibold text-primary">DOB:</span> 19/12/2000</p>
                  <p><span className="font-semibold text-primary">Nationality:</span> Indian</p>
                </div>
                <div>
                  <p><span className="font-semibold text-primary">Languages:</span> English, Hindi, Odia</p>
                  <p><span className="font-semibold text-primary">Current City:</span> Bhubaneswar, Odisha</p>
                  <p><span className="font-semibold text-primary">Marital Status:</span> Single</p>
                </div>
              </div>
              
              <div className="pt-4 border-t border-primary/20">
                <h4 className="font-semibold text-accent mb-3">Strengths</h4>
                <ul className="text-sm text-foreground/80 space-y-1">
                  <li>• Strong problem-solving & clean coding practices</li>
                  <li>• Expertise in full-stack development (React, Laravel, Node.js)</li>
                  <li>• Passionate about continuous learning</li>
                  <li>• Focused on affordable, value-driven software</li>
                </ul>
              </div>
              
              <div className="pt-4 border-t border-primary/20">
                <h4 className="font-semibold text-accent mb-3">Hobbies</h4>
                <p className="text-sm text-foreground/80">
                  Reading, Photography, Exploring Technology, Active on Social Media
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
