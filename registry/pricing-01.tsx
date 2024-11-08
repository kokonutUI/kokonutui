"use client";

import { Video, Users, Headphones, BarChart, Zap, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface FeatureItem {
    text: string;
    icon: React.ReactNode;
}

interface Pricing_01Props {
    price: string;
    description: string;
    features?: FeatureItem[];
}

export default function Pricing_01({
    price = "3999",
    description = "Ready for your space adventure?",
    features = [
        {
            text: "Personal AI Space Navigator",
            icon: (
                <Users className="w-5 h-5 text-emerald-500 dark:text-emerald-400 animate-pulse" />
            ),
        },
        {
            text: "Zero-Gravity Training",
            icon: (
                <BarChart className="w-5 h-5 text-emerald-500 dark:text-emerald-400 animate-bounce" />
            ),
        },
        {
            text: "Intergalactic Wi-Fi (Slight delay when passing black holes)",
            icon: (
                <Zap className="w-5 h-5 text-emerald-500 dark:text-emerald-400 animate-pulse" />
            ),
        },
        {
            text: "Anti-Alien Insurance (You never know!)",
            icon: (
                <Shield className="w-5 h-5 text-emerald-500 dark:text-emerald-400 hover:scale-110 transition-transform" />
            ),
        },
        {
            text: "Quantum Communication Device (aka really fancy phone)",
            icon: (
                <Headphones className="w-5 h-5 text-emerald-500 dark:text-emerald-400 animate-wiggle" />
            ),
        },
    ],
}: Pricing_01Props) {
    return (
        <motion.div
            className="w-full max-w-md mx-auto"
            whileHover={{ translateY: -5, rotate: 1 }}
            transition={{ duration: 0.2 }}
        >
            <div className="rounded-2xl bg-white dark:bg-zinc-900 shadow-lg border border-zinc-200/50 dark:border-zinc-700/50 hover:border-emerald-200/50 dark:hover:border-emerald-700/50 transition-colors">
                <div className="p-6 space-y-4">
                    {/* Header */}
                    <div className="text-left space-y-2">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30">
                            <span className="text-xs font-medium text-emerald-700 dark:text-emerald-400">
                                Premium
                            </span>
                        </div>
                        <h3 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
                            Space X Package 🚀
                        </h3>
                        <p className="text-sm text-zinc-500 dark:text-zinc-400 max-w-[280px]">
                            {description}
                        </p>
                        <div className="flex items-center justify-start">
                            <span className="text-4xl font-bold text-zinc-900 dark:text-zinc-50">
                                <span className="text-2xl align-top">$</span>
                                {price}
                            </span>
                            <span className="text-zinc-500 dark:text-zinc-400 ml-2">
                                /year
                            </span>
                        </div>
                    </div>

                    <div className="space-y-2">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-3 p-1.5 rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-all duration-300 hover:scale-[1.02]"
                            >
                                {feature.icon}
                                <span className="text-sm text-zinc-600 dark:text-zinc-300">
                                    {feature.text}
                                </span>
                            </div>
                        ))}
                    </div>

                    <Button
                        className="w-full bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 
                        dark:from-emerald-500 dark:to-emerald-400 dark:hover:from-emerald-600 dark:hover:to-emerald-500
                        text-white font-medium rounded-xl py-6 relative overflow-hidden transition-all duration-300 
                        hover:shadow-lg hover:shadow-emerald-200/50 dark:hover:shadow-emerald-900/50 
                        active:scale-[0.98] group"
                    >
                        <span className="group-hover:hidden">
                            Launch My Space Adventure! 🚀
                        </span>
                        <span className="hidden group-hover:inline">
                            To Infinity and Beyond! ✨
                        </span>
                    </Button>

                    <p className="text-xs text-center text-zinc-400 dark:text-zinc-500 italic">
                        * Actual space travel not included. But our VR is pretty
                        convincing! 😉
                    </p>
                </div>
            </div>
        </motion.div>
    );
}
