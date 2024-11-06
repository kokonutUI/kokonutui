import ComponentNav from "@/components/component-nav";


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
        count: 8,
    },
    {
        id: 3,
        title: "AI-Input",
        href: "/components/ai-input",
        description: "Modern AI chat interface components",
        count: 20,
    },
];

export default function ComponentsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="relative min-h-screen flex">
            <div className="z-40 flex-none">
                <ComponentNav categories={categories} />
            </div>
            <main className="flex-1 pt-32 md:pl-[260px]">
                {children}
            </main>
        </div>
    );
}
