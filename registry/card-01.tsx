"use client";

import { ArrowRight, Sparkles, Code2, Boxes } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import {
    Card,
    CardHeader,
    CardContent,
    CardFooter,
} from "@/components/ui/card";

interface Card01Props {
    onSubmit?: (data: { name: string; framework: string }) => void;
}

export default function Card_01({
    onSubmit = (data: { name: string; framework: string }) =>
        console.log("Form submitted:", data),
}: Card01Props) {
    return (
        <div className="relative w-full max-w-md mx-auto">
            <div className="absolute -top-8 -right-8 w-64 h-64 bg-indigo-500/10 dark:bg-indigo-400/5 rounded-full blur-3xl" />
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-violet-500/10 dark:bg-violet-400/5 rounded-full blur-3xl" />

            <Card
                className="relative overflow-hidden border-indigo-100/80 dark:border-indigo-500/20 
                bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl"
            >
                <div
                    className="absolute inset-0 bg-gradient-to-t from-indigo-50/50 via-white/20 to-white/0 
                    dark:from-indigo-950/50 dark:via-zinc-900/20 dark:to-zinc-900/0"
                />

                <CardHeader className="relative pb-0">
                    <div className="flex items-center gap-2 mb-2">
                        <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-950/60">
                            <Sparkles className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                        </div>
                        <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                            New Project
                        </span>
                    </div>
                    <h3 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">
                        Create Project
                    </h3>
                    <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                        Set up your new project with just a few clicks. We'll
                        handle the deployment.
                    </p>
                </CardHeader>

                <form>
                    <CardContent className="space-y-6">
                        <div className="space-y-2">
                            <Label
                                htmlFor="name"
                                className="text-sm font-medium text-zinc-800 dark:text-zinc-200"
                            >
                                Project Name
                            </Label>
                            <div className="relative">
                                <Boxes className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 dark:text-zinc-400" />
                                <Input
                                    id="name"
                                    name="name"
                                    placeholder="Enter project name"
                                    className="pl-10 h-11 bg-white dark:bg-zinc-800/50 
                                        border-indigo-100 dark:border-indigo-500/20
                                        focus:border-indigo-500 dark:focus:border-indigo-400
                                        focus:ring-2 focus:ring-indigo-500/20 dark:focus:ring-indigo-400/20"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label
                                htmlFor="framework"
                                className="text-sm font-medium text-zinc-800 dark:text-zinc-200"
                            >
                                Framework
                            </Label>
                            <div className="relative">
                                <Code2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 dark:text-zinc-400 z-10" />
                                <Select name="framework">
                                    <SelectTrigger
                                        id="framework"
                                        className="pl-10 h-11 bg-white dark:bg-zinc-800/50 
                                            border-indigo-100 dark:border-indigo-500/20
                                            focus:border-indigo-500 dark:focus:border-indigo-400
                                            focus:ring-2 focus:ring-indigo-500/20 dark:focus:ring-indigo-400/20"
                                    >
                                        <SelectValue placeholder="Select framework" />
                                    </SelectTrigger>
                                    <SelectContent className="bg-white dark:bg-zinc-800 border-indigo-100 dark:border-indigo-500/20">
                                        <SelectItem value="next">
                                            Next.js
                                        </SelectItem>
                                        <SelectItem value="sveltekit">
                                            SvelteKit
                                        </SelectItem>
                                        <SelectItem value="astro">
                                            Astro
                                        </SelectItem>
                                        <SelectItem value="nuxt">
                                            Nuxt.js
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </CardContent>

                    <CardFooter className="flex items-center justify-end">
                        <Button
                            type="submit"
                            className="bg-gradient-to-r from-indigo-200 to-indigo-300 
                                hover:from-indigo-300 hover:to-indigo-400 
                                text-white shadow-md shadow-indigo-500/10 
                                dark:shadow-indigo-500/5"
                        >
                            Create Project
                            <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                    </CardFooter>
                </form>
            </Card>
        </div>
    );
}
