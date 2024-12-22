import { Theme, ThemeColors } from "@/types";

export function parseThemeCSS(css: string, name: string, id: string): Theme {
  const lightColors: Partial<ThemeColors> = {};
  const darkColors: Partial<ThemeColors> = {};

  // Parse CSS variables
  const cssLines = css.split("\n");
  let isDark = false;

  cssLines.forEach((line) => {
    const match = line.match(/--([a-zA-Z0-9-]+):\s*([^;]+);/);
    if (match) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const [_, name, value] = match;
      if (
        !name.includes("font") &&
        !name.includes("line") &&
        !name.includes("radius")
      ) {
        if (isDark) {
          darkColors[name as keyof ThemeColors] = value.trim();
        } else {
          lightColors[name as keyof ThemeColors] = value.trim();
        }
      }
    }
    if (line.includes(".dark")) {
      isDark = true;
    }
  });

  return {
    name,
    id,
    colors: {
      light: lightColors as ThemeColors,
      dark: darkColors as ThemeColors,
    },
    cssVars: css,
  };
}

export function createCSSVariables(theme: Theme): string {
  const lightVars = Object.entries(theme.colors.light)
    .map(([key, value]) => `--${key}: ${value};`)
    .join("\n  ");

  const darkVars = Object.entries(theme.colors.dark)
    .map(([key, value]) => `--${key}: ${value};`)
    .join("\n  ");

  return `@layer base {
  :root {
    ${lightVars}
  }

  .dark {
    ${darkVars}
  }
}`;
}
