import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl font-bold mb-4">
              Prestige<span className="text-gold">Estates</span>
            </h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">{t.footer.brand}</p>
            <div className="flex gap-4">
              {["facebook", "instagram", "twitter", "linkedin"].map((s) => (
                <a key={s} href="#" className="w-9 h-9 rounded-full bg-primary-foreground/10 hover:bg-gold transition-colors flex items-center justify-center text-xs font-semibold uppercase">
                  {s[0].toUpperCase()}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">{t.footer.quickLinks}</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              {[
                { label: t.nav.home, path: "/" },
                { label: t.nav.about, path: "/about" },
                { label: t.nav.properties, path: "/properties" },
                { label: t.nav.contact, path: "/contact" },
              ].map((l) => (
                <li key={l.path}>
                  <Link to={l.path} className="hover:text-gold transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Property Types */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">{t.footer.propertyTypes}</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              {[
                { label: t.nav.apartments, type: "apartment" },
                { label: t.nav.houses, type: "house" },
                { label: t.nav.villas, type: "villa" },
                { label: t.nav.townhouses, type: "townhouse" },
                { label: t.nav.penthouses, type: "penthouse" },
              ].map((item) => (
                <li key={item.type}>
                  <Link to={`/properties?type=${item.type}`} className="hover:text-gold transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">{t.footer.contactUs}</h4>
            <div className="space-y-3 text-sm text-primary-foreground/70 mb-6">
              <p className="flex items-center gap-2"><MapPin className="w-4 h-4 text-gold" /> 245 Park Avenue, New York, NY</p>
              <p className="flex items-center gap-2"><Phone className="w-4 h-4 text-gold" /> (212) 555-0180</p>
              <p className="flex items-center gap-2"><Mail className="w-4 h-4 text-gold" /> hello@prestigeestates.com</p>
            </div>
            <h4 className="font-serif text-sm font-semibold mb-2">{t.footer.newsletter}</h4>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder={t.footer.emailPlaceholder}
                className="flex-1 px-3 py-2 text-sm bg-primary-foreground/10 rounded-l-md border-none focus:outline-none focus:ring-1 focus:ring-gold text-primary-foreground placeholder:text-primary-foreground/40"
              />
              <button type="submit" className="bg-gold text-accent-foreground px-4 py-2 rounded-r-md text-sm font-semibold hover:brightness-110 transition-all">
                {t.footer.join}
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 py-5 text-center text-xs text-primary-foreground/50">
        © {new Date().getFullYear()} Prestige Estates. {t.footer.rights}
      </div>
    </footer>
  );
};

export default Footer;
