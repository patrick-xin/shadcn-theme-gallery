// lib/themes/registry/blue-theme.ts
export const blueTheme = `@layer base {
  :root {
    /* Enhanced core colors with new blue theme */
    --background: 220 25% 99%; /* Slightly cool background */
    --foreground: 220 40% 10%; /* Aligned with brand color */

    /* Refined component backgrounds */
    --card: 220 25% 99%;
    --card-foreground: 220 40% 10%;
    --popover: 220 35% 99%;
    --popover-foreground: 220 40% 10%;

    /* New primary color based on #a1c4fd */
    --primary: 220 95% 82%; /* Matches #a1c4fd */
    --primary-foreground: 220 40% 10%;

    /* Enhanced secondary palette */
    --secondary: 220 30% 96%; /* Cool secondary */
    --secondary-foreground: 220 35% 12%;

    /* Sophisticated muted and accent tones */
    --muted: 220 15% 94%; /* Aligned with primary hue */
    --muted-foreground: 220 8% 35%; /* Better readability */
    --accent: 220 25% 92%; /* Distinguished accent */
    --accent-foreground: 220 35% 12%;

    /* Refined system states */
    --destructive: 0 75% 55%; /* Clear red */
    --destructive-foreground: 0 0% 100%;

    /* Enhanced borders and inputs */
    --border: 220 20% 88%; /* Visible borders */
    --input: 220 20% 88%;
    --ring: 220 95% 82%;

    /* Radius remains consistent */
    --radius: 0.875rem;

    /* Enhanced data visualization colors */
    --chart-1: 220 95% 82%; /* Primary blue */
    --chart-2: 190 85% 70%; /* Cyan */
    --chart-3: 250 75% 75%; /* Purple */
    --chart-4: 160 65% 65%; /* Teal */
    --chart-5: 280 70% 75%; /* Lavender */

    /* Typography scale remains unchanged */
    --font-size-xs: 0.75rem;
    --font-size-sm: 0.875rem;
    --font-size-base: 1rem;
    --font-size-lg: 1.125rem;
    --font-size-xl: 1.3125rem;
    --font-size-2xl: 1.5625rem;
    --font-size-3xl: 1.953rem;
    --font-size-4xl: 2.441rem;

    /* Line heights remain unchanged */
    --line-height-tight: 1.2;
    --line-height-normal: 1.6;
    --line-height-relaxed: 1.8;

    /* Font weights remain unchanged */
    --font-weight-normal: 400;
    --font-weight-medium: 500;
    --font-weight-semibold: 600;
    --font-weight-bold: 700;
  }

  .dark {
    /* Sophisticated dark mode */
    --background: 220 12% 8%; /* Rich dark background */
    --foreground: 220 15% 98%;

    /* Enhanced dark components */
    --card: 220 12% 8%;
    --card-foreground: 220 15% 98%;
    --popover: 220 15% 8%;
    --popover-foreground: 220 15% 98%;

    /* Dark mode primary */
    --primary: 220 85% 75%; /* Brighter in dark mode */
    --primary-foreground: 220 8% 8%;

    /* Enhanced dark secondary */
    --secondary: 220 30% 15%;
    --secondary-foreground: 220 15% 98%;

    /* Sophisticated dark muted tones */
    --muted: 220 25% 15%;
    --muted-foreground: 220 15% 65%;
    --accent: 220 25% 20%;
    --accent-foreground: 220 15% 98%;

    /* Refined dark system states */
    --destructive: 0 65% 48%;
    --destructive-foreground: 220 15% 98%;

    /* Enhanced dark borders */
    --border: 220 25% 18%;
    --input: 220 25% 18%;
    --ring: 220 85% 75%;

    /* Dark mode chart colors */
    --chart-1: 220 85% 75%; /* Primary */
    --chart-2: 190 75% 65%; /* Cyan */
    --chart-3: 250 65% 70%; /* Purple */
    --chart-4: 160 55% 60%; /* Teal */
    --chart-5: 280 60% 70%; /* Lavender */
  }
}`;
