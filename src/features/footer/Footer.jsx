import React from 'react'
import './footer.scss'
import { Link } from 'react-router-dom'
import { Grid, Image, Icon, Button } from 'semantic-ui-react'

export const Footer = () => {
  return (
    <Grid className="footer" container>
      <Grid.Row textAlign="center" className="footer-address-section">
        <Grid.Column
          mobile={16}
          tablet={5}
          computer={5}
          className="columns vertical-line"
        >
          <Grid>
            <Grid.Column
              computer={5}
              tablet={16}
              mobile={6}
              textAlign="right"
              className="icons"
            >
              <Icon
                className="footer-icons address-icons"
                name="map marker alternate"
                circular
                size="large"
              />
            </Grid.Column>
            <Grid.Column
              className="content"
              computer={11}
              tablet={16}
              mobile={10}
              textAlign="left"
            >
              <p className="heading">Our Address</p>
              <p className="value">Blank Slate, LHR 54000</p>
            </Grid.Column>
          </Grid>
        </Grid.Column>
        <Grid.Column
          mobile={16}
          tablet={6}
          computer={6}
          className="columns vertical-line"
        >
          <Grid>
            <Grid.Column
              computer={6}
              tablet={16}
              mobile={6}
              textAlign="right"
              className="icons"
            >
              <Icon
                className="footer-icons address-icons"
                name="phone"
                circular
                size="large"
              />
            </Grid.Column>
            <Grid.Column
              className="content"
              computer={10}
              tablet={16}
              mobile={10}
              textAlign="left"
            >
              <p className="heading">Call Us</p>
              <p className="value">0900-78601</p>
            </Grid.Column>
          </Grid>
        </Grid.Column>
        <Grid.Column mobile={16} tablet={5} computer={5} className="columns">
          <Grid>
            <Grid.Column
              computer={5}
              tablet={16}
              mobile={6}
              textAlign="right"
              className="icons"
            >
              <Icon
                className="footer-icons address-icons"
                name="mail"
                circular
                size="large"
              />
            </Grid.Column>
            <Grid.Column
              className="content"
              computer={11}
              tablet={16}
              mobile={10}
              textAlign="left"
            >
              <p className="heading">Our Mail</p>
              <p className="value">computerblankslate.pk</p>
            </Grid.Column>
          </Grid>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column
          className="footer-mid-section footer-tab footer-mobile"
          computer={4}
          tablet={8}
          mobile={16}
        >
          <Image
            className="footer-logo"
            src={'/assets/logo.png'}
            size="small"
          />
          <p className="footer-text">
            Lorem ipsum dolor sit amet, consect etur adipisicing elit, sed diam
            nonu mmy nibh euis
          </p>
          <Icon className="footer-icons" name="facebook official" circular />
          <Icon className="footer-icons" name="twitter" circular />
          <Icon className="footer-icons" name="google" circular />
          <Icon className="footer-icons" name="linkedin" circular />
          <Icon className="footer-icons" name="pinterest p" circular />
        </Grid.Column>
        <Grid.Column
          className="footer-tab footer-mobile"
          computer={4}
          tablet={8}
          mobile={16}
        >
          <p className="footer-text-heading">Services</p>
          <p className="footer-text">
            <Link className="link" to="/">
              Conditions
            </Link>
            <br />
            <Link className="link" to="/">
              Terms of Use
            </Link>
            <br />
            <Link className="link" to="/">
              Our Services
            </Link>
            <br />
            <Link className="link" to="/">
              New Guests List
            </Link>
            <br />
            <Link className="link" to="/">
              The Team List
            </Link>
            <br />
          </p>
        </Grid.Column>
        <Grid.Column
          className="footer-tab footer-mobile"
          computer={4}
          tablet={8}
          mobile={16}
        >
          <p className="footer-text-heading">Useful Links</p>
          <p className="footer-text">
            <Link className="link" to="/">
              Conditions
            </Link>
            <br />
            <Link className="link" to="/">
              Terms of Use
            </Link>
            <br />
            <Link className="link" to="/">
              Our Services
            </Link>
            <br />
            <Link className="link" to="/">
              New Guests List
            </Link>
            <br />
            <Link className="link" to="/">
              The Team List
            </Link>
            <br />
          </p>
        </Grid.Column>
        <Grid.Column
          className="footer-tab footer-mobile"
          computer={4}
          tablet={8}
          mobile={16}
        >
          <p className="footer-text-heading">Subscribe</p>
          <input className="footer-input" placeholder="Email" />
          <Button className="btn-secondary footer-btn" content="Subscribe" />
          <p className="footer-text">
            Get the latest updates via email. <br />
            Any time you may unsubscribe.
          </p>
        </Grid.Column>
      </Grid.Row>
      <div className="footer-horizontal-line"></div>
      <Grid.Row>
        <Grid.Column
          className="terms-responsive"
          textAlign="left"
          computer={8}
          tablet={8}
          mobile={16}
        >
          <p className="footer-text">
            &copy; Docfind 2021 | All Rights Reserved
          </p>
        </Grid.Column>
        <Grid.Column
          className="terms-responsive"
          textAlign="right"
          computer={8}
          tablet={8}
          mobile={16}
        >
          <p className="footer-text">
            <Link className="link" to="/">
              Privacy
            </Link>{' '}
            &nbsp; | &nbsp;{' '}
            <Link className="link" to="/">
              Terms
            </Link>{' '}
            &nbsp; | &nbsp;{' '}
            <Link className="link" to="/faq">
              FAQs
            </Link>{' '}
            &nbsp; | &nbsp;{' '}
            <Link className="link" to="/">
              Help
            </Link>
          </p>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}
