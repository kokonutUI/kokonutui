"use client";

import { Send } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

export default function AIInput_18() {
    const [inputValue, setInputValue] = useState("");
    const textareaRef = useRef<HTMLTextAreaElement | null>(null);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            setInputValue("");
        }
    };

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = "auto";
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
    }, []);

    return (
        <div className="w-full py-4">
            <div className="relative max-w-xl w-full mx-auto flex items-center gap-2">
                <div className="relative max-w-xl w-full mx-auto">
                    <Textarea
                        id="input-01"
                        placeholder="Ask me anything!"
                        className="max-w-xl bg-black/5 dark:bg-white/5 w-full rounded-3xl pl-6 pr-4 py-4 placeholder:text-black/70 dark:placeholder:text-white/70 border-none ring-black/30 dark:ring-white/30 text-black dark:text-white resize-none text-wrap min-h-[40px]"
                        rows={1}
                        ref={textareaRef}
                        value={inputValue}
                        onKeyDown={handleKeyDown}
                        onChange={(e) => {
                            setInputValue(e.target.value);
                            if (textareaRef.current) {
                                textareaRef.current.style.height = "auto";
                                textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
                            }
                        }}
                    />
                </div>

                <button
                    type="button"
                    className={cn(
                        "flex items-center justify-center rounded-full bg-black/50 dark:bg-white/50 p-3 transition-opacity duration-300",
                        inputValue
                            ? "opacity-100 bg-black/80 dark:bg-white/80 cursor-pointer"
                            : "opacity-100 pointer-events-none"
                    )}
                >
                    <Send className="w-4 h-4 text-white dark:text-gray-900" />
                </button>
            </div>
        </div>
    );
}
