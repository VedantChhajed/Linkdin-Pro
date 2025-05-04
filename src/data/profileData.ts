import { ProfileType } from '../types';

export const profileData: ProfileType = {
  id: '1',
  name: 'Alex Johnson',
  headline: 'Senior Software Engineer at Tech Innovations | React | Node.js | TypeScript',
  avatarUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  location: 'San Francisco Bay Area',
  connectionCount: 734,
  currentCompany: 'Tech Innovations',
  education: 'Stanford University',
  about: `Passionate software engineer with 7+ years of experience building scalable web applications. Specialized in React, Node.js, and TypeScript.

I love solving complex problems and building intuitive user interfaces. Throughout my career, I've worked on projects ranging from small startups to enterprise applications serving millions of users.

My approach combines technical expertise with a deep understanding of user needs to create solutions that not only function well but also provide exceptional user experiences.

Skills:
• Frontend: React, Redux, JavaScript, TypeScript, HTML/CSS
• Backend: Node.js, Express, Python, Django
• Databases: MongoDB, PostgreSQL, Redis
• DevOps: Docker, AWS, CI/CD
• Methodologies: Agile, Scrum, TDD`,

  experiences: [
    {
      id: '1',
      title: 'Senior Software Engineer',
      company: 'Tech Innovations',
      companyLogo: 'https://images.pexels.com/photos/5439153/pexels-photo-5439153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      duration: 'Jan 2020 - Present',
      location: 'San Francisco, CA',
      description: 'Leading the development of our flagship product using React, Node.js, and TypeScript. Manage a team of 5 engineers and collaborate with product and design teams.',
      startDate: '2020-01-01',
      endDate: '2024-03-14',
      skills: ['React', 'TypeScript', 'Node.js']
    },
    {
      id: '2',
      title: 'Software Engineer',
      company: 'DataViz Solutions',
      companyLogo: 'https://images.pexels.com/photos/15032623/pexels-photo-15032623/free-photo-of-close-up-of-a-logo.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      duration: 'May 2017 - Dec 2019',
      location: 'San Francisco, CA',
      description: 'Developed interactive data visualization dashboards using D3.js and React. Implemented backend services with Node.js and MongoDB.',
      startDate: '2017-05-01',
      endDate: '2019-12-31',
      skills: ['React', 'Node.js', 'MongoDB']
    },
    {
      id: '3',
      title: 'Frontend Developer',
      company: 'WebStart Agency',
      companyLogo: 'https://images.pexels.com/photos/16978385/pexels-photo-16978385/free-photo-of-capital-letter-w-in-lego.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      duration: 'Aug 2015 - Apr 2017',
      location: 'Boston, MA',
      description: 'Created responsive websites for various clients using HTML, CSS, and JavaScript. Collaborated with designers to implement pixel-perfect UIs.',
      startDate: '2015-08-01',
      endDate: '2017-04-30',
      skills: ['JavaScript', 'CSS']
    }
  ],
  
  educations: [
    {
      id: '1',
      institution: 'Stanford University',
      logo: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      degree: 'Master of Science in Computer Science',
      years: '2013 - 2015',
      description: 'Specialized in Human-Computer Interaction and Artificial Intelligence.',
      startDate: '2013-09-01',
      endDate: '2015-06-30',
      skills: ['JavaScript', 'Python']
    },
    {
      id: '2',
      institution: 'University of Washington',
      logo: 'https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      degree: 'Bachelor of Science in Computer Science',
      years: '2009 - 2013',
      description: 'Minor in Mathematics. Dean\'s List all semesters.',
      startDate: '2009-09-01',
      endDate: '2013-06-30',
      skills: ['Java', 'C++']
    }
  ],
  
  skills: [
    {
      id: '1',
      name: 'React',
      endorsements: 42,
      videoEndorsements: [],
      firstLearned: '2015-01-01',
      lastUsed: '2024-03-14'
    },
    {
      id: '2',
      name: 'JavaScript',
      endorsements: 38,
      videoEndorsements: [],
      firstLearned: '2013-09-01',
      lastUsed: '2024-03-14'
    },
    {
      id: '3',
      name: 'TypeScript',
      endorsements: 29,
      videoEndorsements: [],
      firstLearned: '2017-01-01',
      lastUsed: '2024-03-14'
    },
    {
      id: '4',
      name: 'Node.js',
      endorsements: 31,
      videoEndorsements: [],
      firstLearned: '2016-06-01',
      lastUsed: '2024-03-14'
    },
    {
      id: '5',
      name: 'CSS',
      endorsements: 25,
      videoEndorsements: [],
      firstLearned: '2013-09-01',
      lastUsed: '2024-03-14'
    },
    {
      id: '6',
      name: 'MongoDB',
      endorsements: 18,
      videoEndorsements: [],
      firstLearned: '2017-05-01',
      lastUsed: '2019-12-31'
    }
  ],
  
  recommendations: [
    {
      id: '1',
      recommenderName: 'Sarah Chen',
      recommenderTitle: 'Product Manager at Tech Innovations',
      recommenderAvatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      text: 'Alex is an exceptional engineer who consistently delivers high-quality code. His ability to understand business requirements and translate them into technical solutions is outstanding. Always a pleasure to work with!',
      date: 'August 2023'
    },
    {
      id: '2',
      recommenderName: 'Michael Rodriguez',
      recommenderTitle: 'CTO at WebStart Agency',
      recommenderAvatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      text: 'I had the pleasure of managing Alex during his time at WebStart. His technical skills and attention to detail set him apart from other developers. He has a keen eye for UI/UX and always puts users first. Any company would be lucky to have him on their team.',
      date: 'March 2020'
    }
  ],

  availability: {
    isAvailable: true,
    availableDates: [
      '2024-03-18',
      '2024-03-19',
      '2024-03-20',
      '2024-03-21',
      '2024-03-22'
    ],
    preferredHours: {
      start: '09:00',
      end: '17:00'
    }
  }
};