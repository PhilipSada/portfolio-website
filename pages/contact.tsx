import React, { useEffect } from 'react';
import AOS from 'aos';
import PageLayout from '../layouts/PageLayout';
import { HeadContext } from '../interfaces/headInterfaces';
import ContactHero from '../components/contact/ContactHero/ContactHero';

const headContext: HeadContext = {
  title: 'Philip Sada | Contact',
  meta: [
    {
      name: 'description',
      content: 'Portfolio website built with Next.JS'
    }
  ]

}

const Contact:React.FC = ()=>{
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
       <ContactHero/>
    </PageLayout>
  )
}

export default Contact;