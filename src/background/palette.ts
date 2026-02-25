/**
 * Palette and tunable parameters for the Shift background effect.
 * Adapted from AmbientCanvasBackgrounds "Shift":
 * https://github.com/crnacura/AmbientCanvasBackgrounds
 *
 * All tweakable parameters are centralized here for easy customization.
 */

/** Base gradient: cream → silver (matte "TARS" feel). Used via CSS. */
export const gradientFrom = "#faf9f6";
export const gradientTo = "#e8e8e8";

/** Glow colors: indigo (app accent) + AMG teal + optional neutral. */
export const glowColors = [
  "var(--accent)", // #4f46e5 indigo
  "#00A19B", // AMG teal
  "rgba(180, 180, 190, 0.5)", // faint silver/neutral
] as const;

/** Alpha range for circle fade in/out. Keep low for subtlety. */
export const alphaMin = 0.015;
export const alphaMax = 0.12;

/** Blur strength in pixels. Subtle to preserve text readability. */
export const blurAmount = 40;

/** Speed multipliers. Lower = more minute, less distracting. */
export const baseSpeed = 0.03;
export const rangeSpeed = 0.04;

/** Reduced-motion: speed multiplier when prefers-reduced-motion. Near-zero. */
export const reducedMotionSpeedMultiplier = 0.002;

/** Circle count. Fewer = lighter performance, more subtle. */
export const circleCount = 45;

/** Circle property count (internal: x, y, vx, vy, life, ttl, radius, colorIndex). */
export const circlePropCount = 8;

/** Simplex noise scale factors for color variation. */
export const xOff = 0.0015;
export const yOff = 0.0015;
export const zOff = 0.0015;

/** Circle radius range (base + random). */
export const baseRadius = 80;
export const rangeRadius = 120;

/** Circle lifetime (frames). */
export const baseTTL = 150;
export const rangeTTL = 200;
