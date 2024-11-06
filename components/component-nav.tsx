"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import { useState } from "react";

interface Category {
    id: number;
    title: string;
    href: string;
    description: string;
    count: number;
}

interface ComponentNavProps {
    categories: Category[];
}

export default function ComponentNav({ categories }: ComponentNavProps) {
    const pathname = usePathname();
    const [isExpanded, setIsExpanded] = useState(false);
    const currentCategory = categories.find((cat) =>
        pathname.startsWith(cat.href)
    );

    return (
        <>
            {/* Desktop Navigation - Always visible sidebar */}
            <div className="hidden md:block fixed left-6 top-1/2 -translate-y-1/2 w-[200px] z-40">
                <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    className="bg-gradient-to-b from-white/90 via-gray-50/90 to-white/90
                        dark:from-zinc-900/90 dark:via-zinc-800/90 dark:to-zinc-900/90
                        shadow-[0_2px_20px_-2px_rgba(0,0,0,0.1)]
                        backdrop-blur-md
                        border border-[rgba(230,230,230,0.7)] dark:border-[rgba(70,70,70,0.7)]
                        rounded-[28px] p-3"
                >
                    <div className="flex items-center justify-between mb-2">
                        <h2 className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                            Components
                        </h2>
                        <span className="text-xs text-zinc-500 dark:text-zinc-400">
                            {categories.length}
                        </span>
                    </div>

                    <nav className="space-y-0.5">
                        {categories.map((category) => {
                            const isActive = pathname.startsWith(category.href);
                            return (
                                <Link
                                    key={category.id}
                                    href={category.href}
                                    className={cn(
                                        "group flex items-center justify-between px-2.5 py-1.5 rounded-md",
                                        "transition-all duration-200",
                                        isActive
                                            ? "bg-zinc-900 dark:bg-white text-white dark:text-zinc-900"
                                            : "hover:bg-black/5 dark:hover:bg-white/5"
                                    )}
                                >
                                    <span className={cn(
                                        "text-sm font-medium",
                                        isActive
                                            ? "text-white dark:text-zinc-900"
                                            : "text-zinc-600 dark:text-zinc-400"
                                    )}>
                                        {category.title}
                                    </span>
                                    <span className={cn(
                                        "text-xs",
                                        isActive
                                            ? "text-white/70 dark:text-zinc-900/70"
                                            : "text-zinc-400 dark:text-zinc-500"
                                    )}>
                                        {category.count}
                                    </span>
                                </Link>
                            );
                        })}
                    </nav>
                </motion.div>
            </div>

            {/* Mobile Navigation - Keep the existing expandable bottom bar */}
            <div className="md:hidden">
                <AnimatePresence>
                    {isExpanded && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/20 dark:bg-black/40 backdrop-blur-sm"
                            onClick={() => setIsExpanded(false)}
                        />
                    )}
                </AnimatePresence>

                {/* Navigation Container */}
                <motion.div
                    layout
                    animate={{
                        width: isExpanded ? "100%" : "192px",
                        height: isExpanded ? "100dvh" : "48px",
                        bottom: isExpanded ? "0" : "24px",
                        left: isExpanded ? "0" : "50%",
                        x: isExpanded ? "0" : "-50%",
                        borderRadius: isExpanded ? "0" : "28px",
                    }}
                    initial={{
                        width: "192px",
                        height: "48px",
                        bottom: "24px",
                        left: "50%",
                        x: "-50%",
                        borderRadius: "28px",
                    }}
                    style={{
                        position: "fixed",
                        transformOrigin: "bottom center",
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 40,
                        height: {
                            type: "spring",
                            stiffness: 300,
                            damping: 35,
                        },
                    }}
                    className={cn(
                        "bg-gradient-to-b from-white/90 via-gray-50/90 to-white/90",
                        "dark:from-zinc-900/90 dark:via-zinc-800/90 dark:to-zinc-900/90",
                        "shadow-[0_2px_20px_-2px_rgba(0,0,0,0.1)]",
                        "backdrop-blur-md",
                        "border border-[rgba(230,230,230,0.7)] dark:border-[rgba(70,70,70,0.7)]",
                        "overflow-hidden"
                    )}
                    onClick={() => !isExpanded && setIsExpanded(true)}
                >
                    {isExpanded ? (
                        // Expanded View
                        <motion.div
                            className="h-[100dvh] flex flex-col"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            {/* Header */}
                            <div className="p-4 border-b border-zinc-200 dark:border-zinc-800">
                                <h2 className="text-base font-medium text-zinc-900 dark:text-zinc-100">
                                    Components
                                </h2>
                            </div>

                            {/* Navigation Items - Centered vertically */}
                            <div className="flex-1 flex items-center justify-center">
                                <nav className="w-full max-w-sm px-4">
                                    <div className="space-y-2">
                                        {categories.map((category) => {
                                            const isActive =
                                                pathname.startsWith(
                                                    category.href
                                                );

                                            return (
                                                <Link
                                                    key={category.id}
                                                    href={category.href}
                                                    onClick={() =>
                                                        setIsExpanded(false)
                                                    }
                                                    className={cn(
                                                        "flex items-center justify-between px-4 py-3 rounded-lg",
                                                        "transition-all duration-200",
                                                        isActive
                                                            ? "bg-zinc-900 dark:bg-white"
                                                            : "hover:bg-black/5 dark:hover:bg-white/5"
                                                    )}
                                                >
                                                    <span
                                                        className={cn(
                                                            "text-sm font-medium",
                                                            isActive
                                                                ? "text-white dark:text-zinc-900"
                                                                : "text-zinc-600 dark:text-zinc-400"
                                                        )}
                                                    >
                                                        {category.title}
                                                    </span>
                                                    <span
                                                        className={cn(
                                                            "text-xs",
                                                            isActive
                                                                ? "text-white/70 dark:text-zinc-900/70"
                                                                : "text-zinc-400 dark:text-zinc-500"
                                                        )}
                                                    >
                                                        {category.count}
                                                    </span>
                                                </Link>
                                            );
                                        })}
                                    </div>
                                </nav>
                            </div>

                            {/* Close Button at Bottom */}
                            <div className="p-4 border-t border-zinc-200 dark:border-zinc-800">
                                <button
                                    type="button"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setIsExpanded(false);
                                    }}
                                    className="w-full flex items-center justify-center p-3 rounded-lg hover:bg-black/5 dark:hover:bg-white/5"
                                >
                                    <X className="w-4 h-4 text-zinc-500 dark:text-zinc-400" />
                                </button>
                            </div>
                        </motion.div>
                    ) : (
                        // Collapsed View
                        <div className="flex items-center justify-between p-3">
                            <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100 truncate">
                                {currentCategory?.title || "Components"}
                            </span>
                            <span className="text-xs text-zinc-500 dark:text-zinc-400 ml-2">
                                {currentCategory?.count || categories.length}
                            </span>
                        </div>
                    )}
                </motion.div>
            </div>
        </>
    );
}
