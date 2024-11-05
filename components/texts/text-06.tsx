"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SwooshTextProps {
    text?: string;
    className?: string;
}

export function Text_06({ text = "HONGDAE", className = "" }: SwooshTextProps) {
    return (
        <div className="relative w-full text-center">
            {/* SVG Filter Definition */}
            <svg className="absolute w-0 h-0">
                <defs>
                    <filter id="motion-blur" filterUnits="userSpaceOnUse">
                        <feGaussianBlur stdDeviation="2 0" />
                        <feOffset dx="-6" />
                        <feBlend in="SourceGraphic" mode="normal" />
                    </filter>
                </defs>
            </svg>

            <motion.div
                className={cn(
                    "relative text-3xl font-bold text-black dark:text-white",
                    className
                )}
            >
                {/* Background line shadows */}
                <div className="absolute inset-0 opacity-5 flex flex-col justify-center gap-4">
                    {/* Top line */}
                    <span
                        className="absolute right-[55%] top-[15%] h-2"
                        style={{
                            width: "30%",
                            filter: "url(#motion-blur)",
                            transform: "translateX(-6px)",
                            background:
                                "linear-gradient(to left, currentColor, transparent)",
                        }}
                    />
                    {/* Middle line */}
                    <span
                        className="absolute right-[55%] top-[40%] h-2"
                        style={{
                            width: "27%",
                            filter: "url(#motion-blur)",
                            transform: "translateX(-6px)",
                            background:
                                "linear-gradient(to left, currentColor, transparent)",
                        }}
                    />
                    {/* Bottom line */}
                    <span
                        className="absolute right-[55%] top-[65%] h-2"
                        style={{
                            width: "25%",
                            filter: "url(#motion-blur)",
                            transform: "translateX(-6px)",
                            background:
                                "linear-gradient(to left, currentColor, transparent)",
                        }}
                    />
                </div>

                {/* Main text */}
                <span className="relative italic text-emerald-400">{text}</span>
            </motion.div>
        </div>
    );
}
