"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface BouncingTextProps {
    text?: string;
    className?: string;
    delay?: number;
    bouncingIndices?: number[];
}

export function Text_05({
    text = "BOUNCE",
    className = "",
    delay = 0.1,
    bouncingIndices = [0, 2, 5],
}: BouncingTextProps) {
    const letterAnimation = {
        initial: { y: 0 },
        animate: {
            y: [-8, 0],
            scaleY: [0.9, 1],
            scaleX: [1.1, 1],
            transition: {
                y: {
                    type: "spring",
                    damping: 10,
                    stiffness: 100,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                    duration: 1.2,
                },
                scaleY: {
                    type: "spring",
                    damping: 10,
                    stiffness: 100,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                    duration: 1.2,
                },
                scaleX: {
                    type: "spring",
                    damping: 10,
                    stiffness: 100,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                    duration: 1.2,
                },
            },
        },
    };

    return (
        <div className="flex items-center justify-center gap-[2px]">
            {text.split("").map((letter, index) =>
                bouncingIndices.includes(index) ? (
                    <motion.span
                        key={`text-05-${letter}`}
                        className={cn(
                            "text-4xl font-bold text-black dark:text-white",
                            "transition-colors duration-200",
                            "hover:text-purple-500 dark:hover:text-purple-400",
                            className
                        )}
                        variants={letterAnimation}
                        initial="initial"
                        animate="animate"
                        transition={{
                            delay: index * delay,
                        }}
                        whileHover={{
                            scale: 1.2,
                            transition: { duration: 0.2 },
                        }}
                    >
                        {letter}
                    </motion.span>
                ) : (
                    <span
                        key={`text-05-1-${letter}`}
                        className={cn(
                            "text-4xl font-bold text-black dark:text-white",
                            "transition-colors duration-200",
                            "hover:text-purple-500 dark:hover:text-purple-400",
                            className
                        )}
                    >
                        {letter}
                    </span>
                )
            )}
        </div>
    );
}
