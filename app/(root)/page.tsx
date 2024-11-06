import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Btn03 } from "@/components/buttons/btn-03";
import Text_01 from "@/components/texts/text-01";
import AIInput_04 from "@/components/inputs/ai-input-04";

export default function Home() {
    const categories = [
        {
            id: 1,
            title: "Text Components",
            href: "/components/texts",
            component: <Text_01 />,
            count: 6,
        },
        {
            id: 2,
            title: "Button Components",
            href: "/components/buttons",
            component: <Btn03 attractRadius={30} />,
            count: 8,
        },
        {
            id: 3,
            title: "AI Input Components",
            href: "/components/ai-input",
            component: <AIInput_04 />,
            count: 20,
        },
    ];

    const installCommand =
        "bunx shadcn@latest add https://kokonut.dev/registry/my-component.json";

    return (
        <main className="bg-white dark:bg-black/5">
            <div className="pt-16">
                <div className="grid grid-rows-[auto_1fr_auto] min-h-screen p-1 lg:p-4 pb-20 gap-12 sm:p-16">
                    <div className="space-y-6 text-center pt-4 my-12">
                        <div className="inline-block">
                            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-zinc-800 to-zinc-600 dark:from-zinc-100 dark:to-zinc-400">
                                UI Components for free.
                            </h1>
                            <div className="h-[0.5px] w-full bg-gradient-to-r from-zinc-400 to-zinc-200 dark:from-zinc-600 dark:to-zinc-800 mt-2 rounded-full" />
                        </div>

                        <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
                            A collection of modern, interactive, customizable UI
                            components built with shadcn & TailwindCSS. Thanks
                            to{" "}
                            <Link
                                href="https://ui.shadcn.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-zinc-900 dark:text-white hover:underline"
                            >
                                @shadcn CLI
                            </Link>
                            , installation is easy.
                        </p>
                        <div className="flex items-center justify-center gap-2 mt-8">
                            <div className="relative group">
                                <div className="flex items-center gap-2">
                                    <div className="px-4 py-2 text-sm font-medium rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100">
                                        {installCommand}
                                    </div>
                                </div>
                                <div className="absolute -bottom-2 left-0 right-0 h-[2px] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <Link
                                href="/components/buttons"
                                className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg 
                                    bg-zinc-900 dark:bg-zinc-100 
                                    text-white dark:text-zinc-900 
                                    hover:bg-zinc-800 dark:hover:bg-zinc-200 
                                    transition-colors duration-200"
                            >
                                <span className="font-medium">
                                    Browse Components
                                </span>
                                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <div className="text-center">
                            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-200">
                                Component Categories
                            </h2>
                            <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                                Browse our collection by category
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto px-4">
                            {categories.map((category) => (
                                <div
                                    key={category.id}
                                    className="group relative p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm hover:shadow-md transition-all duration-200"
                                >
                                    <div className="aspect-video flex items-center justify-center mb-4 rounded-lg">
                                        <div className="pointer-events-auto w-full h-full flex items-center justify-center">
                                            {category.component}
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                                                {category.title}
                                            </h3>
                                            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                                                {category.count} components
                                            </p>
                                        </div>
                                        <ArrowRight className="w-5 h-5 text-zinc-400 dark:text-zinc-600 transition-transform group-hover:translate-x-1" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="text-sm text-center text-zinc-600 dark:text-zinc-400">
                        Built by{" "}
                        <a
                            href="https://x.com/dorian_baffier"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-zinc-900 dark:text-white hover:underline"
                        >
                            @Dorian
                        </a>
                    </div>
                </div>
            </div>
        </main>
    );
}
