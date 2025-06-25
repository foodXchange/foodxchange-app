import React, { useState } from 'react';
import { Shield, AlertTriangle, CheckCircle, FileCheck, Upload, Calendar } from 'lucide-react';

const ComplianceDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  
  const complianceScore = 87;
  
  const certifications = [
    { name: 'FDA Registration', status: 'active', expiry: '2025-12-31', score: 100 },
    { name: 'HACCP', status: 'active', expiry: '2025-06-15', score: 100 },
    { name: 'ISO 22000', status: 'pending', expiry: null, score: 0 },
    { name: 'Organic Certification', status: 'expired', expiry: '2024-11-30', score: 0 }
  ];

  const complianceAlerts = [
    { type: 'warning', message: 'Organic Certification expired - Renewal required', date: '2024-11-30' },
    { type: 'info', message: 'HACCP renewal due in 6 months', date: '2025-06-15' },
    { type: 'success', message: 'FDA audit completed successfully', date: '2025-01-10' }
  ];

  const documentTypes = [
    'Certificate of Analysis',
    'Product Specification Sheet',
    'Allergen Declaration',
    'Nutritional Information',
    'Shelf Life Study',
    'Packaging Declaration'
  ];

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Compliance Header */}
      <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-lg p-8 text-white mb-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold mb-2">Compliance Center</h1>
            <p className="text-lg">Manage certifications, documents, and regulatory requirements</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold">{complianceScore}%</div>
            <div className="text-sm mt-1">Compliance Score</div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-lg shadow-md mb-6">
        <div className="border-b">
          <nav className="flex space-x-8 px-6">
            {['overview', 'certifications', 'documents', 'audits'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-1 border-b-2 font-medium text-sm capitalize ${
                  activeTab === tab
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6">
          {activeTab === 'overview' && (
            <div>
              {/* Compliance Alerts */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4">Recent Alerts</h3>
                <div className="space-y-3">
                  {complianceAlerts.map((alert, index) => (
                    <div key={index} className={`p-4 rounded-lg flex items-start ${
                      alert.type === 'warning' ? 'bg-yellow-50 border-l-4 border-yellow-400' :
                      alert.type === 'info' ? 'bg-blue-50 border-l-4 border-blue-400' :
                      'bg-green-50 border-l-4 border-green-400'
                    }`}>
                      {alert.type === 'warning' ? <AlertTriangle className="w-5 h-5 text-yellow-600 mr-3 flex-shrink-0" /> :
                       alert.type === 'info' ? <Shield className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" /> :
                       <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />}
                      <div className="flex-1">
                        <p className="font-medium">{alert.message}</p>
                        <p className="text-sm text-gray-600 mt-1">{alert.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-4 gap-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <FileCheck className="w-8 h-8 text-green-600 mb-2" />
                  <div className="text-2xl font-bold">12</div>
                  <div className="text-sm text-gray-600">Active Certificates</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <AlertTriangle className="w-8 h-8 text-yellow-600 mb-2" />
                  <div className="text-2xl font-bold">3</div>
                  <div className="text-sm text-gray-600">Pending Actions</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <Calendar className="w-8 h-8 text-blue-600 mb-2" />
                  <div className="text-2xl font-bold">2</div>
                  <div className="text-sm text-gray-600">Upcoming Audits</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <Upload className="w-8 h-8 text-purple-600 mb-2" />
                  <div className="text-2xl font-bold">156</div>
                  <div className="text-sm text-gray-600">Documents</div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'certifications' && (
            <div>
              <div className="mb-4 flex justify-between items-center">
                <h3 className="text-lg font-semibold">Certification Status</h3>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                  Add Certification
                </button>
              </div>
              
              <div className="space-y-4">
                {certifications.map((cert) => (
                  <div key={cert.name} className="border rounded-lg p-4">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className={`w-3 h-3 rounded-full mr-3 ${
                          cert.status === 'active' ? 'bg-green-500' :
                          cert.status === 'pending' ? 'bg-yellow-500' : 'bg-red-500'
                        }`} />
                        <div>
                          <h4 className="font-semibold">{cert.name}</h4>
                          <p className="text-sm text-gray-600">
                            {cert.status === 'active' ? `Expires: ${cert.expiry}` :
                             cert.status === 'pending' ? 'Verification in progress' :
                             'Expired - Renewal required'}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="text-right">
                          <div className="text-2xl font-bold">{cert.score}%</div>
                          <div className="text-xs text-gray-600">Score</div>
                        </div>
                        <button className="text-blue-600 hover:text-blue-700">
                          View Details →
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ComplianceDashboard;


