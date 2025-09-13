import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Users, Trophy, BookOpen, ChevronRight } from 'lucide-react';
import { departments } from '../data/mockData';

const Departments: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredDepartments = departments.filter(dept =>
    dept.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Academic Departments</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Explore our diverse range of academic departments, each committed to excellence in education and research.
          </p>
        </div>

        {/* Search and View Controls */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 space-y-4 sm:space-y-0">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search departments..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="flex space-x-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                viewMode === 'grid'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              Grid
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                viewMode === 'list'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              List
            </button>
          </div>
        </div>

        {/* Departments Display */}
        <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}>
          {filteredDepartments.length > 0 ? (
            filteredDepartments.map((department) => (
              <div
                key={department.id}
                className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
                  viewMode === 'list' ? 'flex items-center p-6' : 'p-6'
                }`}
              >
                {viewMode === 'grid' ? (
                  <>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                          <BookOpen className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">{department.name}</h3>
                          <div className="flex items-center text-sm text-gray-500">
                            <Trophy className="h-4 w-4 mr-1" />
                            Rank #{department.ranking}
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-6 line-clamp-2">{department.description}</p>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center p-3 bg-blue-50 rounded-lg">
                        <Users className="h-5 w-5 text-blue-600 mx-auto mb-1" />
                        <div className="text-lg font-bold text-blue-900">{department.students}</div>
                        <div className="text-xs text-gray-600">Students</div>
                      </div>
                      <div className="text-center p-3 bg-green-50 rounded-lg">
                        <BookOpen className="h-5 w-5 text-green-600 mx-auto mb-1" />
                        <div className="text-lg font-bold text-green-900">{department.faculty.length}</div>
                        <div className="text-xs text-gray-600">Faculty</div>
                      </div>
                    </div>

                    <Link
                      to={`/departments/${department.slug}`}
                      className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-3 rounded-lg font-semibold flex items-center justify-center hover:from-blue-700 hover:to-indigo-700 transition-all duration-200"
                    >
                      View Details
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </>
                ) : (
                  <>
                    <div className="flex items-center space-x-4 flex-1">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <BookOpen className="h-8 w-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-xl font-bold text-gray-900">{department.name}</h3>
                          <div className="flex items-center text-sm text-gray-500">
                            <Trophy className="h-4 w-4 mr-1" />
                            Rank #{department.ranking}
                          </div>
                        </div>
                        <p className="text-gray-600 mb-3">{department.description}</p>
                        <div className="flex items-center space-x-6 text-sm text-gray-500">
                          <div className="flex items-center">
                            <Users className="h-4 w-4 mr-1" />
                            {department.students} Students
                          </div>
                          <div className="flex items-center">
                            <BookOpen className="h-4 w-4 mr-1" />
                            {department.faculty.length} Faculty
                          </div>
                        </div>
                      </div>
                    </div>
                    <Link
                      to={`/departments/${department.slug}`}
                      className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-lg font-semibold flex items-center hover:from-blue-700 hover:to-indigo-700 transition-all duration-200"
                    >
                      View Details
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </>
                )}
              </div>
            ))
          ) : (
            <div className="col-span-full flex flex-col items-center justify-center py-12">
              <Search className="h-16 w-16 text-gray-400 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No departments found</h3>
              <p className="text-gray-600">Try adjusting your search terms to find what you're looking for.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Departments;