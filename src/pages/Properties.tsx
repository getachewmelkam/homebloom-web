import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { properties } from "@/data/properties";
import PropertyCard from "@/components/PropertyCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const propertyTypes = ["all", "apartment", "house", "villa", "townhouse", "penthouse"];
const priceRanges = [
  { label: "Any Price", min: 0, max: Infinity },
  { label: "Under $500K", min: 0, max: 500000 },
  { label: "$500K - $1M", min: 500000, max: 1000000 },
  { label: "$1M - $2M", min: 1000000, max: 2000000 },
  { label: "$2M+", min: 2000000, max: Infinity },
];
const locations = ["All Locations", "Manhattan, NY", "Greenwich, CT", "Malibu, CA", "Georgetown, DC", "Key Biscayne, FL"];

const Properties = () => {
  const [searchParams] = useSearchParams();
  const typeFromUrl = searchParams.get("type") || "all";

  const [typeFilter, setTypeFilter] = useState(typeFromUrl);
  const [priceIndex, setPriceIndex] = useState(0);
  const [locationFilter, setLocationFilter] = useState("All Locations");

  const filtered = properties.filter((p) => {
    if (typeFilter !== "all" && p.type !== typeFilter) return false;
    const range = priceRanges[priceIndex];
    if (p.price < range.min || p.price > range.max) return false;
    if (locationFilter !== "All Locations" && !p.location.includes(locationFilter.replace("All Locations", ""))) return false;
    return true;
  });

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-2">Our Portfolio</p>
          <h1 className="font-serif text-5xl font-bold text-primary-foreground">Properties</h1>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Filters */}
          <div className="bg-card p-6 rounded-lg shadow-property mb-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="text-sm font-medium text-foreground mb-1 block">Type</label>
              <select
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
                className="w-full px-3 py-2 rounded-md border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-gold"
              >
                {propertyTypes.map((t) => (
                  <option key={t} value={t}>{t === "all" ? "All Types" : t.charAt(0).toUpperCase() + t.slice(1)}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1 block">Price Range</label>
              <select
                value={priceIndex}
                onChange={(e) => setPriceIndex(Number(e.target.value))}
                className="w-full px-3 py-2 rounded-md border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-gold"
              >
                {priceRanges.map((r, i) => (
                  <option key={i} value={i}>{r.label}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1 block">Location</label>
              <select
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
                className="w-full px-3 py-2 rounded-md border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-gold"
              >
                {locations.map((l) => (
                  <option key={l} value={l}>{l}</option>
                ))}
              </select>
            </div>
          </div>

          <p className="text-muted-foreground text-sm mb-6">{filtered.length} propert{filtered.length === 1 ? "y" : "ies"} found</p>

          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="font-serif text-2xl text-foreground mb-2">No properties match your filters</p>
              <p className="text-muted-foreground">Try adjusting your search criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((p, i) => (
                <PropertyCard key={p.id} property={p} index={i} />
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Properties;
