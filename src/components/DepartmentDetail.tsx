import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Mail, 
  Users, 
  Trophy, 
  BookOpen, 
  FileText, 
  User,
  Award,
  GraduationCap
} from 'lucide-react';
import { departments } from '../data/mockData';

const DepartmentDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const department = departments.find(dept => dept.slug === slug);

  if (!department) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Department Not Found</h1>
          <p className="text-gray-600 mb-8">The department you're looking for doesn't exist.</p>
          <Link
            to="/departments"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Departments
          </Link>
        </div>
      </div>
    );
  }

  const defaultHodPhoto = "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=300";
  const defaultFacultyPhoto = "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300";

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          to="/departments"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6 transition-colors"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Departments
        </Link>

        {/* Department Header */}
        <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white rounded-xl p-8 mb-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-4">{department.name}</h1>
              <p className="text-blue-100 text-lg mb-4">{department.description}</p>
              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center">
                  <Trophy className="h-4 w-4 mr-1" />
                  Rank #{department.ranking}
                </div>
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-1" />
                  {department.students} Students
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* HOD Section */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <User className="h-6 w-6 mr-3" />
                Head of Department
              </h2>
              <div className="flex items-center space-x-4">
                <img
                  src={department.hod.photo || defaultHodPhoto}
                  alt={department.hod.name}
                  className="w-20 h-20 rounded-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = defaultHodPhoto;
                  }}
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{department.hod.name}</h3>
                  <p className="text-gray-600">{department.hod.designation}</p>
                  <div className="flex items-center text-blue-600 mt-2">
                    <Mail className="h-4 w-4 mr-2" />
                    <a href={`mailto:${department.hod.email}`} className="hover:underline">
                      {department.hod.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Faculty Section */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <GraduationCap className="h-6 w-6 mr-3" />
                Faculty Members
              </h2>
              {department.faculty.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {department.faculty.map((faculty) => (
                    <div key={faculty.id} className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg">
                      <img
                        src={faculty.photo || defaultFacultyPhoto}
                        alt={faculty.name}
                        className="w-16 h-16 rounded-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = defaultFacultyPhoto;
                        }}
                      />
                      <div>
                        <h4 className="font-semibold text-gray-900">{faculty.name}</h4>
                        <p className="text-gray-600 text-sm">{faculty.designation}</p>
                        <p className="text-blue-600 text-sm">{faculty.specialization}</p>
                        <div className="flex items-center text-gray-500 text-xs mt-1">
                          <Mail className="h-3 w-3 mr-1" />
                          <a href={`mailto:${faculty.email}`} className="hover:underline">
                            {faculty.email}
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <GraduationCap className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">Faculty information will be updated soon.</p>
                </div>
              )}
            </div>

            {/* Courses Section */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <BookOpen className="h-6 w-6 mr-3" />
                Courses Offered
              </h2>
              {department.courses.length > 0 ? (
                <div className="space-y-4">
                  {department.courses.map((course) => (
                    <div key={course.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-semibold text-gray-900">{course.name}</h4>
                          <p className="text-gray-600 text-sm">{course.description}</p>
                          <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                            <span>Code: {course.code}</span>
                            <span>Credits: {course.credits}</span>
                            <span>Semester: {course.semester}</span>
                          </div>
                        </div>
                        {course.syllabusFile && (
                          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors">
                            Download Syllabus
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">Course information will be updated soon.</p>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Department Stats</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Total Students</span>
                  <span className="font-semibold text-blue-600">{department.students}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Faculty Members</span>
                  <span className="font-semibold text-green-600">{department.faculty.length}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Courses Offered</span>
                  <span className="font-semibold text-purple-600">{department.courses.length}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Department Rank</span>
                  <span className="font-semibold text-yellow-600">#{department.ranking}</span>
                </div>
              </div>
            </div>

            {/* Research Areas */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <Award className="h-5 w-5 mr-2" />
                Research Areas
              </h3>
              {department.research.length > 0 ? (
                <ul className="space-y-3">
                  {department.research.map((area, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <FileText className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{area}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500 text-sm">Research information will be updated soon.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepartmentDetail;