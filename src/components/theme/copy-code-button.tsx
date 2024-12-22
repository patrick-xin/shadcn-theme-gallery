"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Copy, Check } from "lucide-react";
import { useTheme } from "./theme-provider";
import { toast } from "sonner";

export function CopyCodeButton() {
  const [open, setOpen] = useState(false);
  const [copying, setCopying] = useState(false);

  const { currentTheme } = useTheme();

  const copyToClipboard = async () => {
    try {
      setCopying(true);
      await navigator.clipboard.writeText(currentTheme.cssVars);
      toast.success("Theme code copied to clipboard");
    } catch {
      toast.error("Failed to copy code to clipboard");
    } finally {
      setCopying(false);
    }
  };

  return (
    <>
      <Button variant="outline" onClick={() => setOpen(true)}>
        <Copy className="mr-2 h-4 w-4" />
        Copy code
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-[800px] h-[50vh] overflow-y-scroll">
          <DialogHeader>
            <DialogTitle>Theme Code</DialogTitle>
          </DialogHeader>

          <div className="relative">
            <pre className="rounded-lg bg-muted p-4 overflow-x-auto">
              <code className="text-sm font-mono">{currentTheme.cssVars}</code>
            </pre>

            <Button
              size="sm"
              onClick={copyToClipboard}
              className="absolute top-4 right-4"
              disabled={copying}
            >
              {copying ? (
                <Check className="h-4 w-4" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
