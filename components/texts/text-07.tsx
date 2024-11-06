"use client";

import { motion, useAnimate } from "framer-motion";

interface AnimatedTextProps {
    text?: string;
    className?: string;
    repeat?: boolean;
}

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

export default function Text_07({
    text = "Reveal",
    className = "",
    repeat = false,
}: AnimatedTextProps) {
    const [scope, animate] = useAnimate();

    const scrambleText = async () => {
        const duration = 2;
        const scrambles = 10;
        
        for (let i = 0; i < scrambles; i++) {
            await animate(
                scope.current,
                { 
                    opacity: [1, 1],
                    transition: { duration: duration / scrambles }
                },
                {
                    onUpdate: () => {
                        scope.current.textContent = text
                            .split("")
                            .map(() => characters[Math.floor(Math.random() * characters.length)])
                            .join("");
                    }
                }
            );
        }
        
        // Final reveal
        scope.current.textContent = text;
        
        if (repeat) {
            setTimeout(scrambleText, 2000);
        }
    };

    return (
        <motion.h1
            ref={scope}
            className={`text-4xl font-bold w-full text-center ${className}`}
            aria-label={text}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            onAnimationComplete={scrambleText}
        >
            {text}
        </motion.h1>
    );
}
