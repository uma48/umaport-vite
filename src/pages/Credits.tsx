import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { ExternalLink, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Credits = () => {
  const credits = [
    {
      text: "Image by jannoon028 on Freepik",
      url: "https://www.freepik.com/free-photo/executive-touching-icon-social-network_970014.htm",
    },
    {
      text: "Image by KamranAydinov on Freepik",
      url: "https://www.freepik.com/free-photo/student-online-cute-girl-glasses-sweater-studying-computer-writing-down-notes_26220442.htm",
    },
    {
      text: "Image by krakenimages.com on Freepik",
      url: "https://www.freepik.com/free-photo/young-arab-woman-working-pharmacy-drugstore-using-laptop-with-hand-stomach-because-indigestion-painful-illness-feeling-unwell-ache-concept_38869578.htm",
    },
    {
      text: "Image by Freepik",
      url: "https://www.freepik.com/free-photo/customer-relationship-management-concept_36028791.htm",
    },
    {
      text: "Image by DC Studio on Freepik",
      url: "https://www.freepik.com/free-photo/nurse-checking-x-ray-result-reading-patients-list-taking-notes-clipboard-holding-radiography-medical-physician-medicine-uniform-writing-list-consulted-diagnosed-patients-making-research_15934224.htm",
    },
    {
      text: "Image by Freepik",
      url: "https://www.freepik.com/free-photo/representations-user-experience-interface-design_36298555.htm",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />

      <main>
        <section className="py-20 px-6 bg-secondary/10 min-h-screen">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <header className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4 text-primary">Credits</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Special thanks to{" "}
                <a
                  href="https://www.freepik.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Freepik
                </a>{" "}
                for providing free resources used in this portfolio project.
              </p>
            </header>

            {/* Credit List */}
            <div className="grid gap-6">
              {credits.map((credit, index) => (
                <Card
                  key={index}
                  className="p-4 flex justify-between items-center bg-gradient-card border-primary/20 hover:shadow-glow transition"
                >
                  <p className="text-foreground/80">{credit.text}</p>
                  <a
                    href={credit.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-600 hover:underline text-sm"
                  >
                    View <ExternalLink className="ml-1 h-4 w-4" />
                  </a>
                </Card>
              ))}
            </div>

            {/* Back Button */}
            <div className="mt-12 text-center">
              <Link to="/">
                <Button className="bg-gradient-primary hover:shadow-glow">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Dashboard
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 text-center border-t border-primary/20">
        <p className="text-muted-foreground">
          © 2024 Umasankar Soubhagya Kumar Dash.{" "}
          <a
            href="https://www.linkedin.com/in/umasankar-dash-a1b5b3202/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            LinkedIn
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Credits;
