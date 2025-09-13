import React, { useState } from 'react';
import { 
  Calendar as CalendarIcon, 
  Clock, 
  MapPin, 
  Filter,
  Download,
  ChevronLeft,
  ChevronRight,
  Plus
} from 'lucide-react';
import { events } from '../data/mockData';

const Calendar: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [viewMode, setViewMode] = useState<'month' | 'list'>('month');

  const categories = [...new Set(events.map(event => event.category))];

  const filteredEvents = events.filter(event => 
    selectedCategory === 'all' || event.category === selectedCategory
  );

  const getCategoryColor = (category: string) => {
    const colors = {
      academic: 'bg-blue-500',
      cultural: 'bg-purple-500',
      placement: 'bg-green-500',
      exam: 'bg-red-500',
      fest: 'bg-yellow-500'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-500';
  };

  const getCategoryBgColor = (category: string) => {
    const colors = {
      academic: 'bg-blue-50 border-blue-200',
      cultural: 'bg-purple-50 border-purple-200',
      placement: 'bg-green-50 border-green-200',
      exam: 'bg-red-50 border-red-200',
      fest: 'bg-yellow-50 border-yellow-200'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-50 border-gray-200';
  };

  const getMonthName = (date: Date) => {
    return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  };

  const navigateMonth = (direction: 'prev' | 'next') => {
    const newMonth = new Date(currentMonth);
    if (direction === 'prev') {
      newMonth.setMonth(newMonth.getMonth() - 1);
    } else {
      newMonth.setMonth(newMonth.getMonth() + 1);
    }
    setCurrentMonth(newMonth);
  };

  const exportToICS = () => {
    // In a real app, this would generate an ICS file
    alert('Calendar export functionality would be implemented here');
  };

  const upcomingEvents = filteredEvents
    .filter(event => new Date(event.date) >= new Date())
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .slice(0, 5);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Academic Calendar</h1>
            <p className="text-xl text-gray-600">
              Stay updated with all academic events, exams, and college activities.
            </p>
          </div>
          <div className="flex space-x-3 mt-4 sm:mt-0">
            <button
              onClick={exportToICS}
              className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Download className="h-4 w-4 mr-2" />
              Export
            </button>
            <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <Plus className="h-4 w-4 mr-2" />
              Add Event
            </button>
          </div>
        </div>

        {/* Controls */}
        <div className="bg-white rounded-lg p-4 shadow-sm mb-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Categories</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </option>
                ))}
              </select>
              <div className="flex items-center text-sm text-gray-600">
                <Filter className="h-4 w-4 mr-2" />
                {filteredEvents.length} events
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setViewMode('month')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  viewMode === 'month'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                Month
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  viewMode === 'list'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                List
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Calendar/List View */}
          <div className="lg:col-span-2">
            {viewMode === 'month' ? (
              <div className="bg-white rounded-xl shadow-lg p-6">
                {/* Month Navigation */}
                <div className="flex items-center justify-between mb-6">
                  <button
                    onClick={() => navigateMonth('prev')}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {getMonthName(currentMonth)}
                  </h2>
                  <button
                    onClick={() => navigateMonth('next')}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>

                {/* Calendar Grid */}
                <div className="grid grid-cols-7 gap-1 mb-4">
                  {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                    <div key={day} className="p-2 text-center text-sm font-medium text-gray-600">
                      {day}
                    </div>
                  ))}
                </div>

                {/* Calendar Days */}
                <div className="grid grid-cols-7 gap-1">
                  {Array.from({ length: 35 }, (_, index) => {
                    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), index - 6);
                    const isCurrentMonth = date.getMonth() === currentMonth.getMonth();
                    const dayEvents = filteredEvents.filter(event => 
                      new Date(event.date).toDateString() === date.toDateString()
                    );

                    return (
                      <div
                        key={index}
                        className={`min-h-[100px] p-2 border ${
                          isCurrentMonth ? 'bg-white' : 'bg-gray-50'
                        }`}
                      >
                        <div className={`text-sm ${
                          isCurrentMonth ? 'text-gray-900' : 'text-gray-400'
                        }`}>
                          {date.getDate()}
                        </div>
                        <div className="space-y-1 mt-1">
                          {dayEvents.slice(0, 2).map((event) => (
                            <div
                              key={event.id}
                              className={`text-xs p-1 rounded ${getCategoryBgColor(event.category)} truncate`}
                            >
                              {event.title}
                            </div>
                          ))}
                          {dayEvents.length > 2 && (
                            <div className="text-xs text-gray-500">
                              +{dayEvents.length - 2} more
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredEvents.map((event) => (
                  <div key={event.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                    <div className="flex items-start space-x-4">
                      <div className={`w-3 h-3 rounded-full mt-2 ${getCategoryColor(event.category)}`}></div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="text-lg font-bold text-gray-900">{event.title}</h3>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium capitalize ${getCategoryBgColor(event.category)}`}>
                            {event.category}
                          </span>
                        </div>
                        <p className="text-gray-600 mb-3">{event.description}</p>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                          <div className="flex items-center">
                            <CalendarIcon className="h-4 w-4 mr-2" />
                            {new Date(event.date).toLocaleDateString()}
                          </div>
                          {event.time && (
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-2" />
                              {event.time}
                            </div>
                          )}
                          {event.venue && (
                            <div className="flex items-center">
                              <MapPin className="h-4 w-4 mr-2" />
                              {event.venue}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Upcoming Events */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Upcoming Events</h3>
              <div className="space-y-4">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="flex items-start space-x-3">
                    <div className={`w-2 h-2 rounded-full mt-2 ${getCategoryColor(event.category)}`}></div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900 text-sm">{event.title}</h4>
                      <div className="text-xs text-gray-500 mt-1">
                        {new Date(event.date).toLocaleDateString()}
                        {event.time && ` • ${event.time}`}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Event Categories */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Event Categories</h3>
              <div className="space-y-3">
                {categories.map((category) => {
                  const categoryEvents = events.filter(e => e.category === category);
                  return (
                    <div key={category} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className={`w-3 h-3 rounded-full ${getCategoryColor(category)}`}></div>
                        <span className="text-gray-700 capitalize">{category}</span>
                      </div>
                      <span className="text-sm font-medium text-gray-900">
                        {categoryEvents.length}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full text-left p-3 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors text-sm">
                  Subscribe to Calendar
                </button>
                <button className="w-full text-left p-3 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors text-sm">
                  Download Academic Calendar
                </button>
                <button className="w-full text-left p-3 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors text-sm">
                  Set Event Reminders
                </button>
                <button className="w-full text-left p-3 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors text-sm">
                  Request New Event
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;