import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Route, Switch, Redirect } from 'react-router-dom'
import { Page } from '../../features/header/Page'
import {
  doctorsPageData,
  aboutPageData,
  servicesPageData,
  contactPageData,
  homePageData,
  loginData,
  signUpData,
  pageNotFound,
  profileData,
  verifyUser,
  resetPassword,
  forgotPassword,
  faq,
  doctorDetailPageData,
} from '../../features/header/PageData'
import { Navbar } from '../../features/navbar/Navbar'
import { Footer } from '../../features/footer/Footer'
import { ToastContainer } from 'react-toastify'
import { useSelector } from 'react-redux'
import { LoadingComponent } from './LoadingComponent'

export default function App() {
  const { authenticated } = useSelector((state) => state.auth)
  const { loading } = useSelector((state) => state.async)
  const { changePassword } = useSelector((state) => state.profile)

  if (loading) return <LoadingComponent />

  return (
    <>
      <Navbar />

      <Switch>
        <Route exact path="/" component={() => <Page data={homePageData} />} />
        <Route
          exact
          path="/doctors"
          component={() => <Page data={doctorsPageData} />}
        />
        <Route
          path="/doctors/:id"
          component={() => <Page data={doctorDetailPageData} />}
        />
        <Route path="/about" component={() => <Page data={aboutPageData} />} />
        <Route
          path="/services"
          component={() => <Page data={servicesPageData} />}
        />
        <Route
          path="/contact"
          component={() => <Page data={contactPageData} />}
        />
        <Route path="/faq" component={() => <Page data={faq} />} />
        <Route
          path="/login"
          component={() =>
            authenticated ? <Redirect to="/" /> : <Page data={loginData} />
          }
        />
        <Route
          path="/signup"
          component={() =>
            authenticated ? <Redirect to="/" /> : <Page data={signUpData} />
          }
        />
        <Route
          path="/profile"
          component={() =>
            authenticated ? <Page data={profileData} /> : <Redirect to="/" />
          }
        />
        <Route
          path="/verification"
          component={() =>
            changePassword && !authenticated ? (
              <Page data={verifyUser} />
            ) : (
              <Redirect to="/" />
            )
          }
        />
        <Route
          path="/resetpassword"
          component={() =>
            changePassword && authenticated ? (
              <Page data={resetPassword} />
            ) : (
              <Redirect to="/" />
            )
          }
        />
        <Route
          path="/forgotpassword"
          component={() =>
            !authenticated ? (
              <Page data={forgotPassword} />
            ) : (
              <Redirect to="/" />
            )
          }
        />
        <Route component={() => <Page data={pageNotFound} />} />
      </Switch>

      <ToastContainer />

      <Footer />
    </>
  )
}
