# 🍕 PizzaPalooza

![PizzaPalooza Screenshot](./public/pizza-pattern.png)

A modern React application for ordering pizza online with a focus on user experience and responsive design. PizzaPalooza allows users to browse a menu, customize their order, and place it without requiring an account. This project demonstrates modern React patterns, TypeScript, and state management techniques.

## ✨ Features

### 🍕 Menu & Ordering

- **Dynamic Menu**: Fetches pizza menu from API with real-time availability
- **Detailed Pizza Information**: View name, ingredients, price, and availability status
- **Cart Management**: Add, remove, and adjust quantities of pizzas in your cart
- **Order Placement**: Submit delivery details and place orders without registration
- **Order Lookup**: Search for existing orders using order ID

### 💰 Priority Orders

- **Priority Option**: Mark orders as priority during checkout (20% price increase)
- **Priority Upgrade**: Upgrade existing orders to priority status
- **Confirmation Dialog**: Clear pricing information with confirmation before upgrading

### 🛒 Cart Experience

- **Persistent Cart**: Cart remains visible while browsing
- **Empty Cart State**: Styled empty cart view with call-to-action
- **Price Breakdown**: Itemized pricing including base price, delivery fee, and priority fee
- **Ingredient Display**: View all ingredients for each pizza in cart

### 🧠 Smart UX Features

- **Loading States**: Visual feedback during API operations
- **Confirmation Dialogs**: Prevent accidental actions with clear confirmations
- **Responsive Design**: Works seamlessly on mobile, tablet, and desktop
- **Form Validation**: Input validation for required fields

## 🛠️ Technology Stack

- **React 18**: Modern component-based UI development
- **TypeScript**: Static typing for improved developer experience and code quality
- **React Router 6**: Client-side routing with data loading and mutations
- **Redux**: State management for cart and application state
- **Tailwind CSS**: Utility-first styling approach with custom design system

## 🏗️ Architecture

- **Feature-Based Structure**: Code organized by domain features
- **Component Composition**: Reusable UI components with clear responsibilities
- **Data Fetching Pattern**: React Router loaders and actions for data operations
- **Type Safety**: Comprehensive TypeScript types for API responses and app state

## 📁 Project Structure

```
src/
├── ui/              # Reusable UI components (buttons, dialogs, etc.)
├── features/        # Domain-specific features
│   ├── cart/        # Cart functionality and components
│   ├── menu/        # Menu display and filtering
│   ├── order/       # Order creation, lookup, and management
│   └── shared/      # Shared components across features
├── services/        # API integration and external services
├── utils/           # Helper functions and utilities
├── constants/       # Application constants and configuration
├── types/           # TypeScript type definitions
├── App.tsx          # Main application component with routing
└── main.tsx         # Application entry point
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16+)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/pizza-palooza.git
cd pizza-palooza

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run preview`: Preview production build locally

## 🔮 Future Enhancements

Potential features for future development:

- User accounts and order history
- Pizza customization options
- Real-time order tracking
- Payment processing integration
- Admin dashboard for restaurant management

---

Built with ❤️ and 🍕
