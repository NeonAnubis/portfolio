import { Project } from '@/data/projects';
import { X, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useEffect } from 'react';

interface ProjectDetailProps {
  project: Project;
  onClose: () => void;
}

const ProjectDetail = ({ project, onClose }: ProjectDetailProps) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Detail Panel */}
      <div className="relative w-full max-w-4xl h-full bg-background border-l border-border overflow-y-auto animate-slide-in-right">
        {/* Header */}
        <div className="sticky top-0 z-10 glass-card border-b border-border p-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h2 className="text-3xl font-bold gradient-text">{project.title}</h2>
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
            >
              <ExternalLink className="w-5 h-5" />
              <span className="text-sm font-medium">View Live</span>
            </a>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="rounded-full hover:bg-muted"
          >
            <X className="w-6 h-6" />
          </Button>
        </div>

        <div className="p-6 space-y-8">
          {/* Skills */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-foreground">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.skills.map((skill) => (
                <Badge
                  key={skill}
                  className="bg-primary/10 text-primary border border-primary/20 px-4 py-1"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          {/* Main Image */}
          <div className="rounded-xl overflow-hidden border border-border">
            <img
              src={project.image}
              alt={project.title}
              className="w-full aspect-video object-cover"
            />
          </div>

          {/* Description */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-foreground">Project Overview</h3>
            <p className="text-muted-foreground leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          {/* Gallery */}
          {project.images.length > 0 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Gallery</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.images.map((image, index) => (
                  <div
                    key={index}
                    className="rounded-lg overflow-hidden border border-border hover:border-primary transition-colors group"
                  >
                    <img
                      src={image}
                      alt={`${project.title} screenshot ${index + 1}`}
                      className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="pt-6 border-t border-border">
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="w-full bg-primary hover:bg-primary/90 glow-effect">
                <ExternalLink className="w-5 h-5 mr-2" />
                Visit Live Project
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
