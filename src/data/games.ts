export interface GameData {
  title: string;
  slug: string;
  image: string;
  subtitle: string;
  description: string;
  features: string[];
  stats: {
    category: string;
    maxWin: string;
    volatility: string;
    rtp: string;
  };
  color?: "blue" | "purple" | "green" | "orange";
}

import gameImg1 from "../assets/game-img-1.png";
import gameImg2 from "../assets/game-img-2.png";
import gameImg3 from "../assets/game-img-3.png";
import gameImg4 from "../assets/game-img-4.png";
import allGames1 from "../assets/game-images/all-games-1.png";
import allGames2 from "../assets/game-images/all-games-2.png";
import allGames3 from "../assets/game-images/all-games-3.png";
import allGames4 from "../assets/game-images/all-games-4.png";
import allGames5 from "../assets/game-images/all-games-5.png";
import allGames6 from "../assets/game-images/all-games-6.png";
import allGames7 from "../assets/game-images/all-games-7.png";
import allGames8 from "../assets/game-images/all-games-8.png";

// Utility to slugify the title
const slugify = (str: string) =>
  str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

const dummyDescription =
  "This is a thrilling casino game that combines classic slot mechanics with innovative bonus features. Enjoy immersive graphics, exciting bonus rounds, and the chance to win big rewards!";

const dummyFeatures = [
  "Wild West Theme With Immersive Graphics",
  "Deno's Bounty Bonus Round With Multipliers",
  "Free Spins With Expanding Wilds",
  "Mini-Games With Instant Cash Prizes",
  "Progressive Jackpot System",
];

export const games: GameData[] = [
  // Popular Games Section
  {
    title: "BASTA MAGIC CASTLE",
    slug: slugify("BASTA MAGIC CASTLE"),
    image: gameImg1,
    subtitle: "Fire On Fire.",
    description: dummyDescription,
    features: dummyFeatures,
    stats: { category: "Instant", maxWin: "X3891", volatility: "Low", rtp: "95%" },
    color: "blue",
  },
  {
    title: "BASTA CANDY SPLASH",
    slug: slugify("BASTA CANDY SPLASH"),
    image: gameImg2,
    subtitle: "New Way Of Playing.",
    description: dummyDescription,
    features: dummyFeatures,
    stats: { category: "Instant", maxWin: "X3891", volatility: "Low", rtp: "95%" },
    color: "purple",
  },
  {
    title: "BASTA WILD GUARDIANS",
    slug: slugify("BASTA WILD GUARDIANS"),
    image: gameImg3,
    subtitle: "Particles Out Of The Mechanics",
    description: dummyDescription,
    features: dummyFeatures,
    stats: { category: "Instant", maxWin: "X3891", volatility: "Low", rtp: "95%" },
    color: "green",
  },
  {
    title: "BASTA VIKING'S SPIRIT",
    slug: slugify("BASTA VIKING'S SPIRIT"),
    image: gameImg4,
    subtitle: "Fire On Fire.",
    description: dummyDescription,
    features: dummyFeatures,
    stats: { category: "Instant", maxWin: "X3891", volatility: "Low", rtp: "95%" },
    color: "orange",
  },
  // All Games Section
  {
    title: "CHINESE TREASURE",
    slug: slugify("CHINESE TREASURE"),
    image: allGames1,
    subtitle: "Trigger Free Games, Multiply Wins, And Enjoy A Cascade Of Golden Wealth",
    description: dummyDescription,
    features: dummyFeatures,
    stats: { category: "Instant", maxWin: "X3891", volatility: "Low", rtp: "95%" },
    color: "blue",
  },
  {
    title: "BASTA COMIX SAGA",
    slug: slugify("BASTA COMIX SAGA"),
    image: allGames2,
    subtitle: "Trigger Free Games, Multiply Wins, And Enjoy A Cascade Of Golden Wealth",
    description: dummyDescription,
    features: dummyFeatures,
    stats: { category: "Instant", maxWin: "X3891", volatility: "Low", rtp: "95%" },
    color: "green",
  },
  {
    title: "GODS OF ANCIENT GREECE",
    slug: slugify("GODS OF ANCIENT GREECE"),
    image: allGames3,
    subtitle: "Trigger Free Games, Multiply Wins, And Enjoy A Cascade Of Golden Wealth",
    description: dummyDescription,
    features: dummyFeatures,
    stats: { category: "Instant", maxWin: "X3891", volatility: "Low", rtp: "95%" },
    color: "purple",
  },
  {
    title: "BASTA SHADOW SAMURAI",
    slug: slugify("BASTA SHADOW SAMURAI"),
    image: allGames4,
    subtitle: "Trigger Free Games, Multiply Wins, And Enjoy A Cascade Of Golden Wealth",
    description: dummyDescription,
    features: dummyFeatures,
    stats: { category: "Instant", maxWin: "X3891", volatility: "Low", rtp: "95%" },
    color: "orange",
  },
  {
    title: "BASTA MAFIA BOSS",
    slug: slugify("BASTA MAFIA BOSS"),
    image: allGames5,
    subtitle: "Trigger Free Games, Multiply Wins, And Enjoy A Cascade Of Golden Wealth",
    description: dummyDescription,
    features: dummyFeatures,
    stats: { category: "Instant", maxWin: "X3891", volatility: "Low", rtp: "95%" },
    color: "blue",
  },
  {
    title: "CHEF FORTUNE",
    slug: slugify("CHEF FORTUNE"),
    image: allGames6,
    subtitle: "Trigger Free Games, Multiply Wins, And Enjoy A Cascade Of Golden Wealth",
    description: dummyDescription,
    features: dummyFeatures,
    stats: { category: "Instant", maxWin: "X3891", volatility: "Low", rtp: "95%" },
    color: "purple",
  },
  {
    title: "BASTA MAGICAL RUSH",
    slug: slugify("BASTA MAGICAL RUSH"),
    image: allGames7,
    subtitle: "Trigger Free Games, Multiply Wins, And Enjoy A Cascade Of Golden Wealth",
    description: dummyDescription,
    features: dummyFeatures,
    stats: { category: "Instant", maxWin: "X3891", volatility: "Low", rtp: "95%" },
    color: "green",
  },
  {
    title: "BASTA EGYPTIAN MYSTERIES",
    slug: slugify("BASTA EGYPTIAN MYSTERIES"),
    image: allGames8,
    subtitle: "Trigger Free Games, Multiply Wins, And Enjoy A Cascade Of Golden Wealth",
    description: dummyDescription,
    features: dummyFeatures,
    stats: { category: "Instant", maxWin: "X3891", volatility: "Low", rtp: "95%" },
    color: "orange",
  },
]; 