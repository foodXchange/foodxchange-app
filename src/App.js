import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/common/ProtectedRoute';

// Auth pages
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';

// Landing pages
import HomePage from './pages/Home/HomePage';

// Buyer pages
import BuyerDashboard from './pages/Buyer/Dashboard/BuyerDashboard';
import BuyerRFQs from './pages/Buyer/RFQs/RFQList';
import BuyerOrders from './pages/Buyer/Orders/OrderList';
import BuyerSuppliers from './pages/Buyer/Suppliers/SupplierList';
import BuyerProducts from './pages/Buyer/Products/ProductList';

// Seller pages
import SellerDashboard from './pages/Seller/Dashboard/SellerDashboard';
import SellerProducts from './pages/Seller/Products/ProductList';
import SellerRFQs from './pages/Seller/RFQs/RFQList';
import SellerOrders from './pages/Seller/Orders/OrderList';

// Admin pages
import AdminDashboard from './pages/Admin/Dashboard/AdminDashboard';
import AdminUsers from './pages/Admin/Users/UserList';
import AdminCompanies from './pages/Admin/Companies/CompanyList';
import AdminProducts from './pages/Admin/Products/ProductList';
import AdminOrders from './pages/Admin/Orders/OrderList';
import AdminReports from './pages/Admin/Reports/Reports';

// Contractor pages
import ContractorDashboard from './pages/Contractor/Dashboard/ContractorDashboard';
import ContractorProjects from './pages/Contractor/Projects/ProjectList';

// Agent pages
import AgentDashboard from './pages/Agent/Dashboard/AgentDashboard';
import AgentClients from './pages/Agent/Clients/ClientList';

// Layouts
import BuyerLayout from './components/layout/BuyerLayout';
import SellerLayout from './components/layout/SellerLayout';
import AdminLayout from './components/layout/AdminLayout';
import ContractorLayout from './components/layout/ContractorLayout';
import AgentLayout from './components/layout/AgentLayout';

import './App.css';

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="App">
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Buyer routes */}
            <Route path="/buyer" element={
              <ProtectedRoute allowedRoles={['buyer']}>
                <BuyerLayout />
              </ProtectedRoute>
            }>
              <Route index element={<Navigate to="/buyer/dashboard" />} />
              <Route path="dashboard" element={<BuyerDashboard />} />
              <Route path="rfqs" element={<BuyerRFQs />} />
              <Route path="orders" element={<BuyerOrders />} />
              <Route path="suppliers" element={<BuyerSuppliers />} />
              <Route path="products" element={<BuyerProducts />} />
            </Route>

            {/* Seller routes */}
            <Route path="/seller" element={
              <ProtectedRoute allowedRoles={['seller']}>
                <SellerLayout />
              </ProtectedRoute>
            }>
              <Route index element={<Navigate to="/seller/dashboard" />} />
              <Route path="dashboard" element={<SellerDashboard />} />
              <Route path="products" element={<SellerProducts />} />
              <Route path="rfqs" element={<SellerRFQs />} />
              <Route path="orders" element={<SellerOrders />} />
            </Route>

            {/* Admin routes */}
            <Route path="/admin" element={
              <ProtectedRoute allowedRoles={['admin']}>
                <AdminLayout />
              </ProtectedRoute>
            }>
              <Route index element={<Navigate to="/admin/dashboard" />} />
              <Route path="dashboard" element={<AdminDashboard />} />
              <Route path="users" element={<AdminUsers />} />
              <Route path="companies" element={<AdminCompanies />} />
              <Route path="products" element={<AdminProducts />} />
              <Route path="orders" element={<AdminOrders />} />
              <Route path="reports" element={<AdminReports />} />
            </Route>

            {/* Contractor routes */}
            <Route path="/contractor" element={
              <ProtectedRoute allowedRoles={['contractor']}>
                <ContractorLayout />
              </ProtectedRoute>
            }>
              <Route index element={<Navigate to="/contractor/dashboard" />} />
              <Route path="dashboard" element={<ContractorDashboard />} />
              <Route path="projects" element={<ContractorProjects />} />
            </Route>

            {/* Agent routes */}
            <Route path="/agent" element={
              <ProtectedRoute allowedRoles={['agent']}>
                <AgentLayout />
              </ProtectedRoute>
            }>
              <Route index element={<Navigate to="/agent/dashboard" />} />
              <Route path="dashboard" element={<AgentDashboard />} />
              <Route path="clients" element={<AgentClients />} />
            </Route>

            {/* 404 */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
