import React, { useState } from 'react';
import { Search, Filter, TrendingUp, Globe, ShieldCheck, Zap } from 'lucide-react';

const ProductDiscovery = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const trendingCategories = [
    { name: 'Plant-Based Proteins', growth: '+127%', icon: '??' },
    { name: 'Keto Snacks', growth: '+89%', icon: '??' },
    { name: 'Functional Beverages', growth: '+156%', icon: '??' },
    { name: 'Sustainable Packaging', growth: '+203%', icon: '??' }
  ];

  const discoveryMetrics = {
    newThisWeek: 342,
    trending: 89,
    perfectMatches: 23,
    savedSearches: 5
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Discovery Header */}
      <div className="bg-gradient-to-r from-orange-500 to-teal-600 rounded-lg p-8 text-white mb-8">
        <h1 className="text-3xl font-bold mb-4">Smart Product Discovery</h1>
        <p className="text-lg mb-6">AI-powered matching finds products that fit your exact needs</p>
        
        <div className="grid grid-cols-4 gap-4">
          {Object.entries(discoveryMetrics).map(([key, value]) => (
            <div key={key} className="bg-white/20 rounded-lg p-4">
              <div className="text-3xl font-bold">{value}</div>
              <div className="text-sm capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Search Bar */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Search by brand, product name, keyword or barcode"
            className="w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:border-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
        </div>
      </div>

      {/* Trending Categories */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <TrendingUp className="mr-2 text-orange-500" />
          Trending Categories
        </h2>
        <div className="grid grid-cols-4 gap-4">
          {trendingCategories.map((category) => (
            <div key={category.name} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="text-4xl mb-3">{category.icon}</div>
              <h3 className="font-semibold">{category.name}</h3>
              <div className="text-green-600 font-bold mt-2">{category.growth}</div>
              <button className="mt-4 text-teal-600 hover:text-teal-700 text-sm font-medium">
                Explore ?
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Smart Filters */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold mb-4">Smart Filters</h3>
        
        <div className="grid grid-cols-3 gap-6">
          {/* Quick Filters */}
          <div>
            <h4 className="font-medium mb-3">Quick Filters</h4>
            <div className="space-y-2">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <ShieldCheck className="w-4 h-4 mr-1 text-green-600" />
                Verified Suppliers Only
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <Zap className="w-4 h-4 mr-1 text-yellow-500" />
                New This Week
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <Globe className="w-4 h-4 mr-1 text-blue-600" />
                Ships Internationally
              </label>
            </div>
          </div>

          {/* Lead Time */}
          <div>
            <h4 className="font-medium mb-3">Lead Time</h4>
            <select className="w-full px-3 py-2 border rounded">
              <option>Any</option>
              <option>Less than 1 week</option>
              <option>1-2 weeks</option>
              <option>2-4 weeks</option>
              <option>More than 4 weeks</option>
            </select>
          </div>

          {/* Price Range */}
          <div>
            <h4 className="font-medium mb-3">Price Range</h4>
            <select className="w-full px-3 py-2 border rounded">
              <option>All Prices</option>
              <option>Under $10</option>
              <option>$10 - $50</option>
              <option>$50 - $100</option>
              <option>Over $100</option>
            </select>
          </div>
        </div>

        <button className="mt-6 bg-teal-600 text-white px-6 py-2 rounded-md hover:bg-teal-700">
          Apply Smart Filters
        </button>
      </div>
    </div>
  );
};

export default ProductDiscovery;
