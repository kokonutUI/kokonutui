import { Copy, Check } from "lucide-react";

interface CopyButtonProps {
    onClick?: () => void;
}

export function CopyButton({ onClick }: CopyButtonProps) {
    return (
        <button
            type="button"
            onClick={onClick}
            className="relative flex items-center gap-1 px-3 py-2 rounded-lg text-sm
                bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700
                text-zinc-600 dark:text-zinc-400 transition-colors
                touch-manipulation"
        >
            <Copy className="w-4 h-4" />
        </button>
    );
}
