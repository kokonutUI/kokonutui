import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AIInput_04 from "@/components/inputs/ai-input-04";
import Text_02 from "@/components/texts/text-02";
import Pricing_01 from "@/components/pricing/pricing-01";
import { CommandRotator } from "@/components/command-rotator";
import Btn03 from "@/components/buttons/btn-03";
import Arrow25 from "@/components/icons/arrow6";
import Card_01 from "@/components/cards/card-01";

export default function Home() {
    const categories = [
        {
            id: 1,
            title: "Button Components",
            href: "/components/buttons",
            component: <Btn03 attractRadius={30} />,
            count: 10,
        },
        {
            id: 2,
            title: "Text Components",
            href: "/components/texts",
            component: <Text_02 text="Sliced" />,
            count: 6,
        },
        {
            id: 3,
            title: "AI Input Components",
            href: "/components/ai-input",
            component: <AIInput_04 />,
            count: 20,
        },
        {
            id: 4,
            title: "Card Components",
            href: "/components/cards",
            component: <Card_01 />,
            count: 6,
        },
        {
            id: 5,
            title: "Pricing Components",
            href: "/components/pricing",
            component: (
                <Pricing_01
                    price="42"
                    description="Ready for your space adventure?"
                />
            ),
            count: 5,
        },
    ];

    const baseCommand =
        "shadcn@latest add https://kokonut.dev/registry/my-component.json";

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

                        <div className="relative">
                            <p className="text-base sm:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
                                A collection of modern, interactive,
                                customizable UI components built with shadcn &
                                TailwindCSS. Easy to install
                                <Arrow25 className="inline-block ml-1 w-6 h-6 align-middle mt-1" />
                            </p>
                        </div>

                        <div className="flex items-center justify-center gap-2 mt-8">
                            <div className="relative group">
                                <div className="flex items-center gap-2">
                                    <CommandRotator baseCommand={baseCommand} />
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
                            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-zinc-800 to-zinc-600 dark:from-zinc-100 dark:to-zinc-400">
                                Explore all components.
                            </h2>
                            <p className="mt-2 text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
                                From buttons to AI inputs, find the perfect
                                component for your next project.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto px-4">
                            {categories.slice(0, 3).map((category) => (
                                <div
                                    key={category.id}
                                    className="group relative p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col h-full"
                                >
                                    <div className="flex-1 aspect-video flex items-center justify-center mb-4 rounded-lg overflow-hidden">
                                        <div className="pointer-events-auto w-full h-full flex items-center justify-center max-h-[200px]">
                                            {category.component}
                                        </div>
                                    </div>
                                    <Link
                                        href={category.href}
                                        className="flex items-center justify-between mt-auto pt-4 border-t border-zinc-200 dark:border-zinc-800 group/link"
                                    >
                                        <div>
                                            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                                                {category.title}
                                            </h3>
                                            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                                                {category.count} components
                                            </p>
                                        </div>
                                        <ArrowRight className="w-5 h-5 text-zinc-400 dark:text-zinc-600 transition-transform group-hover/link:translate-x-1" />
                                    </Link>
                                </div>
                            ))}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto px-2 sm:px-4 mt-6">
                            {categories.slice(3).map((category) => (
                                <div
                                    key={category.id}
                                    className="group relative p-3 sm:p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col h-full"
                                >
                                    <div className="flex-1 flex items-center justify-center mb-4 rounded-lg overflow-hidden min-h-[250px] sm:min-h-[300px]">
                                        <div className="pointer-events-auto w-full h-full flex items-center justify-center scale-[0.90]">
                                            {category.component}
                                        </div>
                                    </div>
                                    <Link
                                        href={category.href}
                                        className="flex items-center justify-between mt-auto pt-4 border-t border-zinc-200 dark:border-zinc-800 group/link"
                                    >
                                        <div>
                                            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                                                {category.title}
                                            </h3>
                                            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                                                {category.count} components
                                            </p>
                                        </div>
                                        <ArrowRight className="w-5 h-5 text-zinc-400 dark:text-zinc-600 transition-transform group-hover/link:translate-x-1" />
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
