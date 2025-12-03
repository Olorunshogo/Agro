
"use server";

import { revalidatePath } from "next/cache";

export type Highlight = { icon: any; value: number; heading: string };
export type ProductInformation = { id: string; name: string; stock: number };
export type CountryDemandItem = { country: string; value: number };
export type QuoteRequest = {
  id: string;
  buyer: string;
  status: "not_sent" | "pending" | "quoted";
  assignedTo: string;
};

const highlightsData: Highlight[] = [
  { icon: "Package", value: 125, heading: "Total Quote" },
  { icon: "OrbitIcon", value: 43, heading: "Order in Progress" },
  { icon: "DollarSign", value: 12500, heading: "Revenue" },
  { icon: "Users", value: 1200, heading: "Total Buyers" },
];

const products: ProductInformation[] = [
  { id: "p1", name: "Cashew", stock: 200 },
  { id: "p2", name: "Cocoa Beans", stock: 150 },
  { id: "p3", name: "Ginger", stock: 80 },
  { id: "p4", name: "Hibiscus", stock: 60 },
];

const quoteRequests = [
  { id: "q1", buyer: "Jane Smith", status: "pending", assignedTo: "Michael" },
  { id: "q2", buyer: "John Doe", status: "quoted", assignedTo: "Sarah" },
  { id: "q3", buyer: "Doe Jane", status: "not_sent", assignedTo: "John" },
  { id: "q4", buyer: "John Malik", status: "pending", assignedTo: "Goodness" },
];

// Getters
export async function getCountryDemandData() {
  await new Promise((r) => setTimeout(r, 300)); // simulate network
  return {
    data: [
      { country: "America", value: 200 },
      { country: "UAE", value: 65 },
      { country: "Spain", value: 80 },
      { country: "Netherlands", value: 40 },
      { country: "France", value: 55 },
      { country: "Argentina", value: 250 },
      { country: "Nigeria", value: 650 },
    ],
  };
}

export async function getHighlights() {
  return highlightsData;
}

export async function getProducts() {
  return [...products];
}

export async function getQuoteRequests() {
  return quoteRequests;
}


// Mutations
export async function saveProduct(data: ProductInformation, mode: "add" | "edit") {
  if (mode === "add") {
    products.push({ ...data, id: crypto.randomUUID() });
  } else {
    const idx = products.findIndex((p) => p.id === data.id);
    if (idx !== -1) products[idx] = data;
  }
  revalidatePath("/admin-dashboard");
}

export async function deleteProduct(id: string) {
  const idx = products.findIndex((p) => p.id === id);
  if (idx !== -1) products.splice(idx, 1);
  revalidatePath("/admin-dashboard");
}
