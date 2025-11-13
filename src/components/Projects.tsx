import { useState } from "react";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import ProjectDetail from "./ProjectDetail";
import { Button } from "@/components/ui/button";
import { Code2, Smartphone, Brain } from "lucide-react";

type Category = "all" | "web" | "mobile" | "ai";

const categories = [
  { id: "all" as Category, label: "All Projects", icon: Code2, count: 13 },
  { id: "web" as Category, label: "Web Development", icon: Code2, count: 8 },
  {
    id: "mobile" as Category,
    label: "Mobile Apps",
    icon: Smartphone,
    count: 5,
  },
  // {
  //   id: "ai" as Category,
  //   label: "Artificial Intelligence",
  //   icon: Brain,
  //   count: 5,
  // },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="min-h-screen px-6 py-20 relative z-10">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore my portfolio of web applications, mobile apps, and
            AI-powered solutions
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 animate-fade-in">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                variant={activeCategory === category.id ? "default" : "outline"}
                className={
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground glow-effect"
                    : "glass-card hover:border-primary"
                }
                size="lg"
              >
                <Icon className="w-5 h-5 mr-2" />
                {category.label}
                <span className="ml-2 px-2 py-0.5 rounded-full bg-background/20 text-xs">
                  {category.count}
                </span>
              </Button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-lg">
              No projects found in this category
            </p>
          </div>
        )}
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectDetail
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Projects;
