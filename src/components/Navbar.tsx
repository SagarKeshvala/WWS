import { useState } from "react";
import { Menu, X, ArrowUpRight, Linkedin } from "lucide-react";
import logo from "@/assets/logo.svg";

const UpworkIcon = ({ size = 18, className = "" }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703 0 1.491-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z" />
  </svg>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <a href="#" className="flex items-center">
          <img src={logo} alt="WebWithSam" className="h-14" />
        </a>

        <div className="hidden md:flex items-center gap-8 text-base font-medium text-muted-foreground">
          <a href="#services" className="hover:text-foreground transition-colors duration-200">Services</a>
          <a href="#work" className="hover:text-foreground transition-colors duration-200">Our Work</a>
          <a href="#pricing" className="hover:text-foreground transition-colors duration-200">Pricing</a>
          <a href="#reviews" className="hover:text-foreground transition-colors duration-200">Reviews</a>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://www.linkedin.com/in/sarmankeshvala/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full border border-border/60 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin size={16} />
          </a>
          <a
            href="https://www.upwork.com/freelancers/~01dc32e0465e7b20d7"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full border border-border/60 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all duration-200"
            aria-label="Upwork"
          >
            <UpworkIcon size={15} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 rounded-full border border-foreground/15 px-5 py-2 text-sm font-medium text-foreground hover:bg-foreground hover:text-background transition-all duration-200 active:scale-[0.97]"
          >
            Get In Touch
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-foreground active:scale-95 transition-transform"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-md px-6 py-6 space-y-4">
          <a href="#services" onClick={() => setIsOpen(false)} className="block text-sm font-medium text-muted-foreground hover:text-foreground">Services</a>
          <a href="#work" onClick={() => setIsOpen(false)} className="block text-sm font-medium text-muted-foreground hover:text-foreground">Our Work</a>
          <a href="#pricing" onClick={() => setIsOpen(false)} className="block text-sm font-medium text-muted-foreground hover:text-foreground">Pricing</a>
          <a href="#reviews" onClick={() => setIsOpen(false)} className="block text-sm font-medium text-muted-foreground hover:text-foreground">Reviews</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="inline-flex items-center gap-1.5 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground">
            Get In Touch <ArrowUpRight size={14} />
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
