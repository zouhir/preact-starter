# Preact + TypeScript Starter

A minimal Preact starter with TypeScript, Tailwind CSS, and preact-iso routing.

## Stack

- **Preact** - Fast 3kB React alternative
- **TypeScript** - Type safety
- **Vite** - Fast dev server and builds
- **Tailwind CSS** - Utility-first CSS
- **preact-iso** - Lightweight router
- **@preact/signals** - Reactive state management

## Getting Started

```bash
npm install
npm run dev
```

## Project Structure

```
src/
├── components/     # Reusable UI components
├── routes/         # Page components
│   └── Home/
├── store/          # State management (AppModel pattern)
├── app.tsx         # Router setup
├── main.tsx        # Entry point
└── index.css       # Tailwind import
```

## State Management

Uses a class-based AppModel with Preact Signals, passed via context:

```tsx
// Access store in components
import { useStore } from './store'

function MyComponent() {
  const store = useStore()
  // store.user, store.someOtherDomain, etc.
}
```

## Scripts

- `npm run dev` - Start dev server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
