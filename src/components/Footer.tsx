import logo from "@/assets/logo.svg";

const Footer = () => {
  return (
    <footer className="border-t border-border/60 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <img src={logo} alt="WebWithSam" className="h-14" />
            <p className="text-sm text-muted-foreground mt-1">Your white-label Elementor partner.</p>
          </div>

          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#services" className="hover:text-foreground transition-colors">Services</a>
            <a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a>
            <a href="#reviews" className="hover:text-foreground transition-colors">Reviews</a>
            <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border/40 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} WebWithSam. All rights reserved.</p>
          <p>Serving agencies worldwide 🌍</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
