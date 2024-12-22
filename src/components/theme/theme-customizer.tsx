"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Check, RefreshCw } from "lucide-react";
import { useState } from "react";
import { useTheme } from "./theme-provider";
import { themes } from "@/lib/theme";
import { hslToHex } from "@/utils/colors";
import { CopyCodeButton } from "./copy-code-button";
import { ModeToggle } from "./mode-toggle";
import { ColorKey } from "@/types";

export function ThemeCustomizer() {
  const [open, setOpen] = useState(false);
  const { currentTheme, setTheme } = useTheme();
  const previewColors: ColorKey[] = [
    "primary",
    "secondary",
    "accent",
    "background",
    "muted",
  ];

  return (
    <>
      <div className="flex gap-2">
        <Button onClick={() => setOpen(true)}>
          <RefreshCw className="mr-2 h-4 w-4" />
          Change Theme
        </Button>
        <CopyCodeButton />
        <ModeToggle />
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-[800px]">
          <DialogHeader>
            <DialogTitle>Theme Customizer</DialogTitle>
          </DialogHeader>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
            {themes.map((theme) => (
              <button
                key={theme.id}
                onClick={() => {
                  setTheme(theme.id);
                  setOpen(false);
                }}
                className={`rounded-lg border p-4 text-left hover:bg-accent transition-colors ${
                  currentTheme.id === theme.id
                    ? "border-primary"
                    : "border-border"
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-medium">{theme.name}</h3>
                  {currentTheme.id === theme.id && (
                    <Check className="h-4 w-4 text-primary" />
                  )}
                </div>

                <div className="grid grid-cols-5 gap-2">
                  {previewColors.map((colorKey) => (
                    <div
                      key={colorKey}
                      className="h-8 rounded-md"
                      style={{
                        backgroundColor: hslToHex(theme.colors.light[colorKey]),
                      }}
                      title={colorKey}
                    />
                  ))}
                </div>
              </button>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
