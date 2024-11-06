"use client";

import { CornerRightUp, FileUp, Paperclip, X } from "lucide-react";
import { useState, useRef } from "react";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

interface FileDisplayProps {
    fileName: string;
    onClear: () => void;
}

const FileDisplay = ({ fileName, onClear }: FileDisplayProps) => (
    <div className="flex items-center gap-2 bg-black/5 dark:bg-white/5 w-fit px-3 py-1 rounded-lg group border dark:border-white/10">
        <FileUp className="w-4 h-4 dark:text-white" />
        <span className="text-sm dark:text-white">{fileName}</span>
        <button
            type="button"
            onClick={onClear}
            className="ml-1 p-0.5 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
        >
            <X className="w-3 h-3 dark:text-white" />
        </button>
    </div>
);

export default function AIInput_02() {
    // State
    const [inputValue, setInputValue] = useState<string>("");
    const [selectedFileName, setSelectedFileName] =
        useState<string>("example.txt");

    // Refs
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    // Handlers
    const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.[0]) {
            setSelectedFileName(e.target.files[0].name);
        }
    };

    const handleClearFile = () => {
        setSelectedFileName("");
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            setInputValue("");
        }
    };

    return (
        <div className="w-full py-4">
            <div className="relative max-w-xl w-full mx-auto flex flex-col gap-2">
                {selectedFileName && (
                    <FileDisplay
                        fileName={selectedFileName}
                        onClear={handleClearFile}
                    />
                )}

                <div className="relative">
                    <div
                        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-3xl bg-black/5 dark:bg-white/5 py-2 px-2 hover:cursor-pointer"
                        onClick={() => fileInputRef.current?.click()}
                    >
                        <Paperclip className="w-4 h-4 transition-opacity transform scale-x-[-1] rotate-45 dark:text-white" />
                    </div>

                    <input
                        type="file"
                        className="hidden"
                        ref={fileInputRef}
                        onChange={handleFileSelect}
                    />

                    <Textarea
                        id="input-01"
                        placeholder="File Upload and Chat!"
                        className="max-w-xl bg-black/5 dark:bg-white/5 w-full rounded-3xl pl-14 pr-16 placeholder:text-black/70 dark:placeholder:text-white/70 border-none ring-black/30 dark:ring-white/30 text-black dark:text-white text-wrap py-4 max-h-[200px] overflow-y-auto resize-none min-h-[40px] focus-visible:ring-0 focus-visible:ring-offset-0"
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
                                inputValue ? "opacity-100" : "opacity-30"
                            )}
                        />
                    </button>
                </div>
            </div>
        </div>
    );
}
