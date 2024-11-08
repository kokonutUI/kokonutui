"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Btn02({
    className,
    children = "Continue",
    ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <Button
            className={cn(
                "relative h-11 px-6",
                "bg-white dark:bg-zinc-900/20",
                "text-zinc-900 dark:text-zinc-100",
                "border border-zinc-200 dark:border-zinc-800",
                "shadow-sm",
                "hover:shadow-md hover:-translate-y-0.5",
                "hover:bg-zinc-50 dark:hover:bg-zinc-900",
                "active:translate-y-0",
                "transition-all duration-200",
                "after:absolute after:inset-0",
                "after:rounded-[inherit] after:opacity-0",
                "after:border after:border-zinc-900/10 dark:after:border-white/10",
                "after:transition-opacity after:duration-300",
                "hover:after:opacity-100",
                className
            )}
            {...props}
        >
            {children}
        </Button>
    );
}
