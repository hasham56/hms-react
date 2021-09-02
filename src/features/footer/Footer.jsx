import React from 'react'
import './footer.scss'
import { Link } from 'react-router-dom'
import { Grid, Image, Icon, Button } from 'semantic-ui-react'

export const Footer = () => {

    return (
        <Grid className='footer' container>
            <Grid.Row columns={3} textAlign='center' className='footer-address-section'>
                <Grid.Column className='columns vertical-line'>
                    <Grid>
                        <Grid.Column width={5} textAlign='right' className='icons'>
                            <Icon className='footer-icons address-icons' name='map marker alternate' circular size='large' />
                        </Grid.Column>
                        <Grid.Column width={11} textAlign='left'>
                            <p className='heading'>Our Address</p>
                            <p className='value'>Blank Slate, LHR 54000</p>
                        </Grid.Column>
                    </Grid>
                </Grid.Column>
                <Grid.Column className='columns vertical-line'>
                    <Grid>
                        <Grid.Column width={6} textAlign='right' className='icons'>
                            <Icon className='footer-icons address-icons' name='phone' circular size='large' />
                        </Grid.Column>
                        <Grid.Column width={10} textAlign='left'>
                            <p className='heading'>Call Us</p>
                            <p className='value'>0900-78601</p>
                        </Grid.Column>
                    </Grid>
                </Grid.Column>
                <Grid.Column className='columns'>
                    <Grid>
                        <Grid.Column width={5} textAlign='right' className='icons'>
                            <Icon className='footer-icons address-icons' name='mail' circular size='large' />
                        </Grid.Column>
                        <Grid.Column width={11} textAlign='left'>
                            <p className='heading'>Our Mail</p>
                            <p className='value'>info@blankslate.pk</p>
                        </Grid.Column>
                    </Grid>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column className='footer-mid-section footer-tab footer-mobile' computer={4} tablet={8} mobile={12}>
                    <Image className='footer-logo' src={'/assets/logo.png'} size='small' />
                    <p className='footer-text'>Lorem ipsum dolor sit amet,<br />consect etur adipisicing elit, sed<br />diam nonu mmy nibh euis</p>
                    <Icon className='footer-icons' name='facebook official' circular />
                    <Icon className='footer-icons' name='twitter' circular />
                    <Icon className='footer-icons' name='google' circular />
                    <Icon className='footer-icons' name='linkedin' circular />
                    <Icon className='footer-icons' name='pinterest p' circular />
                </Grid.Column>
                <Grid.Column className='footer-tab footer-mobile' computer={4} tablet={8} mobile={12}>
                    <p className='footer-text-heading'>Services</p>
                    <p className='footer-text'>
                        <Link className='link' to='/'>Conditions</Link><br />
                        <Link className='link' to='/'>Terms ofUse</Link><br />
                        <Link className='link' to='/'>Our Services</Link><br />
                        <Link className='link' to='/'>New Guests List</Link><br />
                        <Link className='link' to='/'>The Team List</Link><br />
                    </p>
                </Grid.Column>
                <Grid.Column className='footer-tab footer-mobile' computer={4} tablet={8} mobile={12}>
                    <p className='footer-text-heading'>Useful Links</p>
                    <p className='footer-text'>
                        <Link className='link' to='/'>Conditions</Link><br />
                        <Link className='link' to='/'>Terms ofUse</Link><br />
                        <Link className='link' to='/'>Our Services</Link><br />
                        <Link className='link' to='/'>New Guests List</Link><br />
                        <Link className='link' to='/'>The Team List</Link><br />
                    </p>
                </Grid.Column>
                <Grid.Column className='footer-tab footer-mobile' computer={4} tablet={8} mobile={12}>
                    <p className='footer-text-heading'>Subscribe</p>
                    <input className='footer-input' placeholder='Email' />
                    <Button className='btn-secondary footer-btn' content='Subscribe' />
                    <p className='footer-text'>
                        Get the latest updates via email. <br />
                        Any time you may unsubscribe.
                    </p>
                </Grid.Column>
            </Grid.Row>
            <div className='footer-horizontal-line' ></div>
            <Grid.Row>
                <Grid.Column textAlign='left' width={8}>
                    <p className='footer-text'>&copy; Yoursitename 2021 | All Rights Reserved</p>
                </Grid.Column>
                <Grid.Column textAlign='right' width={8}>
                    <p className='footer-text'>
                        <Link className='link' to='/'>Privacy</Link> &nbsp; |
                        &nbsp; <Link className='link' to='/'>Terms</Link> &nbsp; |
                        &nbsp; <Link className='link' to='/'>Sitemap</Link> &nbsp; |
                        &nbsp; <Link className='link' to='/'>Help</Link></p>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}