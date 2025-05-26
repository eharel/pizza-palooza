# 🍕 Pizza Order App

A simple React frontend project that lets users browse a menu, build their pizza order, and submit it with just a few details — no login required. Built as a hands-on learning project for mastering core React concepts like state management, forms, routing, and API interaction.

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
- Displays pizza names, ingredients, prices, and availability

### 🛒 Cart

- Add one or more pizzas to cart
- Increase/decrease quantity or remove pizzas
- Automatically updates total price (including priority fee if selected)

### 📦 Order

- Place order by submitting a form with user and cart data
- Sends a `POST` request to API
- Payment is on delivery — no payment processing required
- Each order receives a unique ID for lookup

---

## 🛠️ Tech Stack

- **React 18**
- **React Router** – Page navigation
- **Context API** – Global state management (e.g., cart, orders)
- **Vite** – Lightning-fast development environment
- **Tailwind CSS** (optional, if used for styling)
- **Custom Hooks** – For features like geolocation and form handling

---

## 📁 Project Structure (Planned)

src/
├── ui/ # Shared UI components (buttons, pizza item, cart item, etc.)
├── features/ # Domain logic (cart, user, order, menu)
├── services/ # API calls
├── utils/ # Utility functions and helpers
├── types/ # TypeScript type definitions
├── App.tsx # Main app component with routing
└── main.tsx # Entry point
