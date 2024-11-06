"use client";

import React from "react";

export default function Text_01() {
    return (
        <div className="flex items-center justify-center">
            <div className="relative px-4 py-2 overflow-hidden">
                <h1 className="text-4xl sm:text-3xl font-bold shimmer-text">
                    Classy Shimmer
                </h1>
            </div>
            <style>{`
                .shimmer-text {
                    --shimmer-color-start: #000;
                    --shimmer-color-mid: #666;
                    background: linear-gradient(
                        90deg,
                        var(--shimmer-color-start) 0%,
                        var(--shimmer-color-start) 40%,
                        var(--shimmer-color-mid) 50%,
                        var(--shimmer-color-start) 60%,
                        var(--shimmer-color-start) 100%
                    );
                    background-size: 200% 100%;
                    -webkit-background-clip: text;
                    background-clip: text;
                    color: transparent;
                    animation: shimmer 2.5s infinite linear;
                }

                @media (prefers-color-scheme: dark) {
                    .shimmer-text {
                        --shimmer-color-start: #fff;
                        --shimmer-color-mid: #9333EA;
                    }
                }

                @keyframes shimmer {
                    0% { background-position: 100% 0; }
                    100% { background-position: -100% 0; }
                }
            `}</style>
        </div>
    );
}
