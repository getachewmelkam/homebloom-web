import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { properties } from "@/data/properties";
import PropertyCard from "@/components/PropertyCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/i18n/LanguageContext";

const propertyTypes = ["all", "apartment", "house", "villa", "townhouse", "penthouse"];
const priceRanges = [
  { min: 0, max: Infinity },
  { min: 0, max: 500000 },
  { min: 500000, max: 1000000 },
  { min: 1000000, max: 2000000 },
  { min: 2000000, max: Infinity },
];
const locations = ["All Locations", "Manhattan, NY", "Greenwich, CT", "Malibu, CA", "Georgetown, DC", "Key Biscayne, FL"];

const Properties = () => {
  const [searchParams] = useSearchParams();
  const typeFromUrl = searchParams.get("type") || "all";
  const { t } = useLanguage();

  const [typeFilter, setTypeFilter] = useState(typeFromUrl);
  const [priceIndex, setPriceIndex] = useState(0);
  const [locationFilter, setLocationFilter] = useState("All Locations");

  const priceLabels = [t.propertiesPage.anyPrice, t.propertiesPage.under500k, t.propertiesPage.range500kTo1m, t.propertiesPage.range1mTo2m, t.propertiesPage.above2m];

  const typeLabels: Record<string, string> = {
    all: t.propertiesPage.allTypes,
    apartment: t.nav.apartments,
    house: t.nav.houses,
    villa: t.nav.villas,
    townhouse: t.nav.townhouses,
    penthouse: t.nav.penthouses,
  };

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
          <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-2">{t.propertiesPage.subtitle}</p>
          <h1 className="font-serif text-5xl font-bold text-primary-foreground">{t.propertiesPage.title}</h1>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="bg-card p-6 rounded-lg shadow-property mb-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="text-sm font-medium text-foreground mb-1 block">{t.propertiesPage.type}</label>
              <select
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
                className="w-full px-3 py-2 rounded-md border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-gold"
              >
                {propertyTypes.map((tp) => (
                  <option key={tp} value={tp}>{typeLabels[tp]}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1 block">{t.propertiesPage.priceRange}</label>
              <select
                value={priceIndex}
                onChange={(e) => setPriceIndex(Number(e.target.value))}
                className="w-full px-3 py-2 rounded-md border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-gold"
              >
                {priceLabels.map((label, i) => (
                  <option key={i} value={i}>{label}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1 block">{t.propertiesPage.location}</label>
              <select
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
                className="w-full px-3 py-2 rounded-md border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-gold"
              >
                {locations.map((l) => (
                  <option key={l} value={l}>{l === "All Locations" ? t.propertiesPage.allLocations : l}</option>
                ))}
              </select>
            </div>
          </div>

          <p className="text-muted-foreground text-sm mb-6">
            {filtered.length} {filtered.length === 1 ? t.propertiesPage.propertyFound : t.propertiesPage.propertiesFound}
          </p>

          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="font-serif text-2xl text-foreground mb-2">{t.propertiesPage.noMatch}</p>
              <p className="text-muted-foreground">{t.propertiesPage.tryAdjusting}</p>
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
