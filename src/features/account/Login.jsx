import React from 'react'
import './account.scss'
import { Link } from 'react-router-dom'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { Container, Icon, Button, Grid } from 'semantic-ui-react'
import { MyInputField } from '../../app/common/form/MyInputFields'
import { signInWithEmail, socialLogin } from '../../app/firestore/firebaseService'
import { toast, Slide } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const Login = () => {

    const showError = (message) => {
        toast.error(message, {
            position: "bottom-center",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            transition: Slide,
            theme: 'colored',
            pauseOnFocusLoss: false
        })
    }

    const handleSocialLogin = (provider) => {
        socialLogin(provider)
    }

    return (
        <div className='login-form'>
            <Container>
                <p className='primary-text heading'>Please Enter Your Details</p>
                
                <Formik
                    initialValues={{
                        email: '',
                        password: ''
                    }}
                    validationSchema={
                        Yup.object({
                            email: Yup.string().required('Email is required!').email('Please enter a valid email!'),
                            password: Yup.string().required('Password is required!').matches(
                                /^(?=.{8,})/,
                                'Passwords are usually 8 character long!'
                            )
                        })
                    }
                    onSubmit={async (values, {setSubmitting}) => {
                        try {
                            await signInWithEmail(values)
                        } catch (error) {
                            if (error.code === 'auth/network-request-failed')
                                showError('Check your internet connection!')
                            else
                                showError('Wrong email or password!')
                        } finally {
                            setSubmitting(false)
                        }
                        }
                    }
                >
                    {({isSubmitting, isValid, dirty}) => (
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
                        <Grid.Column mobile={16} computer='8' textAlign='right'>
                            <Button
                                className='btn-primary platform-btn'
                                icon='google'
                                content='Continue with google'
                                onClick={() => handleSocialLogin('google')}
                            />
                        </Grid.Column>
                        <Grid.Column mobile={16} computer='8' textAlign='left'>
                            <Button
                                className='btn-primary platform-btn'
                                icon='facebook'
                                content='Continue with facebook'
                                onClick={() => handleSocialLogin('facebook')}
                            />
                        </Grid.Column>
                    </Grid>
                </div>
                <p className='main-text sign-up'>Don't have an account? <Link className='signup-link' to='/signup'>Sign Up</Link></p>
            </Container>
        </div>
    )
}