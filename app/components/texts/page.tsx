"use client";

import Text_01 from "@/components/texts/text-01";
import Text_02 from "@/components/texts/text-02";
import Text_03 from "@/components/texts/text-03";
import { Text_04 } from "@/components/texts/text-04";
import { Text_05 } from "@/components/texts/text-05";
import { Text_06 } from "@/components/texts/text-06";
import { ViewComponents } from "@/components/ViewComponents";

export default function Texts() {
    const components = [
        {
            id: 1,
            title: "Shimmer",
            component: <Text_01 />,
            fileName: "text-01.tsx",
        },
        {
            id: 2,
            title: "Sliced",
            component: <Text_02 text="Payout fees" />,
            fileName: "text-02.tsx",
        },
        {
            id: 3,
            title: "Wave",
            component: <Text_03 text="Wave" />,
            fileName: "text-03.tsx",
        },
        {
            id: 4,
            title: "Enhanced",
            component: <Text_04 text="NIKE" />,

            fileName: "text-04.tsx",
        },
        {
            id: 5,
            title: "Bounce and Hover",
            component: <Text_05 />,

            fileName: "text-05.tsx",
        },
        {
            id: 6,
            title: "Swoosh",
            component: <Text_06 />,

            fileName: "text-06.tsx",
        },
        // {
        //     id: 7,
        //     title: "Reveal",
        //     component: <Text_07 text="안녀하세요" repeat={true} />,

        //     fileName: "text-07.tsx",
        // },
    ];

    return (
        <div className="grid grid-rows-[auto_1fr_20px] min-h-screen p-1 lg:p-4 pb-20 gap-12 sm:p-16">
            <ViewComponents
                components={components}
                folder="texts"
                containerClassName="grid-cols-1 lg:grid-cols-3 gap-2"
            />

            <div className="text-sm text-center text-zinc-600 dark:text-zinc-400">
                Built by{" "}
                <a
                    href="https://x.com/dorian_baffier"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-900 dark:text-white hover:underline"
                >
                    @Dorian
                </a>
            </div>
        </div>
    );
}
