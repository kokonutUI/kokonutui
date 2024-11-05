import { Suspense } from "react";
import { ComponentItem } from "./ComponentItem";
import { cn } from "@/lib/utils";

interface Component {
    id: number;
    title: string;
    component: React.ReactNode;
    fileName: string;
    dependencies?: string[];
}

interface ViewComponentsProps {
    components: Component[];
    folder: string;
    className?: string;
    containerClassName?: string;
}

export function ViewComponents({
    components,
    folder,
    containerClassName,
}: ViewComponentsProps) {
    return (
        <Suspense fallback={null}>
            <div
                className={cn(
                    "grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-12 w-full",
                    containerClassName
                )}
            >
                {components.map((item) => (
                    <ComponentItem
                        key={item.id}
                        item={item}
                        folder={folder}
                    />
                ))}
            </div>
        </Suspense>
    );
}
