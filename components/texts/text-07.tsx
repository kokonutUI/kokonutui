"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

interface AnimatedTextProps {
    text?: string;
    className?: string;
    duration?: number;
    interval?: number;
    iterationsPerChar?: number;
    repeat?: boolean;
    repeatDelay?: number; // Delay before repeating
}

export default function Text_07({
    text = "Reveal",
    className = "",
    duration = 2000,
    interval = 50,
    iterationsPerChar = 6,
    repeat = false,
    repeatDelay = 2000,
}: AnimatedTextProps) {
    const [displayedText, setDisplayedText] = useState(text);

    useEffect(() => {
        let timeoutId: NodeJS.Timeout;
        let repeatTimeoutId: NodeJS.Timeout;
        let intervals: NodeJS.Timeout[] = [];

        function startAnimation() {
            const frames = new Array(text.length).fill(0);
            setDisplayedText(
                text
                    .split("")
                    .map(
                        () =>
                            characters[
                                Math.floor(Math.random() * characters.length)
                            ]
                    )
                    .join("")
            );

            const intervals = text.split("").map((targetChar, index) => {
                return setInterval(() => {
                    frames[index]++;

                    setDisplayedText((prev) => {
                        const chars = prev.split("");
                        if (frames[index] < iterationsPerChar) {
                            chars[index] =
                                characters[
                                    Math.floor(
                                        Math.random() * characters.length
                                    )
                                ];
                        } else {
                            chars[index] = targetChar;
                        }
                        return chars.join("");
                    });
                }, interval);
            });

            return intervals;
        }

        if (repeat) {
            const runAnimation = () => {
                intervals = startAnimation();

                timeoutId = setTimeout(() => {
                    for (const interval of intervals) {
                        clearInterval(interval);
                    }
                    setDisplayedText(text);

                    repeatTimeoutId = setTimeout(() => {
                        runAnimation();
                    }, repeatDelay);
                }, duration);
            };

            runAnimation();
        } else {
            intervals = startAnimation();
            timeoutId = setTimeout(() => {
                for (const interval of intervals) {
                    clearInterval(interval);
                }
                setDisplayedText(text);
            }, duration);
        }

        return () => {
            for (const interval of intervals) {
                clearInterval(interval);
            }
            clearTimeout(timeoutId);
            if (repeat) clearTimeout(repeatTimeoutId);
        };
    }, [text, duration, interval, iterationsPerChar, repeat, repeatDelay]);

    return (
        <motion.h1
            className={`text-4xl font-bold w-full text-center ${className}`}
            aria-label={text}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.4,
                ease: "easeOut",
            }}
        >
            {displayedText}
        </motion.h1>
    );
}
