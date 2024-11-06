"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Twitter, Facebook, Linkedin, Link } from "lucide-react";

export function Btn08({
    className,
    ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
    const [isHovered, setIsHovered] = useState(false);
    const buttonWidth = 160;
    const smallButtonWidth = buttonWidth / 4;

    const shareButtons = [
        { icon: Twitter },
        { icon: Facebook },
        { icon: Linkedin },
        { icon: Link },
    ];

    const buttonVariants = {
        initial: {
            width: smallButtonWidth,
            x: 0,
            opacity: 0,
        },
        animate: (custom: number) => ({
            width: smallButtonWidth,
            x: custom * smallButtonWidth,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 25,
                mass: 1,
            },
        }),
        exit: {
            width: smallButtonWidth,
            x: buttonWidth / 2,
            opacity: 0,
            transition: {
                duration: 0.2,
            },
        },
    };

    return (
        <div
            className="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Button
                className={cn(
                    "min-w-40 relative",
                    "bg-white dark:bg-black",
                    "hover:bg-gray-50 dark:hover:bg-gray-950",
                    "text-black dark:text-white",
                    "border border-black/10 dark:border-white/10",
                    "transition-all duration-300 border",
                    isHovered && "opacity-0",
                    className
                )}
                {...props}
            >
                <span className="flex items-center gap-2">
                    <Link className="w-4 h-4" />
                    Share
                </span>
            </Button>

            <AnimatePresence>
                {isHovered &&
                    shareButtons.map((button, index) => (
                        <motion.button
                            key={index}
                            custom={index}
                            variants={buttonVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            className={cn(
                                "absolute top-0 left-0 h-full",
                                "flex items-center justify-center",
                                "bg-black dark:bg-white",
                                "text-white dark:text-black",
                                "transition-colors duration-200",
                                index === 0 && "rounded-l-md",
                                index === 3 && "rounded-r-md",
                                "border-r border-white/10 dark:border-black/10",
                                "hover:bg-gray-900 dark:hover:bg-gray-100"
                            )}
                        >
                            <button.icon className="w-4 h-4" />
                        </motion.button>
                    ))}
            </AnimatePresence>
        </div>
    );
}
