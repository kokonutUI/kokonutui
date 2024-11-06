"use client";

import { ArrowRight } from "lucide-react";
import { useState, useRef } from "react";
import { Textarea } from "@/components/ui/textarea";
import clsx from "clsx";

export default function AIInput_17() {
    const [value, setValue] = useState("");
    const [selectedDoc, setSelectedDoc] = useState<string | null>(null);
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const [selectedTool, setSelectedTool] = useState<string | null>(null);

    const handleDocSelect = (docTitle: string) => {
        setSelectedDoc(selectedDoc === docTitle ? null : docTitle);
    };

    const handleToolSelect = (toolName: string) => {
        setSelectedTool(selectedTool === toolName ? null : toolName);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            setValue("");
        }
    };

    return (
        <div className="w-full py-4">
            <div className="flex flex-col gap-2">
                <div className="bg-black/5 dark:bg-white/5 rounded-lg">
                    <div className="relative px-2 py-1.5">
                        <Textarea
                            ref={textareaRef}
                            value={value}
                            placeholder="Type your message..."
                            className="w-full rounded-xl px-3 pr-12 border-none resize-none bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 shadow-none min-h-[40px] dark:text-white placeholder:text-black/70 dark:placeholder:text-white/70"
                            rows={1}
                            onKeyDown={handleKeyDown}
                            onInput={(e) => {
                                setValue(
                                    (e.target as HTMLTextAreaElement).value
                                );
                                if (textareaRef.current) {
                                    textareaRef.current.style.height = "auto";
                                    textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
                                }
                            }}
                        />

                        <button
                            type="button"
                            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md bg-black/5 dark:bg-white/5 p-1.5 hover:bg-black/10 dark:hover:bg-white/10 transition-colors hover:scale-105 active:scale-95"
                        >
                            <ArrowRight
                                className={clsx(
                                    "w-3.5 h-3.5 dark:text-white",
                                    value ? "opacity-100" : "opacity-50"
                                )}
                            />
                        </button>
                    </div>
                </div>

                {/* Info Blocks Grid */}
                <div className="grid grid-cols-2 gap-2">
                    {/* Quick Tools */}
                    <div className="bg-black/5 dark:bg-white/5 rounded-lg p-2.5 transition-all">
                        <div className="flex items-center gap-2 mb-1.5">
                            <p className="text-xs font-medium text-black/70 dark:text-white/70">
                                Quick Tools
                            </p>
                        </div>

                        <div className="flex flex-col gap-0.5">
                            {[
                                { name: "Code Explain", icon: "🔍" },
                                { name: "Debug Help", icon: "🐛" },
                                { name: "Optimize", icon: "⚡" },
                            ].map((tool) => (
                                <button
                                    type="button"
                                    key={tool.name}
                                    onClick={() => handleToolSelect(tool.name)}
                                    className={clsx(
                                        "group relative flex items-center justify-between p-1.5 text-xs rounded-md transition-all duration-200 hover:translate-x-0.5",
                                        selectedTool === tool.name
                                            ? "bg-black/5 dark:bg-white/5"
                                            : "hover:bg-black/5 dark:hover:bg-white/5"
                                    )}
                                >
                                    <div className="flex items-center gap-1.5">
                                        <span className="text-xs">{tool.icon}</span>
                                        <span className="text-black/70 dark:text-white/70">
                                            {tool.name}
                                        </span>
                                    </div>

                                    <div
                                        className={clsx(
                                            "h-1.5 w-1.5 rounded-full bg-blue-500 dark:bg-blue-400 transition-all duration-200",
                                            selectedTool === tool.name
                                                ? "opacity-100 scale-100"
                                                : "opacity-0 scale-80"
                                        )}
                                    />

                                    <div
                                        className={clsx(
                                            "absolute left-0 top-0 h-full w-full -z-10 rounded-md bg-black/5 dark:bg-white/5 transition-all duration-200",
                                            selectedTool === tool.name
                                                ? "opacity-100"
                                                : "opacity-0"
                                        )}
                                    />
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="bg-black/5 dark:bg-white/5 rounded-lg p-2.5 transition-all">
                        <div className="flex items-center gap-2 mb-1.5">
                            <p className="text-xs font-medium text-black/70 dark:text-white/70">
                                Use Documentation
                            </p>
                        </div>

                        <div className="flex flex-col gap-0.5">
                            {[
                                { title: "React Docs", type: "Official", icon: "⚛️" },
                                { title: "Next.js", type: "Guide", icon: "▲" },
                                { title: "TailwindCSS", type: "Ref", icon: "🎨" },
                            ].map((doc) => (
                                <button
                                    type="button"
                                    key={doc.title}
                                    onClick={() => handleDocSelect(doc.title)}
                                    className={clsx(
                                        "group relative flex items-center justify-between p-1.5 text-xs rounded-md transition-all duration-200 hover:translate-x-0.5",
                                        selectedDoc === doc.title
                                            ? "bg-black/5 dark:bg-white/5"
                                            : "hover:bg-black/5 dark:hover:bg-white/5"
                                    )}
                                >
                                    <div className="flex items-center gap-1.5">
                                        <span className="text-xs">{doc.icon}</span>
                                        <span className="text-black/70 dark:text-white/70">
                                            {doc.title}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-[10px] text-black/40 dark:text-white/40">
                                            {doc.type}
                                        </span>

                                        <div
                                            className={clsx(
                                                "h-1.5 w-1.5 rounded-full bg-blue-500 dark:bg-blue-400 transition-all duration-200",
                                                selectedDoc === doc.title
                                                    ? "opacity-100 scale-100"
                                                    : "opacity-0 scale-80"
                                            )}
                                        />
                                    </div>

                                    <div
                                        className={clsx(
                                            "absolute left-0 top-0 h-full w-full -z-10 rounded-md bg-black/5 dark:bg-white/5 transition-all duration-200",
                                            selectedDoc === doc.title
                                                ? "opacity-100"
                                                : "opacity-0"
                                        )}
                                    />
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
