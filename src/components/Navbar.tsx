import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <a href="#" className="flex items-center">
          <img src={logo} alt="WebWithSam" className="h-8" />
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <a href="#services" className="hover:text-foreground transition-colors duration-200">Services</a>
          <a href="#work" className="hover:text-foreground transition-colors duration-200">Our Work</a>
          <a href="#pricing" className="hover:text-foreground transition-colors duration-200">Pricing</a>
          <a href="#reviews" className="hover:text-foreground transition-colors duration-200">Reviews</a>
        </div>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-1.5 rounded-full border border-foreground/15 px-5 py-2 text-sm font-medium text-foreground hover:bg-foreground hover:text-background transition-all duration-200 active:scale-[0.97]"
        >
          Get In Touch
        </a>

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
