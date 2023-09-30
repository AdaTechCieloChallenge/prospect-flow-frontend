# Prospect Flow Frontend

To this project I am using this stack to quickly develop an user interface.
Follow the instructions below to get it up and running in your local machine.

If clone, just run locally after the cloning process:

```bash
npm install
```

1. Run ProspectFlowBackend first

2. And then run the ProspectFlowFrontEnd

3. Start adding some data.

Its is going to install all dependencies required.
To scaffold, keep reading.

## React + TypeScript + Vite + Shadcn/ui + Tailwind

```bash
npm create vite@latest
```

```bash
npm install
```

```bash
npm install -D tailwindcss postcss autoprefixer
```

```bash
npx tailwindcss init -p
```

## Edit tsconfig.json

Add the code below to the compilerOptions of your tsconfig.json so your app can resolve paths without error

```json
"baseUrl": ".",
"paths": {
  "@/*": ["./src/*"]
}
```

```bash
npm i -D @types/node
```

## Update vite.config.ts

Add the code below to the vite.config.ts so your app can resolve paths without error

```ts
import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
```

## Run the Shadcn CLI

```bash
npx shadcn-ui@latest init
```

## Configure components.json

```bash
Would you like to use TypeScript (recommended)? no / yes
Which style would you like to use? › Default
Which color would you like to use as base color? › Slate
Where is your global CSS file? › › src/index.css
Do you want to use CSS variables for colors? › no / yes
Where is your tailwind.config.js located? › tailwind.config.js
Configure the import alias for components: › @/components
Configure the import alias for utils: › @/lib/utils
Are you using React Server Components? › no / yes (no)
```

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

```bash
npm run dev
```
