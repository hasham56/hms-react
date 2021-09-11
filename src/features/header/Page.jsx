import React, { useEffect, useState } from 'react'
import './page.scss'
import { HomeHeader } from './HomeHeader'
import { RestHeader } from './RestHeader'
import { ProfileHeader } from './ProfileHeader'
import { Home } from '../pages/home/Home'
import { Doctors } from '../pages/doctors/Doctors'
import { About } from '../pages/about/About'
import { Services } from '../pages/services/Services'
import { News } from '../pages/news/News'
import { Contact } from '../pages/contact/Contact'
import { SignUp } from '../account/SignUp'
import { Login } from '../account/Login'
import { Profile } from '../profile/Profile'
import { WrongURL } from '../wrongURL/WrongURL'

export const Page = ({data}) => {

    const [Header, setHeader] = useState(<></>)
    const [editProfile, setEditProfile] = useState(false)

    useEffect(() => {
        if (data.pageName === 'Home')
            setHeader(<HomeHeader />)
        else if (data.pageName === 'Profile')
            setHeader(<ProfileHeader setEditProfile={setEditProfile} />)
        else {
            setHeader(<RestHeader 
                pageTitle={data.pageTitle} 
                pageLink={data.pageLink} 
                pageLinkName={data.pageLinkName} />)
        }
        // eslint-disable-next-line
    }, [])

    return (
        <>
            {Header}

            {data.pageName === 'Home' && <Home />}
            {data.pageName === 'Doctors' && <Doctors />}
            {data.pageName === 'About' && <About />}
            {data.pageName === 'Services' && <Services />}
            {data.pageName === 'News' && <News />}
            {data.pageName === 'Contact' && <Contact />}
            {data.pageName === 'Login' && <Login />}
            {data.pageName === 'Sign Up' && <SignUp />}
            {data.pageName === 'Wrong URL' && <WrongURL />}
            {data.pageName === 'Profile' && <Profile editProfile={editProfile} />}
        </>
    )
}