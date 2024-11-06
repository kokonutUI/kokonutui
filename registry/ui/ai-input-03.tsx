"use client";

import {
    Text,
    CheckCheck,
    ArrowDownWideNarrow,
    CornerRightDown,
} from "lucide-react";
import { useState, useRef } from "react";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

const ITEMS = [
    {
        text: "Summary",
        icon: Text,
        colors: {
            icon: "text-orange-600",
            border: "border-orange-500",
            bg: "bg-orange-100",
        },
    },
    {
        text: "Fix Spelling and Grammar",
        icon: CheckCheck,
        colors: {
            icon: "text-emerald-600",
            border: "border-emerald-500",
            bg: "bg-emerald-100",
        },
    },
    {
        text: "Make shorter",
        icon: ArrowDownWideNarrow,
        colors: {
            icon: "text-purple-600",
            border: "border-purple-500",
            bg: "bg-purple-100",
        },
    },
];

export default function AIInput_03() {
    const [inputValue, setInputValue] = useState("");
    const [selectedItem, setSelectedItem] = useState<string | null>(
        "Make shorter"
    );
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            setInputValue("");
            setSelectedItem("");
        }
    };

    const toggleItem = (itemText: string) => {
        setSelectedItem((prev) => (prev === itemText ? null : itemText));
    };

    const currentItem = selectedItem
        ? ITEMS.find((item) => item.text === selectedItem)
        : null;

    return (
        <div className="w-full py-4">
            <div className="relative max-w-xl w-full mx-auto">
                <div className="relative border border-black/10 dark:border-white/10 focus-within:border-black/20 dark:focus-within:border-white/20 rounded-2xl bg-black/[0.03] dark:bg-white/[0.03]">
                    <Textarea
                        ref={textareaRef}
                        id="input-03"
                        placeholder="Enter your text here..."
                        className="max-w-xl w-full rounded-2xl pr-10 pt-3 pb-16 placeholder:text-black/70 dark:placeholder:text-white/70 border-none focus:ring text-black dark:text-white resize-none text-wrap bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
                        value={inputValue}
                        rows={1}
                        onChange={(e) => {
                            setInputValue(e.target.value);
                            if (textareaRef.current) {
                                textareaRef.current.style.height = "auto";
                                textareaRef.current.style.height = `${Math.min(
                                    textareaRef.current.scrollHeight,
                                    400
                                )}px`;
                            }
                        }}
                        onKeyDown={handleKeyDown}
                    />
                    <CornerRightDown
                        className={cn(
                            "absolute right-3 top-3 w-4 h-4 transition-all duration-200 dark:text-white",
                            inputValue
                                ? "opacity-100 scale-100"
                                : "opacity-30 scale-95"
                        )}
                    />
                    {currentItem && (
                        <div className="absolute left-3 bottom-3">
                            <button
                                type="button"
                                onClick={() => setSelectedItem(null)}
                                className={cn(
                                    "inline-flex items-center gap-1.5",
                                    "border shadow-sm rounded-md px-2 py-0.5 text-xs font-medium",
                                    "animate-fadeIn hover:bg-black/5 dark:hover:bg-white/5 transition-colors duration-200",
                                    currentItem.colors.bg,
                                    currentItem.colors.border
                                )}
                            >
                                <currentItem.icon
                                    className={`w-3.5 h-3.5 ${currentItem.colors.icon}`}
                                />
                                <span className={currentItem.colors.icon}>
                                    {selectedItem}
                                </span>
                            </button>
                        </div>
                    )}
                </div>
            </div>
            <div className="flex flex-wrap gap-1.5 mt-2 max-w-xl mx-auto justify-start px-4">
                {ITEMS.filter((item) => item.text !== selectedItem).map(
                    ({ text, icon: Icon, colors }) => (
                        <button
                            type="button"
                            key={text}
                            className={cn(
                                "px-3 py-1.5 text-xs font-medium rounded-full",
                                "border transition-all duration-200",
                                "border-black/10 dark:border-white/10 bg-white dark:bg-gray-900 hover:bg-black/5 dark:hover:bg-white/5",
                                "flex-shrink-0"
                            )}
                            onClick={() => toggleItem(text)}
                        >
                            <div className="flex items-center gap-1.5">
                                <Icon className={cn("h-4 w-4", colors.icon)} />
                                <span className="text-black/70 dark:text-white/70 whitespace-nowrap">
                                    {text}
                                </span>
                            </div>
                        </button>
                    )
                )}
            </div>
        </div>
    );
}
