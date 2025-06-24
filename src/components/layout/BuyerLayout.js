import React from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  FileText, 
  ShoppingCart, 
  Users, 
  Package,
  LogOut,
  Bell,
  User
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import './BuyerLayout.css';

const BuyerLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const menuItems = [
    { path: '/buyer/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { path: '/buyer/rfqs', label: 'RFQs', icon: FileText },
    { path: '/buyer/orders', label: 'Orders', icon: ShoppingCart },
    { path: '/buyer/suppliers', label: 'Suppliers', icon: Users },
    { path: '/buyer/products', label: 'Products', icon: Package }
  ];

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="buyer-layout">
      <aside className="sidebar">
        <div className="sidebar-header">
          <img src="/logo.png" alt="FoodXchange" className="logo" />
          <h2>Buyer Portal</h2>
        </div>

        <nav className="sidebar-nav">
          {menuItems.map(item => {
            const Icon = item.icon;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
              >
                <Icon size={20} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="sidebar-footer">
          <div className="user-info">
            <User size={20} />
            <span>{user?.name || 'Buyer'}</span>
          </div>
          <button onClick={handleLogout} className="logout-btn">
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      <div className="main-content">
        <header className="top-header">
          <div className="header-left">
            <h1>FoodXchange</h1>
          </div>
          <div className="header-right">
            <button className="notification-btn">
              <Bell size={20} />
              <span className="notification-badge">3</span>
            </button>
            <div className="user-menu">
              <img src="/avatar.png" alt="User" className="user-avatar" />
              <span>{user?.name}</span>
            </div>
          </div>
        </header>

        <main className="page-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default BuyerLayout;
