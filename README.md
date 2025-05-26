# Pizza Palooza

A modern pizza ordering system built with React Router and data loading capabilities.

## Features

- Modern React-based UI with TypeScript
- Route-based data loading using React Router
- Responsive design for all devices
- Real-time order tracking
- Easy pizza customization
- Secure checkout process

## Tech Stack

- React 18+
- React Router
- TypeScript
- Vite
- ESLint for code quality

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd pizza-palooza
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

The application will start on `http://localhost:5173`

## Project Structure

```
pizza-palooza/
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/          # Route components
│   ├── services/       # API and data services
│   ├── types/          # TypeScript type definitions
│   └── App.tsx         # Main application component
├── public/
└── package.json
```

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview the production build
- `npm run lint` - Run ESLint

### Environment Variables

Create a `.env` file in the root directory to configure environment variables:

```
VITE_API_URL=http://localhost:3000
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details

## Acknowledgments

- React Router team for the excellent routing solution
- TypeScript team for type safety
- Vite team for blazing fast development experience

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
