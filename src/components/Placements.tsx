import React, { useState } from 'react';
import { 
  Trophy, 
  TrendingUp, 
  Users, 
  DollarSign, 
  Building2,
  Star,
  ChevronRight,
  Award
} from 'lucide-react';
import { placements } from '../data/mockData';

const Placements: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState('2024');
  
  const years = [...new Set(placements.map(p => p.year.toString()))].sort((a, b) => b.localeCompare(a));
  const filteredPlacements = placements.filter(p => p.year.toString() === selectedYear);

  // Calculate statistics
  const totalStudentsPlaced = filteredPlacements.reduce((sum, p) => sum + p.students, 0);
  const averagePackage = '₹18.5 LPA';
  const highestPackage = '₹25 LPA';
  const placementRate = '92%';

  const testimonials = [
    {
      id: 1,
      name: 'Priya Sharma',
      company: 'Google',
      role: 'Software Engineer',
      image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=300',
      testimonial: 'The placement cell at CollegeVerse provided excellent support throughout my job search. The mock interviews and resume reviews were incredibly helpful.',
      year: '2024'
    },
    {
      id: 2,
      name: 'Rahul Kumar',
      company: 'Microsoft',
      role: 'Program Manager',
      testimonial: 'Thanks to the career guidance and industry connections, I was able to land my dream job. The college truly prepares you for the corporate world.',
      year: '2024'
    },
    {
      id: 3,
      name: 'Sneha Patel',
      company: 'Amazon',
      role: 'SDE-1',
      image: 'https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=300',
      testimonial: 'The technical training sessions and coding bootcamps organized by the placement team were game-changers for my interview preparation.',
      year: '2023'
    }
  ];

  const defaultCompanyLogo = "https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=300";

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Placements</h1>
          <p className="text-xl text-gray-600">
            Discover career opportunities and success stories from our placement programs.
          </p>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 rounded-xl">
            <div className="flex items-center">
              <Users className="h-8 w-8 mb-4" />
            </div>
            <div className="text-3xl font-bold mb-2">{totalStudentsPlaced}</div>
            <div className="text-blue-100">Students Placed</div>
          </div>
          <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-6 rounded-xl">
            <div className="flex items-center">
              <DollarSign className="h-8 w-8 mb-4" />
            </div>
            <div className="text-3xl font-bold mb-2">{averagePackage}</div>
            <div className="text-green-100">Average Package</div>
          </div>
          <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white p-6 rounded-xl">
            <div className="flex items-center">
              <Trophy className="h-8 w-8 mb-4" />
            </div>
            <div className="text-3xl font-bold mb-2">{highestPackage}</div>
            <div className="text-purple-100">Highest Package</div>
          </div>
          <div className="bg-gradient-to-r from-orange-600 to-orange-700 text-white p-6 rounded-xl">
            <div className="flex items-center">
              <TrendingUp className="h-8 w-8 mb-4" />
            </div>
            <div className="text-3xl font-bold mb-2">{placementRate}</div>
            <div className="text-orange-100">Placement Rate</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Company Partners */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                  <Building2 className="h-6 w-6 mr-3" />
                  Our Placement Partners
                </h2>
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {years.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredPlacements.map((placement) => (
                  <div key={placement.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-center space-x-4 mb-4">
                      <img
                        src={placement.logo || defaultCompanyLogo}
                        alt={`${placement.company} logo`}
                        className="w-16 h-16 rounded-lg object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = defaultCompanyLogo;
                        }}
                      />
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">{placement.company}</h3>
                        <p className="text-gray-600">{placement.role}</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <div className="text-sm text-gray-600">Package</div>
                        <div className="font-bold text-green-600">{placement.package}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Students Placed</div>
                        <div className="font-bold text-blue-600">{placement.students}</div>
                      </div>
                    </div>
                    
                    <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 flex items-center justify-center">
                      View Details
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonials */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Star className="h-6 w-6 mr-3" />
                Student Success Stories
              </h2>
              
              <div className="space-y-6">
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="border border-gray-200 rounded-lg p-6">
                    <div className="flex items-start space-x-4">
                      {testimonial.image ? (
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                      ) : (
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                          <Users className="h-6 w-6 text-blue-600" />
                        </div>
                      )}
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                          <span className="text-gray-400">•</span>
                          <span className="text-blue-600 font-medium">{testimonial.role}</span>
                          <span className="text-gray-400">at</span>
                          <span className="text-gray-700">{testimonial.company}</span>
                        </div>
                        <p className="text-gray-600 italic">"{testimonial.testimonial}"</p>
                        <div className="flex items-center mt-3">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                          ))}
                          <span className="ml-2 text-sm text-gray-500">Class of {testimonial.year}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Placement Process */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <Award className="h-5 w-5 mr-2" />
                Placement Process
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold">
                    1
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Registration</h4>
                    <p className="text-sm text-gray-600">Register for placement activities</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold">
                    2
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Preparation</h4>
                    <p className="text-sm text-gray-600">Attend training sessions & workshops</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold">
                    3
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Application</h4>
                    <p className="text-sm text-gray-600">Apply to companies of your choice</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold">
                    4
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Interview</h4>
                    <p className="text-sm text-gray-600">Participate in selection process</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Placement Cell</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="font-medium text-gray-900">Director:</span>
                  <div className="text-gray-600">Dr. Arun Mehta</div>
                </div>
                <div>
                  <span className="font-medium text-gray-900">Email:</span>
                  <div className="text-blue-600">placements@college.edu</div>
                </div>
                <div>
                  <span className="font-medium text-gray-900">Phone:</span>
                  <div className="text-gray-600">+91-9876543210</div>
                </div>
                <div>
                  <span className="font-medium text-gray-900">Office Hours:</span>
                  <div className="text-gray-600">Mon-Fri, 9:00 AM - 5:00 PM</div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Links</h3>
              <div className="space-y-2">
                <button className="w-full text-left p-3 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                  Placement Guidelines
                </button>
                <button className="w-full text-left p-3 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                  Resume Format
                </button>
                <button className="w-full text-left p-3 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                  Interview Tips
                </button>
                <button className="w-full text-left p-3 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                  Company Profiles
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Placements;