import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";
import property4 from "@/assets/property-4.jpg";
import property5 from "@/assets/property-5.jpg";
import property6 from "@/assets/property-6.jpg";

export interface Property {
  id: string;
  title: string;
  price: number;
  location: string;
  type: "apartment" | "house" | "villa" | "townhouse" | "penthouse";
  bedrooms: number;
  bathrooms: number;
  area: number;
  image: string;
  images: string[];
  description: string;
  features: string[];
  agent: string;
  featured: boolean;
}

export const properties: Property[] = [
  {
    id: "1",
    title: "Skyline Luxury Apartments",
    price: 850000,
    location: "Downtown Manhattan, NY",
    type: "apartment",
    bedrooms: 3,
    bathrooms: 2,
    area: 1800,
    image: property1,
    images: [property1],
    description: "Experience urban living at its finest in this stunning luxury apartment with panoramic city views, floor-to-ceiling windows, and premium finishes throughout. Located in the heart of Manhattan with easy access to dining, shopping, and entertainment.",
    features: ["City Views", "Concierge", "Gym", "Rooftop Pool", "Parking"],
    agent: "Sarah Mitchell",
    featured: true,
  },
  {
    id: "2",
    title: "Charming Colonial Estate",
    price: 625000,
    location: "Greenwich, CT",
    type: "house",
    bedrooms: 4,
    bathrooms: 3,
    area: 2800,
    image: property2,
    images: [property2],
    description: "A beautifully maintained colonial home set on a manicured lot in one of Connecticut's most sought-after communities. Features include a gourmet kitchen, hardwood floors, and a private backyard oasis.",
    features: ["Garden", "Fireplace", "Garage", "Updated Kitchen", "Hardwood Floors"],
    agent: "James Crawford",
    featured: true,
  },
  {
    id: "3",
    title: "Manhattan Sky Penthouse",
    price: 2400000,
    location: "Upper East Side, NY",
    type: "penthouse",
    bedrooms: 4,
    bathrooms: 4,
    area: 3500,
    image: property3,
    images: [property3],
    description: "An extraordinary penthouse offering breathtaking 360-degree views of the Manhattan skyline. This residence features double-height ceilings, a private terrace, and world-class amenities in one of New York's most prestigious addresses.",
    features: ["360° Views", "Private Terrace", "Wine Cellar", "Smart Home", "Doorman"],
    agent: "Victoria Lane",
    featured: true,
  },
  {
    id: "4",
    title: "Mediterranean Coastal Villa",
    price: 1750000,
    location: "Malibu, CA",
    type: "villa",
    bedrooms: 5,
    bathrooms: 4,
    area: 4200,
    image: property4,
    images: [property4],
    description: "Live the coastal dream in this stunning Mediterranean-style villa with ocean views, a private pool, and lush gardens. Every detail has been carefully curated to blend indoor-outdoor California living.",
    features: ["Ocean View", "Pool", "Guest House", "Wine Room", "Outdoor Kitchen"],
    agent: "David Chen",
    featured: true,
  },
  {
    id: "5",
    title: "Historic Brick Townhouse",
    price: 975000,
    location: "Georgetown, DC",
    type: "townhouse",
    bedrooms: 3,
    bathrooms: 3,
    area: 2200,
    image: property5,
    images: [property5],
    description: "A meticulously restored townhouse in the heart of historic Georgetown. Original architectural details blend seamlessly with modern updates, offering the perfect combination of charm and convenience.",
    features: ["Historic District", "Patio", "Renovated", "Walk Score 95", "Storage"],
    agent: "Sarah Mitchell",
    featured: false,
  },
  {
    id: "6",
    title: "Waterfront Paradise Retreat",
    price: 3200000,
    location: "Key Biscayne, FL",
    type: "villa",
    bedrooms: 6,
    bathrooms: 5,
    area: 5000,
    image: property6,
    images: [property6],
    description: "An exclusive waterfront property offering unparalleled sunset views and direct ocean access. This architectural masterpiece features a private dock, infinity pool, and resort-style outdoor living spaces.",
    features: ["Waterfront", "Private Dock", "Infinity Pool", "Home Theater", "Elevator"],
    agent: "Victoria Lane",
    featured: true,
  },
];

export const testimonials = [
  {
    name: "Robert & Emily Parker",
    text: "Prestige Estates made finding our dream home effortless. Their team's knowledge and dedication went above and beyond our expectations.",
    role: "Homeowners since 2024",
  },
  {
    name: "Maria Gonzalez",
    text: "As a first-time buyer, I was nervous about the process. My agent guided me every step of the way and found me the perfect condo within my budget.",
    role: "First-time Buyer",
  },
  {
    name: "Jonathan & Lisa Reed",
    text: "We sold our property in under two weeks thanks to their exceptional marketing strategy and professional staging advice. Highly recommended!",
    role: "Property Sellers",
  },
];

export const teamMembers = [
  { name: "Sarah Mitchell", role: "Lead Agent & Co-Founder", bio: "With over 15 years in luxury real estate, Sarah brings unmatched market expertise and a client-first approach." },
  { name: "James Crawford", role: "Senior Property Advisor", bio: "James specializes in residential properties and has closed over $200M in transactions throughout his career." },
  { name: "Victoria Lane", role: "Director of Sales", bio: "Victoria's strategic marketing background ensures every listing reaches the right buyers at the right time." },
  { name: "David Chen", role: "Commercial Real Estate Expert", bio: "David brings 12 years of experience in commercial and mixed-use properties across major metropolitan markets." },
];
