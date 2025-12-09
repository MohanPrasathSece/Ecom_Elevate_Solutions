import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const handleNavClick = (path: string) => {
    if (location.pathname === path) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${isScrolled
        ? 'bg-background/80 backdrop-blur-xl border-b border-border/60'
        : 'bg-transparent border-b border-transparent'
        }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <Link to="/" className="flex items-center group z-50 relative" style={{ fontFamily: 'Poppins, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}>
            <img
              src="/images/logo/Gemini_Generated_Image_sss5a4sss5a4sss5-removebg-preview.png"
              alt="Ecom elevate solution Logo"
              className="h-16 sm:h-18 w-auto object-contain"
            />
          </Link>

          <div className="hidden xl:flex items-center space-x-8">
            <Link
              to="/"
              onClick={() => handleNavClick('/')}
              className={`text-sm font-light px-4 py-2 rounded-full transition-smooth uppercase tracking-wide ${location.pathname === '/'
                ? "text-foreground bg-muted/40"
                : "text-muted-foreground hover:text-foreground hover:bg-muted/20"
                }`}
            >
              Home
            </Link>

            <Link
              to="/about"
              onClick={() => handleNavClick('/about')}
              className={`text-sm font-light px-4 py-2 rounded-full transition-smooth uppercase tracking-wide ${location.pathname === '/about'
                ? "text-foreground bg-muted/40"
                : "text-muted-foreground hover:text-foreground hover:bg-muted/20"
                }`}
            >
              About
            </Link>

            <Link
              to="/services"
              onClick={() => handleNavClick('/services')}
              className={`text-sm font-light px-4 py-2 rounded-full transition-smooth uppercase tracking-wide ${location.pathname === '/services'
                ? "text-foreground bg-muted/40"
                : "text-muted-foreground hover:text-foreground hover:bg-muted/20"
                }`}
            >
              Services
            </Link>

            <Link
              to="/portfolio"
              onClick={() => handleNavClick('/portfolio')}
              className={`text-sm font-light px-4 py-2 rounded-full transition-smooth uppercase tracking-wide ${location.pathname === '/portfolio'
                ? "text-foreground bg-muted/40"
                : "text-muted-foreground hover:text-foreground hover:bg-muted/20"
                }`}
            >
              Portfolio
            </Link>

            <Link
              to="/contact"
              onClick={() => handleNavClick('/contact')}
              className={`text-sm font-light px-4 py-2 rounded-full transition-smooth uppercase tracking-wide ${location.pathname === '/contact'
                ? "text-foreground bg-muted/40"
                : "text-muted-foreground hover:text-foreground hover:bg-muted/20"
                }`}
            >
              Contact
            </Link>

            <Button
              asChild
              size="sm"
              className="rounded-full bg-white text-gray-900 hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all font-semibold"
            >
              <Link to="/contact">Book Strategy Call</Link>
            </Button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="xl:hidden p-2 rounded-full hover:bg-white/10 transition-smooth text-foreground z-50 relative"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 xl:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
          <div className="absolute top-24 left-4 right-4 z-50 xl:hidden animate-in slide-in-from-top-5 fade-in zoom-in-95 duration-200">
            <div className="bg-black/95 backdrop-blur-3xl border border-white/10 rounded-3xl p-6 shadow-2xl overflow-hidden" style={{ fontFamily: 'Poppins, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}>
              <nav className="flex flex-col space-y-2">
                <Link
                  to="/"
                  onClick={() => {
                    handleNavClick('/');
                    setIsMenuOpen(false);
                  }}
                  className={`text-lg font-medium py-3 px-4 rounded-xl transition-all ${location.pathname === '/'
                    ? "bg-white/10 text-white"
                    : "text-white/70 hover:text-white hover:bg-white/5"
                    }`}
                >
                  Home
                </Link>

                <Link
                  to="/about"
                  onClick={() => {
                    handleNavClick('/about');
                    setIsMenuOpen(false);
                  }}
                  className={`text-lg font-medium py-3 px-4 rounded-xl transition-all ${location.pathname === '/about'
                    ? "bg-white/10 text-white"
                    : "text-white/70 hover:text-white hover:bg-white/5"
                    }`}
                >
                  About
                </Link>

                <Link
                  to="/services"
                  onClick={() => {
                    handleNavClick('/services');
                    setIsMenuOpen(false);
                  }}
                  className={`text-lg font-medium py-3 px-4 rounded-xl transition-all ${location.pathname === '/services'
                    ? "bg-white/10 text-white"
                    : "text-white/70 hover:text-white hover:bg-white/5"
                    }`}
                >
                  Services
                </Link>

                <Link
                  to="/portfolio"
                  onClick={() => {
                    handleNavClick('/portfolio');
                    setIsMenuOpen(false);
                  }}
                  className={`text-lg font-medium py-3 px-4 rounded-xl transition-all ${location.pathname === '/portfolio'
                    ? "bg-white/10 text-white"
                    : "text-white/70 hover:text-white hover:bg-white/5"
                    }`}
                >
                  Portfolio
                </Link>

                <Link
                  to="/contact"
                  onClick={() => {
                    handleNavClick('/contact');
                    setIsMenuOpen(false);
                  }}
                  className={`text-lg font-medium py-3 px-4 rounded-xl transition-all ${location.pathname === '/contact'
                    ? "bg-white/10 text-white"
                    : "text-white/70 hover:text-white hover:bg-white/5"
                    }`}
                >
                  Contact
                </Link>

                <div className="pt-4 mt-2 border-t border-white/10">
                  <Button
                    asChild
                    size="lg"
                    className="w-full rounded-xl bg-white text-black hover:bg-gray-200 font-bold shadow-lg"
                  >
                    <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                      Book Strategy Call
                    </Link>
                  </Button>
                </div>
              </nav>
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
