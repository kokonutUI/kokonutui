"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, useAnimation } from "framer-motion";
import { Droplets } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface Btn04Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    blobSize?: number;
    blobColor?: string;
}

export function Btn04({
    className,
    blobSize = 80,
    blobColor = "rgba(147, 51, 234, 0.3)", // Purple
    ...props
}: Btn04Props) {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const [isHovering, setIsHovering] = useState(false);
    const blobControls = useAnimation();
    const [coords, setCoords] = useState({ x: 0, y: 0 });

    function handleMouseMove(e: React.MouseEvent<HTMLButtonElement>) {
        if (!buttonRef.current) return;
        
        const rect = buttonRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        setCoords({ x, y });
        blobControls.start({
            x: x - blobSize / 2,
            y: y - blobSize / 2,
            transition: {
                type: "spring",
                damping: 15,
                stiffness: 200,
            },
        });
    }

    function handleMouseEnter() {
        setIsHovering(true);
        blobControls.start({
            scale: 1,
            opacity: 1,
            transition: { duration: 0.2 },
        });
    }

    function handleMouseLeave() {
        setIsHovering(false);
        blobControls.start({
            scale: 0,
            opacity: 0,
            transition: { duration: 0.2 },
        });
    }

    // Initialize blob position in center
    useEffect(() => {
        if (buttonRef.current) {
            const rect = buttonRef.current.getBoundingClientRect();
            setCoords({
                x: rect.width / 2,
                y: rect.height / 2,
            });
        }
    }, []);

    return (
        <Button
            ref={buttonRef}
            className={cn(
                "min-w-40 relative overflow-hidden",
                "bg-purple-50 dark:bg-purple-950",
                "hover:bg-purple-100 dark:hover:bg-purple-900",
                "text-purple-600 dark:text-purple-300",
                "border border-purple-200 dark:border-purple-800",
                "transition-colors duration-300",
                className
            )}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            {...props}
        >
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={blobControls}
                style={{
                    width: blobSize,
                    height: blobSize,
                    backgroundColor: blobColor,
                }}
                className={cn(
                    "absolute rounded-full",
                    "blur-xl",
                    "pointer-events-none"
                )}
            />
            <span className="relative z-10 w-full flex items-center justify-center gap-2">
                <Droplets className={cn(
                    "w-4 h-4 transition-transform duration-300",
                    isHovering && "scale-110"
                )} />
                {isHovering ? "Splish splash" : "Hover me"}
            </span>
        </Button>
    );
}
