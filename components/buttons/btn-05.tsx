"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, useAnimation } from "framer-motion";
import { Zap } from "lucide-react";
import { useState } from "react";

interface Btn05Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    glitchIntensity?: number;
    glitchDuration?: number;
}

export function Btn05({
    className,
    glitchIntensity = 10,
    glitchDuration = 1500,
    ...props
}: Btn05Props) {
    const [isGlitching, setIsGlitching] = useState(false);
    const redLayerControls = useAnimation();
    const blueLayerControls = useAnimation();
    const greenLayerControls = useAnimation();

    async function triggerGlitch() {
        if (isGlitching) return;
        setIsGlitching(true);

        // Generate random offsets for RGB layers
        const generateOffset = () => ({
            x: (Math.random() - 0.5) * glitchIntensity,
            y: (Math.random() - 0.5) * glitchIntensity,
        });

        // Animate RGB layers with random positions
        for (let i = 0; i < 3; i++) {
            await Promise.all([
                redLayerControls.start({
                    ...generateOffset(),
                    transition: { duration: 0.1 }
                }),
                blueLayerControls.start({
                    ...generateOffset(),
                    transition: { duration: 0.1 }
                }),
                greenLayerControls.start({
                    ...generateOffset(),
                    transition: { duration: 0.1 }
                })
            ]);
        }

        // Reset positions
        await Promise.all([
            redLayerControls.start({ x: 0, y: 0 }),
            blueLayerControls.start({ x: 0, y: 0 }),
            greenLayerControls.start({ x: 0, y: 0 })
        ]);

        setTimeout(() => setIsGlitching(false), glitchDuration);
    }

    return (
        <Button
            className={cn(
                "min-w-40 relative overflow-hidden",
                "bg-cyan-50 dark:bg-cyan-950",
                "hover:bg-cyan-100 dark:hover:bg-cyan-900",
                "text-cyan-600 dark:text-cyan-300",
                "border border-cyan-200 dark:border-cyan-800",
                "transition-colors duration-300",
                isGlitching && "animate-pulse",
                className
            )}
            onClick={triggerGlitch}
            {...props}
        >
            {/* RGB Text Layers */}
            {["red", "green", "blue"].map((color, index) => (
                <motion.span
                    key={color}
                    animate={[redLayerControls, greenLayerControls, blueLayerControls][index]}
                    className={cn(
                        "absolute inset-0 flex items-center justify-center gap-2",
                        "mix-blend-screen",
                        color === "red" && "text-red-500",
                        color === "green" && "text-green-500",
                        color === "blue" && "text-blue-500"
                    )}
                >
                    <Zap className="w-4 h-4" />
                    {isGlitching ? "Panic!!!" : "Panic"}
                </motion.span>
            ))}
            
            {/* Base Text Layer */}
            <span className="relative z-10 w-full flex items-center justify-center gap-2 opacity-0">
                <Zap className="w-4 h-4" />
                {isGlitching ? "ERR0R" : "Click me"}
            </span>
        </Button>
    );
}
