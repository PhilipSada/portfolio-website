import Link from 'next/link';
import React, { useEffect, useRef } from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

const ContactHero: React.FC = () => {


  return (
    <section className="contact-hero">
      <div className="contact-hero__container" data-aos="fade-down">
        {/* <h4>Hi, my name is</h4> */}
        <div className="contact-hero__body">
          <h2>Do you need help with a web design/development project?</h2>
          <p>Feel free to contact me via email - sadaphillip@gmail.com </p>
          <div>
            <Link href="mailto:sadaphillip@gmail.com" className="contact-hero__link--contact">Contact me</Link>
          </div>
        </div>
      </div>
      {/* <div className="contact-hero__icons">
        <div><Link href="https://github.com/PhilipSada" target={"_blank"} className='hero__link hero__link--github'><AiFillGithub className="hero__icon hero__icon--github" /></Link></div>
        <div><Link href="https://www.linkedin.com/in/philipsada/" target={"_blank"} className='hero__link hero__link--linkedIn'><AiFillLinkedin className="hero__icon hero__icon--linkedIn" /></Link></div>
      </div> */}
    </section>
  )
}

export default ContactHero;