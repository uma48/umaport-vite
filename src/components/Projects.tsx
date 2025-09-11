import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
<a href="https://www.freepik.com/free-photo/executive-touching-icon-social-network_970014.htm">Image by jannoon028 on Freepik</a>
const Projects = () => {
  const projects = [
    {
      title: "Leave Management System",
      description:
        "A full-stack leave management system with employee portal, leave application, tracking, and admin approval workflows. Built with MySQL for reliability and Bootstrap for responsive design.()",
      image: "/leave_manage_pr.webp",
      technologies: ["Java", "HTML", "CSS", "JavaScript", "Bootstrap", "MySQL"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      title: "Online MCQ Test Platform",
      description:
        "A dynamic quiz system with instant feedback, timer-based exams, and performance tracking. Powered by Oracle DB for scalability and optimized with responsive UI.",
      image: "./mcq.webp",
      technologies: ["Java", "HTML", "CSS", "JavaScript", "Oracle"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      title: "Pharmacy Shop Management System",
      description:
        "Inventory and billing solution for pharmacies. Enabled product tracking, billing automation, and detailed sales reports using PHP & MySQL backend.",
      image: "pharmacy.webp",
      technologies: ["PHP", "HTML", "CSS", "JavaScript", "Bootstrap", "MySQL"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      title: "SuiteCRM Custom Modules",
      description:
        "Developed and customized SuiteCRM modules to streamline workflows and improve reporting. Reduced manual data entry by 30% with PHP & MySQL.",
      image: "/crm.webp",
      technologies: ["PHP", "MySQL", "SuiteCRM", "JavaScript"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      title: "Patient Management System",
      description:
        "Healthcare ERP with patient records, gate pass management, leave tracking, and GPS tracking integration using Google Maps API.",
      image: "/hms.webp",
      technologies: ["PHP", "MySQL", "Google Maps API", "JavaScript", "HTML", "CSS"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      title: "Flutter Mobile App - IIG People",
      description:
        "Cross-platform mobile app with Google login, JWT authentication, and token-based session handling. Backend dashboard built with React + Vite.",
      image: "/app.webp",
      technologies: ["Flutter", "Google Login", "JWT", "React", "Vite"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
  ];

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      className="py-20 px-6 bg-secondary/10"
      aria-label="Portfolio projects of Umasankar Dash"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          <p className="mt-6 text-foreground/70 max-w-2xl mx-auto text-lg">
            A showcase of{" "}
            <strong>Umasankar Dash’s full-stack development work</strong>, ranging
            from enterprise web apps to mobile solutions.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="space-y-12 mb-20">
          {featuredProjects.map((project, index) => (
            <Card
              key={project.title}
              className={`overflow-hidden bg-gradient-card border-primary/20 shadow-card hover:shadow-glow transition-all duration-500 flex flex-col md:flex ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Project Image */}
              <div className="md:w-1/2 h-64 md:h-auto flex items-center justify-center bg-muted/20">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`${project.title} project by Umasankar Dash`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-4xl text-muted-foreground">📱</div>
                )}
              </div>

              {/* Project Content */}
              <div className="md:w-1/2 p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-4 text-primary">
                  {project.title}
                </h3>
                <p className="text-foreground/80 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="hover:bg-primary/20 hover:text-primary"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Links */}
                <div className="flex space-x-4">
                  <Button
                    asChild
                    className="bg-gradient-primary hover:shadow-glow"
                    aria-label={`Live demo of ${project.title}`}
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-primary/30 hover:border-primary hover:bg-primary/10"
                    aria-label={`Source code of ${project.title}`}
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-semibold text-center mb-12">
            More Projects by Umasankar Dash
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project) => (
              <Card
                key={project.title}
                className="overflow-hidden bg-gradient-card border-primary/20 shadow-card hover:shadow-glow hover:scale-105 transition-all duration-300"
              >
                <div className="h-48 flex items-center justify-center bg-muted/20">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={`${project.title} project by Umasankar Dash`}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="text-3xl text-muted-foreground">⚡</div>
                  )}
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold mb-3 text-primary">
                    {project.title}
                  </h4>
                  <p className="text-foreground/80 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex space-x-2">
                    <Button
                      asChild
                      size="sm"
                      className="flex-1"
                      aria-label={`Live demo of ${project.title}`}
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-1 h-3 w-3" />
                        Demo
                      </a>
                    </Button>
                    <Button
                      asChild
                      size="sm"
                      variant="outline"
                      className="flex-1"
                      aria-label={`Source code of ${project.title}`}
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-1 h-3 w-3" />
                        Code
                      </a>
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
