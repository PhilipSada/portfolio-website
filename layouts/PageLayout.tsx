import Head from 'next/head';
import React from 'react';
import {HeadContext} from '../interfaces/headInterfaces';
import Header from '../components/shared/Header/Header';
import Footer from '../components/shared/Footer/Footer';

interface PageLayoutProps{
    children: React.ReactNode
    headContext: HeadContext
}

const PageLayout: React.FC<PageLayoutProps> = ({children, headContext})=>{
    const {title, meta} = headContext

    return (
        <div>
          <Head>
            <title>{title}</title>
            {
                meta.map(({property, content, key, name})=>(
                    <meta name={name || ''} content={content || ''} property={property || ''} key={key || ''} />

                ))
            }
          </Head>
          <Header/>
          {children}
          <Footer/>
        </div>
    )

}

export default PageLayout