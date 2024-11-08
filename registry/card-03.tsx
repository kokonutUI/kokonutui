"use client";

import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Rocket, CheckCircle2 } from "lucide-react";
import Image from "next/image";

interface TeamMember {
    name: string;
    role: string;
    avatar: string;
    status: "online" | "busy" | "offline";
}

interface Milestone {
    title: string;
    dueDate: string;
    completed: boolean;
}

interface Card03Props {
    projectName?: string;
    description?: string;
    teamMembers?: TeamMember[];
    milestones?: Milestone[];
}

export default function Card_03({
    projectName = "Design System 2.0",
    description = "Modernizing our component library with enhanced accessibility and dark mode support",
    teamMembers = [
        {
            name: "Alex Chen",
            role: "Lead Designer",
            avatar: "/av01.png",
            status: "online",
        },
        {
            name: "Sarah Kim",
            role: "Developer",
            avatar: "/av02.png",
            status: "busy",
        },
        {
            name: "Mike Liu",
            role: "PM",
            avatar: "/av03.png",
            status: "offline",
        },
    ],
    milestones = [
        { title: "Design", dueDate: "Mar 15", completed: true },
        {
            title: "Dark Mode",
            dueDate: "Mar 28",
            completed: false,
        },
        { title: "Documentation", dueDate: "Apr 10", completed: false },
    ],
}: Card03Props) {
    const getStatusColor = (status: TeamMember["status"]) => {
        switch (status) {
            case "online":
                return "bg-emerald-500";
            case "busy":
                return "bg-amber-500";
            case "offline":
                return "bg-zinc-300 dark:bg-zinc-600";
        }
    };

    return (
        <div className="group relative w-full max-w-2xl mx-auto">
            <Card
                className="relative overflow-hidden border-zinc-200 dark:border-zinc-800
                bg-gradient-to-b from-white to-zinc-50/50
                dark:from-zinc-900 dark:to-zinc-900/50 backdrop-blur-xl"
            >
                <CardHeader>
                    <div className="flex items-start justify-between">
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-3">
                                <div className="p-2 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400">
                                    <Rocket className="w-4 h-4" />
                                </div>
                                <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                                    Active Project
                                </span>
                            </div>
                            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                                {projectName}
                            </h2>
                            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400 max-w-lg">
                                {description}
                            </p>
                        </div>
                    </div>
                </CardHeader>

                <CardContent>
                    <div className="grid grid-cols-5 gap-6">
                        <div className="col-span-2 space-y-4">
                            <h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                                Team
                            </h3>
                            <div className="space-y-3">
                                {teamMembers.map((member) => (
                                    <div
                                        key={member.name}
                                        className="flex items-center gap-3 p-2 rounded-xl
                                            hover:bg-zinc-100 dark:hover:bg-zinc-800/50
                                            transition-colors duration-150"
                                    >
                                        <div className="relative">
                                            <Image
                                                src={member.avatar}
                                                alt={member.name}
                                                width={36}
                                                height={36}
                                                className="rounded-full"
                                            />
                                            <div
                                                className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full
                                                ring-2 ring-white dark:ring-zinc-900 ${getStatusColor(
                                                    member.status
                                                )}`}
                                            />
                                        </div>
                                        <div>
                                            <div className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                                                {member.name}
                                            </div>
                                            <div className="text-xs text-zinc-600 dark:text-zinc-400">
                                                {member.role}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="col-span-3 space-y-4">
                            <h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                                Milestones
                            </h3>
                            <div className="space-y-3">
                                {milestones.map((milestone) => (
                                    <div
                                        key={milestone.title}
                                        className="flex items-center justify-between p-3 rounded-xl
                                            bg-zinc-50 dark:bg-zinc-800/50"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div
                                                className={`p-2 rounded-lg ${
                                                    milestone.completed
                                                        ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                                                        : "bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
                                                }`}
                                            >
                                                <CheckCircle2 className="w-4 h-4" />
                                            </div>
                                            <div>
                                                <div className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                                                    {milestone.title}
                                                </div>
                                                <div className="text-xs text-zinc-600 dark:text-zinc-400">
                                                    Due {milestone.dueDate}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </CardContent>

                <div
                    className="absolute inset-0 rounded-2xl duration-300
                    opacity-0 group-hover:opacity-100 pointer-events-none"
                >
                    <div
                        className="absolute inset-0 dark:opacity-0
                        bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))]
                        from-blue-100/20 via-white/0 to-white/0"
                    />
                    <div
                        className="absolute inset-0 opacity-0 dark:opacity-100
                        bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))]
                        from-blue-900/20 via-zinc-900/0 to-zinc-900/0"
                    />
                </div>
            </Card>
        </div>
    );
}
