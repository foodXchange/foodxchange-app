import React, { useState } from 'react';
import { Calendar, Video, Clock, Users, Star, FileText, MessageSquare } from 'lucide-react';

const MeetingScheduler = () => {
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [meetingType, setMeetingType] = useState('discovery');
  
  const meetingTypes = [
    { id: 'discovery', name: 'Product Discovery', duration: 30, icon: '??' },
    { id: 'negotiation', name: 'Price Negotiation', duration: 45, icon: '??' },
    { id: 'compliance', name: 'Compliance Review', duration: 60, icon: '??' },
    { id: 'sampling', name: 'Sample Discussion', duration: 30, icon: '??' }
  ];

  const availableSlots = [
    { date: '2025-01-15', time: '10:00 AM', available: true },
    { date: '2025-01-15', time: '2:00 PM', available: true },
    { date: '2025-01-16', time: '11:00 AM', available: false },
    { date: '2025-01-16', time: '3:00 PM', available: true }
  ];

  const upcomingMeetings = [
    {
      id: 1,
      supplier: 'Asian Spices Ltd',
      type: 'discovery',
      date: '2025-01-14',
      time: '10:00 AM',
      products: ['Turmeric Powder', 'Black Pepper'],
      agenda: 'Discuss organic certification and bulk pricing',
      participants: 3
    }
  ];

  const meetingTemplates = [
    {
      name: 'Standard Discovery Call',
      agenda: [
        'Company Introduction (5 min)',
        'Product Showcase (10 min)',
        'Requirements Discussion (10 min)',
        'Q&A and Next Steps (5 min)'
      ]
    },
    {
      name: 'Negotiation Session',
      agenda: [
        'Previous Discussion Recap (5 min)',
        'Pricing Structure Review (15 min)',
        'Terms & Conditions (15 min)',
        'Final Agreement (10 min)'
      ]
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Meeting Dashboard */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-8 text-white mb-8">
        <h1 className="text-3xl font-bold mb-4">Virtual Meeting Hub</h1>
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-white/20 rounded-lg p-4">
            <Video className="w-8 h-8 mb-2" />
            <div className="text-2xl font-bold">12</div>
            <div className="text-sm">This Week</div>
          </div>
          <div className="bg-white/20 rounded-lg p-4">
            <Users className="w-8 h-8 mb-2" />
            <div className="text-2xl font-bold">45</div>
            <div className="text-sm">Total Meetings</div>
          </div>
          <div className="bg-white/20 rounded-lg p-4">
            <Star className="w-8 h-8 mb-2" />
            <div className="text-2xl font-bold">4.8</div>
            <div className="text-sm">Avg Rating</div>
          </div>
          <div className="bg-white/20 rounded-lg p-4">
            <Clock className="w-8 h-8 mb-2" />
            <div className="text-2xl font-bold">35m</div>
            <div className="text-sm">Avg Duration</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8">
        {/* Schedule New Meeting */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Schedule New Meeting</h2>
          
          {/* Meeting Type Selection */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Meeting Type</label>
            <div className="grid grid-cols-2 gap-3">
              {meetingTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setMeetingType(type.id)}
                  className={`p-3 rounded-lg border-2 transition-all ${
                    meetingType === type.id 
                      ? 'border-purple-500 bg-purple-50' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="text-2xl mb-1">{type.icon}</div>
                  <div className="font-medium">{type.name}</div>
                  <div className="text-sm text-gray-500">{type.duration} min</div>
                </button>
              ))}
            </div>
          </div>

          {/* Available Slots */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Available Slots</label>
            <div className="space-y-2">
              {availableSlots.map((slot, index) => (
                <button
                  key={index}
                  onClick={() => slot.available && setSelectedSlot(index)}
                  disabled={!slot.available}
                  className={`w-full p-3 rounded-lg border text-left transition-all ${
                    selectedSlot === index
                      ? 'border-purple-500 bg-purple-50'
                      : slot.available
                      ? 'border-gray-200 hover:border-gray-300'
                      : 'border-gray-200 bg-gray-50 opacity-50 cursor-not-allowed'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-medium">{slot.date}</div>
                      <div className="text-sm text-gray-600">{slot.time}</div>
                    </div>
                    {!slot.available && (
                      <span className="text-sm text-red-600">Booked</span>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>

          <button className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700">
            Schedule Meeting
          </button>
        </div>

        {/* Meeting Templates */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Meeting Templates</h2>
          
          {meetingTemplates.map((template) => (
            <div key={template.name} className="mb-6 p-4 border rounded-lg">
              <h3 className="font-medium mb-3">{template.name}</h3>
              <ul className="space-y-2">
                {template.agenda.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-purple-600 mr-2">{index + 1}.</span>
                    <span className="text-sm text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <button className="mt-3 text-purple-600 hover:text-purple-700 text-sm font-medium">
                Use Template ?
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Meetings */}
      <div className="mt-8 bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Upcoming Meetings</h2>
        <div className="space-y-4">
          {upcomingMeetings.map((meeting) => (
            <div key={meeting.id} className="border rounded-lg p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold">{meeting.supplier}</h3>
                  <div className="flex items-center mt-2 space-x-4 text-sm text-gray-600">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {meeting.date}
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {meeting.time}
                    </span>
                    <span className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {meeting.participants} participants
                    </span>
                  </div>
                  <div className="mt-2">
                    <span className="text-sm font-medium">Products: </span>
                    <span className="text-sm text-gray-600">{meeting.products.join(', ')}</span>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700">
                    Join
                  </button>
                  <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
                    Reschedule
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MeetingScheduler;
