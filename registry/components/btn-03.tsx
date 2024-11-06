"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, useAnimation } from "framer-motion";
import { Magnet } from "lucide-react";
import { useEffect, useState } from "react";

interface Btn03Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    particleCount?: number;
    attractRadius?: number;
}

interface Particle {
    id: number;
    x: number;
    y: number;
}

export function Btn03({
    className,
    particleCount = 12,
    attractRadius = 100,
    ...props
}: Btn03Props) {
    const [isAttracting, setIsAttracting] = useState(false);
    const [particles, setParticles] = useState<Particle[]>([]);
    const particlesControl = useAnimation();

    // Generate random particles
    useEffect(() => {
        const newParticles = Array.from({ length: particleCount }, (_, i) => ({
            id: i,
            x: Math.random() * 360 - 180, // Random position between -180 and 180
            y: Math.random() * 360 - 180,
        }));
        setParticles(newParticles);
    }, [particleCount]);

    async function handleMouseEnter() {
        setIsAttracting(true);
        // Attract particles
        await particlesControl.start({
            x: 0,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 50,
                damping: 10,
            },
        });
    }

    async function handleMouseLeave() {
        setIsAttracting(false);
        // Repel particles
        await particlesControl.start((i) => ({
            x: particles[i].x,
            y: particles[i].y,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15,
            },
        }));
    }

    return (
        <Button
            className={cn(
                "min-w-40 relative",
                "bg-violet-100 dark:bg-violet-900",
                "hover:bg-violet-200 dark:hover:bg-violet-800",
                "text-violet-600 dark:text-violet-300",
                "border border-violet-300 dark:border-violet-700",
                "transition-all duration-300",
                className
            )}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            {...props}
        >
            {particles.map((_, index) => (
                <motion.div
                    key={index}
                    custom={index}
                    initial={{ x: particles[index].x, y: particles[index].y }}
                    animate={particlesControl}
                    className={cn(
                        "absolute w-1.5 h-1.5 rounded-full",
                        "bg-violet-400 dark:bg-violet-300",
                        "transition-opacity duration-300",
                        isAttracting ? "opacity-100" : "opacity-40"
                    )}
                />
            ))}
            <span className="relative z-10 w-full flex items-center justify-center gap-2">
                <Magnet className={cn(
                    "w-4 h-4 transition-transform duration-300",
                    isAttracting && "scale-110"
                )} />
                {isAttracting ? "Attracting" : "Hover me"}
            </span>
        </Button>
    );
}
