import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { MessageSquare } from 'lucide-react';
import { Availability } from '../types';
import 'react-calendar/dist/Calendar.css';

interface CollaborationSectionProps {
  availability: Availability;
  onToggleAvailability: () => void;
  onRequestCollaboration: (message: string) => void;
}

export const CollaborationSection: React.FC<CollaborationSectionProps> = ({
  availability,
  onToggleAvailability,
  onRequestCollaboration
}) => {
  const [showCollaborationForm, setShowCollaborationForm] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onRequestCollaboration(message);
    setMessage('');
    setShowCollaborationForm(false);
  };

  return (
    <section className="bg-white rounded-lg shadow p-4 mt-5">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Collaboration Status</h2>
        <div className="flex items-center">
          <span className={`w-3 h-3 rounded-full mr-2 ${
            availability.isAvailable ? 'bg-green-500' : 'bg-red-500'
          }`} />
          <button
            onClick={onToggleAvailability}
            className={`px-4 py-1 rounded-full font-medium ${
              availability.isAvailable
                ? 'bg-green-100 text-green-800'
                : 'bg-red-100 text-red-800'
            }`}
          >
            {availability.isAvailable ? 'Available' : 'Unavailable'}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="font-medium mb-2">Availability Calendar</h3>
          <Calendar
            value={availability.availableDates.map(date => new Date(date))}
            className="w-full border rounded-lg"
            tileClassName={({ date }) => {
              return availability.availableDates.includes(date.toISOString().split('T')[0])
                ? 'bg-green-100'
                : '';
            }}
          />
          <p className="text-sm text-gray-500 mt-2">
            Preferred hours: {availability.preferredHours.start} - {availability.preferredHours.end}
          </p>
        </div>

        <div>
          {!showCollaborationForm ? (
            <div className="flex flex-col items-center justify-center h-full">
              <button
                onClick={() => setShowCollaborationForm(true)}
                className="bg-[#0a66c2] text-white px-6 py-3 rounded-full font-medium flex items-center"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Request Collaboration
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full p-3 border rounded-lg h-32 focus:ring-2 focus:ring-[#0a66c2] focus:border-transparent"
                  placeholder="Describe your collaboration request..."
                  required
                />
              </div>
              <div className="flex space-x-3">
                <button
                  type="submit"
                  className="flex-1 bg-[#0a66c2] text-white py-2 rounded-full font-medium hover:bg-[#084482]"
                >
                  Send Request
                </button>
                <button
                  type="button"
                  onClick={() => setShowCollaborationForm(false)}
                  className="flex-1 border border-gray-300 text-gray-700 py-2 rounded-full font-medium hover:bg-gray-50"
                >
                  Cancel
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};