"use client";

import { CornerRightUp } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
const TEXT = "What can i do for you?";
const SPEED = 30;

export default function AIInput_05() {
    const [inputValue, setInputValue] = useState("");
    const textareaRef = useRef<HTMLTextAreaElement | null>(null);
    const [displayText, setDisplayText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTypingComplete, setIsTypingComplete] = useState(false);

    useEffect(() => {
        if (currentIndex < TEXT.length) {
            const timer = setTimeout(() => {
                setDisplayText((prev) => prev + TEXT[currentIndex]);
                setCurrentIndex((prev) => prev + 1);
            }, SPEED);
            return () => clearTimeout(timer);
        }

        const resetTimer = setTimeout(() => {
            setDisplayText("");
            setCurrentIndex(0);
            setIsTypingComplete(false);
        }, 1000);

        setIsTypingComplete(true);
        return () => clearTimeout(resetTimer);
    }, [currentIndex]);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            setInputValue("");
        }
    };

    useEffect(() => {
        const textarea = textareaRef.current;
        if (textarea) {
            textarea.style.height = "auto";
            textarea.style.height = `${textarea.scrollHeight}px`;
        }
    }, []);

    return (
        <div className="w-full py-4">
            <div className="text-2xl p-4 bg-background min-h-[100px] flex items-center justify-center">
                <p className="text-black dark:text-white font-semibold">
                    {displayText}
                    {!isTypingComplete && (
                        <span className="animate-blink">|</span>
                    )}
                </p>
            </div>
            <div className="relative max-w-xl w-full mx-auto">
                <Textarea
                    placeholder="Ask me anything!"
                    className="max-w-xl bg-black/5 dark:bg-white/5 w-full rounded-3xl pl-4 pr-12 placeholder:text-black/70 dark:placeholder:text-white/70 border-none text-black dark:text-white resize-none text-wrap min-h-[40px] py-4"
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
                <button
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-xl bg-black/5 dark:bg-white/5 py-1 px-1"
                    type="button"
                >
                    <CornerRightUp
                        className={cn(
                            "w-4 h-4 transition-opacity dark:text-white",
                            {
                                "opacity-100": inputValue,
                                "opacity-30": !inputValue,
                            }
                        )}
                    />
                </button>
            </div>
        </div>
    );
}
