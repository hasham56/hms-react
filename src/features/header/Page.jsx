import React from 'react'
import './page.scss'
import { HomeHeader } from './HomeHeader'
import { RestHeader } from './RestHeader'
import { Home } from '../pages/home/Home'
import { Doctors } from '../pages/doctors/Doctors'
import { About } from '../pages/about/About'
import { Services } from '../pages/services/Services'
import { News } from '../pages/news/News'
import { Contact } from '../pages/contact/Contact'

export const Page = ({data}) => {

    return (
        <>
            {data.pageName === 'Home' ? <HomeHeader /> : 
                <RestHeader 
                    pageTitle={data.pageTitle} 
                    pageLink={data.pageLink} 
                    pageLinkName={data.pageLinkName} />
            }

            {data.pageName === 'Home' && <Home />}
            {data.pageName === 'Doctors' && <Doctors />}
            {data.pageName === 'About' && <About />}
            {data.pageName === 'Services' && <Services />}
            {data.pageName === 'News' && <News />}
            {data.pageName === 'Contact' && <Contact />}
        </>
    )
}