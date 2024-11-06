"use client";

import { CornerRightUp, Mic } from "lucide-react";
import { useState, useRef } from "react";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

export default function AIInput_01() {
    const [inputValue, setInputValue] = useState("");
    const textareaRef = useRef<HTMLTextAreaElement | null>(null);

    return (
        <div className="w-full py-4">
            <div className="relative max-w-xl w-full mx-auto">
                <Textarea
                    id="input-01"
                    placeholder="Type your message..."
                    className="max-w-xl bg-black/5 dark:bg-white/5 w-full rounded-3xl pl-6 pr-16 placeholder:text-black/50 dark:placeholder:text-white/50 border-none ring-black/20 dark:ring-white/20 text-black dark:text-white text-wrap py-4 max-h-[200px] overflow-y-auto resize-none min-h-[40px] focus-visible:ring-0 focus-visible:ring-offset-0"
                    rows={1}
                    ref={textareaRef}
                    value={inputValue}
                    onChange={(e) => {
                        setInputValue(e.target.value);
                        if (textareaRef.current) {
                            textareaRef.current.style.height = "auto";
                            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
                        }
                    }}
                />

                <div
                    className={cn(
                        "absolute top-1/2 -translate-y-1/2 rounded-xl bg-black/5 dark:bg-white/5 py-1 px-1 transition-all duration-200",
                        inputValue ? "right-10" : "right-3"
                    )}
                >
                    <Mic className="w-4 h-4 text-black/70 dark:text-white/70" />
                </div>
                <button
                    type="button"
                    className={cn(
                        "absolute top-1/2 -translate-y-1/2 rounded-xl bg-black/5 dark:bg-white/5 py-1 px-1 transition-all duration-700",
                        inputValue
                            ? "block right-3 animate-slide-in cursor-pointer"
                            : "hidden"
                    )}
                >
                    <CornerRightUp className="w-4 h-4 text-black/70 dark:text-white/70 transition-opacity duration-700" />
                </button>
            </div>
        </div>
    );
}
