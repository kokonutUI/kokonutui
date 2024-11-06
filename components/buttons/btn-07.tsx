"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, useAnimation } from "framer-motion";
import { Download, Check, X } from "lucide-react";
import { useState } from "react";

interface Btn07Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    onProcess?: () => Promise<boolean>;
    processDuration?: number;
}

export function Btn07({
    className,
    onProcess,
    processDuration = 2000,
    ...props
}: Btn07Props) {
    const [isProcessing, setIsProcessing] = useState(false);
    const [isSuccess, setIsSuccess] = useState<boolean | null>(null);
    const ringControls = useAnimation();
    const scaleControls = useAnimation();

    async function handleClick() {
        if (isProcessing) return;

        setIsProcessing(true);
        setIsSuccess(null);

        // Start the ring animation
        await ringControls.start({
            strokeDashoffset: 0,
            transition: {
                duration: processDuration / 1000,
                ease: "linear",
            },
        });

        // Process action if provided
        const success = onProcess ? await onProcess() : true;
        setIsSuccess(success);
        setIsProcessing(false);

        // Success/failure animation
        await scaleControls.start({
            scale: [1, 1.1, 1],
            transition: { duration: 0.3 },
        });

        // Reset after delay
        setTimeout(() => {
            setIsSuccess(null);
            ringControls.set({ strokeDashoffset: 157 }); // 2πr where r = 25
        }, 2000);
    }

    return (
        <Button
            className={cn(
                "min-w-40 relative group",
                "bg-blue-50 dark:bg-blue-950",
                "hover:bg-blue-100 dark:hover:bg-blue-900",
                "text-blue-600 dark:text-blue-300",
                "border border-blue-200 dark:border-blue-800",
                "transition-all duration-300",
                isProcessing && "cursor-wait",
                className
            )}
            onClick={handleClick}
            disabled={isProcessing}
            {...props}
        >
            <motion.div
                animate={scaleControls}
                className="w-full flex items-center justify-center gap-2"
            >
                {isSuccess === null ? (
                    <>
                        <Download
                            className={cn(
                                "w-4 h-4 transition-transform duration-200",
                                "group-hover:scale-110",
                                isProcessing && "animate-bounce"
                            )}
                        />
                        <span>
                            {isProcessing ? "Processing..." : "Download"}
                        </span>
                    </>
                ) : isSuccess ? (
                    <>
                        <Check className="w-4 h-4 text-green-500" />
                        <span className="text-green-500">Complete!</span>
                    </>
                ) : (
                    <>
                        <X className="w-4 h-4 text-red-500" />
                        <span className="text-red-500">Failed</span>
                    </>
                )}
            </motion.div>

            {/* Progress ring */}
            {isProcessing && (
                <svg
                    className="absolute inset-0 w-full h-full -rotate-90"
                    viewBox="0 0 50 50"
                >
                    <motion.circle
                        initial={{ strokeDashoffset: 157 }}
                        animate={ringControls}
                        className="text-blue-500"
                        cx="25"
                        cy="25"
                        r="23"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeDasharray="157"
                    />
                </svg>
            )}
        </Button>
    );
}
