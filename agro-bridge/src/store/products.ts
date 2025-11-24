
import { Product } from "~/app/types/types";

export const products: Product[] = [
  // Cashew Nuts
  {
    slug: "cashew-nuts",
    name: "Premium Raw Cashew Nuts",
    price: 1230,
    location: "Oyo & Kaduna, Nigeria",
    inStock: true,
    imageUrl: "/products/cashew.jpg",
    imageAlt: "Premium raw cashew nuts ready for export",
    description: "Top-grade raw cashew nuts from verified Nigerian farmers.",
    seeds: "Cashew",
    availability: "In Stock – 200+ Tons",
    minimumOrder: "5 Tons",
    grade: "WW240 / WW320",
    packaging: "50kg jute bags",
    originDetails: "Hand-picked and sun-dried from Oyo and Kaduna farms.",
    downloadSpecSheetUrl: "/rust-book.pdf",
    seoDescription: "Export-quality Nigerian cashew nuts – WW240 & WW320 grades.",
    galleryImages: [
      { url: "/products/cashew.jpg", alt: "Close-up of premium cashew nuts" },
      { url: "/products/palm-oil.jpg", alt: "Cashew nuts in jute bags" },
      { url: "/products/cashew.jpg", alt: "Close-up of premium cashew nuts" },
      { url: "/products/sesame.jpg", alt: "Export-ready cashew packaging" },

    ],
    relatedProducts: [
      // Crude Palm Oil
      { 
        slug: "crude-palm-oil",
        name: "Crude Palm Oil (CPO)",
        price: 488,
        imageUrl: "/products/palm-oil.jpg", 
        description: "Freshly pressed crude palm oil with low FFA." 
      },
      // Sesame Seeds
      { 
        slug: "sesame-seeds", 
        name: "White Sesame Seeds", 
        price: 1450, 
        imageUrl: "/products/sesame.jpg", 
        description: "99.95% purity white sesame seeds, naturally grown and cleaned." 
      },
      // Dried Ginger
      { 
        slug: "dried-ginger",
        name: "Split Dried Ginger",
        price: 2100,
        imageUrl: "/products/ginger-split.jpg", 
        description: "99.95% purity white sesame seeds, naturally grown and cleaned." 
      },
      // Cocoa Beans
      { 

        slug: "cocoa-beans", 
        name: "Dried Cocoa Beans", 
        price: 980, 
        imageUrl: "/products/cocoa-beans.jpg", 
        description: "Fermented and sun-dried Grade 1 cocoa beans." 
      },
    ],
  },

  // Crude Palm Oil
  {
    slug: "crude-palm-oil",
    name: "Crude Palm Oil (CPO)",
    price: 488,
    location: "Edo & Cross River, Nigeria",
    inStock: true,
    imageUrl: "/products/palm-oil.jpg",
    imageAlt: "High-quality crude palm oil in flexi tanks",
    description: "Freshly pressed crude palm oil with low FFA.",
    availability: "In Stock – 500+ Tons",
    minimumOrder: "20 Tons",
    grade: "Technical Grade",
    packaging: "Flexi tanks or 200L drums",
    originDetails: "Direct from mills in Edo and Cross River.",
    downloadSpecSheetUrl: "/rust-book.pdf",
    galleryImages: [
      { url: "/products/palm-oil.jpg", alt: "Crude palm oil in flexi tank" },
      { url: "/products/sesame.jpg", alt: "Export-ready cashew packaging" },
      { url: "/products/cashew.jpg", alt: "Close-up of premium cashew nuts" },
    ],
    relatedProducts: [
      // Cashew Nuts
      { 
        slug: "cashew-nuts",
        name: "Premium Raw Cashew Nuts",
        price: 720, 
        imageUrl: "/products/cashew.jpg", 
        description: "Pure palm kernel oil for food and cosmetics." 
      },
      // Sesame Seeds
      { 
        slug: "sesame-seeds", 
        name: "White Sesame Seeds", 
        price: 1450, 
        imageUrl: "/products/sesame.jpg", 
        description: "99.95% purity white sesame seeds, naturally grown and cleaned." 
      },
      // Dried Ginger
      { 
        slug: "dried-ginger",
        name: "Split Dried Ginger",
        price: 2100,
        imageUrl: "/products/ginger-split.jpg", 
        description: "99.95% purity white sesame seeds, naturally grown and cleaned." 
      },
      // Cocoa Beans
      { 

        slug: "cocoa-beans", 
        name: "Dried Cocoa Beans", 
        price: 980, 
        imageUrl: "/products/cocoa-beans.jpg", 
        description: "Fermented and sun-dried Grade 1 cocoa beans." 
      },
    ],
  },

  // Sesame Seeds
  {
    slug: "sesame-seeds",
    name: "White Sesame Seeds",
    price: 1450,
    location: "Kano & Jigawa, Nigeria",
    inStock: true,
    imageUrl: "/products/sesame.jpg",
    imageAlt: "Cleaned white sesame seeds 99.95% purity",
    description: "Bold grain, high oil content, export-ready.",
    availability: "In Stock",
    minimumOrder: "18 Tons (1 container)",
    grade: "99/1/1",
    packaging: "50kg PP bags",
    originDetails: "From Nigeria's northern sesame belt.",
    downloadSpecSheetUrl: "/rust-book.pdf",
    galleryImages: [
      { url: "/products/palm-oil.jpg", alt: "Crude palm oil in flexi tank" },
      { url: "/products/sesame.jpg", alt: "Export-ready cashew packaging" },
      { url: "/products/cashew.jpg", alt: "Close-up of premium cashew nuts" },
    ],
    relatedProducts: [
      // Cashew Nuts
      { 
        slug: "cashew-nuts",
        name: "Premium Raw Cashew Nuts",
        price: 720, 
        imageUrl: "/products/cashew.jpg", 
        description: "Pure palm kernel oil for food and cosmetics." 
      },
      // Dried Ginger
      { 
        slug: "dried-ginger",
        name: "Split Dried Ginger",
        price: 2100,
        imageUrl: "/products/ginger-split.jpg", 
        description: "99.95% purity white sesame seeds, naturally grown and cleaned." 
      },
      // Cocoa Beans
      { 

        slug: "cocoa-beans", 
        name: "Dried Cocoa Beans", 
        price: 980, 
        imageUrl: "/products/cocoa-beans.jpg", 
        description: "Fermented and sun-dried Grade 1 cocoa beans." 
      },
      // Crude Palm Oil
      { 
        slug: "crude-palm-oil",
        name: "Crude Palm Oil (CPO)",
        price: 488,
        imageUrl: "/products/palm-oil.jpg", 
        description: "Freshly pressed crude palm oil with low FFA." 
      },
    ],
  },

  // Dried Ginger
  {
    slug: "dried-ginger",
    name: "Split Dried Ginger",
    price: 2100,
    location: "Kaduna, Nigeria",
    inStock: true,
    imageUrl: "/products/ginger-split.jpg",
    imageAlt: "Sun-dried split ginger with strong aroma",
    description: "Low fiber, high oleoresin content.",
    availability: "In Stock",
    minimumOrder: "10 Tons",
    grade: "Export Grade",
    packaging: "50kg jute bags",
    originDetails: "Kaduna-grown, sun-dried to 10–12% moisture.",
    downloadSpecSheetUrl: "/rust-book.pdf",
    galleryImages: [
      { url: "/products/ginger-split.jpg", alt: "Crude palm oil in flexi tank" },
      { url: "/products/palm-oil.jpg", alt: "Crude palm oil in flexi tank" },
      { url: "/products/sesame.jpg", alt: "Export-ready cashew packaging" },
      { url: "/products/cashew.jpg", alt: "Close-up of premium cashew nuts" },
    ],
    relatedProducts: [
      // Cashew Nuts
      { 
        slug: "cashew-nuts",
        name: "Premium Raw Cashew Nuts",
        price: 720, 
        imageUrl: "/products/cashew.jpg", 
        description: "Pure palm kernel oil for food and cosmetics." 
      },
      // Cocoa Beans
      { 

        slug: "cocoa-beans", 
        name: "Dried Cocoa Beans", 
        price: 980, 
        imageUrl: "/products/cocoa-beans.jpg", 
        description: "Fermented and sun-dried Grade 1 cocoa beans." 
      },
      // Crude Palm Oil
      { 
        slug: "crude-palm-oil",
        name: "Crude Palm Oil (CPO)",
        price: 488,
        imageUrl: "/products/palm-oil.jpg", 
        description: "Freshly pressed crude palm oil with low FFA." 
      },
      // Sesame Seeds
      { 
        slug: "sesame-seeds", 
        name: "White Sesame Seeds", 
        price: 1450, 
        imageUrl: "/products/sesame.jpg", 
        description: "99.95% purity white sesame seeds, naturally grown and cleaned." 
      },
    ],
  },

  // Dried Cocoa Beans
  {
    slug: "cocoa-beans", 
    name: "Dried Cocoa Beans", 
    price: 980, 
    location: "Kaduna, Nigeria",
    inStock: true,
    imageUrl: "/products/cocoa-beans.jpg",
    imageAlt: "Cocoa beans powder with strong aroma",
    description: "Fermented and sun-dried Grade 1 cocoa beans.",
    availability: "In Stock",
    minimumOrder: "10 Tons",
    grade: "Export Grade",
    packaging: "50kg jute bags",
    originDetails: "Kaduna-grown, sun-dried to 10–12% moisture.",
    downloadSpecSheetUrl: "/rust-book.pdf",
    galleryImages: [
      { url: "/products/ginger-split.jpg", alt: "Crude palm oil in flexi tank" },
      { url: "/products/palm-oil.jpg", alt: "Crude palm oil in flexi tank" },
      { url: "/products/sesame.jpg", alt: "Export-ready cashew packaging" },
      { url: "/products/cashew.jpg", alt: "Close-up of premium cashew nuts" },
    ],
    relatedProducts: [
      // Cashew Nuts
      { 
        slug: "cashew-nuts",
        name: "Premium Raw Cashew Nuts",
        price: 720, 
        imageUrl: "/products/cashew.jpg", 
        description: "Pure palm kernel oil for food and cosmetics." 
      },
      // Crude Palm Oil
      { 
        slug: "crude-palm-oil",
        name: "Crude Palm Oil (CPO)",
        price: 488,
        imageUrl: "/products/palm-oil.jpg", 
        description: "Freshly pressed crude palm oil with low FFA." 
      },
      // Sesame Seeds
      { 
        slug: "sesame-seeds", 
        name: "White Sesame Seeds", 
        price: 1450, 
        imageUrl: "/products/sesame.jpg", 
        description: "99.95% purity white sesame seeds, naturally grown and cleaned." 
      },
      // Dried Ginger
      { 
        slug: "dried-ginger",
        name: "Split Dried Ginger",
        price: 2100,
        imageUrl: "/products/ginger-split.jpg", 
        description: "99.95% purity white sesame seeds, naturally grown and cleaned." 
      },
    ],
  },

];