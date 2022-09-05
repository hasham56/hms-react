import React, { useEffect, useState } from 'react'
import { HomeHeader } from './HomeHeader'
import { RestHeader } from './RestHeader'
import { ProfileHeader } from './ProfileHeader'
import { Home } from '../pages/home/Home'
import { Doctors } from '../pages/doctors/Doctors'
import { About } from '../pages/about/About'
import { Services } from '../pages/services/Services'
import { Contact } from '../pages/contact/Contact'
import { SignUp } from '../account/SignUp'
import { Login } from '../account/Login'
import { Profile } from '../profile/Profile'
import { WrongURL } from '../wrongURL/WrongURL'
import { VerifyUser } from '../profile/VerifyUser'
import { ResetPassword } from '../profile/ResetPassword'
import { ForgotPassword } from '../profile/ForgotPassword'
import { FAQ } from '../pages/faq/FAQ'
import { DoctorDetail } from '../pages/doctors/doctorsDetail/DoctorDetail'
import './page.scss'

export const Page = ({ data }) => {
  const [Header, setHeader] = useState(<></>)

  useEffect(() => {
    if (data.pageName === 'Home') setHeader(<HomeHeader />)
    else if (data.pageName === 'Profile') setHeader(<ProfileHeader />)
    else {
      setHeader(
        <RestHeader
          pageTitle={data.pageTitle}
          pageLink={data.pageLink}
          pageLinkName={data.pageLinkName}
        />,
      )
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
      {data.pageName === 'Contact' && <Contact />}
      {data.pageName === 'Login' && <Login />}
      {data.pageName === 'Sign Up' && <SignUp />}
      {data.pageName === 'Wrong URL' && <WrongURL />}
      {data.pageName === 'Profile' && <Profile />}
      {data.pageName === 'Verify' && <VerifyUser />}
      {data.pageName === 'Reset' && <ResetPassword />}
      {data.pageName === 'FAQ' && <FAQ />}
      {data.pageName === 'Forgot Password' && <ForgotPassword />}
      {data.pageName === 'Doctor Details' && <DoctorDetail />}
    </>
  )
}
