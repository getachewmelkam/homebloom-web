import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";
  const { t } = useLanguage();

  const navLinks = [
    { label: t.nav.home, path: "/" },
    { label: t.nav.about, path: "/about" },
    {
      label: t.nav.properties,
      path: "/properties",
      dropdown: [
        { label: t.nav.allProperties, path: "/properties" },
        { label: t.nav.apartments, path: "/properties?type=apartment" },
        { label: t.nav.houses, path: "/properties?type=house" },
        { label: t.nav.villas, path: "/properties?type=villa" },
        { label: t.nav.townhouses, path: "/properties?type=townhouse" },
        { label: t.nav.penthouses, path: "/properties?type=penthouse" },
      ],
    },
    { label: t.nav.contact, path: "/contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isHome ? "bg-charcoal/80 backdrop-blur-md" : "bg-primary shadow-lg"}`}>
      <div className="container mx-auto flex items-center justify-between py-4 px-4 lg:px-8">
        <Link to="/" className="font-serif text-2xl font-bold text-primary-foreground tracking-wide">
          Prestige<span className="text-gold">Estates</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <div
              key={link.label}
              className="relative"
              onMouseEnter={() => link.dropdown && setDropdownOpen(true)}
              onMouseLeave={() => link.dropdown && setDropdownOpen(false)}
            >
              <Link
                to={link.path}
                className={`flex items-center gap-1 text-sm font-medium tracking-wide transition-colors hover:text-gold ${
                  location.pathname === link.path ? "text-gold" : "text-primary-foreground"
                }`}
              >
                {link.label}
                {link.dropdown && <ChevronDown className="w-3 h-3" />}
              </Link>
              {link.dropdown && dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute top-full left-0 mt-2 w-48 bg-card rounded-lg shadow-property-hover overflow-hidden border border-border"
                >
                  {link.dropdown.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="block px-4 py-2.5 text-sm text-card-foreground hover:bg-secondary transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </div>
          ))}
          <LanguageSwitcher />
          <Link
            to="/contact"
            className="bg-gold text-accent-foreground px-5 py-2 rounded-md text-sm font-semibold hover:brightness-110 transition-all"
          >
            {t.nav.getInTouch}
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 lg:hidden">
          <LanguageSwitcher />
          <button className="text-primary-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-primary overflow-hidden"
          >
            <div className="px-4 pb-6 space-y-3">
              {navLinks.map((link) => (
                <div key={link.label}>
                  <Link
                    to={link.path}
                    onClick={() => setMobileOpen(false)}
                    className="block py-2 text-primary-foreground font-medium hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                  {link.dropdown?.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setMobileOpen(false)}
                      className="block py-1.5 pl-4 text-sm text-primary-foreground/70 hover:text-gold transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
