import React, { useState, useEffect, useRef} from 'react';
import Link from 'next/link';
import { VscMenu, VscClose } from 'react-icons/vsc';
import {gsap, Power3} from 'gsap';
import ThemeToggleIcon from '../ThemeToggleIcon/ThemeToggleIcon';

const Header: React.FC = () => {
    let header = useRef(null);

    const [mobileNav, setMobileNav] = useState(false);
    const [mounted, setMounted] = useState(false);
  

    const handleMobileNav = (e: React.SyntheticEvent) => {
        e.preventDefault();
        setMobileNav(!mobileNav);
    }


    const runGSAPAnimation = ()=>{
        let tl = gsap.timeline();
        
        let ctx = gsap.context(()=>{
            tl.fromTo('#logo', 
            {
                opacity: 0,
                x: -100,
            },{
                opacity: 1,
                x: 0,
                duration: 1.2,
                delay: 0.5,
                ease: Power3.easeInOut,
            });

            tl.fromTo(['#menuItem1', '#menuItem2', '#menuItem3', '#menuItem4'], {
                opacity: 0,
                x: 100,
            },
             {
                opacity: 1,
                x: 0,
                duration: 1.2,
                ease: Power3.easeInOut,
                delay: 0.5
            }, ">-1.8")

        }, header)

        return () => ctx.revert();
    }


    useEffect(()=>{
         setMounted(true);
      
    }, [])

    return (
        <div className="header" ref={header}>
            <div className="header__content">
                <div className="header__logo-container">
                    <div className="header__logo" id="logo">
                        {/* <Link href="/"><img src={logo.src} alt="logo" /></Link> */}
                        <Link href="/">PS.</Link>
                    </div>
                </div>
                <div className="header__right-menu">
                    {/* <div className="header__right-menu-item"  id="menuItem1"><Link href={'#about'} className="header__menu-link">About</Link></div> */}
                    <div className="header__right-menu-item"  id="menuItem2"><Link href={'/projects'} className="header__menu-link">Projects</Link></div>
                    <div className="header__right-menu-item"  id="menuItem3"><Link href={'/contact'} className="header__menu-link">Contact</Link></div>
                    <div className="header__right-menu-item"  id="menuItem4"><Link href={'documents/resume.pdf'} target={"_blank"} className="header__menu-link">Resume</Link></div>
                    <div className="header__right-menu-item"  id="menuItem5"><div className="header__theme-toggle"><ThemeToggleIcon mounted={mounted}/></div></div>
                    <div className="header__right-menu-item header__menu-bars" onClick={handleMobileNav}>{mobileNav ? <VscClose className="header__icon header__icon--close" /> : <VscMenu className="header__icon header__icon--menu" />}</div>
                </div>
            </div>


            <div className={`header__mobile-content ${mobileNav && "header__mobile-content--open"}`}>
                <div className="header__mobile-menu">
                    {/* <div className="header__mobile-menu-item"><Link href={'#about'} className="header__mobile-menu-link">About</Link></div> */}
                    <div className="header__mobile-menu-item"><Link href={'/projects'} className="header__mobile-menu-link">Projects</Link></div>
                    <div className="header__mobile-menu-item"><Link href={'/contact'} className="header__mobile-menu-link">Contact</Link></div>
                    <div className="header__mobile-menu-item"><Link href={'documents/resume.pdf'} target={"_blank"} className="header__mobile-menu-link">Resume</Link></div>
                </div>
            </div>
        </div>
    )
}

export default Header;