import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Brain, Calendar, Shield, BarChart3, Package, Star } from 'lucide-react';

const NewFeaturesNav = () => {
  const newFeatures = [
    { path: '/discovery', name: 'Smart Discovery', icon: Search, color: 'bg-orange-500' },
    { path: '/matching', name: 'AI Matching', icon: Brain, color: 'bg-teal-600' },
    { path: '/meetings', name: 'Virtual Meetings', icon: Calendar, color: 'bg-purple-600' },
    { path: '/compliance', name: 'Compliance Hub', icon: Shield, color: 'bg-green-600' },
    { path: '/analytics', name: 'Analytics', icon: BarChart3, color: 'bg-blue-600' },
    { path: '/samples', name: 'Sample Requests', icon: Package, color: 'bg-orange-600' },
    { path: '/scorecard', name: 'Scorecard', icon: Star, color: 'bg-indigo-600' }
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-6">New B2B Features</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {newFeatures.map((feature) => (
          <Link 
            key={feature.path}
            to={feature.path}
            className="flex flex-col items-center p-4 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <div className={`w-16 h-16 ${feature.color} rounded-full flex items-center justify-center mb-3`}>
              <feature.icon className="w-8 h-8 text-white" />
            </div>
            <span className="text-sm font-medium text-center">{feature.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NewFeaturesNav;

