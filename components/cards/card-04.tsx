"use client";

import {
    SmilePlus,
    Check,
    CheckCheck,
    MoreHorizontal,
    Send,
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface Message {
    id: string;
    content: string;
    sender: {
        name: string;
        avatar: string;
        isOnline: boolean;
    };
    timestamp: string;
    status: "sent" | "delivered" | "read";
    reactions?: Array<{
        emoji: string;
        count: number;
        reacted: boolean;
    }>;
}

interface Card04Props {
    chatName?: string;
    messages?: Message[];
}

export default function Card04({
    chatName = "Team Chat",
    messages = [
        {
            id: "1",
            content: "Hey team! I've just pushed the latest design changes 🎨",
            sender: {
                name: "Alex Chen",
                avatar: "/av01.png",
                isOnline: true,
            },
            timestamp: "10:24 AM",
            status: "read",
            reactions: [
                { emoji: "👍", count: 2, reacted: true },
                { emoji: "🎉", count: 1, reacted: false },
            ],
        },
        {
            id: "2",
            content: "Looking great! The new color scheme is perfect",
            sender: {
                name: "Sarah Kim",
                avatar: "/av02.png",
                isOnline: true,
            },
            timestamp: "10:26 AM",
            status: "delivered",
        },
    ],
}: Card04Props) {
    const [inputValue, setInputValue] = useState("");

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (!inputValue.trim()) return;

        // Here you would typically handle sending the message
        console.log("Sending message:", inputValue);

        // Reset input
        setInputValue("");
    }

    return (
        <div className="group relative w-full max-w-md mx-auto">
            <div
                className="relative overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800
                bg-white dark:bg-zinc-900"
            >
                {/* Chat Header */}
                <div className="p-4 border-b border-zinc-200 dark:border-zinc-800">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="relative">
                                <div
                                    className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-indigo-500
                                    flex items-center justify-center text-white font-medium"
                                >
                                    {chatName.charAt(0)}
                                </div>
                                <div
                                    className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-500
                                    ring-2 ring-white dark:ring-zinc-900"
                                />
                            </div>
                            <div>
                                <h3 className="font-medium text-zinc-900 dark:text-zinc-100">
                                    {chatName}
                                </h3>
                                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                                    3 members • 2 online
                                </p>
                            </div>
                        </div>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="rounded-full"
                        >
                            <MoreHorizontal className="w-5 h-5 text-zinc-500" />
                        </Button>
                    </div>
                </div>

                {/* Messages */}
                <div className="h-[400px] overflow-y-auto p-4 space-y-4">
                    {messages.map((message) => (
                        <div
                            key={message.id}
                            className="flex items-start gap-3 group/message"
                        >
                            <Image
                                src={message.sender.avatar}
                                alt={message.sender.name}
                                width={32}
                                height={32}
                                className="rounded-full"
                            />
                            <div className="flex-1 space-y-1">
                                <div className="flex items-baseline gap-2">
                                    <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                                        {message.sender.name}
                                    </span>
                                    <span className="text-xs text-zinc-500 dark:text-zinc-400">
                                        {message.timestamp}
                                    </span>
                                </div>
                                <p className="text-sm text-zinc-600 dark:text-zinc-300">
                                    {message.content}
                                </p>
                                {message.reactions && (
                                    <div className="flex items-center gap-1 mt-1">
                                        {message.reactions.map((reaction) => (
                                            <button
                                                type="button"
                                                key={reaction.emoji}
                                                className={`px-2 py-0.5 rounded-full text-xs
                                                    ${
                                                        reaction.reacted
                                                            ? "bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400"
                                                            : "bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
                                                    }`}
                                            >
                                                {reaction.emoji}{" "}
                                                {reaction.count}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                            <div className="opacity-0 group-hover/message:opacity-100 transition-opacity">
                                {message.status === "read" && (
                                    <CheckCheck className="w-4 h-4 text-blue-500" />
                                )}
                                {message.status === "delivered" && (
                                    <Check className="w-4 h-4 text-zinc-400" />
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Input Area */}
                <div className="p-4 border-t border-zinc-200/10 dark:border-zinc-800/50">
                    <form
                        onSubmit={handleSubmit}
                        className="flex items-center gap-3"
                    >
                        <div className="relative flex-1">
                            <Input
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                placeholder="Write a message..."
                                className="bg-zinc-50 dark:bg-zinc-800/50 
                                    border-zinc-200 dark:border-zinc-700/50
                                    focus-visible:ring-1 focus-visible:ring-zinc-400 dark:focus-visible:ring-zinc-600
                                    placeholder:text-zinc-400 dark:placeholder:text-zinc-500"
                            />
                            <div className="absolute right-2 top-1/2 -translate-y-1/2">
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="h-7 w-7 rounded-full 
                                        hover:bg-zinc-200/50 dark:hover:bg-zinc-700/50"
                                >
                                    <SmilePlus className="w-4 h-4 text-zinc-500 dark:text-zinc-400" />
                                </Button>
                            </div>
                        </div>
                        <Button
                            type="submit"
                            size="icon"
                            className="h-10 w-10 rounded-full 
                                bg-zinc-800 hover:bg-zinc-700 
                                dark:bg-zinc-700 dark:hover:bg-zinc-600 
                                text-zinc-100 dark:text-zinc-200 
                                transition-colors shadow-sm"
                        >
                            <Send className="w-4 h-4" />
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
}
