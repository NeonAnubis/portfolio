import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/cjh2.png";
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
              I'm a AI-Powered Web & Mobile Specialist who turns ideas into
              intelligent application that work smarter, not harder. If you need
              an AI-powered product that stands out whether it’s a mobile app, a
              SaaS platform, or automation that saves time, I can make it
              happen.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              ✨ I focus on real results scalable, secure, and production-ready
              applications. Even though I’m just starting on Upwork, I bring 5+
              years of building AI-driven systems from speech recognition and
              chatbots to viral video automation and healthcare platforms.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              ⚙️ What I deliver:
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              - AI-Powered Web & Mobile Apps : React, Next.js, Flutter, React
              Native(Expo) and Python backends with AI features built-in.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              - Intelligent Automation : Chatbots, voice agents, and smart
              workflows using LLMs, Whisper, and custom models.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              - End-to-End Development : From wireframes to deployment with
              APIs, databases, and cloud integration.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              💡 Why clients choose me:
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              - Impact over output : I design solutions that move metrics, not
              just write code.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              - Secure & reliable : Data protection, clean architecture, and
              strong performance come first. - Clear collaboration : Transparent
              communication, quick response times, and milestone-based delivery.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              - Clear collaboration : Transparent communication, quick response
              times, and milestone-based delivery.
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
