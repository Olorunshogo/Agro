
import { Product } from "~/app/types/types";

export const products: Product[] = [
  // 1. Cashew Nuts
  {
    slug: "cashew-nuts",
    category: "Nuts",
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
      { url: "/products/product-details/cashew-detail-2.jpg", alt: "Cashew nuts in jute bags" },
      { url: "/products/product-details/cashew-detail-3.jpg", alt: "Close-up of premium cashew nuts" },
      { url: "/products/product-details/cashew-detail-4.jpg", alt: "Export-ready cashew packaging" }
    ],
    relatedProducts: [
      { slug: "cocoa-beans", name: "Dried Cocoa Beans", price: 980, imageUrl: "/products/cocoa-beans.jpg", description: "Fermented and sun-dried Grade 1 cocoa beans." },
      { slug: "dried-ginger", name: "Split Dried Ginger", price: 2100, imageUrl: "/products/ginger-split.jpg", description: "Low fiber, high oleoresin content." },
      { slug: "crude-palm-oil", name: "Crude Palm Oil (CPO)", price: 488, imageUrl: "/products/palm-oil.jpg", description: "Freshly pressed crude palm oil with low FFA." },
      { slug: "sesame-seeds", name: "White Sesame Seeds", price: 1450, imageUrl: "/products/sesame.jpg", description: "99.95% purity white sesame seeds, naturally grown and cleaned." }
    ],
  },

  // 2. Crude Palm Oil
  {
    slug: "crude-palm-oil",
    category: "Oils",
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
      { url: "/products/sesame.jpg", alt: "Clean sesame seeds ready for export" },
      { url: "/products/cashew.jpg", alt: "Premium cashew nuts" }
    ],
    relatedProducts: [
      { slug: "cocoa-beans", name: "Dried Cocoa Beans", price: 980, imageUrl: "/products/cocoa-beans.jpg", description: "Fermented and sun-dried Grade 1 cocoa beans." },
      { slug: "veggies", name: "Fresh Mixed Vegetables", price: 640, imageUrl: "/products/veggies.jpg", description: "Farm-fresh mixed vegetables sourced from organic growers." },
      { slug: "dried-ginger", name: "Split Dried Ginger", price: 2100, imageUrl: "/products/ginger-split.jpg", description: "Low fiber, high oleoresin content." },
      { slug: "sesame-seeds", name: "White Sesame Seeds", price: 1450, imageUrl: "/products/sesame.jpg", description: "Naturally grown with a high oil content." }
    ],
  },

  // 3. Sesame Seeds
  {
    slug: "sesame-seeds",
    category: "Seeds",
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
      { url: "/products/sesame.jpg", alt: "Clean white sesame seeds" },
      { url: "/products/palm-oil.jpg", alt: "Palm oil processed for export" },
      { url: "/products/cashew.jpg", alt: "High-quality cashew nuts" }
    ],
    relatedProducts: [
      { slug: "crude-palm-oil", name: "Crude Palm Oil (CPO)", price: 488, imageUrl: "/products/palm-oil.jpg", description: "Freshly pressed crude palm oil." },
      { slug: "cocoa-beans", name: "Dried Cocoa Beans", price: 980, imageUrl: "/products/cocoa-beans.jpg", description: "Fermented and sun-dried beans." },
      { slug: "veggies", name: "Fresh Mixed Vegetables", price: 640, imageUrl: "/products/veggies.jpg", description: "Clean, fresh vegetables for food and processing." },
      { slug: "dried-ginger", name: "Split Dried Ginger", price: 2100, imageUrl: "/products/ginger-split.jpg", description: "Sun-dried ginger with strong aroma." }
    ],
  },

  // 4. Dried Ginger
  {
    slug: "dried-ginger",
    category: "Spices",
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
      { url: "/products/ginger-split.jpg", alt: "Premium dried ginger" },
      { url: "/products/cashew.jpg", alt: "Cashews bagged for export" },
      { url: "/products/sesame.jpg", alt: "White sesame seeds" }
    ],
    relatedProducts: [
      { slug: "veggies", name: "Fresh Mixed Vegetables", price: 640, imageUrl: "/products/veggies.jpg", description: "Fresh vegetables sourced from smallholder farmers." },
      { slug: "cocoa-beans", name: "Dried Cocoa Beans", price: 980, imageUrl: "/products/cocoa-beans.jpg", description: "Sun-dried cocoa beans." },
      { slug: "crude-palm-oil", name: "Crude Palm Oil (CPO)", price: 488, imageUrl: "/products/palm-oil.jpg", description: "Pure crude palm oil." },
      { slug: "sesame-seeds", name: "White Sesame Seeds", price: 1450, imageUrl: "/products/sesame.jpg", description: "High purity sesame seeds." }
    ],
  },

  // 5. Cocoa Beans
  {
    slug: "cocoa-beans",
    category: "Beans",
    name: "Dried Cocoa Beans",
    price: 980,
    location: "Ondo & Cross River, Nigeria",
    inStock: true,
    imageUrl: "/products/cocoa-beans.jpg",
    imageAlt: "Cocoa beans powder with strong aroma",
    description: "Fermented and sun-dried Grade 1 cocoa beans.",
    availability: "In Stock",
    minimumOrder: "10 Tons",
    grade: "Grade 1 Export",
    packaging: "50kg jute bags",
    originDetails: "Sourced from Nigeria’s premium cocoa belt.",
    downloadSpecSheetUrl: "/rust-book.pdf",
    galleryImages: [
      { url: "/products/cocoa-beans.jpg", alt: "Premium cocoa beans" },
      { url: "/products/sesame.jpg", alt: "White sesame seeds" },
      { url: "/products/palm-oil.jpg", alt: "Fresh palm oil" }
    ],
    relatedProducts: [
      { slug: "sesame-seeds", name: "White Sesame Seeds", price: 1450, imageUrl: "/products/sesame.jpg", description: "High purity sesame seeds." },
      { slug: "veggies", name: "Fresh Mixed Vegetables", price: 640, imageUrl: "/products/veggies.jpg", description: "Fresh organic vegetables." },
      { slug: "dried-ginger", name: "Split Dried Ginger", price: 2100, imageUrl: "/products/ginger-split.jpg", description: "Aromatic dried ginger." },
      { slug: "crude-palm-oil", name: "Crude Palm Oil (CPO)", price: 488, imageUrl: "/products/palm-oil.jpg", description: "Pure crude palm oil." }
    ],
  },

  // 6. Veggies (New & Original)
  {
    slug: "veggies",
    category: "Vegetables",
    name: "Fresh Mixed Vegetables",
    price: 640,
    location: "Plateau & Kaduna, Nigeria",
    inStock: true,
    imageUrl: "/products/veggies.jpg",
    imageAlt: "Fresh farm vegetables prepared for bulk export",
    description: "A premium blend of hand-harvested mixed vegetables including carrots, cucumbers, green peppers, tomatoes, and leafy greens. Perfect for food processors, wholesalers, and international buyers.",
    seeds: "Mixed Vegetables",
    availability: "In Stock – 150+ Tons",
    minimumOrder: "3 Tons",
    grade: "Premium Export Grade A",
    packaging: "10kg–25kg mesh or perforated plastic crates",
    originDetails: "Grown under monitored conditions in the high-altitude Plateau region for superior freshness.",
    downloadSpecSheetUrl: "/rust-book.pdf",
    seoDescription: "Export-quality mixed vegetables from Nigeria — fresh, hand-selected and sorted for international buyers.",
    galleryImages: [
      { url: "/products/cashew.jpg", alt: "Agricultural export products" },
      { url: "/products/sesame.jpg", alt: "High-quality agricultural produce" },
      { url: "/products/palm-oil.jpg", alt: "Nigerian agro-commodity exports" }
    ],
    relatedProducts: [
      { slug: "sesame-seeds", name: "White Sesame Seeds", price: 1450, imageUrl: "/products/sesame.jpg", description: "Pure white sesame seeds with high oil content." },
      { slug: "cocoa-beans", name: "Dried Cocoa Beans", price: 980, imageUrl: "/products/cocoa-beans.jpg", description: "Fermented, sun-dried cocoa beans." },
      { slug: "dried-ginger", name: "Split Dried Ginger", price: 2100, imageUrl: "/products/ginger-split.jpg", description: "Low moisture ginger with strong aroma." },
      { slug: "cashew-nuts", name: "Premium Raw Cashew Nuts", price: 1230, imageUrl: "/products/cashew.jpg", description: "Top-grade export raw cashews." }
    ],
  },

  // 7. Soybeans
  {
    slug: "soybeans",
    category: "Grains",
    name: "Non-GMO Soybeans",
    price: 520,
    location: "Benue, Nigeria",
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
      { url: "/products/product-details/cashew-detail-2.jpg", alt: "Cashew nuts in jute bags" },
      { url: "/products/product-details/cashew-detail-3.jpg", alt: "Close-up of premium cashew nuts" },
      { url: "/products/product-details/cashew-detail-4.jpg", alt: "Export-ready cashew packaging" }
    ],
    relatedProducts: [
      { slug: "cocoa-beans", name: "Dried Cocoa Beans", price: 980, imageUrl: "/products/cocoa-beans.jpg", description: "Fermented and sun-dried Grade 1 cocoa beans." },
      { slug: "dried-ginger", name: "Split Dried Ginger", price: 2100, imageUrl: "/products/ginger-split.jpg", description: "Low fiber, high oleoresin content." },
      { slug: "crude-palm-oil", name: "Crude Palm Oil (CPO)", price: 488, imageUrl: "/products/palm-oil.jpg", description: "Freshly pressed crude palm oil with low FFA." },
      { slug: "sesame-seeds", name: "White Sesame Seeds", price: 1450, imageUrl: "/products/sesame.jpg", description: "99.95% purity white sesame seeds, naturally grown and cleaned." }
    ],
  },

  // 8. Shea Butter (Ghana)
  {
    slug: "shea-butter",
    category: "Nuts",
    name: "Unrefined Shea Butter",
    price: 2850,
    location: "Tamale, Ghana",
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
      { url: "/products/sesame.jpg", alt: "Clean sesame seeds ready for export" },
      { url: "/products/cashew.jpg", alt: "Premium cashew nuts" }
    ],
    relatedProducts: [
      { slug: "cocoa-beans", name: "Dried Cocoa Beans", price: 980, imageUrl: "/products/cocoa-beans.jpg", description: "Fermented and sun-dried Grade 1 cocoa beans." },
      { slug: "veggies", name: "Fresh Mixed Vegetables", price: 640, imageUrl: "/products/veggies.jpg", description: "Farm-fresh mixed vegetables sourced from organic growers." },
      { slug: "dried-ginger", name: "Split Dried Ginger", price: 2100, imageUrl: "/products/ginger-split.jpg", description: "Low fiber, high oleoresin content." },
      { slug: "sesame-seeds", name: "White Sesame Seeds", price: 1450, imageUrl: "/products/sesame.jpg", description: "Naturally grown with a high oil content." }
    ],
  },

  // 9. Hibiscus Flower
  {
    slug: "hibiscus",
    category: "Spices",
    name: "Dried Hibiscus Sabdariffa",
    price: 1850,
    location: "Kano, Nigeria",
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
      { url: "/products/sesame.jpg", alt: "Clean white sesame seeds" },
      { url: "/products/palm-oil.jpg", alt: "Palm oil processed for export" },
      { url: "/products/cashew.jpg", alt: "High-quality cashew nuts" }
    ],
    relatedProducts: [
      { slug: "crude-palm-oil", name: "Crude Palm Oil (CPO)", price: 488, imageUrl: "/products/palm-oil.jpg", description: "Freshly pressed crude palm oil." },
      { slug: "cocoa-beans", name: "Dried Cocoa Beans", price: 980, imageUrl: "/products/cocoa-beans.jpg", description: "Fermented and sun-dried beans." },
      { slug: "veggies", name: "Fresh Mixed Vegetables", price: 640, imageUrl: "/products/veggies.jpg", description: "Clean, fresh vegetables for food and processing." },
      { slug: "dried-ginger", name: "Split Dried Ginger", price: 2100, imageUrl: "/products/ginger-split.jpg", description: "Sun-dried ginger with strong aroma." }
    ],
  },

  // 10. Groundnuts (Peanuts)
  {
    slug: "groundnuts",
    category: "Nuts",
    name: "Raw Groundnuts (Peanuts)",
    price: 890,
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
      { url: "/products/ginger-split.jpg", alt: "Premium dried ginger" },
      { url: "/products/cashew.jpg", alt: "Cashews bagged for export" },
      { url: "/products/sesame.jpg", alt: "White sesame seeds" }
    ],
    relatedProducts: [
      { slug: "veggies", name: "Fresh Mixed Vegetables", price: 640, imageUrl: "/products/veggies.jpg", description: "Fresh vegetables sourced from smallholder farmers." },
      { slug: "cocoa-beans", name: "Dried Cocoa Beans", price: 980, imageUrl: "/products/cocoa-beans.jpg", description: "Sun-dried cocoa beans." },
      { slug: "crude-palm-oil", name: "Crude Palm Oil (CPO)", price: 488, imageUrl: "/products/palm-oil.jpg", description: "Pure crude palm oil." },
      { slug: "sesame-seeds", name: "White Sesame Seeds", price: 1450, imageUrl: "/products/sesame.jpg", description: "High purity sesame seeds." }
    ],
  },

  // 11. Sorghum
  {
    slug: "sorghum",
    category: "Grains",
    name: "White Sorghum",
    price: 420,
    location: "Sokoto, Nigeria",
    inStock: true,
    imageUrl: "/products/cocoa-beans.jpg",
    imageAlt: "Cocoa beans powder with strong aroma",
    description: "Fermented and sun-dried Grade 1 cocoa beans.",
    availability: "In Stock",
    minimumOrder: "10 Tons",
    grade: "Grade 1 Export",
    packaging: "50kg jute bags",
    originDetails: "Sourced from Nigeria’s premium cocoa belt.",
    downloadSpecSheetUrl: "/rust-book.pdf",
    galleryImages: [
      { url: "/products/cocoa-beans.jpg", alt: "Premium cocoa beans" },
      { url: "/products/sesame.jpg", alt: "White sesame seeds" },
      { url: "/products/palm-oil.jpg", alt: "Fresh palm oil" }
    ],
    relatedProducts: [
      { slug: "sesame-seeds", name: "White Sesame Seeds", price: 1450, imageUrl: "/products/sesame.jpg", description: "High purity sesame seeds." },
      { slug: "veggies", name: "Fresh Mixed Vegetables", price: 640, imageUrl: "/products/veggies.jpg", description: "Fresh organic vegetables." },
      { slug: "dried-ginger", name: "Split Dried Ginger", price: 2100, imageUrl: "/products/ginger-split.jpg", description: "Aromatic dried ginger." },
      { slug: "crude-palm-oil", name: "Crude Palm Oil (CPO)", price: 488, imageUrl: "/products/palm-oil.jpg", description: "Pure crude palm oil." }
    ],
  },

  // 12. Tiger Nuts
  {
    slug: "tiger-nuts",
    category: "Nuts",
    name: "Dried Tiger Nuts",
    price: 1600,
    location: "Bauchi, Nigeria",
    inStock: true,
    imageUrl: "/products/veggies.jpg",
    imageAlt: "Fresh farm vegetables prepared for bulk export",
    description: "A premium blend of hand-harvested mixed vegetables including carrots, cucumbers, green peppers, tomatoes, and leafy greens. Perfect for food processors, wholesalers, and international buyers.",
    seeds: "Mixed Vegetables",
    availability: "In Stock – 150+ Tons",
    minimumOrder: "3 Tons",
    grade: "Premium Export Grade A",
    packaging: "10kg–25kg mesh or perforated plastic crates",
    originDetails: "Grown under monitored conditions in the high-altitude Plateau region for superior freshness.",
    downloadSpecSheetUrl: "/rust-book.pdf",
    seoDescription: "Export-quality mixed vegetables from Nigeria — fresh, hand-selected and sorted for international buyers.",
    galleryImages: [
      { url: "/products/cashew.jpg", alt: "Agricultural export products" },
      { url: "/products/sesame.jpg", alt: "High-quality agricultural produce" },
      { url: "/products/palm-oil.jpg", alt: "Nigerian agro-commodity exports" }
    ],
    relatedProducts: [
      { slug: "sesame-seeds", name: "White Sesame Seeds", price: 1450, imageUrl: "/products/sesame.jpg", description: "Pure white sesame seeds with high oil content." },
      { slug: "cocoa-beans", name: "Dried Cocoa Beans", price: 980, imageUrl: "/products/cocoa-beans.jpg", description: "Fermented, sun-dried cocoa beans." },
      { slug: "dried-ginger", name: "Split Dried Ginger", price: 2100, imageUrl: "/products/ginger-split.jpg", description: "Low moisture ginger with strong aroma." },
      { slug: "cashew-nuts", name: "Premium Raw Cashew Nuts", price: 1230, imageUrl: "/products/cashew.jpg", description: "Top-grade export raw cashews." }
    ],
  },

  // 13. Palm Kernel Oil
  {
    slug: "palm-kernel-oil",
    category: "Oils",
    name: "Crude Palm Kernel Oil (CPKO)",
    price: 920,
    location: "Akwa Ibom, Nigeria",
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
      { url: "/products/product-details/cashew-detail-2.jpg", alt: "Cashew nuts in jute bags" },
      { url: "/products/product-details/cashew-detail-3.jpg", alt: "Close-up of premium cashew nuts" },
      { url: "/products/product-details/cashew-detail-4.jpg", alt: "Export-ready cashew packaging" }
    ],
    relatedProducts: [
      { slug: "cocoa-beans", name: "Dried Cocoa Beans", price: 980, imageUrl: "/products/cocoa-beans.jpg", description: "Fermented and sun-dried Grade 1 cocoa beans." },
      { slug: "dried-ginger", name: "Split Dried Ginger", price: 2100, imageUrl: "/products/ginger-split.jpg", description: "Low fiber, high oleoresin content." },
      { slug: "crude-palm-oil", name: "Crude Palm Oil (CPO)", price: 488, imageUrl: "/products/palm-oil.jpg", description: "Freshly pressed crude palm oil with low FFA." },
      { slug: "sesame-seeds", name: "White Sesame Seeds", price: 1450, imageUrl: "/products/sesame.jpg", description: "99.95% purity white sesame seeds, naturally grown and cleaned." }
    ],
  },

  // 14. Cocoa Powder
  {
    slug: "cocoa-powder",
    category: "Beans",
    name: "Natural Cocoa Powder",
    price: 2450,
    location: "Abidjan, Ivory Coast",
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
      { url: "/products/sesame.jpg", alt: "Clean sesame seeds ready for export" },
      { url: "/products/cashew.jpg", alt: "Premium cashew nuts" }
    ],
    relatedProducts: [
      { slug: "cocoa-beans", name: "Dried Cocoa Beans", price: 980, imageUrl: "/products/cocoa-beans.jpg", description: "Fermented and sun-dried Grade 1 cocoa beans." },
      { slug: "veggies", name: "Fresh Mixed Vegetables", price: 640, imageUrl: "/products/veggies.jpg", description: "Farm-fresh mixed vegetables sourced from organic growers." },
      { slug: "dried-ginger", name: "Split Dried Ginger", price: 2100, imageUrl: "/products/ginger-split.jpg", description: "Low fiber, high oleoresin content." },
      { slug: "sesame-seeds", name: "White Sesame Seeds", price: 1450, imageUrl: "/products/sesame.jpg", description: "Naturally grown with a high oil content." }
    ],
  },

  // 15. Charcoal
  {
    slug: "hardwood-charcoal",
    category: "Others",
    name: "Hardwood Charcoal",
    price: 380,
    location: "Ogun, Nigeria",
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
      { url: "/products/sesame.jpg", alt: "Clean white sesame seeds" },
      { url: "/products/palm-oil.jpg", alt: "Palm oil processed for export" },
      { url: "/products/cashew.jpg", alt: "High-quality cashew nuts" }
    ],
    relatedProducts: [
      { slug: "crude-palm-oil", name: "Crude Palm Oil (CPO)", price: 488, imageUrl: "/products/palm-oil.jpg", description: "Freshly pressed crude palm oil." },
      { slug: "cocoa-beans", name: "Dried Cocoa Beans", price: 980, imageUrl: "/products/cocoa-beans.jpg", description: "Fermented and sun-dried beans." },
      { slug: "veggies", name: "Fresh Mixed Vegetables", price: 640, imageUrl: "/products/veggies.jpg", description: "Clean, fresh vegetables for food and processing." },
      { slug: "dried-ginger", name: "Split Dried Ginger", price: 2100, imageUrl: "/products/ginger-split.jpg", description: "Sun-dried ginger with strong aroma." }
    ],
  },

  // 16. Cassava Chips
  {
    slug: "cassava-chips",
    category: "Grains",
    name: "Dried Cassava Chips",
    price: 310,
    location: "Oyo, Nigeria",
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
      { url: "/products/ginger-split.jpg", alt: "Premium dried ginger" },
      { url: "/products/cashew.jpg", alt: "Cashews bagged for export" },
      { url: "/products/sesame.jpg", alt: "White sesame seeds" }
    ],
    relatedProducts: [
      { slug: "veggies", name: "Fresh Mixed Vegetables", price: 640, imageUrl: "/products/veggies.jpg", description: "Fresh vegetables sourced from smallholder farmers." },
      { slug: "cocoa-beans", name: "Dried Cocoa Beans", price: 980, imageUrl: "/products/cocoa-beans.jpg", description: "Sun-dried cocoa beans." },
      { slug: "crude-palm-oil", name: "Crude Palm Oil (CPO)", price: 488, imageUrl: "/products/palm-oil.jpg", description: "Pure crude palm oil." },
      { slug: "sesame-seeds", name: "White Sesame Seeds", price: 1450, imageUrl: "/products/sesame.jpg", description: "High purity sesame seeds." }
    ],
  },

  // 17. Yam Flour
  {
    slug: "yam-flour",
    category: "Grains",
    name: "Premium Yam Flour (Elubo)",
    price: 1100,
    location: "Benue, Nigeria",
    inStock: true,
    imageUrl: "/products/cocoa-beans.jpg",
    imageAlt: "Cocoa beans powder with strong aroma",
    description: "Fermented and sun-dried Grade 1 cocoa beans.",
    availability: "In Stock",
    minimumOrder: "10 Tons",
    grade: "Grade 1 Export",
    packaging: "50kg jute bags",
    originDetails: "Sourced from Nigeria’s premium cocoa belt.",
    downloadSpecSheetUrl: "/rust-book.pdf",
    galleryImages: [
      { url: "/products/cocoa-beans.jpg", alt: "Premium cocoa beans" },
      { url: "/products/sesame.jpg", alt: "White sesame seeds" },
      { url: "/products/palm-oil.jpg", alt: "Fresh palm oil" }
    ],
    relatedProducts: [
      { slug: "sesame-seeds", name: "White Sesame Seeds", price: 1450, imageUrl: "/products/sesame.jpg", description: "High purity sesame seeds." },
      { slug: "veggies", name: "Fresh Mixed Vegetables", price: 640, imageUrl: "/products/veggies.jpg", description: "Fresh organic vegetables." },
      { slug: "dried-ginger", name: "Split Dried Ginger", price: 2100, imageUrl: "/products/ginger-split.jpg", description: "Aromatic dried ginger." },
      { slug: "crude-palm-oil", name: "Crude Palm Oil (CPO)", price: 488, imageUrl: "/products/palm-oil.jpg", description: "Pure crude palm oil." }
    ],
  },

  // 18. Moringa Seeds
  {
    slug: "moringa-seeds",
    category: "Seeds",
    name: "Moringa Oleifera Seeds",
    price: 3200,
    location: "Accra, Ghana",
    inStock: true,
    imageUrl: "/products/veggies.jpg",
    imageAlt: "Fresh farm vegetables prepared for bulk export",
    description: "A premium blend of hand-harvested mixed vegetables including carrots, cucumbers, green peppers, tomatoes, and leafy greens. Perfect for food processors, wholesalers, and international buyers.",
    seeds: "Mixed Vegetables",
    availability: "In Stock – 150+ Tons",
    minimumOrder: "3 Tons",
    grade: "Premium Export Grade A",
    packaging: "10kg–25kg mesh or perforated plastic crates",
    originDetails: "Grown under monitored conditions in the high-altitude Plateau region for superior freshness.",
    downloadSpecSheetUrl: "/rust-book.pdf",
    seoDescription: "Export-quality mixed vegetables from Nigeria — fresh, hand-selected and sorted for international buyers.",
    galleryImages: [
      { url: "/products/cashew.jpg", alt: "Agricultural export products" },
      { url: "/products/sesame.jpg", alt: "High-quality agricultural produce" },
      { url: "/products/palm-oil.jpg", alt: "Nigerian agro-commodity exports" }
    ],
    relatedProducts: [
      { slug: "sesame-seeds", name: "White Sesame Seeds", price: 1450, imageUrl: "/products/sesame.jpg", description: "Pure white sesame seeds with high oil content." },
      { slug: "cocoa-beans", name: "Dried Cocoa Beans", price: 980, imageUrl: "/products/cocoa-beans.jpg", description: "Fermented, sun-dried cocoa beans." },
      { slug: "dried-ginger", name: "Split Dried Ginger", price: 2100, imageUrl: "/products/ginger-split.jpg", description: "Low moisture ginger with strong aroma." },
      { slug: "cashew-nuts", name: "Premium Raw Cashew Nuts", price: 1230, imageUrl: "/products/cashew.jpg", description: "Top-grade export raw cashews." }
    ],
  },

  // 19. Black Pepper
  {
    slug: "black-pepper",
    category: "Spices",
    name: "Whole Black Pepper",
    price: 3800,
    location: "Cross River, Nigeria",
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
      { url: "/products/product-details/cashew-detail-2.jpg", alt: "Cashew nuts in jute bags" },
      { url: "/products/product-details/cashew-detail-3.jpg", alt: "Close-up of premium cashew nuts" },
      { url: "/products/product-details/cashew-detail-4.jpg", alt: "Export-ready cashew packaging" }
    ],
    relatedProducts: [
      { slug: "cocoa-beans", name: "Dried Cocoa Beans", price: 980, imageUrl: "/products/cocoa-beans.jpg", description: "Fermented and sun-dried Grade 1 cocoa beans." },
      { slug: "dried-ginger", name: "Split Dried Ginger", price: 2100, imageUrl: "/products/ginger-split.jpg", description: "Low fiber, high oleoresin content." },
      { slug: "crude-palm-oil", name: "Crude Palm Oil (CPO)", price: 488, imageUrl: "/products/palm-oil.jpg", description: "Freshly pressed crude palm oil with low FFA." },
      { slug: "sesame-seeds", name: "White Sesame Seeds", price: 1450, imageUrl: "/products/sesame.jpg", description: "99.95% purity white sesame seeds, naturally grown and cleaned." }
    ],
  },

  // 20. Gum Arabic
  {
    slug: "gum-arabic",
    category: "Others",
    name: "Gum Arabic (Acacia Gum)",
    price: 2100,
    location: "Borno, Nigeria",
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
      { url: "/products/sesame.jpg", alt: "Clean sesame seeds ready for export" },
      { url: "/products/cashew.jpg", alt: "Premium cashew nuts" }
    ],
    relatedProducts: [
      { slug: "cocoa-beans", name: "Dried Cocoa Beans", price: 980, imageUrl: "/products/cocoa-beans.jpg", description: "Fermented and sun-dried Grade 1 cocoa beans." },
      { slug: "veggies", name: "Fresh Mixed Vegetables", price: 640, imageUrl: "/products/veggies.jpg", description: "Farm-fresh mixed vegetables sourced from organic growers." },
      { slug: "dried-ginger", name: "Split Dried Ginger", price: 2100, imageUrl: "/products/ginger-split.jpg", description: "Low fiber, high oleoresin content." },
      { slug: "sesame-seeds", name: "White Sesame Seeds", price: 1450, imageUrl: "/products/sesame.jpg", description: "Naturally grown with a high oil content." }
    ],
  },

  // 21. Pineapple (Coming Soon)
  {
    slug: "pineapple",
    category: "Fruits",
    name: "Dried Pineapple Slices & Frozen Pineapple",
    price: 1850,
    location: "Benin & Togo",
    inStock: false,
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
      { url: "/products/sesame.jpg", alt: "Clean white sesame seeds" },
      { url: "/products/palm-oil.jpg", alt: "Palm oil processed for export" },
      { url: "/products/cashew.jpg", alt: "High-quality cashew nuts" }
    ],
    relatedProducts: [
      { slug: "crude-palm-oil", name: "Crude Palm Oil (CPO)", price: 488, imageUrl: "/products/palm-oil.jpg", description: "Freshly pressed crude palm oil." },
      { slug: "cocoa-beans", name: "Dried Cocoa Beans", price: 980, imageUrl: "/products/cocoa-beans.jpg", description: "Fermented and sun-dried beans." },
      { slug: "veggies", name: "Fresh Mixed Vegetables", price: 640, imageUrl: "/products/veggies.jpg", description: "Clean, fresh vegetables for food and processing." },
      { slug: "dried-ginger", name: "Split Dried Ginger", price: 2100, imageUrl: "/products/ginger-split.jpg", description: "Sun-dried ginger with strong aroma." }
    ],
  },

  // 22. Cashew Kernel (Processed)
  {
    slug: "cashew-kernel",
    category: "Nuts",
    name: "Roasted Cashew Kernels",
    price: 8500,
    location: "Ogbomoso, Nigeria",
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
      { url: "/products/ginger-split.jpg", alt: "Premium dried ginger" },
      { url: "/products/cashew.jpg", alt: "Cashews bagged for export" },
      { url: "/products/sesame.jpg", alt: "White sesame seeds" }
    ],
    relatedProducts: [
      { slug: "veggies", name: "Fresh Mixed Vegetables", price: 640, imageUrl: "/products/veggies.jpg", description: "Fresh vegetables sourced from smallholder farmers." },
      { slug: "cocoa-beans", name: "Dried Cocoa Beans", price: 980, imageUrl: "/products/cocoa-beans.jpg", description: "Sun-dried cocoa beans." },
      { slug: "crude-palm-oil", name: "Crude Palm Oil (CPO)", price: 488, imageUrl: "/products/palm-oil.jpg", description: "Pure crude palm oil." },
      { slug: "sesame-seeds", name: "White Sesame Seeds", price: 1450, imageUrl: "/products/sesame.jpg", description: "High purity sesame seeds." }
    ],
  },

  // 23. Cocoa Butter
  {
    slug: "cocoa-butter",
    category: "Beans",
    name: "Pure Prime Pressed Cocoa Butter",
    price: 5200,
    location: "Abidjan, Ivory Coast",
    inStock: true,
    imageUrl: "/products/cocoa-beans.jpg",
    imageAlt: "Cocoa beans powder with strong aroma",
    description: "Fermented and sun-dried Grade 1 cocoa beans.",
    availability: "In Stock",
    minimumOrder: "10 Tons",
    grade: "Grade 1 Export",
    packaging: "50kg jute bags",
    originDetails: "Sourced from Nigeria’s premium cocoa belt.",
    downloadSpecSheetUrl: "/rust-book.pdf",
    galleryImages: [
      { url: "/products/cocoa-beans.jpg", alt: "Premium cocoa beans" },
      { url: "/products/sesame.jpg", alt: "White sesame seeds" },
      { url: "/products/palm-oil.jpg", alt: "Fresh palm oil" }
    ],
    relatedProducts: [
      { slug: "sesame-seeds", name: "White Sesame Seeds", price: 1450, imageUrl: "/products/sesame.jpg", description: "High purity sesame seeds." },
      { slug: "veggies", name: "Fresh Mixed Vegetables", price: 640, imageUrl: "/products/veggies.jpg", description: "Fresh organic vegetables." },
      { slug: "dried-ginger", name: "Split Dried Ginger", price: 2100, imageUrl: "/products/ginger-split.jpg", description: "Aromatic dried ginger." },
      { slug: "crude-palm-oil", name: "Crude Palm Oil (CPO)", price: 488, imageUrl: "/products/palm-oil.jpg", description: "Pure crude palm oil." }
    ],
  },

  // 24. Turmeric
  {
    slug: "turmeric",
    category: "Spices",
    name: "Dried Turmeric Fingers",
    price: 1950,
    location: "Kaduna, Nigeria",
    inStock: false,
    imageUrl: "/products/veggies.jpg",
    imageAlt: "Fresh farm vegetables prepared for bulk export",
    description: "A premium blend of hand-harvested mixed vegetables including carrots, cucumbers, green peppers, tomatoes, and leafy greens. Perfect for food processors, wholesalers, and international buyers.",
    seeds: "Mixed Vegetables",
    availability: "In Stock – 150+ Tons",
    minimumOrder: "3 Tons",
    grade: "Premium Export Grade A",
    packaging: "10kg–25kg mesh or perforated plastic crates",
    originDetails: "Grown under monitored conditions in the high-altitude Plateau region for superior freshness.",
    downloadSpecSheetUrl: "/rust-book.pdf",
    seoDescription: "Export-quality mixed vegetables from Nigeria — fresh, hand-selected and sorted for international buyers.",
    galleryImages: [
      { url: "/products/cashew.jpg", alt: "Agricultural export products" },
      { url: "/products/sesame.jpg", alt: "High-quality agricultural produce" },
      { url: "/products/palm-oil.jpg", alt: "Nigerian agro-commodity exports" }
    ],
    relatedProducts: [
      { slug: "sesame-seeds", name: "White Sesame Seeds", price: 1450, imageUrl: "/products/sesame.jpg", description: "Pure white sesame seeds with high oil content." },
      { slug: "cocoa-beans", name: "Dried Cocoa Beans", price: 980, imageUrl: "/products/cocoa-beans.jpg", description: "Fermented, sun-dried cocoa beans." },
      { slug: "dried-ginger", name: "Split Dried Ginger", price: 2100, imageUrl: "/products/ginger-split.jpg", description: "Low moisture ginger with strong aroma." },
      { slug: "cashew-nuts", name: "Premium Raw Cashew Nuts", price: 1230, imageUrl: "/products/cashew.jpg", description: "Top-grade export raw cashews." }
    ],
  },

];

// export const products: Product[] = [];

