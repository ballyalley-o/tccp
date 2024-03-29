const mockBootcamp = [
  {
    name: 'IBM Bootcamp',
    description: 'Learn Python from scratch',
    website: 'https://www.python.org/',
    phone: '123-456-7890',
    email: 'educ@ibm.edu',
    rating: 4.5,
    location: {
      address: '1234 Main St',
      city: 'San Francisco',
      state: 'CA',
      zip: '94111',
      country: 'USA'
    },
    duration: '12 weeks',
    averageCost: '$10,000',
    housing: false,
    jobAssistance: true,
    jobGuarantee: false,
    slug: 'ibm-bootcamp',
    careers: ['Python', 'Django', 'Flask'],
    imageUrl: 'https://images.pexels.com/photos/2982449/pexels-photo-2982449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    badge: 'https://m.media-amazon.com/images/I/61fLmo3aOHL.jpg'
  },
  {
    name: 'Codecademy',
    description: 'Learn web development',
    website: 'https://www.codecademy.com/',
    phone: '123-456-7890',
    email: '',
    rating: 4.7,
    location: {
      address: '2 Duboce Ave',
      city: 'Wilmington',
      state: 'CA',
      zip: '94111',
      country: 'Vietnam'
    },
    duration: '10 weeks',
    averageCost: '$9,000',
    housing: true,
    jobAssistance: true,
    jobGuarantee: false,
    slug: 'codecademy',
    course: ['Frontend Web Development', 'Backend Web Development', 'Full Stack Web Development'],
    imageUrl: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    badge: 'https://ebranch.lili.org/tetons/wp-content/uploads/sites/22/2016/09/CodeAC.png'
  },
  {
    name: 'STI Learning',
    description: 'Learn CI/CD from the best',
    website: 'https://www.sti.educ.ph/',
    phone: '123-456-7890',
    email: 'educ@ibm.edu',
    rating: 2,
    location: {
      address: '2 Cubao St',
      city: 'Quezon City',
      state: 'NCR',
      zip: '1109',
      country: 'Philippines'
    },
    duration: '12 weeks',
    averageCost: '$8,390',
    housing: true,
    jobAssistance: false,
    jobGuarantee: true,
    slug: 'sti-learning',
    course: ['CI/CD', 'DevOps', 'Jenkins'],
    imageUrl: 'https://images.pexels.com/photos/7213434/pexels-photo-7213434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    badge: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3UTtubMsPmN-Hd5n68A1aZviCGhzH8MVvHBoOg5hGXg&s'
  }
];

export default mockBootcamp;
