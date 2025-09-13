import React from 'react';
import { Bell } from 'lucide-react';
import { announcements } from '../data/mockData';

const AnnouncementTicker: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2 overflow-hidden">
      <div className="flex items-center">
        <div className="flex items-center px-4 whitespace-nowrap">
          <Bell className="h-4 w-4 mr-2 flex-shrink-0" />
          <span className="font-semibold text-sm">Latest Updates:</span>
        </div>
        <div className="flex animate-marquee space-x-8">
          {announcements.map((announcement) => (
            <span
              key={announcement.id}
              className={`text-sm whitespace-nowrap ${
                announcement.urgent ? 'font-semibold' : ''
              }`}
            >
              • {announcement.title}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnnouncementTicker;