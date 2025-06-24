import React, { useState, useEffect } from 'react';
import { Brain, Target, Users, Sparkles, CheckCircle, AlertCircle } from 'lucide-react';

const SmartMatching = () => {
  const [matchingProfile, setMatchingProfile] = useState({
    categories: [],
    volume: '',
    frequency: '',
    certifications: [],
    budget: { min: 0, max: 0 },
    regions: []
  });

  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(false);

  const matchingFactors = [
    { name: 'Product Category Match', score: 95, weight: 'High' },
    { name: 'Price Competitiveness', score: 88, weight: 'High' },
    { name: 'Certification Compliance', score: 100, weight: 'Critical' },
    { name: 'Delivery Capability', score: 82, weight: 'Medium' },
    { name: 'Communication Rating', score: 91, weight: 'Medium' },
    { name: 'Payment Terms Flexibility', score: 78, weight: 'Low' }
  ];

  const runSmartMatching = async () => {
    setLoading(true);
    // Simulate AI matching
    setTimeout(() => {
      setMatches([
        {
          id: 1,
          supplier: 'Global Foods Co.',
          matchScore: 94,
          strengths: ['Price', 'Quality', 'Certifications'],
          products: 23,
          responseTime: '2 hours'
        },
        {
          id: 2,
          supplier: 'Natural Harvest Ltd',
          matchScore: 89,
          strengths: ['Organic', 'Fast Delivery', 'MOQ Flexibility'],
          products: 15,
          responseTime: '4 hours'
        }
      ]);
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Matching Header */}
      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold flex items-center">
              <Brain className="mr-3 text-teal-600" />
              AI-Powered Supplier Matching
            </h1>
            <p className="text-gray-600 mt-2">Find perfect suppliers in seconds, not weeks</p>
          </div>
          <button 
            onClick={runSmartMatching}
            className="bg-gradient-to-r from-teal-500 to-teal-600 text-white px-6 py-3 rounded-lg hover:from-teal-600 hover:to-teal-700 flex items-center"
          >
            <Sparkles className="mr-2" />
            Run Smart Match
          </button>
        </div>

        {/* Matching Factors */}
        <div className="grid grid-cols-2 gap-4">
          {matchingFactors.map((factor) => (
            <div key={factor.name} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center">
                <div className={`w-2 h-2 rounded-full mr-3 ${
                  factor.weight === 'Critical' ? 'bg-red-500' :
                  factor.weight === 'High' ? 'bg-orange-500' :
                  factor.weight === 'Medium' ? 'bg-yellow-500' : 'bg-green-500'
                }`} />
                <span className="font-medium">{factor.name}</span>
              </div>
              <div className="flex items-center">
                <div className="w-32 bg-gray-200 rounded-full h-2 mr-3">
                  <div 
                    className="bg-teal-600 h-2 rounded-full"
                    style={{ width: `${factor.score}%` }}
                  />
                </div>
                <span className="text-sm font-medium">{factor.score}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Matching Results */}
      {loading ? (
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-teal-600"></div>
        </div>
      ) : matches.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold mb-4">Top Matches</h2>
          {matches.map((match) => (
            <div key={match.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold">{match.supplier}</h3>
                  <div className="flex items-center mt-2 space-x-4">
                    <span className="text-3xl font-bold text-teal-600">{match.matchScore}%</span>
                    <div className="flex gap-2">
                      {match.strengths.map((strength) => (
                        <span key={strength} className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm">
                          {strength}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-600">{match.products} Products</div>
                  <div className="text-sm text-gray-600">Responds in {match.responseTime}</div>
                  <button className="mt-3 bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700">
                    View Profile
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SmartMatching;
