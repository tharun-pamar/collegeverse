import React from 'react';
import { 
  BookOpen, 
  Calendar, 
  Bell, 
  Users, 
  Trophy, 
  Clock,
  ChevronRight,
  GraduationCap,
  MapPin,
  User
} from 'lucide-react';
import { timetable, events, announcements } from '../data/mockData';

const Dashboard: React.FC = () => {
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });
  const todaysClasses = timetable[today as keyof typeof timetable] || [];
  
  const upcomingEvents = events
    .filter(event => new Date(event.date) >= new Date())
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .slice(0, 3);

  const recentAnnouncements = announcements.slice(0, 4);

  const quickLinks = [
    { name: 'View Timetable', href: '/academics', icon: Clock, color: 'bg-blue-500' },
    { name: 'Library', href: '/library', icon: BookOpen, color: 'bg-green-500' },
    { name: 'Clubs', href: '/clubs', icon: Users, color: 'bg-purple-500' },
    { name: 'Placements', href: '/placements', icon: Trophy, color: 'bg-orange-500' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Welcome Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Welcome back, Student! 👋
          </h1>
          <p className="text-xl text-gray-600">
            Here's what's happening in your academic world today.
          </p>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Today's Classes */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Clock className="h-6 w-6 mr-3" />
                Today's Classes - {today}
              </h2>
              
              {todaysClasses.length > 0 ? (
                <div className="space-y-4">
                  {todaysClasses.map((class_, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">{class_.subject}</h3>
                          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-2" />
                              {class_.time}
                            </div>
                            <div className="flex items-center">
                              <MapPin className="h-4 w-4 mr-2" />
                              {class_.room}
                            </div>
                            <div className="flex items-center">
                              <User className="h-4 w-4 mr-2" />
                              {class_.faculty}
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                            Upcoming
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <Calendar className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No classes today!</h3>
                  <p className="text-gray-600">Enjoy your free day or catch up on assignments.</p>
                </div>
              )}
            </div>

            {/* Upcoming Events */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                  <Calendar className="h-6 w-6 mr-3" />
                  Upcoming Events
                </h2>
                <a href="/calendar" className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                  View All
                  <ChevronRight className="h-4 w-4 ml-1" />
                </a>
              </div>
              
              <div className="space-y-4">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">{event.title}</h3>
                        <p className="text-gray-600 text-sm mb-2">{event.description}</p>
                        <div className="flex items-center text-xs text-gray-500">
                          <Calendar className="h-3 w-3 mr-1" />
                          {new Date(event.date).toLocaleDateString()}
                          {event.time && (
                            <>
                              <span className="mx-2">•</span>
                              {event.time}
                            </>
                          )}
                        </div>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium capitalize ${
                        event.category === 'exam' ? 'bg-red-100 text-red-800' :
                        event.category === 'cultural' ? 'bg-purple-100 text-purple-800' :
                        event.category === 'academic' ? 'bg-blue-100 text-blue-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {event.category}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Links */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Links</h3>
              <div className="grid grid-cols-2 gap-3">
                {quickLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="flex flex-col items-center p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors text-center"
                  >
                    <div className={`p-3 ${link.color} rounded-lg mb-3`}>
                      <link.icon className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-sm font-medium text-gray-900">{link.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Notifications */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <Bell className="h-5 w-5 mr-2" />
                Recent Updates
              </h3>
              <div className="space-y-3">
                {recentAnnouncements.map((announcement) => (
                  <div key={announcement.id} className="p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-start space-x-2">
                      {announcement.urgent && (
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      )}
                      <div>
                        <p className="text-sm text-gray-900 font-medium">{announcement.title}</p>
                        <p className="text-xs text-gray-500 mt-1">
                          {new Date(announcement.date).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Academic Progress */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <GraduationCap className="h-5 w-5 mr-2" />
                Academic Overview
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Current Semester</span>
                    <span className="font-medium">7th Semester</span>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">CGPA</span>
                    <span className="font-medium">8.7</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: '87%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Attendance</span>
                    <span className="font-medium">92%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '92%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Credits Completed</span>
                    <span className="font-medium">156/180</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Upcoming Deadlines */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Upcoming Deadlines</h3>
              <div className="space-y-3">
                <div className="p-3 border-l-4 border-red-500 bg-red-50">
                  <h4 className="font-medium text-gray-900 text-sm">Assignment Submission</h4>
                  <p className="text-xs text-gray-600 mt-1">Database Systems - Due March 20</p>
                </div>
                <div className="p-3 border-l-4 border-yellow-500 bg-yellow-50">
                  <h4 className="font-medium text-gray-900 text-sm">Project Review</h4>
                  <p className="text-xs text-gray-600 mt-1">Final Year Project - March 25</p>
                </div>
                <div className="p-3 border-l-4 border-blue-500 bg-blue-50">
                  <h4 className="font-medium text-gray-900 text-sm">Lab Report</h4>
                  <p className="text-xs text-gray-600 mt-1">Computer Networks - March 28</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;