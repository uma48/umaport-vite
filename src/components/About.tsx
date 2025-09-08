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
            <p className="text-lg text-foreground/80 leading-relaxed">
              I’m <strong>Umasankar Dash</strong>, a passionate 
              <strong> Full-Stack Developer based in Bhubaneswar, Odisha</strong>, 
              specializing in <strong>affordable software solutions</strong> and 
              <strong> low-cost web and app development</strong>. With 
              <strong> 1+ years of experience</strong>, I help startups, 
              small businesses, and students bring their ideas to life by 
              delivering <strong>custom, budget-friendly projects</strong> 
              without compromising quality.
            </p>

            <p className="text-lg text-foreground/80 leading-relaxed">
              Currently working as a <strong>Software Developer at IIG Technology</strong>, 
              I have hands-on experience in developing <strong>SuiteCRM modules</strong>, 
              <strong> patient management systems</strong>, <strong>gate pass solutions</strong>, 
              and <strong>custom healthcare platforms</strong>. I use 
              modern technologies like React, Laravel, Node.js, and MongoDB 
              to create <strong>scalable, performance-driven applications</strong>.
            </p>

            <p className="text-lg text-foreground/80 leading-relaxed">
              As a <strong>freelance full-stack developer in India</strong>, I also 
              provide <strong>low-budget website development</strong>, 
              <strong> affordable mobile apps</strong>, and <strong>student projects 
              for free or minimal cost</strong> to support learning and innovation. 
              My approach combines clean coding, proactive problem-solving, and 
              staying up-to-date with industry trends to ensure clients receive 
              the <strong>best value software solutions</strong>.
            </p>
            
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-2">1+</h3>
                <p className="text-muted-foreground">Years Experience</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-accent mb-2">10+</h3>
                <p className="text-muted-foreground">Projects Completed</p>
              </div>
            </div>
          </div>
          
          <Card className="p-8 bg-gradient-card border-primary/20 shadow-card">
            <h3 className="text-2xl font-semibold mb-6 text-center">Personal Details</h3>
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p><span className="font-semibold text-primary">Father's Name:</span> Umesh Chandra Dash</p>
                  <p><span className="font-semibold text-primary">Mother's Name:</span> Manorama Dash</p>
                  <p><span className="font-semibold text-primary">DOB:</span> 19/12/2000</p>
                </div>
                <div>
                  <p><span className="font-semibold text-primary">Nationality:</span> Indian</p>
                  <p><span className="font-semibold text-primary">Languages:</span> English, Hindi, Odia</p>
                  <p><span className="font-semibold text-primary">Marital Status:</span> Single</p>
                </div>
              </div>
              
              <div className="pt-4 border-t border-primary/20">
                <h4 className="font-semibold text-accent mb-3">Strengths</h4>
                <ul className="text-sm text-foreground/80 space-y-1">
                  <li>• Proactive approach to problem-solving</li>
                  <li>• Delivering affordable software development</li>
                  <li>• Passionate about continuous learning</li>
                  <li>• Skilled in web, mobile & CRM systems</li>
                </ul>
              </div>
              
              <div className="pt-4 border-t border-primary/20">
                <h4 className="font-semibold text-accent mb-3">Hobbies</h4>
                <p className="text-sm text-foreground/80">
                  Active in Social Media, Reading, Photography
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
