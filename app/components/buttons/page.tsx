"use client";

import Btn_01 from "@/components/buttons/btn-01";
import { Btn02 } from "@/components/buttons/btn-02";
import { Btn03 } from "@/components/buttons/btn-03";
import { Btn04 } from "@/components/buttons/btn-04";
import { Btn05 } from "@/components/buttons/btn-05";
import { Btn06 } from "@/components/buttons/btn-06";
import { Btn07 } from "@/components/buttons/btn-07";
import { Btn08 } from "@/components/buttons/btn-08";
import { ViewComponents } from "@/components/ViewComponents";

export default function Buttons_View() {
    const components = [
        {
            id: 1,
            title: "Hold to Action",
            component: <Btn_01 />,
            fileName: "btn-01.tsx",
        },
        {
            id: 2,
            title: "Power Up",
            component: <Btn02 />,
            fileName: "btn-02.tsx",
        },
        {
            id: 3,
            title: "Attract",
            component: <Btn03 />,
            fileName: "btn-03.tsx",
        },
        {
            id: 4,
            title: "Cursor Blob",
            component: <Btn04 />,
            fileName: "btn-04.tsx",
        },
        {
            id: 5,
            title: "Glitch",
            component: <Btn05 />,
            fileName: "btn-05.tsx",
        },
        {
            id: 6,
            title: "Copy",
            component: <Btn06 textToCopy="Hello, world!" />,
            fileName: "btn-06.tsx",
        },
        {
            id: 7,
            title: "Share Hover",
            component: (
                <Btn07
                    onProcess={async () => {
                        await new Promise((resolve) =>
                            setTimeout(resolve, 2000)
                        );
                        return Math.random() > 0.5;
                    }}
                    processDuration={2000}
                />
            ),
            fileName: "btn-07.tsx",
        },
        {
            id: 8,
            title: "Share",
            component: <Btn08 />,
            fileName: "btn-08.tsx",
        },
    ];

    return (
        <div className="grid grid-rows-[auto_1fr_20px] min-h-screen p-1 lg:p-4 pb-20 gap-12 sm:p-16">
            <ViewComponents
                components={components}
                folder="buttons"
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
