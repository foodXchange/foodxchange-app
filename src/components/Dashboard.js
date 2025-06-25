import React from 'react';
import { Link } from 'react-router-dom';
import { Package, TrendingUp, Calendar, Users } from 'lucide-react';

const Dashboard = ({ role }) => {
  const stats = {
    buyer: [
      { label: 'Active RFQs', value: '12', icon: Package, color: 'bg-blue-500' },
      { label: 'Pending Orders', value: '5', icon: TrendingUp, color: 'bg-green-500' },
      { label: 'Meetings Today', value: '3', icon: Calendar, color: 'bg-purple-500' },
      { label: 'Saved Suppliers', value: '28', icon: Users, color: 'bg-orange-500' }
    ],
    seller: [
      { label: 'Listed Products', value: '45', icon: Package, color: 'bg-blue-500' },
      { label: 'Active Inquiries', value: '18', icon: TrendingUp, color: 'bg-green-500' },
      { label: 'Meetings Today', value: '2', icon: Calendar, color: 'bg-purple-500' },
      { label: 'Total Buyers', value: '156', icon: Users, color: 'bg-orange-500' }
    ]
  };

  const currentStats = stats[role] || stats.buyer;

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Welcome to your {role} Dashboard
        </h1>
        <p className="mt-2 text-gray-600">
          Here's an overview of your activity on FoodXchange
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {currentStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <div className={`${stat.color} rounded-lg p-3`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                  <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link
            to="/discovery"
            className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow text-center"
          >
            <Package className="h-8 w-8 mx-auto mb-2 text-orange-500" />
            <span className="text-sm font-medium">Browse Products</span>
          </Link>
          <Link
            to="/meetings"
            className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow text-center"
          >
            <Calendar className="h-8 w-8 mx-auto mb-2 text-teal-600" />
            <span className="text-sm font-medium">Schedule Meeting</span>
          </Link>
          <Link
            to="/analytics"
            className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow text-center"
          >
            <TrendingUp className="h-8 w-8 mx-auto mb-2 text-purple-600" />
            <span className="text-sm font-medium">View Analytics</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
