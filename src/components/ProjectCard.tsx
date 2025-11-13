import { Project } from '@/data/projects';
import { Badge } from '@/components/ui/badge';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

const ProjectCard = ({ project, onClick }: ProjectCardProps) => {
  return (
    <div
      onClick={onClick}
      className="glass-card rounded-xl overflow-hidden cursor-pointer group hover:scale-[1.02] transition-all duration-300 hover:glow-effect"
    >
      <div className="aspect-video overflow-hidden bg-muted relative">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        
        <p className="text-muted-foreground text-sm line-clamp-2">
          {project.shortDescription}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {project.skills.slice(0, 3).map((skill) => (
            <Badge
              key={skill}
              variant="secondary"
              className="bg-muted text-foreground border border-border"
            >
              {skill}
            </Badge>
          ))}
          {project.skills.length > 3 && (
            <Badge variant="secondary" className="bg-muted text-foreground border border-border">
              +{project.skills.length - 3}
            </Badge>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
