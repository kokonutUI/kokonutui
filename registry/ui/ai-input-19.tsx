"use client";

import { useState, useRef, useCallback } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Sparkles, Lightbulb, Bug, Zap, Paperclip, Send } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

const QUICK_ACTIONS = [
    { label: "Summarize", icon: Sparkles },
    { label: "Explain", icon: Lightbulb },
    { label: "Debug", icon: Bug },
    { label: "Optimize", icon: Zap },
];

export default function AIInput_19() {
    const [value, setValue] = useState("");
    const [isFocused, setIsFocused] = useState(false);
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const resetTextareaHeight = useCallback(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = "56px";
        }
    }, []);

    const handleSubmit = useCallback(() => {
        setValue("");
        setIsFocused(false);
        resetTextareaHeight();
    }, [resetTextareaHeight]);

    const handleKeyDown = useCallback(
        (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
            if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSubmit();
            }
        },
        [handleSubmit]
    );

    const adjustTextareaHeight = () => {
        if (textareaRef.current) {
            textareaRef.current.style.height = "auto";
            const scrollHeight = textareaRef.current.scrollHeight;
            const newHeight = Math.min(Math.max(56, scrollHeight), 200);
            textareaRef.current.style.height = `${newHeight}px`;
        }
    };

    const handleTextareaChange = (
        e: React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        setValue(e.target.value);
        setIsFocused(true);
        setTimeout(adjustTextareaHeight, 0);
    };

    const handleQuickAction = (label: string) => {
        setValue(`${label}: `);
        handleSubmit();
    };

    return (
        <div className="w-full py-4 min-h-[244px]">
            <div className="relative">
                <div
                    className={cn(
                        "relative bg-black/5 dark:bg-white/5 rounded-lg transition-all duration-300 ease-in-out",
                        "min-h-[56px]",
                        isFocused && "rounded-b-none"
                    )}
                >
                    <div className="relative flex-none min-h-[56px]">
                        <Textarea
                            value={value}
                            placeholder="Click to open dropdown..."
                            className={cn(
                                "w-full rounded-lg px-3 pr-16 border-none dark:text-white placeholder:text-black/60 dark:placeholder:text-white/60 resize-none focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent min-h-[40px] py-4",
                                !value && "overflow-hidden"
                            )}
                            rows={1}
                            ref={textareaRef}
                            onKeyDown={handleKeyDown}
                            onChange={handleTextareaChange}
                            onFocus={() => setIsFocused(true)}
                            onBlur={() => setIsFocused(false)}
                        />

                        <div
                            className={cn(
                                "absolute right-2 flex items-center gap-1 transition-all duration-300",
                                "top-1/2 -translate-y-1/2"
                            )}
                        >
                            <label className="cursor-pointer rounded-md p-1.5 hover:bg-black/5 dark:hover:bg-white/5 transition-colors flex items-center justify-center">
                                <input type="file" className="hidden" />
                                <Paperclip className="w-4 h-4 text-black/50 dark:text-white/50 hover:text-black/70 dark:hover:text-white/70" />
                            </label>
                            <button
                                type="submit"
                                onClick={handleSubmit}
                                className={cn(
                                    "rounded-md p-1.5 transition-colors flex items-center justify-center",
                                    value
                                        ? "bg-sky-500/15 text-sky-500"
                                        : "text-black/50 dark:text-white/50 hover:text-black/70 dark:hover:text-white/70"
                                )}
                            >
                                <Send className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>

                <AnimatePresence mode="wait">
                    {isFocused && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="relative h-[1px] w-full"
                        >
                            <div className="absolute inset-0 bg-black/10 dark:bg-white/10" />
                        </motion.div>
                    )}
                </AnimatePresence>

                <AnimatePresence mode="wait">
                    {isFocused && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{
                                opacity: 1,
                                y: 0,
                                transition: {
                                    duration: 0.2,
                                    ease: [0.4, 0, 0.2, 1],
                                },
                            }}
                            exit={{
                                opacity: 0,
                                y: -10,
                                transition: {
                                    duration: 0.2,
                                    ease: [0.4, 0, 0.2, 1],
                                },
                            }}
                            className={cn(
                                "relative bg-black/5 dark:bg-white/5 rounded-lg overflow-hidden",
                                "min-h-[56px]",
                                "rounded-t-none"
                            )}
                        >
                            <div className="h-full px-2 overflow-y-auto scrollbar-thin scrollbar-thumb-black/10 dark:scrollbar-thumb-white/10 scrollbar-track-transparent">
                                <motion.div
                                    className="py-2 space-y-1"
                                    initial="hidden"
                                    animate="show"
                                    exit="exit"
                                    variants={{
                                        show: {
                                            transition: {
                                                staggerChildren: 0.05,
                                            },
                                        },
                                        exit: {
                                            transition: {
                                                staggerChildren: 0.05,
                                                staggerDirection: 1,
                                            },
                                        },
                                    }}
                                >
                                    {QUICK_ACTIONS.map((action, index) => (
                                        <motion.button
                                            key={action.label}
                                            variants={{
                                                hidden: {
                                                    opacity: 0,
                                                    y: 10,
                                                    scale: 0.95,
                                                },
                                                show: {
                                                    opacity: 1,
                                                    y: 0,
                                                    scale: 1,
                                                    transition: {
                                                        duration: 0.15,
                                                        ease: [0.4, 0, 0.2, 1],
                                                    },
                                                },
                                                exit: {
                                                    opacity: 0,
                                                    y: 10,
                                                    scale: 0.95,
                                                    transition: {
                                                        duration: 0.1,
                                                        ease: [0.4, 0, 0.2, 1],
                                                    },
                                                },
                                            }}
                                            className="w-full px-2 py-2.5 text-sm text-left hover:bg-black/5 dark:hover:bg-white/5 rounded-md transition-colors flex items-center gap-2.5 group"
                                            onClick={() =>
                                                handleQuickAction(action.label)
                                            }
                                        >
                                            <div className="w-5 text-center flex items-center justify-center text-black/50 dark:text-white/50 group-hover:text-black/70 dark:group-hover:text-white/70">
                                                <action.icon className="w-4 h-4 transition-transform" />
                                            </div>
                                            <span className="text-black/70 dark:text-white/70">
                                                {action.label}
                                            </span>
                                        </motion.button>
                                    ))}
                                </motion.div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
