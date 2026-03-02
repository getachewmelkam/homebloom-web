import { motion } from "framer-motion";
import { Target, Eye, Users } from "lucide-react";
import { teamMembers } from "@/data/properties";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/i18n/LanguageContext";

const About = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-2">{t.about.subtitle}</p>
          <h1 className="font-serif text-5xl font-bold text-primary-foreground">{t.about.title}</h1>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-card p-10 rounded-lg shadow-property">
            <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-5">
              <Target className="w-6 h-6 text-gold" />
            </div>
            <h2 className="font-serif text-2xl font-bold text-card-foreground mb-4">{t.about.missionTitle}</h2>
            <p className="text-muted-foreground leading-relaxed">{t.about.missionText}</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-card p-10 rounded-lg shadow-property">
            <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-5">
              <Eye className="w-6 h-6 text-gold" />
            </div>
            <h2 className="font-serif text-2xl font-bold text-card-foreground mb-4">{t.about.visionTitle}</h2>
            <p className="text-muted-foreground leading-relaxed">{t.about.visionText}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-section-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-gold" />
            </div>
            <h2 className="font-serif text-4xl font-bold text-foreground">{t.about.teamTitle}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card p-6 rounded-lg shadow-property text-center"
              >
                <div className="w-20 h-20 rounded-full bg-primary mx-auto mb-4 flex items-center justify-center">
                  <span className="text-primary-foreground font-serif text-2xl font-bold">
                    {member.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                </div>
                <h3 className="font-serif text-lg font-semibold text-card-foreground">{member.name}</h3>
                <p className="text-gold text-sm font-medium mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
