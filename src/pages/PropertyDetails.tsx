import { useParams, Link } from "react-router-dom";
import { ArrowLeft, MapPin, Bed, Bath, Maximize, Check } from "lucide-react";
import { properties } from "@/data/properties";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { toast } from "sonner";
import { motion } from "framer-motion";

const PropertyDetails = () => {
  const { id } = useParams();
  const property = properties.find((p) => p.id === id);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  if (!property) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="pt-32 container mx-auto px-4 text-center py-20">
          <h1 className="font-serif text-3xl font-bold text-foreground mb-4">Property Not Found</h1>
          <Link to="/properties" className="text-primary hover:text-gold transition-colors">← Back to Properties</Link>
        </div>
        <Footer />
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast.error("Please fill in all required fields.");
      return;
    }
    toast.success("Inquiry sent! Our agent will contact you shortly.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <Link to="/properties" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6">
            <ArrowLeft className="w-4 h-4" /> Back to Properties
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="rounded-lg overflow-hidden mb-8">
                <img src={property.image} alt={property.title} className="w-full aspect-[16/10] object-cover" />
              </motion.div>

              <span className="bg-gold text-accent-foreground text-xs font-semibold px-3 py-1 rounded capitalize">{property.type}</span>
              <h1 className="font-serif text-4xl font-bold text-foreground mt-3 mb-2">{property.title}</h1>
              <p className="flex items-center gap-1 text-muted-foreground mb-2">
                <MapPin className="w-4 h-4" /> {property.location}
              </p>
              <p className="text-gold font-serif text-3xl font-bold mb-6">${property.price.toLocaleString()}</p>

              <div className="flex gap-6 mb-8 pb-6 border-b border-border">
                <span className="flex items-center gap-2 text-foreground"><Bed className="w-5 h-5 text-gold" /> {property.bedrooms} Beds</span>
                <span className="flex items-center gap-2 text-foreground"><Bath className="w-5 h-5 text-gold" /> {property.bathrooms} Baths</span>
                <span className="flex items-center gap-2 text-foreground"><Maximize className="w-5 h-5 text-gold" /> {property.area} sqft</span>
              </div>

              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Description</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">{property.description}</p>

              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Features</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
                {property.features.map((f) => (
                  <span key={f} className="flex items-center gap-2 text-sm text-foreground">
                    <Check className="w-4 h-4 text-gold" /> {f}
                  </span>
                ))}
              </div>

              {/* Map placeholder */}
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Location</h2>
              <div className="bg-muted rounded-lg aspect-[16/9] flex items-center justify-center">
                <p className="text-muted-foreground">
                  <MapPin className="w-8 h-8 mx-auto mb-2 text-gold" />
                  {property.location}
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div className="bg-card p-6 rounded-lg shadow-property sticky top-28">
                <h3 className="font-serif text-lg font-semibold text-card-foreground mb-1">Inquire About This Property</h3>
                <p className="text-sm text-muted-foreground mb-5">Agent: {property.agent}</p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-md border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-gold"
                  />
                  <input
                    type="email"
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-md border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-gold"
                  />
                  <input
                    type="tel"
                    placeholder="Phone (optional)"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-md border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-gold"
                  />
                  <textarea
                    rows={4}
                    placeholder="Your Message *"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-md border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-gold resize-none"
                  />
                  <button
                    type="submit"
                    className="w-full bg-gold text-accent-foreground py-3 rounded-md font-semibold hover:brightness-110 transition-all"
                  >
                    Send Inquiry
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PropertyDetails;
