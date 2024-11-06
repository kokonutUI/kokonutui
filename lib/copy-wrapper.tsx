"use client";

import { useState } from "react";
import { CopyOverlay } from "./copy-overlay";
import { AnimatePresence } from "framer-motion";
import { CopyButton } from "./copy-button";

interface CopyWrapperProps {
    text: string;
}

export function CopyWrapper({ text }: CopyWrapperProps) {
    const [showOverlay, setShowOverlay] = useState(false);

    const handleCopy = () => {
        setShowOverlay(true);
        navigator.clipboard.writeText(text);
        setTimeout(() => setShowOverlay(false), 1000);
    };

    return (
        <>
            <CopyButton onClick={handleCopy} />
            <AnimatePresence>
                <CopyOverlay show={showOverlay} />
            </AnimatePresence>
        </>
    );
}
