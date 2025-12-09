import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" }
  ];

  const serviceLinks = [
    "Amazon Account Management",
    "Amazon Advertising",
    "Business Store & A+ Content",
    "Review Management",
    "Webapp Development",
    "Social Media Marketing"
  ];

  return (
    <footer className="bg-background/10 border-t border-border/60 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Column */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src="/images/logo/logo-circle.svg"
                alt="Ecomm Elevate Solutions Logo"
                className="h-16 w-16 object-contain"
              />
              <h2 className="text-2xl font-bold text-white tracking-tight">Ecomm Elevate Solutions</h2>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Ground Floor, 1C, Jama Masjid Lane, Takiya ward Lane, Opp Jama Masjid, Kurla West, Mumbai, Mumbai Suburban, Maharashtra, 400070
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-2">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Contact Us</h3>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex items-start">
                <span className="font-medium text-foreground mr-2">Phone:</span>
                +91 88284 77469
              </li>
              <li className="flex items-start">
                <span className="font-medium text-foreground mr-2">Email:</span>
                shaikhaman66@gmail.com
              </li>
              <li className="flex items-start">
                <span className="font-medium text-foreground mr-2">Location:</span>
                Ground Floor, 1C, Jama Masjid Lane, Takiya ward Lane, Opp Jama Masjid, Kurla West, Mumbai - 400070, Maharashtra
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border/40 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {currentYear} Ecomm Elevate Solutions. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-xs text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-primary transition-colors">Terms & Conditions</a>
            <span>•</span>
            <a href="#" className="hover:text-primary transition-colors">Shipping</a>
            <span>•</span>
            <a href="#" className="hover:text-primary transition-colors">Cancellation & Refunds</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
  ;

export default Footer;
