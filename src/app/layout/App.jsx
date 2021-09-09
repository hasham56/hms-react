import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Route, Switch, Redirect } from 'react-router-dom'
import { Page } from '../../features/header/Page'
import { doctorsPageData, aboutPageData, servicesPageData, newsPageData, contactPageData, homePageData, loginData, signUpData, PageNotFound } from '../../features/header/PageData'
import { Navbar } from '../../features/navbar/Navbar'
import { Footer } from '../../features/footer/Footer'
import { ToastContainer } from 'react-toastify'
import { useSelector } from 'react-redux'
import { LoadingComponent } from './LoadingComponent'

export const App = () => {

  const { authenticated } = useSelector(state => state.auth)
  const { loading } = useSelector(state => state.async)

  if (loading) return <LoadingComponent />

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
          <Route path='/login' component={() => (authenticated ? <Redirect to='/' /> : <Page data={loginData} />)} />
          <Route path='/signup' component={() => (authenticated ? <Redirect to='/' /> : <Page data={signUpData} />)} />
          <Route component={() => <Page data={PageNotFound} />} />
        </Switch>
      
      <ToastContainer />

      <Footer />
    </>
  )
}
