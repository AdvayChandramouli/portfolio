"use client";

/**
 * Shift background effect – ambient floating circles with simplex noise.
 * Adapted from AmbientCanvasBackgrounds "Shift":
 * https://github.com/crnacura/AmbientCanvasBackgrounds
 *
 * Renders a full-screen canvas behind content. Uses CSS gradient for base,
 * canvas for subtle glowing circles. Respects prefers-reduced-motion.
 */

import { useEffect, useRef } from "react";
import {
  glowColors,
  alphaMin,
  alphaMax,
  blurAmount,
  baseSpeed,
  rangeSpeed,
  reducedMotionSpeedMultiplier,
  circleCount,
  circlePropCount,
  xOff,
  yOff,
  zOff,
  baseRadius,
  rangeRadius,
  baseTTL,
  rangeTTL,
} from "./palette";

// eslint-disable-next-line @typescript-eslint/no-require-imports
const SimplexNoise = require("./vendor/simplex-noise.js") as new (
  r?: () => number
) => { noise3D: (x: number, y: number, z: number) => number };

const TAU = 2 * Math.PI;

function rand(n: number): number {
  return n * Math.random();
}

function fadeInOut(t: number, m: number): number {
  const hm = 0.5 * m;
  return Math.abs(((t + hm) % m) - hm) / hm;
}

/** Resolve CSS variable to hex, or return as-is if already hex. */
function resolveColor(value: string): string {
  if (value.startsWith("var(")) {
    const match = value.match(/var\((--[a-z-]+)\)/);
    if (match) {
      const resolved = getComputedStyle(document.documentElement)
        .getPropertyValue(match[1])
        .trim();
      return resolved || value;
    }
  }
  return value;
}

/** Convert hex/rgb to rgba string for canvas fillStyle. */
function colorWithAlpha(hexOrRgb: string, alpha: number): string {
  const s = hexOrRgb.trim();
  if (s.startsWith("rgba(") || s.startsWith("rgb(")) {
    const m = s.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
    if (m) return `rgba(${m[1]},${m[2]},${m[3]},${alpha})`;
  }
  if (s.startsWith("#")) {
    const hex = s.slice(1);
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);
    return `rgba(${r},${g},${b},${alpha})`;
  }
  return `rgba(128,128,128,${alpha})`;
}

export function ShiftBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || typeof window === "undefined") return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const speedMult = prefersReducedMotion ? reducedMotionSpeedMultiplier : 1;

    const canvasA = document.createElement("canvas");
    const canvasB = document.createElement("canvas");
    canvasB.style.cssText =
      "position:absolute;inset:0;width:100%;height:100%;pointer-events:none;";
    container.appendChild(canvasB);

    const ctxA = canvasA.getContext("2d");
    const ctxB = canvasB.getContext("2d");
    if (!ctxA || !ctxB) return;

    const circlePropsLength = circleCount * circlePropCount;
    let circleProps = new Float32Array(circlePropsLength);
    let simplex: InstanceType<typeof SimplexNoise> | null = null;
    let baseHue = 0;

    const resolvedColors = glowColors.map((c) => resolveColor(c));

    function initCircles() {
      simplex = new SimplexNoise();
      baseHue = 220;
      for (let i = 0; i < circlePropsLength; i += circlePropCount) {
        initCircle(i);
      }
    }

    function initCircle(i: number) {
      const w = canvasA.width;
      const h = canvasA.height;
      const x = rand(w);
      const y = rand(h);
      const n = simplex!.noise3D(x * xOff, y * yOff, baseHue * zOff);
      const t = rand(TAU);
      const speed =
        (baseSpeed + rand(rangeSpeed)) * speedMult;
      const vx = speed * Math.cos(t);
      const vy = speed * Math.sin(t);
      const life = 0;
      const ttl = baseTTL + rand(rangeTTL);
      const radius = baseRadius + rand(rangeRadius);
      const colorIndex = Math.min(
        2,
        Math.max(0, Math.floor((n * 0.5 + 0.5) * 3))
      );
      circleProps.set([x, y, vx, vy, life, ttl, radius, colorIndex], i);
    }

    function updateCircles() {
      if (!prefersReducedMotion) baseHue += 0.5;
      for (let i = 0; i < circlePropsLength; i += circlePropCount) {
        updateCircle(i);
      }
    }

    function updateCircle(i: number) {
      const x = circleProps[i];
      const y = circleProps[i + 1];
      const vx = circleProps[i + 2];
      const vy = circleProps[i + 3];
      let life = circleProps[i + 4];
      const ttl = circleProps[i + 5];
      const radius = circleProps[i + 6];
      const colorIndex = Math.floor(circleProps[i + 7]);

      const alpha =
        alphaMin +
        fadeInOut(life, ttl) * (alphaMax - alphaMin);
      const color = resolvedColors[colorIndex] ?? resolvedColors[0];
      ctxA!.fillStyle = colorWithAlpha(color, alpha);
      ctxA!.beginPath();
      ctxA!.arc(x, y, radius, 0, TAU);
      ctxA!.fill();

      life += 1;
      circleProps[i] = x + vx;
      circleProps[i + 1] = y + vy;
      circleProps[i + 4] = life;

      const outOfBounds =
        x < -radius ||
        x > canvasA.width + radius ||
        y < -radius ||
        y > canvasA.height + radius;
      if (outOfBounds || life > ttl) initCircle(i);
    }

    function resize() {
      const { innerWidth, innerHeight } = window;
      canvasA.width = innerWidth;
      canvasA.height = innerHeight;
      if (canvasB.parentElement) {
        ctxB!.drawImage(canvasA, 0, 0);
      }
      canvasB.width = innerWidth;
      canvasB.height = innerHeight;
      ctxB!.drawImage(canvasA, 0, 0);
    }

    function render() {
      ctxB!.clearRect(0, 0, canvasB.width, canvasB.height);
      ctxB!.save();
      ctxB!.filter = `blur(${blurAmount}px)`;
      ctxB!.drawImage(canvasA, 0, 0);
      ctxB!.restore();
    }

    function draw() {
      ctxA!.clearRect(0, 0, canvasA.width, canvasA.height);
      updateCircles();
      render();
      rafRef.current = requestAnimationFrame(draw);
    }

    resize();
    initCircles();
    rafRef.current = requestAnimationFrame(draw);

    const handleResize = () => {
      const { innerWidth, innerHeight } = window;
      canvasA.width = innerWidth;
      canvasA.height = innerHeight;
      canvasB.width = innerWidth;
      canvasB.height = innerHeight;
      ctxB!.drawImage(canvasA, 0, 0);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(rafRef.current);
      if (canvasB.parentElement) canvasB.remove();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="shift-background"
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: -1,
        background: `linear-gradient(180deg, var(--shift-gradient-from, #faf9f6) 0%, var(--shift-gradient-to, #e8e8e8) 100%)`,
      }}
      aria-hidden
    />
  );
}
