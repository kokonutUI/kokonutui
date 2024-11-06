"use client";

import { ArrowRight } from "lucide-react";
import { useRef, useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

export default function AIInput_13() {
    const [value, setValue] = useState("");
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
                <div className="bg-black/5 dark:bg-white/5 rounded-xl">
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

                <div className="flex justify-center gap-4">
                    <div className="bg-black/5 dark:bg-white/5 rounded-xl p-3 flex-1 ">
                        <div className="flex justify-between items-start mb-2">
                            <div>
                                <h3 className="font-semibold text-sm dark:text-white">
                                    Saved Tools
                                </h3>
                                <p className="text-xs text-black/60 dark:text-white/60">
                                    Most used
                                </p>
                            </div>
                            <span className="text-xs text-black/50 dark:text-white/50 ml-2">
                                12
                            </span>
                        </div>

                        <div className="space-y-2 mt-2">
                            <div className="text-xs text-black/60 hover:text-black dark:text-white/60 dark:hover:text-white cursor-pointer transition-colors">
                                Translate to French
                            </div>
                            <div className="text-xs text-black/60 hover:text-black dark:text-white/60 dark:hover:text-white cursor-pointer transition-colors">
                                Summarize Text
                            </div>
                            <div className="text-xs text-black/60 hover:text-black dark:text-white/60 dark:hover:text-white cursor-pointer transition-colors">
                                Generate Title
                            </div>
                        </div>
                    </div>

                    <div className="bg-black/5 dark:bg-white/5 rounded-xl p-3 flex-1">
                        <div className="flex justify-between items-start mb-2">
                            <div>
                                <h3 className="font-semibold text-sm dark:text-white">
                                    History
                                </h3>
                                <p className="text-xs text-black/60 dark:text-white/60">
                                    Past chats
                                </p>
                            </div>
                            <span className="text-xs text-black/50 dark:text-white/50 ml-2">
                                24
                            </span>
                        </div>

                        <div className="space-y-2 mt-2">
                            <div className="text-xs text-black/60 hover:text-black dark:text-white/60 dark:hover:text-white cursor-pointer transition-colors">
                                API Integration Help
                            </div>
                            <div className="text-xs text-black/60 hover:text-black dark:text-white/60 dark:hover:text-white cursor-pointer transition-colors">
                                Debugging Assistant
                            </div>
                            <div className="text-xs text-black/60 hover:text-black dark:text-white/60 dark:hover:text-white cursor-pointer transition-colors">
                                Code Review Session
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
