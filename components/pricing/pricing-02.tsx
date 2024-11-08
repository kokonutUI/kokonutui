"use client";

import { Check, Sparkles, ArrowRight, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface Feature {
    name: string;
    included: boolean;
    tooltip?: string;
}

interface Pricing02Props {
    tier: "Starter" | "Pro" | "Enterprise";
    price: {
        monthly: number;
        yearly: number;
    };
    description: string;
    features: Feature[];
    popular?: boolean;
    onSelect?: (tier: string) => void;
}

export default function Pricing_02({
    tier = "Pro",
    price = {
        monthly: 49,
        yearly: 490,
    },
    description = "Perfect for growing businesses that need more power and flexibility.",
    features = [
        { name: "Up to 10 team members", included: true },
        {
            name: "Advanced analytics",
            included: true,
            tooltip: "Includes user behavior tracking and custom reports",
        },
        { name: "Custom integrations", included: true },
        { name: "API access", included: true },
        { name: "24/7 phone support", included: false },
        { name: "Custom branding", included: false },
    ],
    popular = false,
    onSelect = (tier: string) => console.log(`Selected ${tier} tier`),
}: Pricing02Props) {
    const [isYearly, setIsYearly] = useState(false);
    const currentPrice = isYearly ? price.yearly : price.monthly;
    const savings = Math.round((1 - price.yearly / 12 / price.monthly) * 100);

    return (
        <div className="relative w-full max-w-sm mx-auto">
            {popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <div
                        className="flex items-center gap-1.5 px-3 py-1 rounded-full
                        bg-gradient-to-r from-amber-500/90 to-orange-500/90 
                        text-white text-sm font-medium shadow-lg shadow-orange-500/25"
                    >
                        <Sparkles className="w-3.5 h-3.5" />
                        Most Popular
                    </div>
                </div>
            )}

            <div
                className={cn(
                    "relative overflow-hidden rounded-2xl border-2 transition-colors duration-300",
                    "bg-white dark:bg-zinc-900",
                    popular
                        ? "border-orange-500/50 dark:border-orange-400/50"
                        : "border-zinc-200 dark:border-zinc-800"
                )}
            >
                <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                            {tier}
                        </h3>
                        <div className="flex items-center gap-2">
                            <button
                                type="button"
                                onClick={() => setIsYearly(false)}
                                className={cn(
                                    "px-2.5 py-1 text-sm rounded-md transition-colors",
                                    !isYearly
                                        ? "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100"
                                        : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
                                )}
                            >
                                Monthly
                            </button>
                            <button
                                type="button"
                                onClick={() => setIsYearly(true)}
                                className={cn(
                                    "px-2.5 py-1 text-sm rounded-md transition-colors",
                                    isYearly
                                        ? "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100"
                                        : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
                                )}
                            >
                                Yearly
                            </button>
                        </div>
                    </div>

                    <div className="flex items-baseline gap-2">
                        <span className="text-4xl font-bold text-zinc-900 dark:text-zinc-100">
                            ${currentPrice}
                        </span>
                        <span className="text-sm text-zinc-600 dark:text-zinc-400">
                            /{isYearly ? "year" : "month"}
                        </span>
                    </div>

                    {isYearly && (
                        <div className="mt-2 text-sm text-emerald-600 dark:text-emerald-400">
                            Save {savings}% with yearly billing
                        </div>
                    )}

                    <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
                        {description}
                    </p>
                </div>

                <div className="p-8 pt-4">
                    <div className="space-y-4">
                        {features.map((feature) => (
                            <div
                                key={feature.name}
                                className="flex items-start gap-3"
                            >
                                <div
                                    className={`p-0.5 rounded-full mt-1
                                    ${
                                        feature.included
                                            ? "bg-emerald-500/20 text-emerald-600 dark:text-emerald-400"
                                            : "bg-zinc-200/50 dark:bg-zinc-700/50 text-zinc-400 dark:text-zinc-600"
                                    }`}
                                >
                                    <Check className="w-3 h-3" />
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <span
                                        className={`text-sm
                                        ${
                                            feature.included
                                                ? "text-zinc-700 dark:text-zinc-300"
                                                : "text-zinc-500 dark:text-zinc-500"
                                        }`}
                                    >
                                        {feature.name}
                                    </span>
                                    {feature.tooltip && (
                                        <TooltipProvider>
                                            <Tooltip>
                                                <TooltipTrigger>
                                                    <Info className="w-3.5 h-3.5 text-zinc-400" />
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p className="text-xs">
                                                        {feature.tooltip}
                                                    </p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="p-8 pt-4">
                    <Button
                        onClick={() => onSelect(tier)}
                        className={cn(
                            "w-full group",
                            popular
                                ? "bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white"
                                : "bg-zinc-900 dark:bg-zinc-100 hover:bg-zinc-800 dark:hover:bg-zinc-200 text-white dark:text-zinc-900"
                        )}
                    >
                        Get started
                        <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
                    </Button>
                </div>

                <div className="absolute inset-0 pointer-events-none">
                    <div
                        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r 
                        from-transparent via-zinc-200 dark:via-zinc-700 to-transparent"
                    />
                    <div
                        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r 
                        from-transparent via-zinc-200 dark:via-zinc-700 to-transparent"
                    />
                </div>
            </div>
        </div>
    );
}
