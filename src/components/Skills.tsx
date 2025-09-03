import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      gradient: "bg-gradient-primary",
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js", "HTML5", "CSS3", "JavaScript"]
    },
    {
      title: "Backend",
      gradient: "bg-gradient-accent", 
      skills: ["Node.js", "Python", "Express", "PostgreSQL", "MongoDB", "GraphQL", "REST APIs", "Docker"]
    },
    {
      title: "Tools & Others",
      gradient: "bg-gradient-primary",
      skills: ["Git", "AWS", "Firebase", "Figma", "Linux", "CI/CD", "Testing", "Agile"]
    }
  ];

  return (
    <section className="py-20 px-6 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="bg-gradient-accent bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title}
              className="p-6 bg-gradient-card border-primary/20 shadow-card hover:shadow-glow transition-all duration-300 hover:scale-105"
            >
              <div className="text-center mb-6">
                <div className={`w-16 h-16 ${category.gradient} rounded-full mx-auto mb-4 flex items-center justify-center`}>
                  <span className="text-2xl font-bold text-white">{category.title[0]}</span>
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge 
                    key={skill}
                    variant="secondary"
                    className="hover:bg-primary/20 hover:text-primary transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
        
        {/* Experience Timeline */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-center mb-12">Experience</h3>
          <div className="space-y-8 max-w-4xl mx-auto">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold">1</span>
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-semibold text-primary">Senior Full-Stack Developer</h4>
                <p className="text-muted-foreground mb-2">Tech Company • 2022 - Present</p>
                <p className="text-foreground/80">Leading development of scalable web applications, mentoring junior developers, and architecting modern solutions.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold">2</span>
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-semibold text-accent">Frontend Developer</h4>
                <p className="text-muted-foreground mb-2">Digital Agency • 2020 - 2022</p>
                <p className="text-foreground/80">Developed responsive web applications for various clients, focusing on performance and user experience.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;