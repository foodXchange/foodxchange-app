import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShoppingCart, 
  FileText, 
  Package, 
  Users,
  TrendingUp,
  Bell
} from 'lucide-react';
import './BuyerDashboard.css';

const BuyerDashboard = () => {
  const [stats, setStats] = useState({
    activeRFQs: 0,
    pendingOrders: 0,
    totalSuppliers: 0,
    savedProducts: 0
  });

  const [recentActivities, setRecentActivities] = useState([]);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Fetch dashboard data
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    // TODO: Implement API calls
    setStats({
      activeRFQs: 5,
      pendingOrders: 3,
      totalSuppliers: 23,
      savedProducts: 67
    });

    setRecentActivities([
      { id: 1, type: 'rfq', message: 'New RFQ #123 created', time: '2 hours ago' },
      { id: 2, type: 'order', message: 'Order #456 shipped', time: '5 hours ago' },
      { id: 3, type: 'supplier', message: 'New supplier matched', time: '1 day ago' }
    ]);

    setNotifications([
      { id: 1, message: '3 new proposals received', urgent: true },
      { id: 2, message: 'Price update on saved product', urgent: false }
    ]);
  };

  return (
    <div className="buyer-dashboard">
      <div className="dashboard-header">
        <h1>Buyer Dashboard</h1>
        <div className="header-actions">
          <button className="notification-btn">
            <Bell size={20} />
            {notifications.length > 0 && (
              <span className="notification-badge">{notifications.length}</span>
            )}
          </button>
          <Link to="/buyer/rfqs/new" className="create-rfq-btn">
            Create New RFQ
          </Link>
        </div>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">
            <FileText size={24} />
          </div>
          <div className="stat-content">
            <h3>{stats.activeRFQs}</h3>
            <p>Active RFQs</p>
          </div>
          <Link to="/buyer/rfqs" className="stat-link">View all →</Link>
        </div>

        <div className="stat-card">
          <div className="stat-icon">
            <ShoppingCart size={24} />
          </div>
          <div className="stat-content">
            <h3>{stats.pendingOrders}</h3>
            <p>Pending Orders</p>
          </div>
          <Link to="/buyer/orders" className="stat-link">View all →</Link>
        </div>

        <div className="stat-card">
          <div className="stat-icon">
            <Users size={24} />
          </div>
          <div className="stat-content">
            <h3>{stats.totalSuppliers}</h3>
            <p>Total Suppliers</p>
          </div>
          <Link to="/buyer/suppliers" className="stat-link">View all →</Link>
        </div>

        <div className="stat-card">
          <div className="stat-icon">
            <Package size={24} />
          </div>
          <div className="stat-content">
            <h3>{stats.savedProducts}</h3>
            <p>Saved Products</p>
          </div>
          <Link to="/buyer/products" className="stat-link">View all →</Link>
        </div>
      </div>

      <div className="dashboard-content">
        <div className="recent-activities">
          <h2>Recent Activities</h2>
          <div className="activity-list">
            {recentActivities.map(activity => (
              <div key={activity.id} className="activity-item">
                <div className="activity-icon">
                  {activity.type === 'rfq' && <FileText size={16} />}
                  {activity.type === 'order' && <ShoppingCart size={16} />}
                  {activity.type === 'supplier' && <Users size={16} />}
                </div>
                <div className="activity-content">
                  <p>{activity.message}</p>
                  <span className="activity-time">{activity.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="quick-actions">
          <h2>Quick Actions</h2>
          <div className="action-buttons">
            <Link to="/buyer/rfqs/new" className="action-btn">
              <FileText size={20} />
              Create RFQ
            </Link>
            <Link to="/buyer/products/search" className="action-btn">
              <Package size={20} />
              Search Products
            </Link>
            <Link to="/buyer/suppliers" className="action-btn">
              <Users size={20} />
              Find Suppliers
            </Link>
            <Link to="/buyer/orders" className="action-btn">
              <TrendingUp size={20} />
              Track Orders
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyerDashboard;
