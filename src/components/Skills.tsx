import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      gradient: "bg-gradient-primary",
      skills: [
        "React", "Next.js", "TypeScript", "Tailwind CSS",
        "Vue.js", "HTML5", "CSS3", "JavaScript"
      ],
      description: "Building modern, responsive, and high-performance user interfaces using React, Next.js, and Vue.js."
    },
    {
      title: "Backend Development",
      gradient: "bg-gradient-accent",
      skills: [
        "Node.js", "Express", "Python", "PostgreSQL",
        "MongoDB", "GraphQL", "REST APIs", "Docker"
      ],
      description: "Designing and maintaining scalable backend systems with databases, APIs, and cloud-native solutions."
    },
    {
      title: "Tools & DevOps",
      gradient: "bg-gradient-primary",
      skills: [
        "Git", "AWS", "Firebase", "Linux",
        "CI/CD", "Figma", "Testing", "Agile"
      ],
      description: "Using modern tools, cloud services, and agile practices to deliver robust and production-ready applications."
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <header className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical <span className="bg-gradient-accent bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Expertise across <strong>frontend development</strong>, <strong>backend technologies</strong>, 
            and <strong>DevOps tools</strong> to deliver end-to-end software solutions.
          </p>
          <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full mt-4"></div>
        </header>
        
        {/* Skill Categories */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <Card
              key={category.title}
              className="p-6 bg-gradient-card border-primary/20 shadow-card hover:shadow-glow transition-all duration-300 hover:scale-105"
              aria-label={`${category.title} skills`}
            >
              <div className="text-center mb-6">
                <div className={`w-16 h-16 ${category.gradient} rounded-full mx-auto mb-4 flex items-center justify-center`}>
                  <span className="text-2xl font-bold text-white">{category.title[0]}</span>
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">{category.description}</p>
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
        <div className="mt-20">
          <h3 className="text-3xl font-semibold text-center mb-12">
            Professional Experience
          </h3>
          
          <div className="space-y-10 max-w-4xl mx-auto">
            
            {/* Job 1 */}
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold">1</span>
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-semibold text-primary">
                  Senior Full-Stack Developer
                </h4>
                <p className="text-muted-foreground mb-2">
                  Tech Company • 2022 - Present
                </p>
                <p className="text-foreground/80">
                  Leading the development of scalable full-stack applications, 
                  architecting solutions with <strong>React</strong>, <strong>Node.js</strong>, 
                  and <strong>cloud technologies</strong>, while mentoring junior developers.
                </p>
              </div>
            </div>
            
            {/* Job 2 */}
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold">2</span>
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-semibold text-accent">
                  Frontend Developer
                </h4>
                <p className="text-muted-foreground mb-2">
                  Digital Agency • 2020 - 2022
                </p>
                <p className="text-foreground/80">
                  Built responsive and SEO-friendly web applications for clients, 
                  optimizing performance and accessibility using <strong>React</strong> 
                  and <strong>modern JavaScript frameworks</strong>.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
