import ComponentNav from "@/components/component-nav";
import type { Metadata } from "next";
import { siteConfig } from "../config/site";

export const metadata: Metadata = {
    title: {
        default: `${siteConfig.name} - Components`,
        template: `%s | ${siteConfig.name}`,
    },
};

const categories = [
    {
        id: 1,
        title: "Text",
        href: "/components/texts",
        description: "Typography and text animation components",
        count: 6,
    },
    {
        id: 2,
        title: "Button",
        href: "/components/buttons",
        description: "Interactive button components with animations",
        count: 10,
    },
    {
        id: 3,
        title: "AI-Input",
        href: "/components/ai-input",
        description: "Modern AI chat interface components",
        count: 20,
    },
    {
        id: 4,
        title: "Card",
        href: "/components/cards",
        description: "Versatile card components and layouts",
        count: 6,
    },
    {
        id: 5,
        title: "Pricing",
        href: "/components/pricing",
        description: "Pricing components and layouts",
        count: 5,
    },
    {
        id: 7,
        title: "Modal",
        href: "/components/modal",
        description: "Modal components and layouts",
        count: "?",
        isComingSoon: true,
    },
];

export default function ComponentsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="relative flex flex-col min-h-screen">
            <div className="z-40">
                <ComponentNav categories={categories} />
            </div>
            <main className="flex-1 w-full pt-32 pb-24 md:pl-[260px] md:pb-0">
                {children}
            </main>
        </div>
    );
}
