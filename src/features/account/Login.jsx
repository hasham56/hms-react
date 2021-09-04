import React from 'react'
import './account.scss'
import { Link } from 'react-router-dom'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { Container, Icon, Label, Button, Grid } from 'semantic-ui-react'
import { MyInputField } from './MyInputFields.jsx'

export const Login = () => {
    
    return (
        <div className='login-form'>
            <Container>
                <p className='primary-text heading'>Please Enter Your Details</p>
                

                <Formik
                    initialValues={{email: '', password: ''}}
                    validationSchema={
                        Yup.object({
                            email: Yup.string().required('Email is required!').email('Please enter a valid email!'),
                            password: Yup.string().required('Password is required!').matches(
                                /^(?=.{8,})/,
                                'Passwords are usually 8 character long!'
                            )
                        })
                    }
                    onSubmit={(values, {setSubmitting}) => {
                        setSubmitting(true)
                        // make async call
                        console.log(values)
                        setSubmitting(false)
                        }
                    }
                >
                    {({isSubmitting, isValid, dirty, errors}) => (
                        <Form className='ui form'>
                            <MyInputField
                                name='email'
                                placeholder='Enter your email'
                                icon={<Icon className='icon' name='user' />} />
                            <MyInputField
                                name='password'
                                placeholder='Enter your password'
                                type='password'
                                icon={<Icon className='icon' name='lock' />} />
                            <p className='main-text forgot-password'><Link className='link' to='/forgotpassword'>Forgot Password?</Link></p>
                            {errors.auth && <Label basic color='red' style={{marginBottom: 10}} content={errors.auth} />}
                            <Button
                                type='submit'
                                loading={isSubmitting}
                                disabled={!isValid || !dirty || isSubmitting}
                                fluid
                                size='large'
                                className='btn-secondary submit-btn'
                                content='Login'
                            />
                        </Form>
                    )}
                </Formik>
                <div className='platform-option'>
                    <div className='divider' style={{ display: 'flex', textAlign: 'center' }}>
                        <div className='horizontal-line' style={{ marginRight: '5px' }}></div>
                        <p className='main-text' style={{ marginBottom: '0' }}>OR</p>
                        <div className='horizontal-line' style={{ marginLeft: '5px' }}></div>
                    </div>
                    <Grid>
                        <Grid.Column computer='8' textAlign='right'>
                            <Button className='btn-primary platform-btn' icon='google' content='Continue with google' />
                        </Grid.Column>
                        <Grid.Column computer='8' textAlign='left'>
                            <Button className='btn-primary platform-btn' icon='facebook' content='Continue with facebook' />
                        </Grid.Column>
                    </Grid>
                </div>
                <p className='main-text sign-up'>Don't have an account? <Link className='signup-link' to='/signup'>Sign Up</Link></p>
            </Container>
        </div>
    )
}