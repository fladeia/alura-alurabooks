# Base project with Vite, TypeScript and Tailwind.

## Install Vite

```bash
  npm create vite@latest
  cd my-project
  npm install
  npm run dev
```

## Install Tailwind

### Install Tailwind
- Install tailwindcss and its peer dependencies via npm, and then run the init command to generate both tailwind.config.cjs and postcss.config.cjs.

```bash	
  npm install -D tailwindcss postcss autoprefixer
  npx tailwindcss init -p
```

### Configure your template paths 
- Add the paths to all of your template files in your tailwind.config.cjs file.

```bash	
  /** @type {import('tailwindcss').Config} */
  module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }
```

### Add the Tailwind directives to your CSS
- Add the @tailwind directives for each of Tailwind’s layers to your ./src/index.css file.

```bash
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
```

