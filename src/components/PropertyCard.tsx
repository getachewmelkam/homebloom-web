import { Link } from "react-router-dom";
import { MapPin, Bed, Bath, Maximize } from "lucide-react";
import { Property } from "@/data/properties";
import { motion } from "framer-motion";

const PropertyCard = ({ property, index = 0 }: { property: Property; index?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
  >
    <Link to={`/property/${property.id}`} className="group block bg-card rounded-lg overflow-hidden shadow-property hover:shadow-property-hover transition-all duration-300">
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <span className="absolute top-3 left-3 bg-gold text-accent-foreground text-xs font-semibold px-3 py-1 rounded capitalize">
          {property.type}
        </span>
        {property.featured && (
          <span className="absolute top-3 right-3 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded">
            Featured
          </span>
        )}
      </div>
      <div className="p-5">
        <p className="text-gold font-serif text-xl font-bold mb-1">
          ${property.price.toLocaleString()}
        </p>
        <h3 className="font-serif text-lg font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors">
          {property.title}
        </h3>
        <p className="flex items-center gap-1 text-muted-foreground text-sm mb-4">
          <MapPin className="w-3.5 h-3.5" /> {property.location}
        </p>
        <div className="flex items-center gap-4 text-sm text-muted-foreground border-t border-border pt-3">
          <span className="flex items-center gap-1"><Bed className="w-4 h-4" /> {property.bedrooms}</span>
          <span className="flex items-center gap-1"><Bath className="w-4 h-4" /> {property.bathrooms}</span>
          <span className="flex items-center gap-1"><Maximize className="w-4 h-4" /> {property.area} sqft</span>
        </div>
      </div>
    </Link>
  </motion.div>
);

export default PropertyCard;
