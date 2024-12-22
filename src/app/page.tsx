import { ThemeCustomizer } from "@/components/theme/theme-customizer";

import ThemePreview from "@/components/theme/theme-preview";

export default function Home() {
  return (
    <main className="container mx-auto py-8">
      <div className="mx-auto max-w-[1200px] space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl lg:text-4xl font-bold">
            Your go to Shadcn Color Theme Gallery
          </h1>
          <p className="text-muted-foreground">
            Hand-picked themes that you can copy and paste into your apps.
          </p>
        </div>

        <ThemeCustomizer />

        <div className="rounded-lg border bg-card p-4">
          <ThemePreview />
        </div>
      </div>
    </main>
  );
}
