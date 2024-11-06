"use client";

import { ArrowRight, Bot } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

const AI_AGENTS = [
    { name: "Copywriter Agent", description: "Write anything you want" },
    { name: "Nextjs Agent", description: "Write code for anything you want" },
].map((model) => ({ ...model }));

export default function AIInput_11() {
    const [state, setState] = useState({
        value: "",
        fileName: "",
        selectedModel: "Copywriter Agent",
        isModelMenuOpen: false,
    });

    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target as Node)
            ) {
                updateState({ isModelMenuOpen: false });
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const updateState = (updates: Partial<typeof state>) =>
        setState((prev) => ({ ...prev, ...updates }));

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            updateState({ value: "" });
        }
    };

    return (
        <div className="w-full py-4">
            <div className="rounded-xl bg-black/5 dark:bg-white/5">
                <div className="relative">
                    <div className="px-2 pt-2 pb-2 flex items-center">
                        <button
                            type="button"
                            onClick={() =>
                                updateState({
                                    isModelMenuOpen: !state.isModelMenuOpen,
                                })
                            }
                            className="flex items-center p-1.5 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg"
                        >
                            <Bot className="w-4 h-4 dark:text-white" />
                        </button>

                        <div className="h-6 w-[1px] bg-black/10 dark:bg-white/10 mx-2" />

                        <Textarea
                            id="input-01"
                            placeholder="Ask me anything!"
                            className="max-w-xl w-full rounded-3xl pl-2 pr-10 placeholder:text-black/70 dark:placeholder:text-white/70 border-none ring-black/30 dark:ring-white/30 text-black dark:text-white resize-none text-wrap py-2 bg-transparent min-h-[36px] focus-visible:ring-0 focus-visible:ring-offset-0"
                            rows={1}
                            ref={textareaRef}
                            value={state.value}
                            onChange={(e) => {
                                updateState({ value: e.target.value });
                                if (textareaRef.current) {
                                    textareaRef.current.style.height = "auto";
                                    textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
                                }
                            }}
                            onKeyDown={handleKeyDown}
                        />

                        <div className="absolute right-3 top-1/2 -translate-y-1/2">
                            <button
                                type="button"
                                className="rounded-xl bg-black/5 dark:bg-white/5 p-1"
                            >
                                <ArrowRight
                                    className={cn(
                                        "w-4 h-4 dark:text-white",
                                        state.value
                                            ? "opacity-100"
                                            : "opacity-30"
                                    )}
                                />
                            </button>
                        </div>
                    </div>

                    <div className="absolute -bottom-5 left-1 flex items-center gap-1.5 text-[10px] text-muted-foreground dark:text-white/50">
                        <span>{state.selectedModel}</span>
                    </div>

                    {/* Model Selection Menu */}
                    {state.isModelMenuOpen && (
                        <div
                            ref={menuRef}
                            className="absolute top-12 left-2 mt-1 bg-white dark:bg-zinc-800 rounded-lg shadow-lg border border-black/10 dark:border-white/10 py-1 w-72 z-10"
                        >
                            {AI_AGENTS.map((model) => (
                                <button
                                    key={model.name}
                                    type="button"
                                    onClick={() => {
                                        updateState({
                                            selectedModel: model.name,
                                            isModelMenuOpen: false,
                                        });
                                    }}
                                    className="w-full px-3 py-1.5 text-left hover:bg-black/5 dark:hover:bg-white/5 flex items-center gap-2"
                                >
                                    <div>
                                        <div className="text-sm dark:text-white">
                                            {model.name}
                                        </div>
                                        <div className="text-xs text-black/50 dark:text-white/50">
                                            {model.description}
                                        </div>
                                    </div>
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
