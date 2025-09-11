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
      description: "Building modern, SEO-friendly, and high-performance user interfaces using React, Next.js, and Vue.js."
    },
    {
      title: "Backend Development",
      gradient: "bg-gradient-accent",
      skills: [
        "Node.js", "Express", "Laravel", "PHP",
        "MongoDB", "MySQL", "PostgreSQL", "REST APIs"
      ],
      description: "Designing and maintaining scalable backend systems with Node.js, Laravel, and secure database architectures."
    },
    {
      title: "Tools & DevOps",
      gradient: "bg-gradient-primary",
      skills: [
        "Git", "AWS", "Firebase", "Linux",
        "CI/CD", "Docker", "Figma", "Agile"
      ],
      description: "Using cloud platforms, version control, and DevOps practices to deliver production-ready applications."
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
            As <strong>Umasankar Dash, a Full-Stack Developer based in Bhubaneswar, India</strong>, 
            I bring expertise across <strong>frontend development</strong>, 
            <strong> backend technologies</strong>, and <strong>DevOps tools</strong> 
            to deliver end-to-end software solutions.
          </p>
          <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full mt-4"></div>
        </header>
        
        {/* Skill Categories */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <Card
              key={category.title}
              className="p-6 bg-gradient-card border-primary/20 shadow-card hover:shadow-glow transition-all duration-300 hover:scale-105"
              aria-label={`${category.title} skills of Umasankar Dash`}
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
                  Software Developer – IIG Technology
                </h4>
                <p className="text-muted-foreground mb-2">
                  Bhubaneswar, India • 2024 – Present
                </p>
                <p className="text-foreground/80">
                  Working on <strong>SuiteCRM modules</strong>, <strong>healthcare platforms</strong>, 
                  and <strong>enterprise software solutions</strong> using 
                  <strong> React</strong>, <strong>Laravel</strong>, and <strong>Node.js</strong>.
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
                  Freelance Full-Stack Developer
                </h4>
                <p className="text-muted-foreground mb-2">
                  India • 2022 – Present
                </p>
                <p className="text-foreground/80">
                  Helping startups and students with <strong>affordable websites</strong>, 
                  <strong> mobile applications</strong>, and <strong>custom projects</strong> 
                  while focusing on <strong>scalability</strong> and <strong>low-cost software development</strong>.
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
