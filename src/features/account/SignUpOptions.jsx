import React from 'react'
import './account.scss'
import { Link } from 'react-router-dom'
import { Button, Grid } from 'semantic-ui-react'

export const SignUpOptions = ({showSignUpForm}) => {
    
    return (
        <div className='signup-options'>
            <p className='primary-text heading'>Please Select Sign In Option</p>
            <div className="options">
                <Grid>
                    <Grid.Column width='16' textAlign='center'>
                        <Button className='btn-primary platform-btn' icon='google' content='Continue with google' />
                    </Grid.Column>
                    <Grid.Column width='16' textAlign='center'>
                        <Button className='btn-primary platform-btn' icon='facebook' content='Continue with facebook' />
                    </Grid.Column>
                    <Grid.Column width='16' textAlign='center'>
                        <Button className='btn-primary platform-btn' icon='mail' content='Continue with Email' onClick={() => showSignUpForm(false)} />
                    </Grid.Column>
                </Grid>
                <p className='main-text terms-line'>By creating an account, you agree to our <Link to='/'>Terms of Services</Link>
                    <br />
                    And have read and understood the <Link to='/'>Privacy Policy.</Link>
                </p>
                <p className='main-text login'>Already have an account? <Link className='login-link' to='/login'>Login</Link></p>
            </div>
        </div>   
    )
}