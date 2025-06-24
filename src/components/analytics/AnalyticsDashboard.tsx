import React, { useState } from 'react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, DollarSign, Package, Users, Download, Calendar } from 'lucide-react';

const AnalyticsDashboard = () => {
  const [dateRange, setDateRange] = useState('last30days');
  
  const keyMetrics = {
    totalInquiries: { value: 1842, change: '+23%', trend: 'up' },
    conversionRate: { value: '34%', change: '+5%', trend: 'up' },
    avgDealSize: { value: '$12,450', change: '+12%', trend: 'up' },
    activeSuppliers: { value: 234, change: '-2%', trend: 'down' }
  };

  const inquiryData = [
    { month: 'Jan', inquiries: 145, converted: 49 },
    { month: 'Feb', inquiries: 189, converted: 64 },
    { month: 'Mar', inquiries: 234, converted: 80 },
    { month: 'Apr', inquiries: 198, converted: 67 },
    { month: 'May', inquiries: 267, converted: 91 },
    { month: 'Jun', inquiries: 312, converted: 106 }
  ];

  const categoryPerformance = [
    { name: 'Organic Products', value: 35, growth: '+45%' },
    { name: 'Beverages', value: 28, growth: '+23%' },
    { name: 'Snacks', value: 20, growth: '+18%' },
    { name: 'Dairy', value: 17, growth: '-5%' }
  ];

  const supplierPerformance = [
    { name: 'Response Time', score: 92 },
    { name: 'Product Quality', score: 88 },
    { name: 'Pricing', score: 85 },
    { name: 'Delivery', score: 90 },
    { name: 'Communication', score: 94 }
  ];

  const COLORS = ['#f97316', '#14b8a6', '#3b82f6', '#8b5cf6'];

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Analytics & Insights</h1>
          <p className="text-gray-600 mt-1">Track performance and discover opportunities</p>
        </div>
        <div className="flex items-center space-x-4">
          <select 
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
            className="px-4 py-2 border rounded-lg"
          >
            <option value="last7days">Last 7 days</option>
            <option value="last30days">Last 30 days</option>
            <option value="last90days">Last 90 days</option>
            <option value="lastyear">Last year</option>
          </select>
          <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 flex items-center">
            <Download className="w-4 h-4 mr-2" />
            Export Report
          </button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        {Object.entries(keyMetrics).map(([key, metric]) => (
          <div key={key} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
                <p className="text-2xl font-bold mt-1">{metric.value}</p>
                <div className={`flex items-center mt-2 text-sm ${
                  metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}>
                  <TrendingUp className={`w-4 h-4 mr-1 ${metric.trend === 'down' ? 'rotate-180' : ''}`} />
                  {metric.change}
                </div>
              </div>
              {key === 'totalInquiries' && <Package className="w-8 h-8 text-orange-500" />}
              {key === 'conversionRate' && <TrendingUp className="w-8 h-8 text-teal-600" />}
              {key === 'avgDealSize' && <DollarSign className="w-8 h-8 text-green-600" />}
              {key === 'activeSuppliers' && <Users className="w-8 h-8 text-purple-600" />}
            </div>
          </div>
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-2 gap-6">
        {/* Inquiry Trends */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4">Inquiry & Conversion Trends</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={inquiryData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="inquiries" stroke="#f97316" strokeWidth={2} />
              <Line type="monotone" dataKey="converted" stroke="#14b8a6" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Category Performance */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4">Category Performance</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={categoryPerformance}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={(entry) => `${entry.name}: ${entry.value}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {categoryPerformance.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Supplier Performance */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4">Supplier Performance Metrics</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={supplierPerformance} layout="horizontal">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" domain={[0, 100]} />
              <YAxis dataKey="name" type="category" width={100} />
              <Tooltip />
              <Bar dataKey="score" fill="#14b8a6" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Top Products */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4">Top Performing Products</h3>
          <div className="space-y-3">
            {[
              { name: 'Organic Quinoa', inquiries: 234, conversion: '42%' },
              { name: 'Almond Milk', inquiries: 198, conversion: '38%' },
              { name: 'Protein Bars', inquiries: 176, conversion: '35%' },
              { name: 'Green Tea Extract', inquiries: 165, conversion: '41%' },
              { name: 'Coconut Oil', inquiries: 143, conversion: '33%' }
            ].map((product, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium">{product.name}</p>
                  <p className="text-sm text-gray-600">{product.inquiries} inquiries</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-teal-600">{product.conversion}</p>
                  <p className="text-xs text-gray-600">conversion</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Insights */}
      <div className="mt-8 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-4">AI-Powered Insights</h3>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white rounded-lg p-4">
            <div className="text-purple-600 font-semibold mb-2">?? Growth Opportunity</div>
            <p className="text-sm">Organic products category shows 45% growth. Consider expanding inventory.</p>
          </div>
          <div className="bg-white rounded-lg p-4">
            <div className="text-purple-600 font-semibold mb-2">? Quick Win</div>
            <p className="text-sm">Reduce response time by 2 hours to increase conversion by est. 15%.</p>
          </div>
          <div className="bg-white rounded-lg p-4">
            <div className="text-purple-600 font-semibold mb-2">?? Focus Area</div>
            <p className="text-sm">Dairy category declining. Review pricing and supplier quality scores.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;
