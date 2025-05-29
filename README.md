# 🍕 PizzaPalooza

A modern React frontend project that lets users browse a pizza menu, build their order, and submit it with just a few details — no login required. Built with a focus on user experience and responsive design, this project demonstrates core React concepts like state management, forms, routing, and API interaction.

![PizzaPalooza Screenshot](./public/pizza-pattern.png)

---

## 🚀 Features

### 🧑‍🍳 User

- No authentication required
- Enter name, phone number, and address to place an order
- GPS location autofill option for address (if user grants permission)
- Mark an order as **priority** (adds 20% to total price)
- Search for an order by unique order ID
- Upgrade an existing order to **priority** after it's placed

### 🍕 Menu

- Dynamic pizza menu loaded from API
- Responsive grid layout displaying multiple pizzas per row
- Displays pizza names, ingredients, prices, and availability status
- Visual indicators for sold-out items

### 🛒 Cart

- Add one or more pizzas to cart
- Increase/decrease quantity or remove pizzas
- Persistent cart overview at bottom of screen
- Automatically updates total price (including priority fee if selected)

### 📦 Order

- Place order by submitting a form with user and cart data
- Sends a `POST` request to API
- Payment is on delivery — no payment processing required
- Each order receives a unique ID for lookup

---

## 🛠️ Tech Stack

- **React 18** - Modern UI library
- **TypeScript** - Type safety and better developer experience
- **React Router** – Page navigation and routing
- **Context API** – Global state management (e.g., cart, orders)
- **Vite** – Lightning-fast development environment
- **Tailwind CSS** – Utility-first CSS framework for styling
  - Custom color palette with pizza-themed colors
  - Responsive design with mobile-first approach
  - Custom component classes for buttons, cards, and inputs
- **Custom Hooks** – For features like geolocation and form handling

---

## 🎨 Design System

### Colors

- **Primary** - Red tones for main actions and branding
- **Cheese** - Amber tones for secondary elements
- **Crust** - Brown tones for warm accents
- **Basil/Olive** - Green tones for fresh/eco-friendly elements
- **Surface** - Neutral backgrounds and containers
- **Text** - Text hierarchy with primary, secondary, and light variants

### Components

- **Buttons** - Primary, secondary, and outline variants
- **Cards** - For menu items, features, and content containers
- **Inputs** - Styled form elements with focus states
- **Layout** - Responsive grid and flex layouts

---

## 📁 Project Structure

```
src/
├── ui/              # Shared UI components (Header, Footer, etc.)
├── features/        # Domain logic organized by feature
│   ├── cart/        # Cart functionality
│   ├── menu/        # Menu display and filtering
│   ├── order/       # Order creation and management
│   └── user/        # User information handling
├── services/        # API calls and external services
├── utils/           # Utility functions and helpers
├── types/           # TypeScript type definitions
├── index.css        # Global styles and Tailwind directives
├── App.tsx          # Main app component with routing
└── main.tsx         # Entry point
```
