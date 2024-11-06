"use client";

import { motion } from "framer-motion";
import { ThemeToggle } from "@/lib/theme-toggle";
import { Shuffle, Github, Layers2, ArrowUp } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="fixed top-0 left-0 right-0 z-50">
            <div className="flex items-center justify-center w-full flex-col">
                <motion.div
                    className="
                        flex items-center justify-between
                        bg-gradient-to-b from-white/90 via-gray-50/90 to-white/90
                        dark:from-zinc-900/90 dark:via-zinc-800/90 dark:to-zinc-900/90
                        shadow-[0_2px_20px_-2px_rgba(0,0,0,0.1)]
                        backdrop-blur-md
                        border-x border-b 
                        border-[rgba(230,230,230,0.7)] dark:border-[rgba(70,70,70,0.7)]
                        w-[380px]
                        rounded-b-[28px]
                        px-4 py-2.5
                        relative
                    "
                >
                    <div className="relative z-10 flex items-center justify-around w-full gap-2">
                        <div className="flex items-center gap-3">
                            <div className="flex items-center gap-2">
                                <Image
                                    src="/logo.svg"
                                    alt="logo"
                                    width={32}
                                    height={32}
                                    className="hidden dark:block"
                                />
                                <Image
                                    src="/logo-black.svg"
                                    alt="logo"
                                    width={32}
                                    height={32}
                                    className="block dark:hidden"
                                />
                                <span className="text-xs font-medium px-1.5 py-0.5 rounded-full bg-amber-100 dark:bg-amber-900 text-amber-700 dark:text-amber-200">
                                    Beta
                                </span>
                            </div>
                            <ThemeToggle />
                        </div>
                        <div className="h-4 w-px bg-gradient-to-b from-gray-200/80 via-gray-300/80 to-gray-200/80 dark:from-zinc-700 dark:via-zinc-600 dark:to-zinc-700" />
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                <motion.button
                                    type="button"
                                    onClick={() =>
                                        window.scrollTo({
                                            top: 0,
                                            behavior: "smooth",
                                        })
                                    }
                                    className={`
                                        sm:hidden flex
                                        items-center justify-center
                                        rounded-full
                                        bg-gradient-to-b from-zinc-800 via-zinc-900 to-zinc-800
                                        hover:from-zinc-900 hover:via-zinc-800 hover:to-zinc-900
                                        dark:from-gray-50 dark:via-white dark:to-gray-50
                                        dark:hover:from-white dark:hover:via-gray-50 dark:hover:to-white
                                        text-white dark:text-zinc-900
                                        w-7 h-7
                                        transition-all duration-300
                                        shadow-[0_2px_8px_-2px_rgba(0,0,0,0.12),inset_0_1px_0.5px_0.5px_rgba(255,255,255,0.15)]
                                        dark:shadow-[0_2px_8px_-2px_rgba(0,0,0,0.08),inset_0_1px_0.5px_0.5px_rgba(255,255,255,0.6)]
                                        hover:shadow-[0_2px_12px_-2px_rgba(0,0,0,0.2),inset_0_1px_0.5px_0.5px_rgba(255,255,255,0.15)]
                                    `}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <ArrowUp className="w-4 h-4" />
                                </motion.button>
                            </div>

                            <motion.div
                                whileHover={{ scale: 1.01 }}
                                whileTap={{ scale: 1.0 }}
                            >
                                <Link
                                    href="https://github.com/kokonut-labs/kokonutui"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`
                                        relative z-10
                                        cursor-pointer
                                        flex items-center gap-2
                                        rounded-full
                                        bg-gradient-to-b from-zinc-800 via-zinc-900 to-zinc-800
                                        hover:from-zinc-900 hover:via-zinc-800 hover:to-zinc-900
                                        dark:from-gray-50 dark:via-white dark:to-gray-50
                                        dark:hover:from-white dark:hover:via-gray-50 dark:hover:to-white
                                        text-white dark:text-zinc-900
                                        px-3 h-7
                                        transition-all duration-300
                                        shadow-[0_2px_8px_-2px_rgba(0,0,0,0.12),inset_0_1px_0.5px_0.5px_rgba(255,255,255,0.15)]
                                        dark:shadow-[0_2px_8px_-2px_rgba(0,0,0,0.08),inset_0_1px_0.5px_0.5px_rgba(255,255,255,0.6)]
                                        hover:shadow-[0_2px_12px_-2px_rgba(0,0,0,0.2),inset_0_1px_0.5px_0.5px_rgba(255,255,255,0.15)]
                                        group
                                    `}
                                >
                                    <Github className="w-4 h-4 transition-transform duration-300 group-hover:rotate-12" />
                                    <span className="text-sm font-medium">
                                        Star on Github
                                    </span>
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 1, y: 0 }}
                    animate={{
                        opacity: isScrolled ? 0 : 1,
                        y: isScrolled ? -10 : 0,
                    }}
                    transition={{ duration: 0.2 }}
                    className="text-sm text-zinc-600 dark:text-zinc-400 mt-2"
                >
                    Built by{" "}
                    <a
                        href="https://x.com/dorian_baffier"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-900 dark:text-white hover:underline"
                    >
                        @Dorian
                    </a>
                </motion.div>
            </div>
        </div>
    );
}
