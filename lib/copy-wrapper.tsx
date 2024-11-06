"use client";

import { useState, useTransition } from "react";
import { CopyOverlay } from "./copy-overlay";
import { AnimatePresence } from "framer-motion";
import { CopyButton } from "./copy-button";
import { Terminal } from "lucide-react";
import { getComponent } from "./action";

interface CopyWrapperProps {
    fileName: string;
    folder: string;
}

const prePath = process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : `https://${process.env.NEXT_PUBLIC_SITE_URL}`;

export function CopyWrapper({ fileName, folder }: CopyWrapperProps) {
    const [showOverlay, setShowOverlay] = useState(false);
    const [isLoading, startTransition] = useTransition();

    const handleCopy = () => {
        startTransition(async () => {
            /**
             * Call server action
             */
            const component = await getComponent(fileName, folder);
            /**
             * Simulate for animation.
             */
            setShowOverlay(true);
            navigator.clipboard.writeText(component);
            setTimeout(() => setShowOverlay(false), 1000);
        });
    };

    const handleCLI = () => {
        setShowOverlay(true);
        navigator.clipboard.writeText(
            `bunx shadcn@latest add ${prePath}/registry/${fileName?.replace(
                ".tsx",
                ".json"
            )}`
        );
        setTimeout(() => setShowOverlay(false), 1000);
    };

    return (
        <>
            <div className="flex items-center gap-1">
                <button
                    type="button"
                    onClick={handleCLI}
                    className="inline-flex items-center ml-2 px-3 py-2 text-sm rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700"
                >
                    <Terminal className="w-4 h-4" />
                </button>
                <CopyButton onClick={handleCopy} />
            </div>
            <AnimatePresence>
                <CopyOverlay show={showOverlay} />
            </AnimatePresence>
        </>
    );
}
