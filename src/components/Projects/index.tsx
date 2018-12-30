import * as React from "react";
import styled from "styled-components";
import { ProjectCard } from "./ProjectCard";

export interface IProject {
  title: string;
  date: string;
  description: string;
  tech: string;
  url: string;
}

const projects = [
  {
    title: "Portfolio",
    date: "December 2018",
    description:
      "Personal website displaying portfolio of some projects completed.",
    tech: "ReactJS, MaterialUI, TypeScript, Webpack, Firebase",
    url: "https://github.com/scottbanyard/personal-website"
  },
  {
    title: "Fortnite Heart Rate Analysis",
    date: "March 2018",
    description: "Heart Rate Analysis whilst playing the game Fortnite on PS4.",
    tech: "Python, Jupyter Notebook, Polar H7 Heart Rate Monitor",
    url:
      "https://github.com/scottbanyard/fortnite-hr-analysis/blob/master/fortnite_analysis.ipynb"
  },
  {
    title: "Polar H7 BLE Handler",
    date: "February 2018",
    description:
      "A Bluetooth Low Energy (BLE) handler for a Polar H7 Heart Rate Chest Strap. Collects results of Heart Rate and RR Intervals in real-time.",
    tech: "Python, Bluetooth, Firebase, Polar H7 Heart Rate Monitor",
    url: "https://github.com/scottbanyard/polarh7-bluetooth"
  },
  {
    title: "Banyard IFA Ltd",
    date: "September 2017",
    description:
      "Business website created and maintained for Banyard Independent Advice Service Ltd.",
    tech: "AngularJS, Node.js, Bootstrap, Firebase",
    url: "https://www.banyardifa.co.uk/"
  },
  {
    title: "Dataalgs",
    date: "May 2017",
    description: "A Data Structures and Algorithms Learning Resource.",
    tech: "AngularJS, Node.js, TypeScript, Express.js, SQL, Bootstrap",
    url: "https://github.com/scottbanyard/dataalgs-website"
  },
  {
    title: "iDrive",
    date: "August 2016",
    description: "A Driving Theory cross-platform application (co-developed).",
    tech:
      "AngularJS, Bootstrap, Phonegap, Beta Testing / Publication (iOS & Android)",
    url:
      "https://itunes.apple.com/us/app/idrive-theory-test-uk-pl-2017/id1192733077?mt=8"
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

const StyledDiv = styled.div`
  margin: 30px 100px 10px 100px;
  display: flex;
  flex-wrap: wrap;
`;

const CustomGrid = styled.div`
  && {
    width: 33.33333%;
  }
`;

export const Projects = () => {
  return (
    <StyledDiv>
      {projects.map((p, i) => {
        return (
          <CustomGrid key={i}>
            <ProjectCard project={p} />
          </CustomGrid>
        );
      })}
    </StyledDiv>
  );
};
