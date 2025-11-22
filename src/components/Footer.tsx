import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold gradient-text">
              Anton Sobolevskyi
            </h3>
            <p className="text-muted-foreground text-sm">
              AI-Powered Web & Mobile Specialist creating innovative digital
              experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-foreground font-semibold">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <a
                href="#hero"
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Home
              </a>
              <a
                href="#projects"
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Contact
              </a>
            </nav>
          </div>

          {/* Social */}
          {/* <div className="space-y-4">
            <h4 className="text-foreground font-semibold">Connect</h4>
            <div className="flex gap-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:border-primary transition-all hover:glow-effect"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:border-primary transition-all hover:glow-effect"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="mailto:vasyl.anton@example.com"
                className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:border-primary transition-all hover:glow-effect"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div> */}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm flex items-center gap-2">
              © {currentYear} Vasyl Anton. Made with{" "}
              <Heart className="w-4 h-4 text-primary fill-primary" /> and
              creativity.
            </p>
            <p className="text-muted-foreground text-sm">
              All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
