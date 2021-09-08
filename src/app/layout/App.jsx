import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Route, Switch } from 'react-router-dom'
import { Page } from '../../features/header/Page'
import { doctorsPageData, aboutPageData, servicesPageData, newsPageData, contactPageData, homePageData, loginData, signUpData, PageNotFound } from '../../features/header/PageData'
import { Navbar } from '../../features/navbar/Navbar'
import { Footer } from '../../features/footer/Footer'
import { ToastContainer } from 'react-toastify'

export const App = () => {

  return (
    <>
      <Navbar />

        <Switch>
          <Route exact path='/' component={() => <Page data={homePageData} />} />
          <Route path='/doctors' component={() => <Page data={doctorsPageData} />} />
          <Route path='/about' component={() => <Page data={aboutPageData} />} />
          <Route path='/services' component={() => <Page data={servicesPageData} />} />
          <Route path='/news' component={() => <Page data={newsPageData} />} />
          <Route path='/contact' component={() => <Page data={contactPageData} />} />
          <Route path='/login' component={() => <Page data={loginData} />} />
          <Route path='/signup' component={() => <Page data={signUpData} />} />
          <Route component={() => <Page data={PageNotFound} />} />
        </Switch>
      
      <ToastContainer />

      <Footer />
    </>
  )
}
