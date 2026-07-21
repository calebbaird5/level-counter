import type { ThemeObject } from "./types";

const door = {
  DEFAULT: "47 83% 61%", // #eecf49
  foreground: "30 35% 8%",
  hover: "47 100% 74%", // #ffff7b
  active: "47 76% 41%", // #bc9d17
  muted: "47 76% 78%",
  subtle: "47 100% 92%",
  border: "27 65% 55%", // #d7843f
} as const;

const treasure = {
  DEFAULT: "2 63% 38%", // #9f2824
  foreground: "44 33% 97%",
  hover: "2 53% 58%", // #d15a56
  active: "2 100% 21%", // #6d0000
  muted: "2 45% 70%",
  subtle: "2 53% 90%",
  border: "47 83% 61%", // #eecf49
} as const;

const cardBackground = {
  DEFAULT: "44 31% 78%", // #cdc2a3
  foreground: "21 63% 14%",
  hover: "44 100% 92%", // #fff4d5
  active: "44 14% 52%", // #9b9071
  subtle: "44 25% 96%",
} as const;

export const light: ThemeObject = {
  background: "36 38% 77%", // #dbcaaf
  foreground: "21 63% 14%",

  border: "44 20% 82%",
  input: "44 20% 82%",
  ring: door.DEFAULT,

  primary: {
    DEFAULT: "27 45% 38%", // Rich warm brown
    foreground: "44 33% 97%",
    hover: "27 45% 44%",
    active: "27 45% 30%",
    muted: "27 35% 72%",
    subtle: "27 45% 92%",
  },
  door,

  destructive: treasure,
  treasure,

  muted: {
    DEFAULT: "44 20% 88%",
    foreground: "35 11% 39%",
    hover: "44 20% 82%",
    active: "44 20% 76%",
  },

  surface: {
    DEFAULT: cardBackground.DEFAULT,
    hover: cardBackground.hover,
  },

  card: {
    DEFAULT: "44 25% 95%", // #e8e6db
    foreground: "21 63% 14%",
  },

  popover: {
    DEFAULT: "44 25% 95%",
    foreground: "21 63% 14%",
  },

  selection: "44 20% 82%",
} as const;

const doorDark = {
  DEFAULT: "47 83% 61%",
  foreground: "35 11% 14%",
  hover: "47 100% 78%",
  active: "47 76% 45%",
  muted: "47 52% 37%",
  subtle: "47 50% 20%",
  border: "27 65% 55%",
} as const;

const treasureDark = {
  DEFAULT: "2 63% 45%",
  foreground: "6 52% 94%",
  hover: "2 53% 62%",
  active: "2 100% 25%",
  muted: "2 62% 30%",
  subtle: "2 60% 16%",
  border: "47 83% 61%",
} as const;

export const dark: ThemeObject = {
  background: "35 11% 14%",
  foreground: "44 33% 90%",

  border: "36 11% 25%",
  input: "36 11% 25%",
  ring: doorDark.DEFAULT,

  primary: doorDark,
  door: doorDark,

  destructive: treasureDark,
  treasure: treasureDark,

  muted: {
    DEFAULT: "35 11% 20%",
    foreground: "38 31% 74%",
    hover: "36 11% 25%",
    active: "35 11% 32%",
  },

  surface: {
    DEFAULT: "35 11% 18%",
    hover: "36 11% 25%",
  },

  card: {
    DEFAULT: "36 11% 22%",
    foreground: "44 33% 90%",
  },

  popover: {
    DEFAULT: "36 11% 22%",
    foreground: "44 33% 90%",
  },

  selection: "36 11% 25%",
} as const;
