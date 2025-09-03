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
              I'm a meticulous software professional seeking a role in a dynamic industry where I can continuously enhance my skills 
              and drive the company's growth and success. With 1+ year of experience in the software development lifecycle, 
              I excel in gathering and defining requirements, managing documentation, and optimizing code for efficient solutions.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Currently working as a Software Developer at IIC Technology in Bhubaneswar, Odisha, I have developed custom modules 
              in SuiteCRM, optimized workflows, and built comprehensive applications including Patient Management systems, 
              Gate Pass Management, and healthcare platforms using modern technologies.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              I take a proactive approach to problem-solving, continuously seeking new challenges and opportunities to learn and grow. 
              I thrive in team-oriented environments and excel at leveraging my strengths to contribute to the team's overall success.
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
                  <li>• Team-oriented environment excellence</li>
                  <li>• Passionate about continuous learning</li>
                  <li>• Committed to staying up-to-date with industry trends</li>
                </ul>
              </div>
              
              <div className="pt-4 border-t border-primary/20">
                <h4 className="font-semibold text-accent mb-3">Hobbies</h4>
                <p className="text-sm text-foreground/80">Active in Social Media, Reading, Photography</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;