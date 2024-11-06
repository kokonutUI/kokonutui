<p align="center">
  <a href="https://kokonut.dev" target="_blank">
    <picture>
      <source media="(prefers-color-scheme: light)" srcset="https://ferf1mheo22r9ira.public.blob.vercel-storage.com/logo-text-black-5nhu7g0JeNUhIuSzJyMXc11GATRT5V.png">
      <source media="(prefers-color-scheme: dark)" srcset="https://ferf1mheo22r9ira.public.blob.vercel-storage.com/logo-text-white-ny4myAjOAftDwH1fsmwyA265oUcecd.png">
      <img alt="Tailwind CSS" src="https://raw.githubusercontent.com/kokonut-labs/kokonutui/refs/heads/main/public/logo-black.svg" width="350" height="120" style="max-width: 100%;">
    </picture>
  </a>
</p>

## Overview

Access a collection of free-to-use, standalone components with KokonutUI. Each component is designed with TailwindCSS, ShadCN, and optional animations powered by Framer Motion.

![KokonutUI](https://ferf1mheo22r9ira.public.blob.vercel-storage.com/intro-7o9ffrw4AtH1YC39yYZp3cdZmpAFys.png)

## Getting Started

KokonutUI components are meant to be use with Next.js projects that use TailwindCSS and shadcn. However they are also compatible with any React Project.

### Using Shadcn CLI.

All components can be installed using [shadcn CLI](https://ui.shadcn.com/docs/cli), which make it really easy.

```bash
# npx, bunx...
bunx shadcn@latest add https://kokonut.dev/registry/ai-input-01.json
```

```jsx
import AIInput_01 from "@/components/ui/ai-input-01";

export function AIInput01Demo() {
    return <AIInput_01 />;
}
```

### Manual installation

-   **Copy and Paste**: Select and copy the component code you want to use.

-   **Check Requirements**: Some components need additional libraries (e.g., Framer Motion, Lucide React). Required libraries are listed at the top-right corner of each component.
-   **Customize as Needed**: Modify styles and animations to match your project’s look and feel or simply use the default one.

## Contributing

They are no way to contribute for now.

## License

This project is licensed under the MIT License.

## Author

Developed by [@dorian](https://x.com/dorian_baffier)
