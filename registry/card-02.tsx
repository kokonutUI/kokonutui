"use client";

import { Calendar, Mail, MessageSquare, Phone, Clock } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardHeader,
    CardContent,
    CardFooter,
} from "@/components/ui/card";

interface Skill {
    name: string;
    level: number;
}

interface Card02Props {
    name?: string;
    role?: string;
    image?: string;
    availability?: string;
    rating?: number;
    completedProjects?: number;
    skills?: Skill[];
    email?: string;
    phone?: string;
    timeZone?: string;
}

export default function Card_02({
    name = "Sarah Anderson",
    role = "Senior Product Designer",
    image = "/av01.png",
    availability = "Available in 2 weeks",
    rating = 4.9,
    completedProjects = 145,
    skills = [
        { name: "UI Design", level: 5 },
        { name: "UX Research", level: 4 },
        { name: "Prototyping", level: 5 },
        { name: "Design Systems", level: 4 },
    ],
}: Card02Props) {
    return (
        <div className="relative w-full max-w-xl mx-auto">
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

            <Card
                className="relative overflow-hidden border-zinc-200/80 dark:border-zinc-800/80 
                bg-white/90 dark:bg-zinc-900/90 backdrop-blur-xl"
            >
                <CardHeader className="pb-0">
                    <div className="flex items-start gap-6">
                        <div className="relative">
                            <div className="w-24 h-24 rounded-2xl overflow-hidden ring-2 ring-zinc-100 dark:ring-zinc-800">
                                <Image
                                    src={image}
                                    alt={name}
                                    width={96}
                                    height={96}
                                    className="object-cover"
                                />
                            </div>
                            <div
                                className="absolute -bottom-1 -right-1 p-1.5 rounded-lg 
                                bg-emerald-50 dark:bg-emerald-900/50 
                                text-emerald-600 dark:text-emerald-400
                                ring-2 ring-white dark:ring-zinc-900"
                            >
                                <Clock className="w-3.5 h-3.5" />
                            </div>
                        </div>

                        <div className="flex-1 pt-2">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                                        {name}
                                    </h3>
                                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                                        {role}
                                    </p>
                                </div>
                                <div
                                    className="flex items-center gap-1 px-2.5 py-1 rounded-full 
                                    bg-zinc-100 dark:bg-zinc-800"
                                >
                                    <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                                        {rating}
                                    </span>
                                </div>
                            </div>

                            <div className="mt-4 flex items-center gap-4 text-sm">
                                <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
                                    <Calendar className="w-4 h-4" />
                                    <span>{availability}</span>
                                </div>
                                <div className="flex items-center gap-1.5 text-zinc-600 dark:text-zinc-400">
                                    <MessageSquare className="w-4 h-4" />
                                    <span>{completedProjects} projects</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </CardHeader>

                <CardContent className="space-y-8">
                    <div>
                        <h4 className="text-sm font-medium text-zinc-900 dark:text-zinc-100 mb-4">
                            Skills & Expertise
                        </h4>
                        <div className="grid grid-cols-2 gap-4">
                            {skills.map((skill) => (
                                <div key={skill.name} className="space-y-2">
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="text-zinc-600 dark:text-zinc-400">
                                            {skill.name}
                                        </span>
                                        <span className="flex">
                                            {[...Array(5)].map((_, i) => (
                                                <div
                                                    key={i}
                                                    className={`w-1.5 h-1.5 rounded-full mx-0.5 
                                                        ${
                                                            i < skill.level
                                                                ? "bg-blue-500 dark:bg-blue-400"
                                                                : "bg-zinc-200 dark:bg-zinc-700"
                                                        }`}
                                                />
                                            ))}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </CardContent>

                <CardFooter>
                    <div className="flex items-center gap-4 w-full">
                        <Button
                            className="flex-1 flex items-center justify-center gap-2 
                                bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700
                                text-zinc-900 dark:text-zinc-100"
                        >
                            <Mail className="w-4 h-4" />
                            Email
                        </Button>
                        <Button
                            className="flex-1 flex items-center justify-center gap-2
                                bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700
                                text-zinc-900 dark:text-zinc-100"
                        >
                            <Phone className="w-4 h-4" />
                            Call
                        </Button>
                        <Button
                            className="flex-1 flex items-center justify-center gap-2
                                bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700
                                text-zinc-900 dark:text-zinc-100"
                        >
                            <MessageSquare className="w-4 h-4" />
                            Message
                        </Button>
                    </div>
                </CardFooter>

                <div
                    className="absolute inset-0 rounded-2xl duration-300
                    opacity-0 group-hover:opacity-100 pointer-events-none"
                >
                    <div
                        className="absolute inset-0 dark:opacity-0
                        bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))]
                        from-rose-100/20 via-white/0 to-white/0"
                    />
                    <div
                        className="absolute inset-0 opacity-0 dark:opacity-100
                        bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))]
                        from-rose-900/20 via-zinc-900/0 to-zinc-900/0"
                    />
                </div>
            </Card>
        </div>
    );
}
