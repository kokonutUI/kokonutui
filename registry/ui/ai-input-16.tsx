"use client";

import { useState, useRef } from "react";
import {
    ArrowRight,
    Image as ImageIcon,
    Command,
    MessageSquare,
    Eraser,
    Sparkles,
} from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

const MODES = {
    command: {
        icon: Command,
        placeholder: "Type / for suggestions...",
        color: "gray",
    },
    chat: {
        icon: MessageSquare,
        placeholder: "Chat with AI...",
        color: "blue",
    },
    image: {
        icon: ImageIcon,
        placeholder: "Describe the image you want to generate...",
        color: "purple",
    },
};

type ModeType = keyof typeof MODES;

export default function AIInput_16() {
    const [inputState, setInputState] = useState({
        value: "",
        activeMode: "command" as ModeType,
        suggestions: [] as string[],
        activeCommand: null as string | null,
    });
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newValue = e.target.value;
        const commands = ["/translate", "/summarize", "/explain", "/review"];

        if (!inputState.activeCommand && newValue.startsWith("/")) {
            const exactMatch = commands.find(
                (cmd) => cmd === newValue.toLowerCase()
            );
            if (exactMatch) {
                setInputState((prev) => ({
                    ...prev,
                    value: "",
                    activeCommand: exactMatch,
                    suggestions: [],
                }));
                return;
            }

            const matchingCommands = commands.filter((cmd) =>
                cmd.toLowerCase().startsWith(newValue.toLowerCase())
            );
            setInputState((prev) => ({
                ...prev,
                value: newValue,
                suggestions: matchingCommands,
            }));
        } else {
            setInputState((prev) => ({
                ...prev,
                value: newValue,
                suggestions: [],
            }));
        }
    };

    const handleSuggestionClick = (suggestion: string) => {
        setInputState((prev) => ({
            ...prev,
            activeCommand:
                prev.activeCommand === suggestion ? null : suggestion,
            value: "",
            suggestions: [],
        }));
        textareaRef.current?.focus();
    };

    const handleClear = () => {
        setInputState((prev) => ({
            ...prev,
            value: "",
            activeCommand: null,
            suggestions: [],
        }));
        textareaRef.current?.focus();
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleClear();
        }
    };

    return (
        <div className="w-full py-4">
            <div className="bg-black/5 dark:bg-white/5 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-4">
                    {Object.entries(MODES).map(([mode, { icon: Icon }]) => (
                        <button
                            type="button"
                            key={mode}
                            onClick={() =>
                                setInputState((prev) => ({
                                    ...prev,
                                    activeMode: mode as any,
                                }))
                            }
                            className={cn(
                                "p-2 rounded-lg transition-all flex items-center gap-2",
                                {
                                    "bg-black/5 dark:bg-white/5 text-black dark:text-white":
                                        inputState.activeMode === mode,
                                    "text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white":
                                        inputState.activeMode !== mode,
                                }
                            )}
                        >
                            <Icon className="w-4 h-4" />
                        </button>
                    ))}
                </div>

                <div className="relative">
                    <Textarea
                        ref={textareaRef}
                        value={inputState.value}
                        onChange={handleInputChange}
                        onKeyDown={handleKeyDown}
                        placeholder={MODES[inputState.activeMode].placeholder}
                        className="w-full rounded-xl px-4 py-3 pb-8 bg-black/5 dark:bg-white/5 border-none dark:text-white placeholder:text-black/70 dark:placeholder:text-white/70 resize-none focus-visible:ring-0 focus-visible:ring-offset-0 min-h-[40px]"
                    />

                    {inputState.suggestions.length > 0 && (
                        <div className="absolute left-0 right-0 bottom-full mb-2 bg-black dark:bg-black rounded-lg shadow-lg border border-white/10 overflow-hidden z-50">
                            {inputState.suggestions.map((suggestion) => (
                                <button
                                    type="button"
                                    key={suggestion}
                                    onClick={() =>
                                        handleSuggestionClick(suggestion)
                                    }
                                    className="w-full text-left px-3 py-2.5 hover:bg-white/10 text-sm flex items-center gap-2"
                                >
                                    <Sparkles className="w-4 h-4 text-white/50" />
                                    <span className="font-medium text-white/70">
                                        {suggestion}
                                    </span>
                                </button>
                            ))}
                        </div>
                    )}

                    <div className="absolute bottom-3 w-full px-3 flex justify-between items-center">
                        <div className="flex items-center gap-2">
                            {inputState.activeCommand && (
                                <button
                                    type="button"
                                    onClick={() =>
                                        handleSuggestionClick(
                                            inputState.activeCommand as string
                                        )
                                    }
                                    className="group bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-black dark:text-white rounded-md px-2 py-1 text-sm font-mono flex items-center gap-1.5 transition-colors"
                                >
                                    {inputState.activeCommand}
                                    <span className="text-black/40 dark:text-white/40 group-hover:text-black dark:group-hover:text-white">
                                        ×
                                    </span>
                                </button>
                            )}
                            {(inputState.value || inputState.activeCommand) && (
                                <button
                                    type="button"
                                    className="p-2 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white transition-colors"
                                    onClick={handleClear}
                                >
                                    <Eraser className="w-4 h-4" />
                                </button>
                            )}
                        </div>
                        <button
                            type="button"
                            className={cn(
                                "p-2 rounded-lg transition-all",
                                inputState.value.trim().length > 0 ||
                                    inputState.activeCommand
                                    ? "bg-black/10 dark:bg-white/10 text-black dark:text-white"
                                    : "bg-black/5 dark:bg-white/5 text-black/30 dark:text-white/30"
                            )}
                        >
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
