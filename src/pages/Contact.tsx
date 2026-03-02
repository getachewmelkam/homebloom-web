import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast.error("Please fill in all required fields.");
      return;
    }
    toast.success("Message sent! We'll get back to you within 24 hours.");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-2">Get In Touch</p>
          <h1 className="font-serif text-5xl font-bold text-primary-foreground">Contact Us</h1>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Reach Out to Us</h2>
              <p className="text-muted-foreground text-sm">Have questions about a property or need expert advice? We're here to help.</p>

              {[
                { icon: MapPin, label: "Address", value: "245 Park Avenue, Suite 1800\nNew York, NY 10167" },
                { icon: Phone, label: "Phone", value: "(212) 555-0180" },
                { icon: Mail, label: "Email", value: "hello@prestigeestates.com" },
                { icon: Clock, label: "Hours", value: "Mon-Fri: 9AM-6PM\nSat: 10AM-4PM" },
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

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2 bg-card p-8 rounded-lg shadow-property"
            >
              <h2 className="font-serif text-2xl font-bold text-card-foreground mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-gold"
                  />
                  <input
                    type="email"
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-gold"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="tel"
                    placeholder="Phone (optional)"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-gold"
                  />
                  <input
                    type="text"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-gold"
                  />
                </div>
                <textarea
                  rows={6}
                  placeholder="Your Message *"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-gold resize-none"
                />
                <button
                  type="submit"
                  className="bg-gold text-accent-foreground px-8 py-3 rounded-md font-semibold hover:brightness-110 transition-all"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>

          {/* Map placeholder */}
          <div className="mt-16 bg-muted rounded-lg aspect-[16/6] flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-10 h-10 mx-auto mb-3 text-gold" />
              <p className="text-muted-foreground font-medium">245 Park Avenue, New York, NY 10167</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
