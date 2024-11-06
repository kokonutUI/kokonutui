export default function ComponentsPage() {
    return (
        <div className="pt-16">
            <div className="grid grid-rows-[auto_1fr_auto] min-h-screen p-4 pb-20 gap-12 sm:p-16">
                <div className="space-y-6 text-center pt-4 my-12">
                    <div className="inline-block">
                        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-zinc-800 to-zinc-600 dark:from-zinc-100 dark:to-zinc-400">
                            Component Library
                        </h1>
                        <div className="h-[0.5px] w-full bg-gradient-to-r from-zinc-400 to-zinc-200 dark:from-zinc-600 dark:to-zinc-800 mt-2 rounded-full" />
                    </div>
                    <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                        Browse our collection of UI components for your next
                        project.
                    </p>
                </div>
            </div>
        </div>
    );
}
