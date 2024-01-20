import { IProject } from './types';

export const projects = [
  {
    title: 'findmynearest parkrun',
    date: 'March 2021',
    description:
      'A mapping application that allows you to find your nearest parkrun from a given location.',
    tech: 'ReactJS, TypeScript, react-map-gl, Webpack, Husky, Github Actions',
    url: 'https://findmynearest-parkrun.firebaseapp.com/',
    image: '/resources/parkrun.png',
    imageLabel: 'Parkrun events on a map'
  },
  {
    title: 'scottbanyard.com',
    date: 'December 2018 & forever changing',
    description: 'The source code to this website.',
    tech:
      'ReactJS, MaterialUI, TypeScript, Webpack, React Globe GL, Firebase, Husky, Github Actions',
    url: 'https://github.com/scottbanyard/personal-website',
    image: '/resources/personal-website.png',
    imageLabel: 'Snippet of my personal website'
  },
  {
    title: 'Stress Reduction using VR and Multisensory Interactions',
    date: 'May 2018',
    description:
      'My thesis at Bristol was in the Human-Computer Interaction (HCI) space, researching into stress reduction techniques. The link takes you to a draft paper that was submitted to the CHI conference.',
    tech: 'Python, Unity, Oculus Rift',
    url:
      'https://www.linkedin.com/in/scottbanyard/overlay/1580421276568/single-media-viewer/?profileId=ACoAABsmvi8BlLYAIvzaoo9N_mHoPpMSgxlSUWE',
    image: '/resources/chi-paper.png',
    imageLabel: 'Computer-Human Interaction draft paper'
  },
  {
    title: 'Fortnite HR Analysis',
    date: 'March 2018',
    description: 'Analysing Heart Rate (HR) during the game Fortnite.',
    tech: 'Python, Jupyter Notebook, Polar H7 Heart Rate Monitor',
    url:
      'https://github.com/scottbanyard/fortnite-hr-analysis/blob/master/fortnite_analysis.ipynb',
    image: '/resources/fortnite.png',
    imageLabel: 'HR signal when playing Fortnite'
  },
  {
    title: 'banyardifa.co.uk',
    date: 'September 2017',
    description:
      'Business website created and maintained for Banyard Independent Advice Service Ltd.',
    tech: 'AngularJS, Node.js, Bootstrap, Firebase, Github Actions',
    url: 'https://www.banyardifa.co.uk/',
    image: '/resources/banyard-ifa.png',
    imageLabel: 'Screenshot of the BanyarD IFA website'
  },
  {
    title: 'Dataalgs',
    date: 'May 2017',
    description:
      'An artificial Data Structures and Algorithms Learning Resource created during a Web Development course.',
    tech: 'AngularJS, Node.js, TypeScript, Express.js, SQL',
    url: 'https://github.com/scottbanyard/dataalgs-website',
    image: '/resources/dataalgs.png',
    imageLabel: 'Data Algs logo'
  },
  {
    title: 'Hudu',
    date: 'May 2016',
    description:
      'An Android Application and Analytic Tool that allows the tracking of self-reported Post-Traumatic-Stress-Disorder symptoms.',
    tech: 'Java, Android Studio, JavaScript, Bootstrap, Firebase',
    url: 'https://github.com/scottbanyard/hudu',
    image: '/resources/hudu.png',
    imageLabel: 'Hudu logo'
  },
  {
    title: 'French Translation Program',
    date: 'August 2015',
    description:
      'Translates numbers, colours and months. Quizzes also available within the software.',
    tech: 'C',
    url: 'https://github.com/scottbanyard/french-programs-C',
    image: '/resources/french.png',
    imageLabel: 'Screenshot of the French program GUI'
  }
] as IProject[];
