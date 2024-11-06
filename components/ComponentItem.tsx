import { getComponent } from "@/lib/action";
import { CopyWrapper } from "@/lib/copy-wrapper";
import { Package, Terminal } from "lucide-react";
import { useEffect, useState, useTransition } from "react";

interface ComponentItemProps {
    item: {
        id: number;
        title: string;
        component: React.ReactNode;
        fileName: string;
        dependencies?: string[];
    };
    folder: string;
}

export function ComponentItem({ item, folder }: ComponentItemProps) {

    return (
        <div
            id={`component-${item.id}`}
            className="group relative w-full p-4 my-2 sm:p-6 lg:p-8 rounded-xl border border-zinc-200/80 dark:border-zinc-800/80 
            backdrop-blur-sm shadow-xs transition-all duration-500
            hover:border-zinc-300 dark:hover:border-zinc-700"
        >
            <div className="mb-4 sm:mb-6 space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div className="flex items-center justify-between sm:justify-start gap-2">
                        <h3 className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                            Component {item.id}
                        </h3>
                        <div className="block sm:hidden">
                            <CopyWrapper
                                fileName={item.fileName}
                                folder={folder}
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        <div className="hidden sm:block">
                            <CopyWrapper
                                fileName={item.fileName}
                                folder={folder}
                            />
                        </div>
                        {item.dependencies && (
                            <div className="flex flex-wrap gap-1">
                                {item.dependencies.map((dep, index) => (
                                    <div
                                        key={`${item.id}-${index}`}
                                        className="flex items-center gap-1 px-2 py-0.5 rounded-full 
                                        bg-purple-50 dark:bg-purple-900/30 
                                        border border-purple-200 dark:border-purple-800"
                                    >
                                        <Package className="w-3 h-3 text-purple-600 dark:text-purple-400" />
                                        <span className="text-xs font-medium text-purple-600 dark:text-purple-400">
                                            {dep}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
                <h2 className="text-xl font-semibold text-zinc-800 dark:text-zinc-200">
                    {item.title}
                </h2>
                <div
                    className="h-px w-full bg-gradient-to-r from-zinc-200 via-zinc-300 to-zinc-200 
                    dark:from-zinc-800 dark:via-zinc-700 dark:to-zinc-800 opacity-50"
                />
            </div>
            <div className="relative my-12 flex items-center justify-center">
                {item.component}
            </div>
        </div>
    );
}
