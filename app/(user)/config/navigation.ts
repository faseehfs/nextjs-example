export interface Feature {
  title: string;
  description?: string;
  href: string | null;
}

export const features: Feature[] = [
  {
    title: "Tailwind Animations",
    description:
      "Tailwind provides utility classes to animate your components without touching CSS.",
    href: "/feature/tailwind-animations",
  },
  {
    title: "Posts",
    description: "Write your own posts or read posts written by other users.",
    href: "/feature/post",
  },
];
