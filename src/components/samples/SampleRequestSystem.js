import React, { useState } from 'react';
import { Package, Truck, CheckCircle, Clock, DollarSign, FileText } from 'lucide-react';

const SampleRequestSystem = () => {
  const [activeRequests] = useState([
    {
      id: 1,
      product: 'Organic Matcha Powder',
      supplier: 'Asian Tea Co.',
      status: 'in_transit',
      requestDate: '2025-01-10',
      eta: '2025-01-17',
      cost: 'Free',
      tracking: 'DHL-123456'
    },
    {
      id: 2,
      product: 'Gluten-Free Pasta',
      supplier: 'Italian Foods Ltd',
      status: 'pending',
      requestDate: '2025-01-12',
      eta: null,
      cost: '$15',
      tracking: null
    }
  ]);

  const requestWorkflow = [
    { step: 1, name: 'Request Submitted', icon: FileText, status: 'completed' },
    { step: 2, name: 'Supplier Approved', icon: CheckCircle, status: 'completed' },
    { step: 3, name: 'Sample Prepared', icon: Package, status: 'active' },
    { step: 4, name: 'Shipped', icon: Truck, status: 'pending' },
    { step: 5, name: 'Delivered', icon: CheckCircle, status: 'pending' }
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <h1 className="text-3xl font-bold mb-4">Sample Request Center</h1>
        
        {/* Quick Stats */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          <div className="bg-orange-50 rounded-lg p-4">
            <Package className="w-8 h-8 text-orange-600 mb-2" />
            <div className="text-2xl font-bold">23</div>
            <div className="text-sm text-gray-600">Active Requests</div>
          </div>
          <div className="bg-teal-50 rounded-lg p-4">
            <Truck className="w-8 h-8 text-teal-600 mb-2" />
            <div className="text-2xl font-bold">5</div>
            <div className="text-sm text-gray-600">In Transit</div>
          </div>
          <div className="bg-green-50 rounded-lg p-4">
            <CheckCircle className="w-8 h-8 text-green-600 mb-2" />
            <div className="text-2xl font-bold">89%</div>
            <div className="text-sm text-gray-600">Satisfaction Rate</div>
          </div>
          <div className="bg-purple-50 rounded-lg p-4">
            <Clock className="w-8 h-8 text-purple-600 mb-2" />
            <div className="text-2xl font-bold">3.2</div>
            <div className="text-sm text-gray-600">Avg Days to Deliver</div>
          </div>
        </div>

        {/* Request Workflow */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Sample Request Workflow</h3>
          <div className="flex items-center justify-between">
            {requestWorkflow.map((step, index) => (
              <React.Fragment key={step.step}>
                <div className="flex flex-col items-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    step.status === 'completed' ? 'bg-green-500 text-white' :
                    step.status === 'active' ? 'bg-orange-500 text-white' :
                    'bg-gray-200 text-gray-400'
                  }`}>
                    <step.icon className="w-6 h-6" />
                  </div>
                  <p className="text-sm mt-2 text-center">{step.name}</p>
                </div>
                {index < requestWorkflow.length - 1 && (
                  <div className={`flex-1 h-1 mx-4 ${
                    requestWorkflow[index + 1].status !== 'pending' ? 'bg-green-500' : 'bg-gray-200'
                  }`} />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Active Requests */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Active Sample Requests</h3>
          <div className="space-y-4">
            {activeRequests.map((request) => (
              <div key={request.id} className="border rounded-lg p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-semibold">{request.product}</h4>
                    <p className="text-sm text-gray-600">from {request.supplier}</p>
                    <div className="flex items-center mt-2 space-x-4 text-sm">
                      <span>Requested: {request.requestDate}</span>
                      {request.eta && <span>ETA: {request.eta}</span>}
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        request.cost === 'Free' 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-orange-100 text-orange-700'
                      }`}>
                        {request.cost}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      request.status === 'in_transit' 
                        ? 'bg-blue-100 text-blue-700' 
                        : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {request.status.replace('_', ' ').toUpperCase()}
                    </span>
                    {request.tracking && (
                      <p className="text-sm text-gray-600 mt-2">
                        Tracking: {request.tracking}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SampleRequestSystem;
