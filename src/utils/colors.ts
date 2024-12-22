// utils/colors.ts
export function hslToHex(hsl: string): string {
  // Parse HSL string (e.g., "220 25% 99%")
  const [h, s, l] = hsl
    .split(" ")
    .map((val) => parseFloat(val.replace(/%/, "")));

  const lightness = l / 100;
  const saturation = s / 100;
  const a = saturation * Math.min(lightness, 1 - lightness);
  const f = (n: number) => {
    const k = (n + h / 30) % 12;
    const color = lightness - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color)
      .toString(16)
      .padStart(2, "0");
  };
  return `#${f(0)}${f(8)}${f(4)}`;
}
