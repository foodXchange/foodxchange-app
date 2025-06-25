import React from 'react';
import { Star, TrendingUp, Award, AlertCircle, CheckCircle } from 'lucide-react';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from 'recharts';

const SupplierScorecard = () => {
  const overallScore = 87;
  
  const performanceData = [
    { metric: 'Quality', score: 92, benchmark: 85 },
    { metric: 'Delivery', score: 88, benchmark: 80 },
    { metric: 'Price', score: 85, benchmark: 82 },
    { metric: 'Communication', score: 94, benchmark: 78 },
    { metric: 'Flexibility', score: 82, benchmark: 75 },
    { metric: 'Compliance', score: 90, benchmark: 88 }
  ];

  const achievements = [
    { name: 'Top Rated Supplier', icon: Award, color: 'text-yellow-600' },
    { name: 'Fast Responder', icon: TrendingUp, color: 'text-blue-600' },
    { name: '100% On-Time Delivery', icon: CheckCircle, color: 'text-green-600' }
  ];

  const recentReviews = [
    { buyer: 'Global Foods Inc', rating: 5, comment: 'Excellent quality and service', date: '2025-01-10' },
    { buyer: 'Fresh Market Co', rating: 4, comment: 'Good products, slight delay in shipping', date: '2025-01-08' }
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg p-8 text-white mb-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold mb-2">Supplier Performance Scorecard</h1>
            <p className="text-lg opacity-90">Track and improve your marketplace performance</p>
          </div>
          <div className="text-center">
            <div className="text-6xl font-bold">{overallScore}</div>
            <div className="text-sm opacity-90">Overall Score</div>
            <div className="flex mt-2">
              {[1,2,3,4,5].map((star) => (
                <Star key={star} className={`w-5 h-5 ${star <= 4 ? 'fill-current' : ''}`} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8">
        {/* Performance Radar */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4">Performance Metrics</h3>
          <ResponsiveContainer width="100%" height={350}>
            <RadarChart data={performanceData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="metric" />
              <PolarRadiusAxis angle={90} domain={[0, 100]} />
              <Radar name="Your Score" dataKey="score" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.6} />
              <Radar name="Industry Avg" dataKey="benchmark" stroke="#94a3b8" fill="#94a3b8" fillOpacity={0.3} />
            </RadarChart>
          </ResponsiveContainer>
          <div className="flex justify-center mt-4 space-x-4">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-purple-600 rounded-full mr-2"></div>
              <span className="text-sm">Your Score</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-gray-400 rounded-full mr-2"></div>
              <span className="text-sm">Industry Average</span>
            </div>
          </div>
        </div>

        {/* Achievements & Stats */}
        <div className="space-y-6">
          {/* Achievements */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">Achievements</h3>
            <div className="space-y-3">
              {achievements.map((achievement) => (
                <div key={achievement.name} className="flex items-center p-3 bg-gray-50 rounded-lg">
                  <achievement.icon className={`w-8 h-8 ${achievement.color} mr-3`} />
                  <span className="font-medium">{achievement.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Stats */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">Key Statistics</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-purple-600">98%</div>
                <div className="text-sm text-gray-600">Response Rate</div>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-purple-600">2.5h</div>
                <div className="text-sm text-gray-600">Avg Response Time</div>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-purple-600">156</div>
                <div className="text-sm text-gray-600">Total Orders</div>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-purple-600">4.5</div>
                <div className="text-sm text-gray-600">Avg Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Reviews */}
      <div className="mt-8 bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold mb-4">Recent Reviews</h3>
        <div className="space-y-4">
          {recentReviews.map((review, index) => (
            <div key={index} className="border-b pb-4 last:border-0">
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center mb-2">
                    <span className="font-medium mr-3">{review.buyer}</span>
                    <div className="flex">
                      {[1,2,3,4,5].map((star) => (
                        <Star key={star} className={`w-4 h-4 ${star <= review.rating ? 'fill-current text-yellow-400' : 'text-gray-300'}`} />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600">{review.comment}</p>
                </div>
                <span className="text-sm text-gray-500">{review.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SupplierScorecard;
