import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Home, Shield, Star } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { properties, testimonials } from "@/data/properties";
import PropertyCard from "@/components/PropertyCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/i18n/LanguageContext";

const Index = () => {
  const featured = properties.filter((p) => p.featured).slice(0, 3);
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center">
        <img src={heroBg} alt="Luxury modern estate at sunset" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gold font-medium tracking-[0.3em] uppercase text-sm mb-4"
          >
            {t.hero.subtitle}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="font-serif text-5xl md:text-7xl font-bold text-cream mb-6 leading-tight"
          >
            {t.hero.title1}<span className="text-gradient-gold">{t.hero.titleHighlight}</span>{t.hero.title2}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-cream/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto"
          >
            {t.hero.description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/properties" className="bg-gold text-accent-foreground px-8 py-3.5 rounded-md font-semibold hover:brightness-110 transition-all flex items-center justify-center gap-2">
              {t.hero.browseProperties} <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/contact" className="border border-cream/30 text-cream px-8 py-3.5 rounded-md font-semibold hover:bg-cream/10 transition-all">
              {t.hero.contactUs}
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary py-12">
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center px-4">
          {[
            { label: t.stats.propertiesSold, value: "2,500+" },
            { label: t.stats.happyClients, value: "1,800+" },
            { label: t.stats.yearsExperience, value: "20+" },
            { label: t.stats.awardsWon, value: "35+" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-gold font-serif text-3xl font-bold">{stat.value}</p>
              <p className="text-primary-foreground/70 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-20 bg-section-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-2">{t.featured.subtitle}</p>
            <h2 className="font-serif text-4xl font-bold text-foreground">{t.featured.title}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featured.map((p, i) => (
              <PropertyCard key={p.id} property={p} index={i} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/properties" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-gold transition-colors">
              {t.featured.viewAll} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-2">{t.whyUs.subtitle}</p>
            <h2 className="font-serif text-4xl font-bold text-foreground">{t.whyUs.title}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Home, title: t.whyUs.exclusive, desc: t.whyUs.exclusiveDesc },
              { icon: Shield, title: t.whyUs.trusted, desc: t.whyUs.trustedDesc },
              { icon: Star, title: t.whyUs.whiteGlove, desc: t.whyUs.whiteGloveDesc },
            ].map((item) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center p-8 rounded-lg bg-card shadow-property"
              >
                <div className="w-14 h-14 rounded-full bg-gold/10 mx-auto flex items-center justify-center mb-5">
                  <item.icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-card-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-2">{t.testimonials.subtitle}</p>
            <h2 className="font-serif text-4xl font-bold text-foreground">{t.testimonials.title}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((te, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card p-8 rounded-lg shadow-property"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm mb-6 italic">"{te.text}"</p>
                <p className="font-serif font-semibold text-card-foreground">{te.name}</p>
                <p className="text-xs text-muted-foreground">{te.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-4xl font-bold text-primary-foreground mb-4">{t.cta.title}</h2>
          <p className="text-primary-foreground/70 mb-8 max-w-xl mx-auto">{t.cta.description}</p>
          <Link to="/contact" className="bg-gold text-accent-foreground px-8 py-3.5 rounded-md font-semibold hover:brightness-110 transition-all inline-flex items-center gap-2">
            {t.cta.button} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
