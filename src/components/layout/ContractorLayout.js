import React from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Briefcase,
  Calendar,
  FileCheck,
  LogOut,
  Bell,
  HardHat
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import './ContractorLayout.css';

const ContractorLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const menuItems = [
    { path: '/contractor/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { path: '/contractor/projects', label: 'Projects', icon: Briefcase },
    { path: '/contractor/schedule', label: 'Schedule', icon: Calendar },
    { path: '/contractor/compliance', label: 'Compliance', icon: FileCheck }
  ];

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="contractor-layout">
      <aside className="sidebar">
        <div className="sidebar-header">
          <HardHat size={32} className="contractor-icon" />
          <h2>Contractor Portal</h2>
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
          <div className="contractor-info">
            <HardHat size={20} />
            <span>{user?.company || 'Contractor'}</span>
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
            <h1>FoodXchange Contractor</h1>
          </div>
          <div className="header-right">
            <button className="notification-btn">
              <Bell size={20} />
            </button>
            <div className="user-menu">
              <HardHat size={20} />
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

export default ContractorLayout;
