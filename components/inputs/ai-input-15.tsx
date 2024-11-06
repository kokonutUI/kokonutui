"use client";

import { ArrowRight, Brain, Mic, Paperclip, TriangleAlert } from "lucide-react";
import { useRef, useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

export default function AIInput_15() {
    const [value, setValue] = useState("");
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const [useMemory, setUseMemory] = useState(false);
    const [isRecording, setIsRecording] = useState(false);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            setValue("");
        }
    };

    return (
        <div className="w-full py-4">
            <div className="bg-black/5 dark:bg-white/5 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-black/10 dark:border-white/10">
                    <div className="flex items-center gap-3">
                        <select className="text-xs bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-md px-2 py-1 dark:text-white">
                            <option>GPT-4</option>
                            <option>Claude</option>
                            <option>Gemini</option>
                        </select>
                    </div>
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
                                    "absolute h-4 w-4 transform rounded-full bg-white transition-transform shadow-sm",
                                    useMemory
                                        ? "translate-x-4"
                                        : "translate-x-1"
                                )}
                            />
                        </div>
                    </button>
                </div>

                <div className="relative">
                    <Textarea
                        value={value}
                        placeholder={
                            isRecording
                                ? "Listening..."
                                : "What would you like to know?"
                        }
                        className="w-full rounded-xl px-4 py-3 pb-8 bg-black/5 dark:bg-white/5 border-none dark:text-white placeholder:text-black/70 dark:placeholder:text-white/70 resize-none focus-visible:ring-0 focus-visible:ring-offset-0"
                        rows={3}
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

                    <div className="absolute left-3 bottom-3 flex items-center gap-2">
                        <button
                            type="button"
                            onClick={() => setIsRecording(!isRecording)}
                            className={cn(
                                "rounded-lg p-2 transition-all",
                                isRecording
                                    ? "bg-red-500 text-white"
                                    : "bg-black/5 dark:bg-white/5 text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white"
                            )}
                        >
                            <Mic className="w-4 h-4" />
                        </button>
                        <label className="cursor-pointer rounded-lg p-2 bg-black/5 dark:bg-white/5">
                            <input type="file" className="hidden" />
                            <Paperclip className="w-4 h-4 text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white transition-colors" />
                        </label>
                    </div>

                    <button
                        type="button"
                        className="absolute right-3 bottom-3 rounded-lg p-2 bg-black/5 dark:bg-white/5"
                    >
                        <ArrowRight
                            className={cn(
                                "w-4 h-4 dark:text-white",
                                value ? "opacity-100" : "opacity-30"
                            )}
                        />
                    </button>
                </div>

                <div className="mt-3 flex items-center gap-2 text-xs text-black/50 dark:text-white/50 justify-center">
                    <div className="flex items-center gap-1">
                        <TriangleAlert className="w-3 h-3" />
                        <span>AI can make mistakes, use with caution.</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
