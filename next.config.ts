import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    outputFileTracingIncludes: {
        "/**": [
            "components/ai-input/**/*",
            "components/texts/**/*",
            "components/buttons/**/*",
        ],
    },
};

export default nextConfig;
