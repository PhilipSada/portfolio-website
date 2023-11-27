import React, { useEffect } from 'react';
import AOS from 'aos';
import PageLayout from '../layouts/PageLayout';
import { HeadContext } from '../interfaces/headInterfaces';
import Hero from '../components/home/Hero/Hero';
import ProjectSection from '../components/projects/ProjectSection/ProjectSection';

const headContext: HeadContext = {
  title: 'Philip Sada | Projects',
  meta: [
    {
      name: 'description',
      content: 'Portfolio website built with Next.JS'
    }
  ]

}

const Projects:React.FC = ()=>{
  useEffect(() => {
    AOS.init({
      duration: 900,
      once:true,
      easing: 'ease-out-quad',
      disable: 'mobile'
    })

  }, []);
  return(
    <PageLayout headContext={headContext}>
       <ProjectSection/>
    </PageLayout>
  )
}

export default Projects;