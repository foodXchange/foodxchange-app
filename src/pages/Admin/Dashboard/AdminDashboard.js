import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Building, 
  Package, 
  ShoppingCart,
  BarChart,
  Settings,
  AlertCircle,
  TrendingUp
} from 'lucide-react';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalCompanies: 0,
    totalProducts: 0,
    totalOrders: 0,
    revenue: 0,
    growth: 0
  });

  const [systemAlerts, setSystemAlerts] = useState([]);
  const [recentUsers, setRecentUsers] = useState([]);

  useEffect(() => {
    fetchAdminData();
  }, []);

  const fetchAdminData = async () => {
    // TODO: Implement API calls
    setStats({
      totalUsers: 156,
      totalCompanies: 73,
      totalProducts: 224,
      totalOrders: 89,
      revenue: 1234567,
      growth: 15.3
    });

    setSystemAlerts([
      { id: 1, type: 'warning', message: '5 pending user verifications', urgent: true },
      { id: 2, type: 'info', message: 'System backup scheduled', urgent: false },
      { id: 3, type: 'error', message: '2 failed payment attempts', urgent: true }
    ]);

    setRecentUsers([
      { id: 1, name: 'John Doe', email: 'john@company.com', role: 'buyer', status: 'active' },
      { id: 2, name: 'Jane Smith', email: 'jane@supplier.com', role: 'seller', status: 'pending' }
    ]);
  };

  return (
    <div className="admin-dashboard">
      <div className="dashboard-header">
        <h1>Admin Dashboard</h1>
        <div className="header-actions">
          <Link to="/admin/settings" className="settings-btn">
            <Settings size={20} />
            Settings
          </Link>
        </div>
      </div>

      {systemAlerts.length > 0 && (
        <div className="system-alerts">
          {systemAlerts.map(alert => (
            <div key={alert.id} className={`alert alert-${alert.type}`}>
              <AlertCircle size={16} />
              <span>{alert.message}</span>
            </div>
          ))}
        </div>
      )}

      <div className="admin-stats-grid">
        <div className="stat-card">
          <div className="stat-header">
            <Users size={24} />
            <span className="growth">+{stats.growth}%</span>
          </div>
          <h3>{stats.totalUsers}</h3>
          <p>Total Users</p>
          <Link to="/admin/users" className="stat-link">Manage Users →</Link>
        </div>

        <div className="stat-card">
          <div className="stat-header">
            <Building size={24} />
          </div>
          <h3>{stats.totalCompanies}</h3>
          <p>Companies</p>
          <Link to="/admin/companies" className="stat-link">Manage Companies →</Link>
        </div>

        <div className="stat-card">
          <div className="stat-header">
            <Package size={24} />
          </div>
          <h3>{stats.totalProducts}</h3>
          <p>Products</p>
          <Link to="/admin/products" className="stat-link">Manage Products →</Link>
        </div>

        <div className="stat-card">
          <div className="stat-header">
            <ShoppingCart size={24} />
          </div>
          <h3>{stats.totalOrders}</h3>
          <p>Total Orders</p>
          <Link to="/admin/orders" className="stat-link">View Orders →</Link>
        </div>

        <div className="stat-card revenue-card">
          <div className="stat-header">
            <TrendingUp size={24} />
          </div>
          <h3>${stats.revenue.toLocaleString()}</h3>
          <p>Total Revenue</p>
          <Link to="/admin/reports" className="stat-link">View Reports →</Link>
        </div>
      </div>

      <div className="admin-content">
        <div className="recent-users">
          <div className="section-header">
            <h2>Recent Users</h2>
            <Link to="/admin/users">View all</Link>
          </div>
          <table className="users-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {recentUsers.map(user => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td><span className={`role-badge ${user.role}`}>{user.role}</span></td>
                  <td><span className={`status-badge ${user.status}`}>{user.status}</span></td>
                  <td>
                    <Link to={`/admin/users/${user.id}`} className="action-link">View</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="quick-stats">
          <h2>System Overview</h2>
          <div className="chart-placeholder">
            <BarChart size={48} />
            <p>Chart coming soon</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
