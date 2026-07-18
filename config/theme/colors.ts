import type { ThemeObject } from "./types";

const door = {
  DEFAULT: "47 83% 61%", // door.500
  foreground: "30 35% 8%",
  hover: "47 53% 49%", // door.600
  active: "47 52% 37%", // door.700
  muted: "47 76% 78%", // door.200
  subtle: "47 82% 93%", // door.100

  accent: {
    DEFAULT: "27 65% 55%", // doorBorder.500
    hover: "27 55% 44%", // 600
    active: "27 54% 33%", // 700
    subtle: "24 64% 92%", // 100
  },
} as const;

const treasure = {
  DEFAULT: "2 63% 38%", // treasure.500
  foreground: "44 33% 97%",
  hover: "2 62% 31%", // 600
  active: "2 62% 23%", // 700
  muted: "6 51% 76%", // 200
  subtle: "6 52% 90%", // 100

  accent: {
    DEFAULT: "47 83% 61%", // treasureBorder.500
    hover: "47 53% 49%", // 600
    active: "47 52% 37%", // 700
    subtle: "47 82% 93%", // 100
  },
} as const;

/**
 * Treasure Theme - Light
 */
export const light: ThemeObject = {
  background: "44 33% 97%", // cardBg.50
  foreground: "21 63% 14%", // treasure.900

  border: "40 31% 86%", // cardBg.200
  input: "40 31% 86%",
  ring: door.DEFAULT,

  primary: door,
  door,

  destructive: treasure,
  treasure,

  muted: {
    DEFAULT: "40 31% 92%", // cardBg.100
    foreground: "35 11% 39%", // cardBg.700
    hover: "40 31% 86%", // cardBg.200
    active: "38 30% 83%", // cardBg.300
  },

  surface: {
    DEFAULT: "44 33% 95%", // cardBg.100
    hover: "40 31% 92%", // cardBg.200
  },

  card: {
    DEFAULT: "40 31% 92%", // cardBg.100
    foreground: "21 63% 14%",
  },

  popover: {
    DEFAULT: "40 31% 92%",
    foreground: "21 63% 14%",
  },

  selection: "40 31% 86%",
} as const;

const doorDark = {
  DEFAULT: "47 83% 61%", // door.500
  foreground: "35 11% 14%",
  hover: "47 83% 69%", // door.400
  active: "47 53% 49%", // door.600
  muted: "47 52% 37%", // door.700
  subtle: "47 52% 20%", // door.800

  accent: {
    DEFAULT: "27 65% 55%", // doorBorder.500
    hover: "27 67% 63%", // 400
    active: "27 55% 44%", // 600
    subtle: "27 54% 22%", // 800
  },
} as const;

const treasureDark = {
  DEFAULT: "2 63% 38%", // treasure.500
  foreground: "6 52% 94%",
  hover: "2 43% 51%", // 400
  active: "2 62% 31%", // 600
  muted: "2 62% 23%", // 700
  subtle: "2 60% 16%", // 800

  accent: {
    DEFAULT: "47 83% 61%", // treasureBorder.500
    hover: "47 83% 69%", // 400
    active: "47 53% 49%", // 600
    subtle: "47 52% 20%", // 800
  },
} as const;

export const dark: ThemeObject = {
  background: "35 11% 14%", // cardBg.900
  foreground: "6 52% 94%", // treasure.50

  border: "36 11% 25%", // cardBg.800
  input: "36 11% 25%",
  ring: door.DEFAULT,

  primary: doorDark,
  door: doorDark,

  destructive: treasureDark,
  treasure: treasureDark,

  muted: {
    DEFAULT: "35 11% 18%",
    foreground: "38 31% 74%",
    hover: "36 11% 25%",
    active: "35 11% 39%",
  },

  surface: {
    DEFAULT: "35 11% 18%",
    hover: "36 11% 25%",
  },

  card: {
    DEFAULT: "36 11% 25%",
    foreground: "6 52% 94%",
  },

  popover: {
    DEFAULT: "36 11% 25%",
    foreground: "6 52% 94%",
  },

  selection: "36 11% 25%",
} as const;
