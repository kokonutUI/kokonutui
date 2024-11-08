import { ViewComponents } from "@/components/ViewComponents";
import type { Metadata } from "next";
import Card_01 from "@/components/cards/card-01";
import Card_02 from "@/components/cards/card-02";
import Card_03 from "@/components/cards/card-03";
import Card_04 from "@/components/cards/card-04";
import Card_05 from "@/components/cards/card-05";
import Card_06 from "@/components/cards/card-06";

export const metadata: Metadata = {
    title: "Card",
    description:
        "A collection of card components to use and customize. Built with Tailwind CSS and Shadcn.",
};

export default function Cards_View() {
    const components = [
        {
            id: 1,
            title: "Card 01",
            component: <Card_01 />,
            fileName: "card-01.tsx",
        },
        {
            id: 2,
            title: "Card 02",
            component: <Card_02 />,
            fileName: "card-02.tsx",
        },
        {
            id: 3,
            title: "Card 03",
            component: <Card_03 />,
            fileName: "card-03.tsx",
        },
        {
            id: 4,
            title: "Card 04",
            component: <Card_04 />,
            fileName: "card-04.tsx",
        },
        {
            id: 5,
            title: "Card 05",
            component: <Card_05 />,
            fileName: "card-05.tsx",
        },
        {
            id: 6,
            title: "Card 06",
            component: <Card_06 />,
            fileName: "card-06.tsx",
            dependencies: ["Framer Motion"],
        },
    ];

    return (
        <div className="grid grid-rows-[auto_1fr_20px] min-h-screen p-1 lg:p-4 pb-20 gap-12 sm:p-16">
            <ViewComponents
                components={components}
                folder="cards"
                containerClassName="grid-cols-1 lg:grid-cols-2 gap-2"
            />
        </div>
    );
}
