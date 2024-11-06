"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, useAnimation } from "framer-motion";
import { Check, Copy } from "lucide-react";
import { useState } from "react";

interface Btn06Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    textToCopy: string;
    successDuration?: number;
}

export function Btn06({
    className,
    textToCopy,
    successDuration = 1000,
    ...props
}: Btn06Props) {
    const [isCopied, setIsCopied] = useState(false);
    const controls = useAnimation();

    async function handleCopy() {
        if (isCopied) return;

        try {
            await navigator.clipboard.writeText(textToCopy);
            setIsCopied(true);

            await controls.start({
                scale: [1, 1.1, 1],
                transition: { duration: 0.2 },
            });

            setTimeout(() => {
                setIsCopied(false);
                controls.start({ scale: 1 });
            }, successDuration);
        } catch (error) {
            console.error("Failed to copy:", error);
        }
    }

    return (
        <Button
            className={cn(
                "min-w-40 relative group",
                "bg-emerald-50 dark:bg-emerald-950",
                "hover:bg-emerald-100 dark:hover:bg-emerald-900",
                "text-emerald-600 dark:text-emerald-300",
                "border border-emerald-200 dark:border-emerald-800",
                isCopied && "bg-emerald-100 dark:bg-emerald-900",
                className
            )}
            onClick={handleCopy}
            {...props}
        >
            <motion.div
                animate={controls}
                className="w-full flex items-center justify-center gap-2"
            >
                {isCopied ? (
                    <>
                        <Check className="w-4 h-4 text-emerald-500" />
                        <span>Copied!</span>
                    </>
                ) : (
                    <>
                        <Copy
                            className={cn(
                                "w-4 h-4 transition-transform duration-200",
                                "group-hover:scale-110"
                            )}
                        />
                        <span>Copy code</span>
                    </>
                )}
            </motion.div>

            {/* Success indicator ring */}
            {isCopied && (
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 1.2, opacity: 0 }}
                    className={cn(
                        "absolute inset-0 rounded-md",
                        "pointer-events-none"
                    )}
                />
            )}
        </Button>
    );
}
