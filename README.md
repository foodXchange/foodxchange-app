# FoodXchange Frontend

Modern React application for the FoodXchange B2B food trading platform.

## Features

- 🔐 Role-based authentication (Buyer, Seller, Admin, Contractor, Agent)
- 📊 Dynamic dashboards for each user role
- 🛒 Product catalog with search and filtering
- 📝 RFQ (Request for Quotation) management
- 📦 Order tracking and management
- 🏢 Company profile management
- 📈 Analytics and reporting

## Technology Stack

- React 18
- React Router v6
- Axios for API calls
- Lucide React for icons
- CSS Modules for styling

## Getting Started

### Prerequisites

- Node.js 16+ installed
- Backend API running on http://localhost:5000

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Create `.env` file:
   ```
   REACT_APP_API_URL=http://localhost:5000/api
   ```

4. Start the development server:
   ```bash
   npm start
   ```

The app will run on http://localhost:3000

## Test Credentials

- **Buyer**: buyer@foodxchange.com / test123
- **Seller**: seller@foodxchange.com / test123
- **Admin**: admin@foodxchange.com / test123

## Project Structure

```
src/
├── components/     # Reusable components
├── context/        # React Context providers
├── pages/          # Page components
├── services/       # API services
├── styles/         # Global styles
└── utils/          # Utility functions
```

## Available Scripts

- `npm start` - Run development server
- `npm test` - Run tests
- `npm run build` - Build for production
- `npm run eject` - Eject from Create React App

## Contributing

1. Create a feature branch
2. Make your changes
3. Submit a pull request

## License

Private - FoodXchange © 2025
