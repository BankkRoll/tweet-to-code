import { Registry } from "./schema";

export const ui: Registry = [
  {
    name: "sherlock-hero",
    type: "registry:ui",
    dependencies: ["framer-motion", "lucide-react"],
    files: [
      {
        path: "ui/sherlock-hero.tsx",
        content: "./registry/ui/sherlock-hero.tsx",
        type: "registry:ui",
        target: "",
      },
    ],
  },
  {
    name: "handwritten-hero",
    type: "registry:ui",
    dependencies: ["framer-motion", "lucide-react"],
    files: [
      {
        path: "ui/handwritten-hero.tsx",
        content: "./registry/ui/handwritten-hero.tsx",
        type: "registry:ui",
        target: "",
      },
    ],
  },
  {
    name: "flowpay-hero",
    type: "registry:ui",
    dependencies: ["framer-motion", "lucide-react"],
    files: [
      {
        path: "ui/flowpay-hero.tsx",
        content: "./registry/ui/flowpay-hero.tsx",
        type: "registry:ui",
        target: "",
      },
    ],
  },
  {
    name: "affix-hero",
    type: "registry:ui",
    dependencies: ["framer-motion", "lucide-react", "clsx", "tailwind-merge"],
    files: [
      {
        path: "ui/affix-hero.tsx",
        content: "./registry/ui/affix-hero.tsx",
        type: "registry:ui",
        target: "",
      },
      {
        path: "lib/utils.ts",
        content: "./registry/lib/utils.ts",
        type: "registry:ui",
        target: "",
      },
    ],
  },
];
