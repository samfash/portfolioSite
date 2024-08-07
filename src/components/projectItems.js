import emissionPic from "../assets/images/enerscend-web.webp"
import modelPic from "../assets/images/emission-pic.webp"
import charityPic from "../assets/images/fash-charity.webp"
import notewallPic from "../assets/images/notewall-pic.webp"

const Projects = [
    {
      title: 'A Note taking web app',
      description:' Created a user friendly web app to take notes for organizing thoughts, with adequate security, also being synced across any device with internet connection. ',
      technologies: 'Typescript, Node.js, MongoDB, Jwt, Css',
      impact: 'Easy and straight to the point note without any distractions.',
      image: notewallPic
    },
    {
      title: 'Company Website with Staff login',
      description: 'Created a responsive and user-friendly platform for our employees,ensuring they could access important internal resources securely and efficiently.',
      technologies: 'React, Node.js, Express, MongoDB',
      impact: 'Reduced the time spent on administrative tasks',
      image: emissionPic
    },
    {
      title: 'CO₂ Emissions Prediction Model',
      description: ' Developed a predictive model to estimate CO₂ emissions from various machines and devices used within the company,enabling efficient and informed decision-making to reduce the carbon footprint',
      technologies: 'Python, TensorFlow, Scikit-Learn',
      impact: "Identified high-emission activities and Contributed to the company's sustainability goals.",
      image: modelPic
    },
    {
      title: 'Charity Website with Donation and Volunteer Entries',
      description: 'Created a user-friendly platform that encourages contributions and volunteer engagement while ensuring secure and seamless payment processing.',
      technologies: 'WordPress, JavaScript, payStack, GiveWP',
      impact: 'Facilitated easy volunteer sign-ups and improved the management of volunteer data.',
      image: charityPic
    },
    // Add more projects as needed
  ];

export default Projects