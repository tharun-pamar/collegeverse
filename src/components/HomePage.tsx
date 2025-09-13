import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Users, 
  Calendar, 
  Trophy, 
  Building2, 
  GraduationCap,
  TrendingUp,
  Award
} from 'lucide-react';
import AnnouncementTicker from './AnnouncementTicker';

const HomePage: React.FC = () => {
  const quickActions = [
    {
      name: 'Departments',
      href: '/departments',
      icon: Building2,
      description: 'Explore our academic departments',
      color: 'from-blue-500 to-blue-600'
    },
    {
      name: 'Academics',
      href: '/academics',
      icon: BookOpen,
      description: 'Course schedules & syllabi',
      color: 'from-green-500 to-green-600'
    },
    {
      name: 'Library',
      href: '/library',
      icon: GraduationCap,
      description: 'Digital library resources',
      color: 'from-purple-500 to-purple-600'
    },
    {
      name: 'Student Clubs',
      href: '/clubs',
      icon: Users,
      description: 'Join student activities',
      color: 'from-orange-500 to-orange-600'
    },
    {
      name: 'Placements',
      href: '/placements',
      icon: Trophy,
      description: 'Career opportunities',
      color: 'from-red-500 to-red-600'
    },
    {
      name: 'Calendar',
      href: '/calendar',
      icon: Calendar,
      description: 'Academic events & deadlines',
      color: 'from-indigo-500 to-indigo-600'
    }
  ];

  const stats = [
    { label: 'Students', value: '1,250+', icon: Users },
    { label: 'Faculty', value: '85+', icon: GraduationCap },
    { label: 'Departments', value: '8', icon: Building2 },
    { label: 'Placement Rate', value: '92%', icon: TrendingUp },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <AnnouncementTicker />
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Welcome to <span className="text-yellow-400">CollegeVerse</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Your gateway to academic excellence, innovation, and student life. 
              Discover our world-class programs, vibrant community, and endless opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/dashboard"
                className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 shadow-lg"
              >
                Student Portal
              </Link>
              <Link
                to="/departments"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
              >
                Explore Departments
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-blue-100 rounded-full">
                    <stat.icon className="h-8 w-8 text-blue-600" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions Grid */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Quick Access</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Navigate through our comprehensive portal to access all college services and information
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {quickActions.map((action) => (
              <Link
                key={action.name}
                to={action.href}
                className="group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${action.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                <div className="p-8">
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${action.color} mb-6`}>
                    <action.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {action.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{action.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Excellence in Education & Innovation
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our institution stands at the forefront of higher education, combining traditional 
                academic excellence with cutting-edge research and innovation. We nurture tomorrow's 
                leaders through comprehensive programs and world-class facilities.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Award className="h-6 w-6 text-yellow-500" />
                  <span className="text-gray-700">NAAC Grade A+ Accredited</span>
                </div>
                <div className="flex items-center space-x-3">
                  <TrendingUp className="h-6 w-6 text-green-500" />
                  <span className="text-gray-700">Top 10 Engineering Colleges</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Trophy className="h-6 w-6 text-blue-500" />
                  <span className="text-gray-700">100+ Research Publications Annually</span>
                </div>
              </div>
            </div>
            <div className="lg:pl-12">
              <img
                src="https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Campus life"
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;