import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

// Import EXISTING components from your original app
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import CreateRFQ from './pages/CreateRFQ';
import RFQList from './pages/RFQList';
import Orders from './pages/Orders';
import Profile from './pages/Profile';

// Import NEW components
import ProductDiscovery from './components/discovery/ProductDiscovery';
import SmartMatching from './components/matching/SmartMatching';
import MeetingScheduler from './components/meetings/MeetingScheduler';
import ComplianceDashboard from './components/compliance/ComplianceDashboard';
import AnalyticsDashboard from './components/analytics/AnalyticsDashboard';
import SampleRequestSystem from './components/samples/SampleRequestSystem';
import SupplierScorecard from './components/scorecard/SupplierScorecard';
//data import from components
import DataImport from './components/DataImport';
// Import auth context 
// import { AuthProvider } from './contexts/AuthContext';

function App() {
  const isLoggedIn = localStorage.getItem('token'); // Check if user is logged in

  return (
    <Router>
      <div className="App">
        {/* Navigation Bar */}
        <nav style={{ backgroundColor: '#fff', padding: '1rem', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Link to="/" style={{ fontSize: '1.5rem', fontWeight: 'bold', textDecoration: 'none' }}>
              <span style={{ color: '#f97316' }}>Food</span>
              <span style={{ color: '#14b8a6' }}>Xchange</span>
            </Link>
            
            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
              {/* Existing Features */}
              <div style={{ borderRight: '1px solid #e5e7eb', paddingRight: '1.5rem' }}>
                <span style={{ fontSize: '0.75rem', color: '#6b7280', marginRight: '1rem' }}>CORE</span>
                {isLoggedIn ? (
                  <>
                    <Link to="/dashboard" style={{ marginRight: '1rem', color: '#374151', textDecoration: 'none' }}>Dashboard</Link>
                    <Link to="/products" style={{ marginRight: '1rem', color: '#374151', textDecoration: 'none' }}>Products</Link>
                    <Link to="/rfqs" style={{ marginRight: '1rem', color: '#374151', textDecoration: 'none' }}>RFQs</Link>
                    <Link to="/orders" style={{ marginRight: '1rem', color: '#374151', textDecoration: 'none' }}>Orders</Link>
                    <Link to="/profile" style={{ color: '#374151', textDecoration: 'none' }}>Profile</Link>
                  </>
                ) : (
                  <>
                    <Link to="/login" style={{ marginRight: '1rem', color: '#374151', textDecoration: 'none' }}>Login</Link>
                    <Link to="/register" style={{ color: '#374151', textDecoration: 'none' }}>Register</Link>
                  </>
                )}
              </div>
              
              {/* New Features */}
              <div>
                <span style={{ fontSize: '0.75rem', color: '#6b7280', marginRight: '1rem' }}>NEW</span>
                <Link to="/discovery" style={{ marginRight: '1rem', color: '#f97316', textDecoration: 'none' }}>Discovery</Link>
                <Link to="/matching" style={{ marginRight: '1rem', color: '#f97316', textDecoration: 'none' }}>Smart Match</Link>
                <Link to="/meetings" style={{ marginRight: '1rem', color: '#f97316', textDecoration: 'none' }}>Meetings</Link>
                <Link to="/compliance" style={{ marginRight: '1rem', color: '#f97316', textDecoration: 'none' }}>Compliance</Link>
                <Link to="/analytics" style={{ marginRight: '1rem', color: '#f97316', textDecoration: 'none' }}>Analytics</Link>
                <Link to="/samples" style={{ marginRight: '1rem', color: '#f97316', textDecoration: 'none' }}>Samples</Link>
                <Link to="/scorecard" style={{ color: '#f97316', textDecoration: 'none' }}>Scorecard</Link>
                <Link to="/import" style={{ marginRight: '1rem', color: '#f97316', textDecoration: 'none' }}>Import Data</Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Routes */}
        <Routes>
          {/* Home/Landing Route */}
          <Route path="/" element={<Home />} />
          
          {/* EXISTING ROUTES - Your original FoodXchange features */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/create-rfq" element={<CreateRFQ />} />
          <Route path="/rfqs" element={<RFQList />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/profile" element={<Profile />} />
          
          {/* NEW ROUTES - RangeMe/ECRM inspired features */}
          <Route path="/discovery" element={<ProductDiscovery />} />
          <Route path="/matching" element={<SmartMatching />} />
          <Route path="/meetings" element={<MeetingScheduler />} />
          <Route path="/compliance" element={<ComplianceDashboard />} />
          <Route path="/analytics" element={<AnalyticsDashboard />} />
          <Route path="/samples" element={<SampleRequestSystem />} />
          <Route path="/scorecard" element={<SupplierScorecard />} />
          <Route path="/import" element={<DataImport />} />

        </Routes>
      </div>
    </Router>
  );
}

// Enhanced Home component showing both old and new features
function Home() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb' }}>
      {/* Hero Section */}
      <div style={{ background: 'linear-gradient(135deg, #f97316 0%, #14b8a6 100%)', color: 'white', padding: '4rem 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h1 style={{ fontSize: '3.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
            Welcome to FoodXchange
          </h1>
          <p style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>
            Your Complete B2B Food Trading Platform
          </p>
          <p style={{ fontSize: '1.125rem', opacity: 0.9 }}>
            Connecting Global Suppliers & Buyers with Smart Technology
          </p>
        </div>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '3rem 2rem' }}>
        {/* Existing Features Section */}
        <div style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem', color: '#1f2937' }}>
            Core Platform Features
          </h2>
          <p style={{ color: '#6b7280', marginBottom: '2rem' }}>
            Your existing tools for B2B food trading
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
            <Link to="/products" style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '0.5rem', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', textDecoration: 'none', color: 'inherit', border: '2px solid transparent', transition: 'all 0.3s' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem', color: '#1f2937' }}>📦 Product Catalog</h3>
              <p style={{ color: '#6b7280' }}>Browse and manage your product listings</p>
            </Link>
            
            <Link to="/rfqs" style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '0.5rem', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', textDecoration: 'none', color: 'inherit', border: '2px solid transparent', transition: 'all 0.3s' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem', color: '#1f2937' }}>📋 RFQ Management</h3>
              <p style={{ color: '#6b7280' }}>Create and manage requests for quotation</p>
            </Link>
            
            <Link to="/orders" style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '0.5rem', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', textDecoration: 'none', color: 'inherit', border: '2px solid transparent', transition: 'all 0.3s' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem', color: '#1f2937' }}>📑 Order Tracking</h3>
              <p style={{ color: '#6b7280' }}>Track and manage your orders</p>
            </Link>
            
            <Link to="/dashboard" style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '0.5rem', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', textDecoration: 'none', color: 'inherit', border: '2px solid transparent', transition: 'all 0.3s' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem', color: '#1f2937' }}>📊 Dashboard</h3>
              <p style={{ color: '#6b7280' }}>View your business overview</p>
            </Link>
          </div>
        </div>

        {/* New Features Section */}
        <div>
          <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem', color: '#1f2937' }}>
            ✨ New Advanced Features
          </h2>
          <p style={{ color: '#6b7280', marginBottom: '2rem' }}>
            Powered by AI and inspired by industry leaders
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
            <Link to="/discovery" style={{ backgroundColor: '#fff7ed', padding: '1.5rem', borderRadius: '0.5rem', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', textDecoration: 'none', color: 'inherit', border: '2px solid #fed7aa' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem', color: '#f97316' }}>🔍 Product Discovery</h3>
              <p style={{ color: '#6b7280' }}>AI-powered trending products and smart filters</p>
            </Link>
            
            <Link to="/matching" style={{ backgroundColor: '#f0fdfa', padding: '1.5rem', borderRadius: '0.5rem', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', textDecoration: 'none', color: 'inherit', border: '2px solid #99f6e4' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem', color: '#14b8a6' }}>🤝 Smart Matching</h3>
              <p style={{ color: '#6b7280' }}>Find perfect suppliers with AI matching</p>
            </Link>
            
            <Link to="/meetings" style={{ backgroundColor: '#ede9fe', padding: '1.5rem', borderRadius: '0.5rem', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', textDecoration: 'none', color: 'inherit', border: '2px solid #c7d2fe' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem', color: '#8b5cf6' }}>📅 Virtual Meetings</h3>
              <p style={{ color: '#6b7280' }}>Schedule and manage supplier meetings</p>
            </Link>
            
            <Link to="/analytics" style={{ backgroundColor: '#ecfdf5', padding: '1.5rem', borderRadius: '0.5rem', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', textDecoration: 'none', color: 'inherit', border: '2px solid #a7f3d0' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem', color: '#10b981' }}>📊 Analytics Hub</h3>
              <p style={{ color: '#6b7280' }}>Advanced insights and performance metrics</p>
            </Link>
          </div>
        </div>

        {/* CTA Section */}
        <div style={{ marginTop: '4rem', textAlign: 'center', padding: '3rem', backgroundColor: 'white', borderRadius: '0.75rem', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
            Ready to Transform Your Food Trading Business?
          </h3>
          <p style={{ color: '#6b7280', marginBottom: '2rem' }}>
            Join thousands of buyers and suppliers on FoodXchange
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <Link to="/register" style={{ backgroundColor: '#f97316', color: 'white', padding: '0.75rem 2rem', borderRadius: '0.375rem', textDecoration: 'none', fontWeight: '500' }}>
              Get Started Free
            </Link>
            <Link to="/login" style={{ backgroundColor: 'white', color: '#374151', padding: '0.75rem 2rem', borderRadius: '0.375rem', textDecoration: 'none', fontWeight: '500', border: '1px solid #d1d5db' }}>
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;


