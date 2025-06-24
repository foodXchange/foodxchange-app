import React from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users,
  Handshake,
  TrendingUp,
  DollarSign,
  LogOut,
  Bell,
  UserCheck
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import './AgentLayout.css';

const AgentLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const menuItems = [
    { path: '/agent/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { path: '/agent/clients', label: 'My Clients', icon: Users },
    { path: '/agent/deals', label: 'Deals', icon: Handshake },
    { path: '/agent/commissions', label: 'Commissions', icon: DollarSign },
    { path: '/agent/performance', label: 'Performance', icon: TrendingUp }
  ];

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="agent-layout">
      <aside className="sidebar agent-sidebar">
        <div className="sidebar-header">
          <UserCheck size={32} className="agent-icon" />
          <h2>Agent Portal</h2>
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
          <div className="agent-info">
            <UserCheck size={20} />
            <span>{user?.name || 'Agent'}</span>
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
            <h1>FoodXchange Agent</h1>
          </div>
          <div className="header-right">
            <button className="notification-btn">
              <Bell size={20} />
            </button>
            <div className="user-menu">
              <UserCheck size={20} />
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

export default AgentLayout;
