import Link from 'next/link';
import React, { useEffect, useRef } from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { SiNextdotjs, SiHtml5, SiCss3, SiReact, SiJavascript, SiTypescript, SiShopify, SiLaravel } from 'react-icons/si';
import { gsap, Power4, Elastic } from 'gsap';
import { BsArrowRight } from 'react-icons/bs';
import Tag from '../../shared/Tag/Tag';


const Hero: React.FC = () => {

  let hero = useRef(null);


  return (
    <section className="hero" ref={hero}>
      <div className="hero__container" id="hero-container">
        {/* <h4>Hi, my name is</h4> */}
        <div className="hero__body" data-aos="fade-down">
          <h2>Hi, I'm Philip Sada.</h2>
          <h2>I build things for the web</h2>
          <p>I'm a Software developer and Web designer who is passionate about building top-notch digital products and experiences. I enjoy working on both
            the frontend and backend of web applications. Also, I work with the following technologies:
          </p>
          <div className="hero__technologies">
            <Tag>HTML</Tag><Tag>CSS</Tag> <Tag>JavaScript</Tag> <Tag>TypeScript</Tag><Tag>NodeJS</Tag>
            <Tag>ReactJS</Tag><Tag>ExpressJS</Tag><Tag>PHP Laravel</Tag> <Tag>Next.JS</Tag>
            <Tag>MySQL</Tag><Tag>MongoDB</Tag><Tag>AWS</Tag>
          </div>
          {/* <div>
             <Link href={'/projects'} className="hero__link--project"><span>See some of my projects <BsArrowRight/></span></Link>
          </div> */}
          <div>
            <Link href={'/projects'} className="hero__link--project">Check out my projects</Link>
          </div>
        </div>
      </div>

      <div className="hero__icons">
        <div><Link href="https://github.com/PhilipSada" target={"_blank"} className='hero__link hero__link--github'><AiFillGithub className="hero__icon hero__icon--github" /></Link></div>
        <div><Link href="https://www.linkedin.com/in/philipsada/" target={"_blank"} className='hero__link hero__link--linkedIn'><AiFillLinkedin className="hero__icon hero__icon--linkedIn" /></Link></div>
      </div>
    </section>
  )
}

export default Hero;