
"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Dialog, DialogHeader, DialogTitle, DialogContent } from "~/components/ui/dialog";

import { PlusIcon, Loader2 } from "lucide-react";
import { Button } from "~/components/ui/button";
import { TextInput } from "~/components/input-fields/TextInput";
import { NumberInput } from "~/components/input-fields/NumberInput";
import { saveProduct, deleteProduct } from "../actions";

interface ProductInformation {
  id: string;
  name: string;
  stock: number;
}

interface Props {
  initialProducts: ProductInformation[];
}

type Mode = "add" | "edit" | "delete";

export default function OverviewProductManagement({ initialProducts }: Props) {
  const [productsInfo, setProductsInfo] = useState<ProductInformation[]>(initialProducts);
  const [isProductModal, setIsProductModal] = useState(false);
  const [productModalMode, setProductModalMode] = useState<Mode>("add");
  const [currentProduct, setCurrentProduct] = useState<ProductInformation | null>(null);
  const [loading, setLoading] = useState(false);

  /* ==== MODAL OPENERS ==== */
  function openAddModal() {
    setProductModalMode("add");
    setCurrentProduct({ id: crypto.randomUUID(), name: "", stock: 0 });
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
      // await mockApiSave(currentProduct, productModalMode);

      // if (productModalMode === "add") {
      //   setProductsInfo((prev) => [...prev, currentProduct]);
      // }

      // if (productModalMode === "edit") {
      //   setProductsInfo((prev) =>
      //     prev.map((p) => (p.id === currentProduct.id ? currentProduct : p))
      //   );
      // }

      // if (productModalMode === "delete") {
      //   setProductsInfo((prev) => prev.filter((p) => p.id !== currentProduct.id));
      // }

      if (productModalMode === "delete") {
        await deleteProduct(currentProduct.id);
        setProductsInfo((prev) => prev.filter((p) => p.id !== currentProduct.id));
      } else {
        await saveProduct(currentProduct, productModalMode);
        setProductsInfo((prev) =>
          productModalMode === "add"
            ? [...prev, currentProduct]
            : prev.map((p) => (p.id === currentProduct.id ? currentProduct : p))
        );
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
  // async function mockApiSave(product: ProductInformation, type: Mode) {
  //   console.log("Mock API Call:", { product, type });
  //   return new Promise((resolve) => setTimeout(resolve, 600));
  // }

  
  return (
    <>
      {/* Product Management */}
      <div className="w-full h-full">
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
    </>
  );
}

