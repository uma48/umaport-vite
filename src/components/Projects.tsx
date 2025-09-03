import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Leave Management System",
      description: "Developed a user-friendly interface for employees to apply for leave and track their requests. Implemented MySQL for database management, achieving efficient data storage and retrieval. Created responsive web pages using Bootstrap, ensuring accessibility across devices.",
      image: "/placeholder.svg",
      technologies: ["Java", "HTML", "CSS", "JavaScript", "Bootstrap", "MySQL"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Online MCQ Test",
      description: "Developed a dynamic interface for users to take quizzes and receive instant feedback on their performance. Implemented Oracle for database management, achieving reliable data storage and query efficiency. Created responsive web pages using HTML, CSS, and JavaScript.",
      image: "/placeholder.svg", 
      technologies: ["Java", "HTML", "CSS", "JavaScript", "Oracle"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Pharmacy Shop Management System",
      description: "Developed an intuitive interface for managing pharmacy inventory, sales transactions, and customer records. Implemented MySQL for database management, achieving efficient tracking of stock levels and sales data.",
      image: "/placeholder.svg",
      technologies: ["PHP", "HTML", "CSS", "JavaScript", "Bootstrap", "MySQL"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "SuiteCRM Custom Modules",
      description: "Developed custom modules in SuiteCRM, reducing manual data entry by 30% and optimizing workflows. Implemented CRM solutions that improved user engagement by 25%.",
      image: "/placeholder.svg",
      technologies: ["PHP", "MySQL", "SuiteCRM", "JavaScript"],
      liveUrl: "#", 
      githubUrl: "#",
      featured: false
    },
    {
      title: "Patient Management System",
      description: "Built ERP modules including Patient Management, Gate Pass Management, Leave Request, Tracking App using Google Maps API, and 2050 Healthcare platform with modern design and service delivery.",
      image: "/placeholder.svg",
      technologies: ["PHP", "MySQL", "Google Maps API", "JavaScript", "HTML", "CSS"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Flutter Mobile App",
      description: "Led development of IIG People, a Flutter app with Google login and past management features. Created secure authentication systems using JWT and React Vite for login, registration, and token management.",
      image: "/placeholder.svg",
      technologies: ["Flutter", "Google Login", "JWT", "React", "Vite"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        {/* Featured Projects */}
        <div className="space-y-12 mb-20">
          {featuredProjects.map((project, index) => (
            <Card 
              key={project.title}
              className={`overflow-hidden bg-gradient-card border-primary/20 shadow-card hover:shadow-glow transition-all duration-500 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } flex flex-col md:flex`}
            >
              <div className="md:w-1/2 h-64 md:h-auto bg-muted/20 flex items-center justify-center">
                <div className="text-4xl text-muted-foreground">📱</div>
              </div>
              <div className="md:w-1/2 p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-4 text-primary">{project.title}</h3>
                <p className="text-foreground/80 mb-6 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="hover:bg-primary/20 hover:text-primary">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <Button className="bg-gradient-primary hover:shadow-glow">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                  <Button variant="outline" className="border-primary/30 hover:border-primary hover:bg-primary/10">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div>
          <h3 className="text-2xl font-semibold text-center mb-12">More Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project) => (
              <Card 
                key={project.title}
                className="overflow-hidden bg-gradient-card border-primary/20 shadow-card hover:shadow-glow hover:scale-105 transition-all duration-300"
              >
                <div className="h-48 bg-muted/20 flex items-center justify-center">
                  <div className="text-3xl text-muted-foreground">⚡</div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold mb-3 text-primary">{project.title}</h4>
                  <p className="text-foreground/80 mb-4 text-sm leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button size="sm" className="flex-1">
                      <ExternalLink className="mr-1 h-3 w-3" />
                      Demo
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      <Github className="mr-1 h-3 w-3" />
                      Code
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
