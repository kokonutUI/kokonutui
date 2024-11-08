"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock, Code2, MessageSquare } from "lucide-react";
import Image from "next/image";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface TeamMember {
    name: string;
    image: string;
}

interface Card06Props {
    title?: string;
    subtitle?: string;
    teamMembers?: TeamMember[];
    activeDiscussions?: number;
    codeUpdates?: number;
    dueDate?: string;
    progress?: number;
}

export default function Card_06({
    title = "Mobile App Redesign",
    subtitle = "Design System & Component Library",
    teamMembers = [
        { name: "Alex", image: "https://i.pravatar.cc/150?img=1" },
        { name: "Sarah", image: "https://i.pravatar.cc/150?img=2" },
        { name: "Mike", image: "https://i.pravatar.cc/150?img=3" },
        { name: "Lisa", image: "https://i.pravatar.cc/150?img=4" },
    ],
    activeDiscussions = 8,
    codeUpdates = 24,
    dueDate = "2 days left",
    progress = 68,
}: Card06Props) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
        >
            <Card
                className="group relative overflow-hidden cursor-pointer
                bg-white dark:bg-zinc-900
                hover:shadow-md transition-all duration-300"
            >
                <CardHeader className="p-8 pb-0">
                    <div className="flex items-start justify-between">
                        <div className="space-y-1.5">
                            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                                {title}
                            </h3>
                            <p className="text-sm text-zinc-500 dark:text-zinc-400">
                                {subtitle}
                            </p>
                        </div>

                        <div
                            className="flex items-center gap-1.5 px-3 py-1 rounded-full
                            bg-amber-50 dark:bg-amber-900/30
                            text-amber-600 dark:text-amber-400
                            text-xs font-medium"
                        >
                            <Clock className="w-3.5 h-3.5" />
                            <span>{dueDate}</span>
                        </div>
                    </div>
                </CardHeader>

                <CardContent className="p-8 space-y-6">
                    {/* Team Members */}
                    <div className="flex items-center gap-2">
                        <div className="flex -space-x-2">
                            {teamMembers.map((member, index) => (
                                <motion.div
                                    key={member.name}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="relative"
                                >
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        width={32}
                                        height={32}
                                        className="rounded-full ring-2 ring-white dark:ring-zinc-900"
                                    />
                                    <span
                                        className="absolute -bottom-4 left-1/2 -translate-x-1/2
                                        opacity-0 group-hover:opacity-100 transition-opacity duration-200
                                        text-[10px] text-zinc-600 dark:text-zinc-400"
                                    >
                                        {member.name}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                        <Button
                            variant="outline"
                            size="icon"
                            className="w-8 h-8 rounded-full
                                bg-zinc-100 dark:bg-zinc-800
                                hover:bg-zinc-200 dark:hover:bg-zinc-700"
                        >
                            +
                        </Button>
                    </div>

                    {/* Activity Stats */}
                    <div className="grid grid-cols-2 gap-4">
                        <div
                            className="flex items-center gap-2 p-3 rounded-xl
                            bg-zinc-50 dark:bg-zinc-800/50"
                        >
                            <MessageSquare className="w-4 h-4 text-indigo-500 dark:text-indigo-400" />
                            <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                                {activeDiscussions} discussions
                            </span>
                        </div>
                        <div
                            className="flex items-center gap-2 p-3 rounded-xl
                            bg-zinc-50 dark:bg-zinc-800/50"
                        >
                            <Code2 className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
                            <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                                {codeUpdates} commits
                            </span>
                        </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                            <span className="font-medium text-zinc-700 dark:text-zinc-300">
                                Progress
                            </span>
                            <span className="text-zinc-500 dark:text-zinc-400">
                                {progress}%
                            </span>
                        </div>
                        <div className="h-2 rounded-full bg-zinc-100 dark:bg-zinc-800 overflow-hidden">
                            <motion.div
                                className="h-full rounded-full bg-indigo-500 dark:bg-indigo-400"
                                initial={{ width: 0 }}
                                animate={{ width: `${progress}%` }}
                                transition={{ duration: 1, delay: 0.2 }}
                            />
                        </div>
                    </div>
                </CardContent>

                <CardFooter className="px-8 pb-8">
                    <div className="flex items-center justify-between w-full">
                        <div className="text-xs text-zinc-500 dark:text-zinc-400">
                            View project details →
                        </div>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="p-2 -m-2 rounded-full
                                text-zinc-600 dark:text-zinc-400
                                hover:text-zinc-900 dark:hover:text-zinc-100
                                transition-colors duration-200"
                        >
                            <ArrowRight className="w-5 h-5" />
                        </motion.div>
                    </div>
                </CardFooter>

                <div
                    className="absolute inset-0 rounded-2xl duration-300
                    opacity-0 group-hover:opacity-100 pointer-events-none"
                >
                    <div
                        className="absolute inset-0 dark:opacity-0
                        bg-gradient-to-b from-indigo-100/50 via-white/0 to-white/0
                        "
                    />
                    <div
                        className="absolute inset-0 opacity-0 dark:opacity-100
                        bg-gradient-to-b from-indigo-900/20 via-zinc-900/0 to-zinc-900/0
                        "
                    />
                </div>
            </Card>
        </motion.div>
    );
}
