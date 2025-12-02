
"use client";

import { useState } from "react";
import { 
  Card, CardContent, CardHeader, CardTitle 
} from "~/components/ui/card";

import { 
  Dialog, DialogHeader, DialogTitle, DialogContent 
} from "~/components/ui/dialog";

import { 
  Package, OrbitIcon, DollarSign, Users, PlusIcon, 
  Loader2, XCircle, CheckCircle, PenLine, Trash2,
  type LucideIcon
} from "lucide-react";

import { Button } from "~/components/ui/button";
import { TextInput } from "~/components/input-fields/TextInput";
import { NumberInput } from "~/components/input-fields/NumberInput";

const metadata = {
  title: "Dashboard – Manage Orders & Quotes",
};

interface Highlight {
  icon: LucideIcon;
  value: number;
  heading: string;
}

interface ProductInformation {
  id: string;
  name: string;
  stock: number;
}

interface QuoteRequest {
  id: string;
  buyer: string;
  status: "not_sent" | "pending" | "quoted";
  assignedTo: string;
}

type Mode = "add" | "edit" | "delete";

export default function AdminDashboard() {
  /* ==== STATE ==== */
  const [productsInfo, setProductsInfo] = useState<ProductInformation[]>([
    { id: "p1", name: "Cashew", stock: 200 },
    { id: "p2", name: "Cocoa Beans", stock: 150 },
    { id: "p3", name: "Ginger", stock: 80 },
    { id: "p4", name: "Hibiscus", stock: 60 },
  ]);

  const [isProductModal, setIsProductModal] = useState(false);
  const [productModalMode, setProductModalMode] = useState<Mode>("add");
  const [currentProduct, setCurrentProduct] = useState<ProductInformation | null>(null);
  const [loading, setLoading] = useState(false);

  const [selectedQuote, setSelectedQuote] = useState<QuoteRequest | null>(null);

  /* ==== STATIC DATA ==== */
  const adminHighlight: Highlight[] = [
    { icon: Package, value: 125, heading: "Total Quote" },
    { icon: OrbitIcon, value: 43, heading: "Order in Progress" },
    { icon: DollarSign, value: 12500, heading: "Revenue" },
    { icon: Users, value: 1200, heading: "Total Buyers" },
  ];

  const quoteRequest: QuoteRequest[] = [
    { id: "q1", buyer: "Jane Smith", status: "pending", assignedTo: "Michael" },
    { id: "q2", buyer: "John Doe", status: "quoted", assignedTo: "Sarah" },
    { id: "q3", buyer: "Doe Jane", status: "not_sent", assignedTo: "John" },
    { id: "q4", buyer: "John Malik", status: "pending", assignedTo: "Goodness" },
  ];

  /* ==== MODAL OPENERS ==== */
  function openAddModal() {
    setProductModalMode("add");
    setCurrentProduct({
      id: crypto.randomUUID(),
      name: "",
      stock: 0,
    });
    setIsProductModal(true);
  }

  function openEditModal(id: string) {
    const product = productsInfo.find((p) => p.id === id);
    if (!product) return;

    setProductModalMode("edit");
    setCurrentProduct({ ...product });
    setIsProductModal(true);
  }

  function openDeleteModal(id: string) {
    const product = productsInfo.find((p) => p.id === id);
    if (!product) return;

    setProductModalMode("delete");
    setCurrentProduct(product);
    setIsProductModal(true);
  }

  /* ==== SUBMIT HANDLER ==== */
  async function handleSubmit() {
    if (!currentProduct) return;

    setLoading(true);

    try {
      await mockApiSave(currentProduct, productModalMode);

      if (productModalMode === "add") {
        setProductsInfo((prev) => [...prev, currentProduct]);
      }

      if (productModalMode === "edit") {
        setProductsInfo((prev) =>
          prev.map((p) => (p.id === currentProduct.id ? currentProduct : p))
        );
      }

      if (productModalMode === "delete") {
        setProductsInfo((prev) => prev.filter((p) => p.id !== currentProduct.id));
      }

      setIsProductModal(false);
      setCurrentProduct(null);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  /* ==== MOCK API ==== */
  async function mockApiSave(product: ProductInformation, type: Mode) {
    console.log("Mock API Call:", { product, type });
    return new Promise((resolve) => setTimeout(resolve, 600));
  }

  
  return (
    <>
      <div className="relative flex flex-col w-full h-full gap-12">
        
        {/* Highlights */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {adminHighlight.map((highlight) => (
            <div
              key={highlight.heading}
              className="flex flex-col gap-2 p-6 border-1 border-(--border-gray) rounded-md shadow-md hover:shadow-lg transition-all"
            >
              <div className="flex items-center gap-2">
                <span className="p-2 rounded-full bg-(--agro-green-light)/30">
                  <highlight.icon className="w-5 h-5 text-(--agro-green-dark)" />
                </span>
                <span className="text-xl font-bold">{highlight.value}</span>
              </div>
              <div className="text-sm text-(--text-colour)">{highlight.heading}</div>
            </div>
          ))}
        </div>

        {/* Product Management and Country Demand */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-6">

          {/* Product Management */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Product Management
                <Button onClick={openAddModal} variant="outline">
                  <PlusIcon className="w-4 h-4" />
                  Add Product
                </Button>
              </CardTitle>
            </CardHeader>

            <CardContent>
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-(--border-gray) text-sm">
                    <th className="py-2">Product Name</th>
                    <th className="py-2">Stock</th>
                    <th className="py-2 text-right">Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {productsInfo.map((product) => (
                    <tr key={product.id} className="border-b border-(--border-gray)">
                      <td className="py-3">{product.name}</td>
                      <td className="py-3">{product.stock}</td>

                      <td className="py-3 space-x-2 text-right">
                        <Button size="sm" variant="secondary" onClick={() => openEditModal(product.id)}>
                          Edit
                        </Button>

                        <Button
                          size="sm"
                          variant="destructive"
                          onClick={() => openDeleteModal(product.id)}
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>

          {/* Country Demand */}
          <div className="w-full h-full">
            
          </div>

        </div>

        {/* Quote Requests */}
        <Card>
          <CardHeader>
            <CardTitle>Quote Request</CardTitle>
          </CardHeader>

          <CardContent>
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-(--border-gray) text-sm">
                  <th className="py-2">Buyer</th>
                  <th className="py-2">Status</th>
                  <th className="py-2">Assigned To</th>
                  <th className="py-2">Actions</th>
                </tr>
              </thead>

              <tbody>
                {quoteRequest.map((request) => (
                  <tr key={request.id} className="border-b border-(--border-gray)">
                    <td className="py-3">{request.buyer}</td>
                    <td className="py-3 capitalize">{request.status.replace("_", " ")}</td>
                    <td className="py-3">{request.assignedTo}</td>
                    <td className="py-3 text-right">
                      <Button size="sm" variant="secondary" onClick={() => setSelectedQuote(request)}>
                        View
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>
      </div>

      {/* ==== PRODUCT MODAL ==== */}
      {isProductModal && currentProduct && (
        <Dialog 
          open={isProductModal} 
          onOpenChange={setIsProductModal}
        >
          <DialogContent>            
            <DialogHeader>
              <DialogTitle>
                {productModalMode === "add" && "Add Product"}
                {productModalMode === "edit" && "Edit Product"}
                {productModalMode === "delete" && "Delete Product"}
              </DialogTitle>
            </DialogHeader>

            {/* DELETE */}
            {productModalMode === "delete" && (
              <div className="flex flex-col gap-4">
                <p>Are you sure you want to delete <span className="font-bold">{currentProduct.name}</span>?</p>
                
                <Button
                  className="w-full" 
                  variant="destructive"
                  onClick={handleSubmit}
                >
                  {loading ? "Deleting..." : "Yes, Delete"}
                </Button>
              </div>
            )}

            {/* ADD / EDIT */}
            {(productModalMode === "add" || productModalMode === "edit") && (
              <form className="flex flex-col gap-4">
                <TextInput
                  label="Product Name"
                  placeholder="Enter product name"
                  value={currentProduct.name}
                  onChange={(e) =>
                    setCurrentProduct((prev) =>
                      prev ? { ...prev, name: e.target.value } : prev
                    )
                  }
                />

                <NumberInput
                  label="Stock"
                  placeholder="Enter stock"
                  value={currentProduct.stock}
                  onChange={(e) =>
                    setCurrentProduct((prev) =>
                      prev ? { ...prev, stock: Number(e.target.value) } : prev
                    )
                  }
                />

                <Button 
                  className="w-full" 
                  onClick={handleSubmit} 
                  disabled={loading}
                >
                  {loading
                    ? "Saving..."
                    : productModalMode === "edit"
                    ? "Save Changes"
                    : "Add Product"
                  }
                </Button>
              </form>
            )}
          </DialogContent>
        </Dialog>
      )}

      {/* ==== QUOTE MODAL ==== */}
      {selectedQuote && (
        <Dialog 
          open={!!selectedQuote} 
          onOpenChange={() => setSelectedQuote(null)}
        >
          <DialogContent className="flex flex-col max-w-sm gap-6">
            <DialogHeader>
              <DialogTitle className="text-xl">{selectedQuote.buyer}</DialogTitle>
            </DialogHeader>

            <div className="flex flex-col gap-3">
              <p>
                <span className="font-semibold">Assigned To:</span>
                &nbsp; 
                {selectedQuote.assignedTo}
              </p>

              <p className="flex items-center gap-2">
                <span className="font-semibold">Status:</span>
                &nbsp;
                {selectedQuote.status === "pending" && (
                  <Loader2 className="w-5 h-5 text-yellow-500 animate-spin" />
                )}
                {selectedQuote.status === "quoted" && (
                  <CheckCircle className="w-5 h-5 text-green-600" />
                )}
                {selectedQuote.status === "not_sent" && (
                  <XCircle className="w-5 h-5 text-red-600" />
                )}
                <span className="capitalize">{selectedQuote.status.replace("_", " ")}</span>
              </p>
            </div>

            <Button 
              className="w-full" 
              onClick={() => setSelectedQuote(null)}
            >
              Close
            </Button>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}
