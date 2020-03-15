import { IProject } from "./types";

export const projects = [
  {
    title: "Basic React Template",
    date: "February 2020",
    description:
      "A basic react application template with useful beginner packages.",
    tech: "ReactJS, TypeScript, Webpack, Husky",
    url: "https://github.com/scottbanyard/basic-react-template"
  },
  {
    title: "scottbanyard.com",
    date: "December 2018 - (Ongoing)",
    description:
      "The source code to this website.",
    tech: "ReactJS, MaterialUI, TypeScript, Webpack, Firebase",
    url: "https://github.com/scottbanyard/personal-website"
  },
  {
    title: "Stress Reduction using VR and Multisensory Interactions",
    date: "May 2018",
    description:
      "My thesis at Bristol was in the Human-Computer Interaction (HCI) space, researching into stress reduction techniques.",
    tech: "Python, Unity, Oculus Rift",
    url: "https://www.linkedin.com/in/scottbanyard/detail/treasury/education:310007712/?entityUrn=urn%3Ali%3Afsd_profileTreasuryMedia%3A(ACoAABsmvi8BlLYAIvzaoo9N_mHoPpMSgxlSUWE%2C1580421276568)&section=education%3A310007712&treasuryCount=1"
  },
  {
    title: "Fortnite HR Analysis",
    date: "March 2018",
    description: "Analysing Heart Rate (HR) during the game Fortnite.",
    tech: "Python, Jupyter Notebook, Polar H7 Heart Rate Monitor",
    url:
      "https://github.com/scottbanyard/fortnite-hr-analysis/blob/master/fortnite_analysis.ipynb"
  },
  {
    title: "Polar H7 BLE Handler",
    date: "February 2018",
    description:
      "A Bluetooth Low Energy (BLE) handler for a Polar H7 Heart Rate Chest Strap.",
    tech: "Python, Bluetooth, Firebase, Polar H7 HR Monitor",
    url: "https://github.com/scottbanyard/polarh7-bluetooth"
  },
  {
    title: "banyardifa.co.uk",
    date: "September 2017 - (Ongoing)",
    description:
      "Business website created and maintained for Banyard Independent Advice Service Ltd.",
    tech: "AngularJS, Node.js, Bootstrap, Firebase",
    url: "https://www.banyardifa.co.uk/"
  },
  {
    title: "Dataalgs",
    date: "May 2017",
    description: "An artificial Data Structures and Algorithms Learning Resource created during a Web Development course.",
    tech: "AngularJS, Node.js, TypeScript, Express.js, SQL",
    url: "https://github.com/scottbanyard/dataalgs-website"
  },
  {
    title: "Hudu",
    date: "May 2016",
    description:
      "An Android Application and Analytic Tool that allows the tracking of self-reported Post-Traumatic-Stress-Disorder symptoms.",
    tech: "Java, Android Studio, JavaScript, Bootstrap, Firebase",
    url: "https://github.com/scottbanyard/hudu"
  },
  {
    title: "French Translation Program",
    date: "August 2015",
    description:
      "Translates numbers, colours and months. Quizzes also available within the software.",
    tech: "C",
    url:
      "https://github.com/scottbanyard/french-programs-C/blob/master/frenchTranslations.c"
  }
] as IProject[];
