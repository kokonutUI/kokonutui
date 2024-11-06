"use client";

import AIInput_01 from "@/components/inputs/ai-input-01";
import AIInput_02 from "@/components/inputs/ai-input-02";
import AIInput_03 from "@/components/inputs/ai-input-03";
import AIInput_04 from "@/components/inputs/ai-input-04";
import AIInput_05 from "@/components/inputs/ai-input-05";
import AIInput_06 from "@/components/inputs/ai-input-06";
import AIInput_07 from "@/components/inputs/ai-input-07";
import AIInput_08 from "@/components/inputs/ai-input-08";
import AIInput_09 from "@/components/inputs/ai-input-09";
import AIInput_10 from "@/components/inputs/ai-input-10";
import AIInput_11 from "@/components/inputs/ai-input-11";
import AIInput_12 from "@/components/inputs/ai-input-12";
import AIInput_13 from "@/components/inputs/ai-input-13";
import AIInput_14 from "@/components/inputs/ai-input-14";
import AIInput_15 from "@/components/inputs/ai-input-15";
import AIInput_16 from "@/components/inputs/ai-input-16";
import AIInput_17 from "@/components/inputs/ai-input-17";
import AIInput_18 from "@/components/inputs/ai-input-18";
import AIInput_19 from "@/components/inputs/ai-input-19";
import AIInput_20 from "@/components/inputs/ai-input-20";
import { ViewComponents } from "@/components/ViewComponents";
import { useState } from "react";

export default function AIInput() {
    const [components, setComponents] = useState([
        {
            id: 1,
            title: "Slide-in",
            component: <AIInput_01 />,
            fileName: "ai-input-01.tsx",
        },
        {
            id: 2,
            title: "File Upload",
            component: <AIInput_02 />,
            fileName: "ai-input-02.tsx",
        },
        {
            id: 3,
            title: "Suggestions",
            component: <AIInput_03 />,
            fileName: "ai-input-03.tsx",
        },
        {
            id: 4,
            title: "Basic with Search",
            component: <AIInput_04 />,
            fileName: "ai-input-04.tsx",
            dependencies: ["Framer Motion"],
        },
        {
            id: 5,
            title: "Typing",
            component: <AIInput_05 />,
            fileName: "ai-input-05.tsx",
        },
        {
            id: 6,
            title: "Limit Characters",
            component: <AIInput_06 />,
            fileName: "ai-input-06.tsx",
        },
        {
            id: 7,
            title: "Thinking",
            component: <AIInput_07 />,
            fileName: "ai-input-07.tsx",
        },
        {
            id: 8,
            title: "Voice",
            component: <AIInput_08 />,
            fileName: "ai-input-08.tsx",
        },
        {
            id: 9,
            title: "Multiple",
            component: <AIInput_09 />,
            fileName: "ai-input-09.tsx",
        },
        {
            id: 10,
            title: "Banners",
            component: <AIInput_10 />,
            fileName: "ai-input-10.tsx",
        },
        {
            id: 11,
            title: "Agents",
            component: <AIInput_11 />,
            fileName: "ai-input-11.tsx",
        },
        {
            id: 12,
            title: "Shared",
            component: <AIInput_12 />,
            fileName: "ai-input-12.tsx",
        },
        {
            id: 13,
            title: "Optimize",
            component: <AIInput_13 />,
            fileName: "ai-input-13.tsx",
        },
        {
            id: 14,
            title: "Memory",
            component: <AIInput_14 />,
            fileName: "ai-input-14.tsx",
        },
        {
            id: 15,
            title: "All-in-one",
            component: <AIInput_15 />,
            fileName: "ai-input-15.tsx",
        },
        {
            id: 16,
            title: "Minimal",
            component: <AIInput_16 />,
            fileName: "ai-input-16.tsx",
        },
        {
            id: 17,
            title: "Opt in",
            component: <AIInput_17 />,
            fileName: "ai-input-17.tsx",
        },
        {
            id: 18,
            title: "Floating",
            component: <AIInput_18 />,
            fileName: "ai-input-18.tsx",
        },
        {
            id: 19,
            title: "Quick Actions",
            component: <AIInput_19 />,
            fileName: "ai-input-19.tsx",
            dependencies: ["Framer Motion"],
        },
        {
            id: 20,
            title: "Commands",
            component: <AIInput_20 />,
            fileName: "ai-input-20.tsx",
            dependencies: ["Framer Motion", "CMDK"],
        },
    ]);

    return (
        <div className="grid grid-rows-[auto_1fr_20px] min-h-screen p-1 lg:p-4 gap-12 sm:p-16 pb-16">
            <ViewComponents components={components} folder="inputs" />
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
