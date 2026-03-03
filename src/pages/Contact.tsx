import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast.error(t.contactPage.fillRequired);
      return;
    }
    toast.success(t.contactPage.messageSent);
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-2">{t.contactPage.subtitle}</p>
          <h1 className="font-serif text-5xl font-bold text-primary-foreground">{t.contactPage.title}</h1>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">{t.contactPage.reachOut}</h2>
              <p className="text-muted-foreground text-sm">{t.contactPage.reachOutDesc}</p>

              {[
                { icon: MapPin, label: t.contactPage.address, value: "245 Addis Ababa, 1800\n Addis Ababa, ADD 10167" },
                { icon: Phone, label: t.contactPage.phone, value: "(251) 98006364" },
                { icon: Mail, label: t.contactPage.email, value: "melkamgetachew04@gmail.com" },
                { icon: Clock, label: t.contactPage.hours, value: "Mon-Fri: 9AM-6PM\nSat: 10AM-4PM" },
              ].map((item) => (
                <div key={item.label} className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{item.label}</p>
                    <p className="text-muted-foreground text-sm whitespace-pre-line">{item.value}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="lg:col-span-2 bg-card p-8 rounded-lg shadow-property">
              <h2 className="font-serif text-2xl font-bold text-card-foreground mb-6">{t.contactPage.sendMessage}</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="text" placeholder={t.contactPage.yourName} value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-gold" />
                  <input type="email" placeholder={t.contactPage.emailAddress} value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-gold" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="tel" placeholder={t.contactPage.phonePlaceholder} value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-gold" />
                  <input type="text" placeholder={t.contactPage.subject} value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-gold" />
                </div>
                <textarea rows={6} placeholder={t.contactPage.yourMessage} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-gold resize-none" />
                <button type="submit" className="bg-gold text-accent-foreground px-8 py-3 rounded-md font-semibold hover:brightness-110 transition-all">{t.contactPage.sendButton}</button>
              </form>
            </motion.div>
          </div>

          <div className="mt-16 bg-muted rounded-lg aspect-[16/6] flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-10 h-10 mx-auto mb-3 text-gold" />
              <p className="text-muted-foreground font-medium">245 Addis Avenue, Addis Ababa, ADD 10167</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
