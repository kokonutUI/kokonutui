import Btn01 from "@/components/buttons/btn-01";
import Btn02 from "@/components/buttons/btn-02";
import Btn03 from "@/components/buttons/btn-03";
import Btn04 from "@/components/buttons/btn-04";
import Btn_05 from "@/components/buttons/btn-05";
import Btn06 from "@/components/buttons/btn-06";
import Btn07 from "@/components/buttons/btn-07";
import Btn08 from "@/components/buttons/btn-08";
import Btn09 from "@/components/buttons/btn-09";
import Btn10 from "@/components/buttons/btn-10";
import { ViewComponents } from "@/components/ViewComponents";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Button",
    description:
        "A collection of button components to use and customize. Built with Tailwind CSS and Shadcn.",
};

export default function Buttons_View() {
    const components = [
        {
            id: 1,
            title: "Basic",
            component: <Btn01 />,
            fileName: "btn-01.tsx",
        },
        {
            id: 2,
            title: "Basic 2",
            component: <Btn02 />,
            fileName: "btn-02.tsx",
        },
        {
            id: 3,
            title: "Attract",
            component: <Btn03 />,
            fileName: "btn-03.tsx",
            dependencies: ["Framer Motion"],
        },
        {
            id: 4,
            title: "Cursor Blob",
            component: <Btn04 />,
            fileName: "btn-04.tsx",
            dependencies: ["Framer Motion"],
        },
        {
            id: 5,
            title: "Hold to Action",
            component: <Btn_05 />,
            fileName: "btn-05.tsx",
            dependencies: ["Framer Motion"],
        },
        {
            id: 6,
            title: "Copy",
            component: <Btn06 textToCopy="Hello, world!" />,
            fileName: "btn-06.tsx",
        },
        {
            id: 7,
            title: "Processing",
            component: <Btn07 />,
            fileName: "btn-07.tsx",
            dependencies: ["Framer Motion"],
        },
        {
            id: 8,
            title: "Share",
            component: <Btn08 />,
            fileName: "btn-08.tsx",
            dependencies: ["Framer Motion"],
        },
        {
            id: 9,
            title: "Action",
            component: <Btn09 />,
            fileName: "btn-09.tsx",
        },
        {
            id: 10,
            title: "Shadow",
            component: <Btn10 />,
            fileName: "btn-10.tsx",
        },
    ];

    return (
        <div className="grid grid-rows-[auto_1fr_20px] min-h-screen p-1 lg:p-4 pb-20 gap-12 sm:p-16">
            <ViewComponents
                components={components}
                folder="buttons"
                containerClassName="grid-cols-1 lg:grid-cols-3 gap-2"
            />
        </div>
    );
}
