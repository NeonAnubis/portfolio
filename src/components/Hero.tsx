import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/me.png";
import { Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 relative z-10">
      <div className="max-w-7xl w-full mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Introduction */}
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-2">
              <h2 className="text-primary text-lg font-semibold tracking-wide">
                Hello, I'm
              </h2>
              <h1 className="text-5xl md:text-7xl font-bold">Vasyl Anton</h1>
              <p className="text-2xl md:text-3xl font-light">
                AI-Powered Web & Mobile Specialist
              </p>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Crafting innovative digital experiences through cutting-edge web
              development, mobile applications, and artificial intelligence
              solutions. Passionate about transforming ideas into reality with
              modern technologies.
            </p>

            <div className="flex gap-4 pt-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground glow-effect"
                onClick={scrollToProjects}
              >
                View My Work
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10"
                onClick={scrollToContact}
              >
                Contact Me
              </Button>
            </div>

            {/* <div className="flex gap-4 pt-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:border-primary transition-all hover:glow-effect"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:border-primary transition-all hover:glow-effect"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:contact@example.com"
                className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:border-primary transition-all hover:glow-effect"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div> */}
          </div>

          {/* Right: Photo */}
          <div className="flex justify-center lg:justify-end animate-fade-in">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-2xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity" />
              <div className="relative glass-card p-2 rounded-2xl">
                <img
                  src={profilePhoto}
                  alt="Vasyl Anton"
                  className="w-full max-w-md rounded-xl object-cover aspect-square"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
