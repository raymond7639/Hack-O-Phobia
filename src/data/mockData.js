export const currentUser = {
  name: 'V Sing',
  email: 'v.sing@university.edu',
  major: 'Computer Science',
  semester: 'Semester 5',
  level: 'Undergraduate',
  // Using primary color from redesign #6a68df
  avatar: 'https://ui-avatars.com/api/?name=V+Sing&size=200&background=6a68df&color=fff',
  stats: {
    notesUploaded: 12,
    answers: 45,
    reputation: '8.4k'
  },
  about: "Hey! I'm a third-year CS major focusing on full-stack development. I enjoy building web apps with React and Node.js. Happy to share my class notes and help out in the forum!",
  activity: [
    { id: 1, type: 'forum', title: 'Answered a question in Algorithms', desc: 'You earned +15 reputation' },
    { id: 2, type: 'note', title: 'Uploaded "OS Notes Ch 1-3"', desc: 'Your note has been downloaded 42 times' },
    { id: 3, type: 'print', title: 'Completed Print Request', desc: 'Library Main Floor Printer' }
  ]
};

export const dashboardStats = [
  { id: 1, type: 'notes', value: '1,248', label: 'Notes Shared' },
  { id: 2, type: 'rating', value: '4.8', label: 'Avg Note Rating' },
  { id: 3, type: 'questions', value: '342', label: 'Active Questions' },
  { id: 4, type: 'skill', value: 'Web Dev', label: 'Top Skill Request' }
];

export const recentNotesList = [
  { id: 1, title: 'CS301 Algorithms - Midterm Study Guide', uploader: 'Alex Lee', major: 'Computer Science', course: 'CS301', rating: '4.9' },
  { id: 2, title: 'Thermodynamics Formula Sheet', uploader: 'Sarah J.', major: 'Mechanical Engineering', course: 'ME202', rating: '4.7' }
];

export const activePrintRequestsList = [
  { id: 1, filename: 'Assignment_3_Final.pdf', location: 'Library Printer, 1st Floor', status: 'Ready' }
];

export const trendingSkillsList = ['ReactJS', 'Python', 'Calculus II', 'Figma', 'Video Editing'];

export const notificationsList = [
  {
    id: 1,
    type: 'print',
    title: 'Print Request Ready',
    desc: 'Your print request #1022 (OS Cheat Sheet.pdf) is ready for pickup at the Library Printer.',
    time: '10 min ago',
    unread: true,
    iconClass: 'print'
  },
  {
    id: 2,
    type: 'forum',
    title: 'New Answer on Your Question',
    desc: 'Alex Chen answered your question about "React Hooks and useEffect timing".',
    time: '2 hours ago',
    unread: true,
    iconClass: 'forum'
  },
  {
    id: 3,
    type: 'note',
    title: 'Note Downloaded 50+ Times',
    desc: 'Your "CS304 Midterm Notes" has been downloaded 50 times. You earned +25 reputation!',
    time: 'Yesterday',
    unread: false,
    iconClass: 'note'
  },
  {
    id: 4,
    type: 'skill',
    title: 'New Session Request',
    desc: 'A student wants to book a React tutoring session with you for this Saturday.',
    time: '2 days ago',
    unread: false,
    iconClass: 'skill'
  }
];

export const allNotesList = [
  { id: 1, title: 'CS301 Algorithms Midterm Study Guide', author: 'Alex Lee', subject: 'Computer Science', semester: '5', rating: 4.9, downloads: 342, date: '12 Oct 2023' },
  { id: 2, title: 'Thermodynamics Formula Sheet', author: 'Sarah J.', subject: 'Mechanical Eng', semester: '4', rating: 4.7, downloads: 156, date: '05 Nov 2023' },
  { id: 3, title: 'Introduction to Economics Notes', author: 'Mike Ross', subject: 'Business', semester: '2', rating: 4.5, downloads: 89, date: '22 Nov 2023' },
  { id: 4, title: 'Organic Chemistry Reactions Map', author: 'Emily W.', subject: 'Chemistry', semester: '3', rating: 4.8, downloads: 210, date: '01 Dec 2023' },
  { id: 5, title: 'Linear Algebra Matrices Guide', author: 'David Chen', subject: 'Mathematics', semester: '1', rating: 4.6, downloads: 423, date: '15 Dec 2023' },
  { id: 6, title: 'History of Modern Art Exam Prep', author: 'Anna K.', subject: 'Arts', semester: '6', rating: 4.4, downloads: 67, date: '10 Jan 2024' },
];

export const forumQuestionsList = [
  {
    id: 1,
    author: 'Sarah Jenkins',
    avatar: 'https://ui-avatars.com/api/?name=Sarah+Jenkins&background=047857&color=fff',
    department: 'Computer Science',
    title: "Confused about Time Complexity of Dijkstra's with a Priority Queue?",
    content: "Hey everyone, I'm studying for the CS301 midterm and I'm getting mixed signals from the textbook vs. lecture slides regarding Dijkstra's algorithm. If we use a Binary Heap for the priority queue, is the complexity O(|V+E| log V) or O(E log V)? I understand E log V is usually the case for sparse graphs, but I'm struggling with the formal derivation when considering the decrease-key operations.",
    tags: ['ALGORITHMS', 'HELP NEEDED'],
    votes: 42,
    answers: 8,
    time: '4 hours ago',
    hasAcceptedAnswer: true
  },
  {
    id: 2,
    author: 'Michael Chang',
    avatar: 'https://ui-avatars.com/api/?name=Michael+Chang&background=0ea5e9&color=fff',
    department: 'Information Technology',
    title: "Difference between JWT and Session-based Authentication?",
    content: "I'm building my first full-stack application and I'm unsure which authentication method to choose. When is it better to use stateless JWT tokens vs traditional stateful server sessions? Are there specific security tradeoffs I should be aware of?",
    tags: ['WEB DEV', 'SECURITY'],
    votes: 15,
    answers: 3,
    time: '12 hours ago',
    hasAcceptedAnswer: false
  }
];

export const marketplaceSkillsList = [
  { id: 1, type: 'offer', title: 'I will tutor you in React & Next.js', owner: 'V Sing', avatar: 'https://ui-avatars.com/api/?name=V+Sing&background=6A68DF&color=fff', tags: ['React', 'Web Dev'], details: 'Available weekends for 2 hours. Have taught 10+ students successfully.' },
  { id: 2, type: 'request', title: 'Looking for a Calculus III study partner', owner: 'Mike R.', avatar: 'https://ui-avatars.com/api/?name=Mike+R&background=EFB995&color=fff', tags: ['Math', 'Calculus'], details: 'Need help preparing for the upcoming midterm exam. Flexible schedule.' },
  { id: 3, type: 'offer', title: 'Python & Docker environment setup help', owner: 'Sarah J.', avatar: 'https://ui-avatars.com/api/?name=Sarah+J&background=4F4DB8&color=fff', tags: ['Python', 'Docker'], details: 'Having trouble with pip or conda? I can help you set up quickly.' },
  { id: 4, type: 'request', title: 'Need help with Data Structures assignments', owner: 'Alex K.', avatar: 'https://ui-avatars.com/api/?name=Alex+K&background=A89FF5&color=fff', tags: ['DSA', 'Java'], details: 'Struggling with linked lists and trees. Looking for patient tutor.' },
];

