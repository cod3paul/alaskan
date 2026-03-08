export type Product = {
  id: string;
  name: string;
  description: string;
  image: string;
  category: string;
  casePack: number;
  caseCost: string;
  unitCostBase: string;
  suggestedRetail: string;
  gpPercent: string;
  shelfLife: string;
  foodstampAllowable: boolean;
  wicEligible: boolean;
  local: boolean;
};

export const productsPageContent = {
  hero: { heading: { text: "Our", highlight: "Flavors" } },
  tableLabels: {
    category: "Category",
    casePack: "Case Pack",
    caseCost: "Case Cost",
    unitCost: "Unit Cost Base",
    suggRetail: "Sugg Retail",
    gp: "GP%",
    shelfLife: "Shelf Life",
    local: "Local",
  },
} as const;

export const products: readonly Product[] = [
  {
    id: "chicken-beef",
    name: "Chicken & Beef",
    description:
      "A hearty blend of premium chicken and beef wrapped in a delicate dough.",
    image: "/images/product-chicken-beef.webp",
    category: "Frozen meals",
    casePack: 18,
    caseCost: "$72",
    unitCostBase: "$4.00",
    suggestedRetail: "$7.99",
    gpPercent: "50%",
    shelfLife: "365 days",
    foodstampAllowable: true,
    wicEligible: true,
    local: true,
  },
  {
    id: "chicken",
    name: "Chicken",
    description:
      "Tender, seasoned chicken in a perfectly crafted dumpling shell.",
    image: "/images/product-chicken.webp",
    category: "Frozen meals",
    casePack: 18,
    caseCost: "$72",
    unitCostBase: "$4.00",
    suggestedRetail: "$7.99",
    gpPercent: "50%",
    shelfLife: "365 days",
    foodstampAllowable: true,
    wicEligible: true,
    local: true,
  },
  {
    id: "beef-pork",
    name: "Beef & Pork",
    description:
      "Rich beef and savory pork combined for a bold, satisfying bite.",
    image: "/images/product-beef-pork.webp",
    category: "Frozen meals",
    casePack: 18,
    caseCost: "$72",
    unitCostBase: "$4.00",
    suggestedRetail: "$7.99",
    gpPercent: "50%",
    shelfLife: "365 days",
    foodstampAllowable: true,
    wicEligible: true,
    local: true,
  },
  {
    id: "beef",
    name: "Beef",
    description: "100% Grade A beef, seasoned and wrapped to perfection.",
    image: "/images/product-beef.webp",
    category: "Frozen meals",
    casePack: 18,
    caseCost: "$72",
    unitCostBase: "$4.00",
    suggestedRetail: "$7.99",
    gpPercent: "50%",
    shelfLife: "365 days",
    foodstampAllowable: true,
    wicEligible: true,
    local: true,
  },
  {
    id: "potato-cheese",
    name: "Potato & Cheese with Bacon",
    description:
      "Creamy potato and cheese filling with smoky bacon pieces.",
    image: "/images/product-chicken-beef.webp",
    category: "Frozen meals",
    casePack: 18,
    caseCost: "$72",
    unitCostBase: "$4.00",
    suggestedRetail: "$7.99",
    gpPercent: "50%",
    shelfLife: "365 days",
    foodstampAllowable: true,
    wicEligible: true,
    local: true,
  },
] as const;

