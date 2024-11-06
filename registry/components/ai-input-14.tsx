"use client";

import { ArrowRight, Brain } from "lucide-react";
import { useRef, useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

export default function AIInput_14() {
    const [value, setValue] = useState("");
    const [useMemory, setUseMemory] = useState(false);

    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            setValue("");
        }
    };

    return (
        <div className="w-full py-4">
            <div className="flex flex-col gap-4">
                <div className="bg-black/5 dark:bg-white/5 rounded-xl relative">
                    <div className="relative px-2 py-2">
                        <Textarea
                            value={value}
                            placeholder="Type your message..."
                            className="w-full rounded-xl px-4 border-none resize-none bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 dark:text-white placeholder:text-black/70 dark:placeholder:text-white/70 min-h-[40px]"
                            rows={1}
                            ref={textareaRef}
                            onKeyDown={handleKeyDown}
                            onChange={(e) => {
                                setValue(e.target.value);
                                if (textareaRef.current) {
                                    textareaRef.current.style.height = "auto";
                                    textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
                                }
                            }}
                        />

                        <button
                            type="button"
                            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-xl bg-black/5 dark:bg-white/5 p-1"
                        >
                            <ArrowRight
                                className={cn(
                                    "w-4 h-4 dark:text-white",
                                    value ? "opacity-100" : "opacity-30"
                                )}
                            />
                        </button>
                    </div>
                </div>

                <div className="flex justify-end">
                    <button
                        type="button"
                        onClick={() => setUseMemory(!useMemory)}
                        className="flex items-center gap-2 text-sm text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors"
                    >
                        <Brain
                            className={cn(
                                "w-4 h-4",
                                useMemory
                                    ? "text-blue-500 dark:text-blue-400"
                                    : "text-black/40 dark:text-white/40"
                            )}
                        />
                        <span>Memory</span>
                        <div
                            className={cn(
                                "relative inline-flex h-5 w-9 items-center rounded-full transition-colors",
                                useMemory
                                    ? "bg-blue-500 dark:bg-blue-400"
                                    : "bg-black/20 dark:bg-white/20"
                            )}
                        >
                            <div
                                className={cn(
                                    "absolute h-4 w-4 transform rounded-full transition-transform shadow-sm",
                                    useMemory
                                        ? "translate-x-4 bg-white dark:bg-white"
                                        : "translate-x-1 bg-white dark:bg-white"
                                )}
                            />
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
}
