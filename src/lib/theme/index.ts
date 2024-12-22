import { Theme } from "@/types";
import { blueTheme } from "./registry/blue-theme";
import { parseThemeCSS } from "@/utils/theme";
import { greenTheme } from "./registry/green-theme";
import { purpleTheme } from "./registry/purple-theme";
import { tealTheme } from "./registry/teal-theme";
import { sunsetGlow } from "./registry/orange-theme";
import { midnightSurge } from "./registry/midnight-surge";
import { nebulaDream } from "./registry/nebula-dream-theme";
import { TokyoPulse } from "./registry/tokyo-pulse";

export const themes: Theme[] = [
  parseThemeCSS(blueTheme, "Blue Theme", "blue"),
  parseThemeCSS(greenTheme, "Green Theme", "green"),
  parseThemeCSS(purpleTheme, "Purple Theme", "purple"),
  parseThemeCSS(tealTheme, "Ocean Depths", "Ocean Depths"),
  parseThemeCSS(sunsetGlow, "Sunset Glow", "Sunset Glow"),
  parseThemeCSS(midnightSurge, "Midnight Surge", "Midnight Surge"),
  parseThemeCSS(nebulaDream, "Nebula Dream", "Nebula Dream"),
  parseThemeCSS(TokyoPulse, "TokyoPulse", "TokyoPulse"),
];

export function getTheme(id: string): Theme | undefined {
  return themes.find((theme) => theme.id === id);
}
