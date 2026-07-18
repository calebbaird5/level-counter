# Level Counter

A modern React starter application built with **Vite**, **React**, **Tailwind CSS**, and **shadcn/ui**.

## Tech Stack

- ⚛️ React
- ⚡ Vite
- 🎨 Tailwind CSS
- 🧩 shadcn/ui
- 📦 npm

## Getting Started

### Prerequisites

- Node.js 20+
- npm

### Installation

Clone the repository and install dependencies:

```bash
git clone <repository-url>
cd Bank
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

Open your browser to:

```
http://localhost:5173
```

### Build

Create a production build:

```bash
npm run build
```

### Preview

Preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
.
├── public/
├── src/
│   ├── components/
│   ├── lib/
│   ├── assets/
│   ├── App.tsx
│   └── main.tsx
├── package.json
└── README.md
```

## UI Components

This project uses **shadcn/ui** for reusable, accessible UI components.

To add a new component:

```bash
npx shadcn@latest add button
```

Replace `button` with any component available from the shadcn/ui documentation.

## Styling

Styling is powered by **Tailwind CSS**. Global styles can be found in:

```
src/index.css
```

## Scripts

| Command           | Description                  |
|-------------------|------------------------------|
| `npm run dev`     | Start the development server |
| `npm run build`   | Create a production build    |
| `npm run preview` | Preview the production build |
| `npm run lint`    | Run ESLint                   |

## License

This project is available under the MIT License.
