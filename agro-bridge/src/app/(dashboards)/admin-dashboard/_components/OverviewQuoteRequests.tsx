
"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Dialog, DialogHeader, DialogTitle, DialogContent } from "~/components/ui/dialog";
import { Loader2, XCircle, CheckCircle } from "lucide-react";
import { Button } from "~/components/ui/button";

interface QuoteRequest {
  id: string;
  buyer: string;
  status: "not_sent" | "pending" | "quoted";
  assignedTo: string;
}

interface Props {
  quoteRequests: QuoteRequest[];
}

export default function OverviewQuoteRequests({ quoteRequests }: Props) {
  const [selectedQuote, setSelectedQuote] = useState<QuoteRequest | null>(null);

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Quote Requests</CardTitle>
        </CardHeader>

        <CardContent>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-sm border-b">
                <th className="py-2">Buyer</th>
                <th className="py-2">Status</th>
                <th className="py-2">Assigned To</th>
                <th className="py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {quoteRequests.map((request) => (
                <tr key={request.id} className="border-b">
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

      {/* QUOTE MODAL */}
      {selectedQuote && (
        <Dialog open={!!selectedQuote} onOpenChange={() => setSelectedQuote(null)}>
          <DialogContent className="max-w-sm">
            <DialogHeader>
              <DialogTitle className="text-xl">{selectedQuote.buyer}</DialogTitle>
            </DialogHeader>

            <div className="space-y-4">
              <p>
                <span className="font-semibold">Assigned To:</span> {selectedQuote.assignedTo}
              </p>

              <p className="flex items-center gap-2">
                <span className="font-semibold">Status:</span>
                {selectedQuote.status === "pending" && (
                  <Loader2 className="w-5 h-5 text-yellow-500 animate-spin" />
                )}
                {selectedQuote.status === "quoted" && (
                  <CheckCircle className="w-5 h-5 text-green-600" />
                )}
                {selectedQuote.status === "not_sent" && (
                  <XCircle className="w-5 h-5 text-red-600" />
                )}
                <span className="ml-2 capitalize">{selectedQuote.status.replace("_", " ")}</span>
              </p>
            </div>

            <Button className="w-full" onClick={() => setSelectedQuote(null)}>
              Close
            </Button>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}
