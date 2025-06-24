import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './contexts/AuthContext';
import PrivateRoute from './components/common/PrivateRoute.jsx';

// Auth Pages
import Login from './pages/auth/Login.jsx';
import Register from './pages/auth/Register.jsx';
import ForgotPassword from './pages/auth/ForgotPassword.jsx';

// Landing Pages
import HomePage from './pages/landing/HomePage.jsx';
import AboutPage from './pages/landing/AboutPage.jsx';
import BuyersLanding from './pages/landing/BuyersLanding.jsx';
import SellersLanding from './pages/landing/SellersLanding.jsx';
import AgentsLanding from './pages/landing/AgentsLanding.jsx';
import ContractorsLanding from './pages/landing/ContractorsLanding.jsx';

// Buyer Pages
import BuyerDashboard from './pages/buyer/BuyerDashboard.jsx';
import RFQList from './pages/buyer/RFQList.jsx';
import CreateRFQ from './pages/buyer/CreateRFQ.jsx';
import RFQDetails from './pages/buyer/RFQDetails.jsx';
import OrderList from './pages/buyer/OrderList.jsx';
import OrderDetails from './pages/buyer/OrderDetails.jsx';
import ProductCatalog from './pages/buyer/ProductCatalog.jsx';
import SupplierDirectory from './pages/buyer/SupplierDirectory.jsx';

// Seller Pages
import SellerDashboard from './pages/seller/SellerDashboard.jsx';
import SellerProducts from './pages/seller/SellerProducts.jsx';
import AddProduct from './pages/seller/AddProduct.jsx';
import SellerRFQs from './pages/seller/SellerRFQs.jsx';
import SellerOrders from './pages/seller/SellerOrders.jsx';
import Proposals from './pages/seller/Proposals.jsx';

// Admin Pages
import AdminDashboard from './pages/admin/AdminDashboard.jsx';
import UserManagement from './pages/admin/UserManagement.jsx';
import CompanyManagement from './pages/admin/CompanyManagement.jsx';
import AdminProducts from './pages/admin/AdminProducts.jsx';
import AdminOrders from './pages/admin/AdminOrders.jsx';
import Reports from './pages/admin/Reports.jsx';
import Settings from './pages/admin/Settings.jsx';

// Contractor Pages
import ContractorDashboard from './pages/contractor/ContractorDashboard.jsx';
import Projects from './pages/contractor/Projects.jsx';

// Agent Pages
import AgentDashboard from './pages/agent/AgentDashboard.jsx';
import Leads from './pages/agent/Leads.jsx';
import Commissions from './pages/agent/Commissions.jsx';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#363636',
              color: '#fff',
            },
            success: {
              style: {
                background: '#059669',
              },
            },
            error: {
              style: {
                background: '#DC2626',
              },
            },
          }}
        />
        
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/buyers" element={<BuyersLanding />} />
          <Route path="/sellers" element={<SellersLanding />} />
          <Route path="/agents" element={<AgentsLanding />} />
          <Route path="/contractors" element={<ContractorsLanding />} />
          
          {/* Auth Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          
          {/* Buyer Routes */}
          <Route path="/buyer" element={<PrivateRoute allowedRoles={['buyer']} />}>
            <Route path="dashboard" element={<BuyerDashboard />} />
            <Route path="rfqs" element={<RFQList />} />
            <Route path="rfqs/new" element={<CreateRFQ />} />
            <Route path="rfqs/:id" element={<RFQDetails />} />
            <Route path="orders" element={<OrderList />} />
            <Route path="orders/:id" element={<OrderDetails />} />
            <Route path="products" element={<ProductCatalog />} />
            <Route path="suppliers" element={<SupplierDirectory />} />
            <Route index element={<Navigate to="dashboard" replace />} />
          </Route>
          
          {/* Seller Routes */}
          <Route path="/seller" element={<PrivateRoute allowedRoles={['seller']} />}>
            <Route path="dashboard" element={<SellerDashboard />} />
            <Route path="products" element={<SellerProducts />} />
            <Route path="products/new" element={<AddProduct />} />
            <Route path="rfqs" element={<SellerRFQs />} />
            <Route path="proposals" element={<Proposals />} />
            <Route path="orders" element={<SellerOrders />} />
            <Route index element={<Navigate to="dashboard" replace />} />
          </Route>
          
          {/* Admin Routes */}
          <Route path="/admin" element={<PrivateRoute allowedRoles={['admin']} />}>
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="users" element={<UserManagement />} />
            <Route path="companies" element={<CompanyManagement />} />
            <Route path="products" element={<AdminProducts />} />
            <Route path="orders" element={<AdminOrders />} />
            <Route path="reports" element={<Reports />} />
            <Route path="settings" element={<Settings />} />
            <Route index element={<Navigate to="dashboard" replace />} />
          </Route>
          
          {/* Contractor Routes */}
          <Route path="/contractor" element={<PrivateRoute allowedRoles={['contractor']} />}>
            <Route path="dashboard" element={<ContractorDashboard />} />
            <Route path="projects" element={<Projects />} />
            <Route index element={<Navigate to="dashboard" replace />} />
          </Route>
          
          {/* Agent Routes */}
          <Route path="/agent" element={<PrivateRoute allowedRoles={['agent']} />}>
            <Route path="dashboard" element={<AgentDashboard />} />
            <Route path="leads" element={<Leads />} />
            <Route path="commissions" element={<Commissions />} />
            <Route index element={<Navigate to="dashboard" replace />} />
          </Route>
          
          {/* Catch all - redirect to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;