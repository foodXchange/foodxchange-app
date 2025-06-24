import React from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Package,
  FileText,
  ShoppingCart,
  TrendingUp,
  LogOut,
  Bell,
  Store
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import './SellerLayout.css';

const SellerLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const menuItems = [
    { path: '/seller/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { path: '/seller/products', label: 'My Products', icon: Package },
    { path: '/seller/rfqs', label: 'RFQ Opportunities', icon: FileText },
    { path: '/seller/orders', label: 'Orders', icon: ShoppingCart },
    { path: '/seller/analytics', label: 'Analytics', icon: TrendingUp }
  ];

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="seller-layout">
      <aside className="sidebar">
        <div className="sidebar-header">
          <Store size={32} className="seller-icon" />
          <h2>Seller Portal</h2>
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
          <div className="seller-info">
            <Store size={20} />
            <span>{user?.company || 'Seller'}</span>
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
            <h1>FoodXchange Seller</h1>
          </div>
          <div className="header-right">
            <button className="notification-btn">
              <Bell size={20} />
              <span className="notification-badge">2</span>
            </button>
            <div className="user-menu">
              <Store size={20} />
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

export default SellerLayout;
