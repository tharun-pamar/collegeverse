export interface Department {
  id: string;
  slug: string;
  name: string;
  hod: {
    name: string;
    photo?: string;
    designation: string;
    email: string;
  };
  ranking: number;
  students: number;
  faculty: Faculty[];
  courses: Course[];
  research: string[];
  description: string;
}

export interface Faculty {
  id: string;
  name: string;
  designation: string;
  photo?: string;
  deptId: string;
  email: string;
  specialization: string;
}

export interface Course {
  id: string;
  name: string;
  code: string;
  credits: number;
  deptId: string;
  syllabusFile?: string;
  semester: number;
  description: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  category: 'academic' | 'cultural' | 'placement' | 'exam' | 'fest';
  deptId?: string;
  description: string;
  time?: string;
  venue?: string;
}

export interface Placement {
  id: string;
  company: string;
  role: string;
  package: string;
  year: number;
  students: number;
  logo?: string;
}

export interface Book {
  id: string;
  title: string;
  author: string;
  department: string;
  year: number;
  type: 'book' | 'journal' | 'research';
  downloadUrl?: string;
}

export interface Club {
  id: string;
  name: string;
  category: string;
  description: string;
  image?: string;
  members: number;
  coordinator: string;
}

export interface Announcement {
  id: string;
  title: string;
  date: string;
  urgent: boolean;
}

// Generate unique slugs for departments
const generateSlug = (name: string): string => {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
};

export const departments: Department[] = [
  {
    id: 'cs',
    slug: generateSlug('Computer Science'),
    name: 'Computer Science',
    hod: {
      name: 'Dr. Sarah Johnson',
      photo: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=300',
      designation: 'Professor & HOD',
      email: 'sarah.johnson@college.edu'
    },
    ranking: 1,
    students: 450,
    faculty: [
      {
        id: 'f1',
        name: 'Dr. Michael Chen',
        designation: 'Associate Professor',
        photo: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300',
        deptId: 'cs',
        email: 'michael.chen@college.edu',
        specialization: 'Machine Learning'
      },
      {
        id: 'f2',
        name: 'Dr. Emily Rodriguez',
        designation: 'Assistant Professor',
        deptId: 'cs',
        email: 'emily.rodriguez@college.edu',
        specialization: 'Software Engineering'
      }
    ],
    courses: [
      {
        id: 'cs101',
        name: 'Introduction to Programming',
        code: 'CS101',
        credits: 4,
        deptId: 'cs',
        semester: 1,
        description: 'Fundamental concepts of programming using Python'
      },
      {
        id: 'cs201',
        name: 'Data Structures',
        code: 'CS201',
        credits: 4,
        deptId: 'cs',
        semester: 3,
        description: 'Linear and non-linear data structures'
      }
    ],
    research: [
      'AI in Healthcare Applications',
      'Blockchain Security Systems',
      'IoT Smart Campus Solutions'
    ],
    description: 'Leading department in computer science education and research'
  },
  {
    id: 'ee',
    slug: generateSlug('Electrical Engineering'),
    name: 'Electrical Engineering',
    hod: {
      name: 'Dr. Robert Thompson',
      designation: 'Professor & HOD',
      email: 'robert.thompson@college.edu'
    },
    ranking: 2,
    students: 380,
    faculty: [],
    courses: [],
    research: [
      'Renewable Energy Systems',
      'Power Grid Optimization'
    ],
    description: 'Excellence in electrical engineering and power systems'
  },
  {
    id: 'me',
    slug: generateSlug('Mechanical Engineering'),
    name: 'Mechanical Engineering',
    hod: {
      name: 'Dr. Lisa Wang',
      photo: 'https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=300',
      designation: 'Professor & HOD',
      email: 'lisa.wang@college.edu'
    },
    ranking: 3,
    students: 420,
    faculty: [
      {
        id: 'f3',
        name: 'Dr. James Wilson',
        designation: 'Professor',
        deptId: 'me',
        email: 'james.wilson@college.edu',
        specialization: 'Thermodynamics'
      }
    ],
    courses: [
      {
        id: 'me101',
        name: 'Engineering Mechanics',
        code: 'ME101',
        credits: 3,
        deptId: 'me',
        semester: 2,
        description: 'Statics and dynamics of engineering systems'
      }
    ],
    research: [
      'Advanced Materials Research',
      'Automotive Engineering'
    ],
    description: 'Innovation in mechanical engineering and manufacturing'
  }
];

export const events: Event[] = [
  {
    id: 'e1',
    title: 'Annual Tech Fest',
    date: '2024-03-15',
    category: 'fest',
    description: 'Three-day technical festival with competitions and workshops',
    time: '9:00 AM',
    venue: 'Main Auditorium'
  },
  {
    id: 'e2',
    title: 'Mid-Term Examinations',
    date: '2024-02-20',
    category: 'exam',
    description: 'Mid-semester examinations for all departments'
  },
  {
    id: 'e3',
    title: 'Industry Guest Lecture',
    date: '2024-02-28',
    category: 'academic',
    deptId: 'cs',
    description: 'Guest lecture on AI trends by industry expert',
    time: '2:00 PM',
    venue: 'CS Auditorium'
  }
];

export const placements: Placement[] = [
  {
    id: 'p1',
    company: 'Google',
    role: 'Software Engineer',
    package: '₹25 LPA',
    year: 2024,
    students: 8,
    logo: 'https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  {
    id: 'p2',
    company: 'Microsoft',
    role: 'Program Manager',
    package: '₹22 LPA',
    year: 2024,
    students: 6
  },
  {
    id: 'p3',
    company: 'Amazon',
    role: 'SDE-1',
    package: '₹20 LPA',
    year: 2024,
    students: 12
  }
];

export const books: Book[] = [
  {
    id: 'b1',
    title: 'Introduction to Algorithms',
    author: 'Thomas H. Cormen',
    department: 'Computer Science',
    year: 2022,
    type: 'book'
  },
  {
    id: 'b2',
    title: 'Machine Learning Yearbook',
    author: 'Dr. Michael Chen',
    department: 'Computer Science',
    year: 2023,
    type: 'research'
  },
  {
    id: 'b3',
    title: 'Engineering Mechanics Handbook',
    author: 'Dr. James Wilson',
    department: 'Mechanical Engineering',
    year: 2023,
    type: 'journal'
  }
];

export const clubs: Club[] = [
  {
    id: 'c1',
    name: 'Coding Club',
    category: 'Technical',
    description: 'Programming competitions and hackathons',
    members: 120,
    coordinator: 'Alex Johnson',
    image: 'https://images.pexels.com/photos/574069/pexels-photo-574069.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  {
    id: 'c2',
    name: 'Drama Society',
    category: 'Cultural',
    description: 'Theatre performances and cultural events',
    members: 80,
    coordinator: 'Emma Davis'
  },
  {
    id: 'c3',
    name: 'Robotics Club',
    category: 'Technical',
    description: 'Robot building and automation projects',
    members: 95,
    coordinator: 'Ryan Kim',
    image: 'https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg?auto=compress&cs=tinysrgb&w=300'
  }
];

export const announcements: Announcement[] = [
  {
    id: 'a1',
    title: 'Registration for Tech Fest 2024 is now open!',
    date: '2024-02-01',
    urgent: true
  },
  {
    id: 'a2',
    title: 'Library will remain closed on February 14th for maintenance',
    date: '2024-02-12',
    urgent: false
  },
  {
    id: 'a3',
    title: 'New placement opportunities available - Check placement portal',
    date: '2024-02-10',
    urgent: true
  }
];

export const timetable = {
  'Monday': [
    { time: '9:00-10:00', subject: 'Data Structures', room: 'CS-101', faculty: 'Dr. Chen' },
    { time: '10:00-11:00', subject: 'Algorithms', room: 'CS-102', faculty: 'Dr. Rodriguez' },
    { time: '11:30-12:30', subject: 'Database Systems', room: 'CS-103', faculty: 'Dr. Johnson' }
  ],
  'Tuesday': [
    { time: '9:00-10:00', subject: 'Software Engineering', room: 'CS-101', faculty: 'Dr. Rodriguez' },
    { time: '10:00-11:00', subject: 'Machine Learning', room: 'CS-102', faculty: 'Dr. Chen' }
  ],
  'Wednesday': [
    { time: '9:00-10:00', subject: 'Computer Networks', room: 'CS-101', faculty: 'Dr. Johnson' },
    { time: '10:00-11:00', subject: 'Operating Systems', room: 'CS-102', faculty: 'Dr. Chen' }
  ]
};