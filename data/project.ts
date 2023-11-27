import projectImgOne from '../public/images/linkrplus.png';
import projectImgTwo from '../public/images/freshroom-website-1.png';
import projectImgThree from '../public/images/tecchy-light-theme-1.png';
import projectImgFour from '../public/images/tecchy-dark-theme-1.png';
import projectImgFive from '../public/images/linkrplus-2.png';
import projectImgSix from '../public/images/job-board-app-2.png';

export const data = [
   {
     title: "Linkrplus",
     href:"https://linkrplus.netlify.app/",
     description:"This is a url shortener made for a fictitious company called Linkrplus. A user simply enters a long url and clicks the 'create' button to generate a short url.",
     imgUrl: projectImgFive.src,
    technologies:["ReactJS","ExpressJS", "MongoDB", "HTML & CSS", "TailwindCSS"]

   },
   {
    title: "Freshroom",
    href:"https://freshromm.vercel.app/",
    description:"This is a landing page made for a fictitious company called Freshroom.",
    imgUrl: projectImgTwo.src,
    technologies:["ReactJS","NextJS", "HTML & SCSS"]

  },
   {
     title: "Tecchy",
     href:"https://tecchy-light-theme.vercel.app/",
     description:"This is a landing page made for a fictitious company called Tecchy.",
     imgUrl: projectImgThree.src,
     technologies:["ReactJS","NextJS", "HTML & SCSS"]

   },
   {
    title: "Techjob",
    href:"https://techjobboard.netlify.app/",
    description:"This is a tech job board made for a fictitious company called Techjob. It includes features such as user authentication, job post management, filtering by job title and location. ",
    imgUrl: projectImgSix.src,
   technologies:["ReactJS","ExpressJS", "MongoDB", "HTML & SCSS"]

  },
 
   {
     title: "Tecchy",
     href:"https://tecchy-dark-theme.vercel.app/",
     description:"This is a landing page made for a fictitious company called Tecchy.",
     imgUrl: projectImgFour.src,
     technologies:["ReactJS","NextJS", "HTML & SCSS"]

   }
]