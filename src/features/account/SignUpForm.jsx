import React from 'react'
import './account.scss'
import { Link, useHistory } from 'react-router-dom'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { Container, Icon, Button } from 'semantic-ui-react'
import { MyInputField } from './MyInputFields.jsx'
import { toast, Slide } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { registerInFirebase } from '../../app/firestore/firebaseService'

export const SignUpForm = ({ showOptions }) => {
    
    const history = useHistory()
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
    
    return (
        <div className='signup-form'>
            <Container>
                <p className='primary-text heading'>Please Enter Your Details</p>

                <Formik
                    initialValues={{email: '', password: ''}}
                    validationSchema={
                        Yup.object({
                            displayName: Yup.string().required('Username is required!'),
                            email: Yup.string().required('Email is required!').email('Please enter a valid email!'),
                            password: Yup.string().required('Password is required!').matches(
                                /^(?=.*[A-Z])/, 'Password must contain one uppercase letter!').matches(
                                /^(?=.*[0-9])/, 'Password must contain a digit!').matches(
                                /^(?=.{8,})/, 'Password must be 8 letters or more!'),
                            confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Password does not match!').required(
                                'Confirm Password is required!')
                        })
                    }
                    onSubmit={async (values, {setSubmitting}) => {
                            setSubmitting(true)
                            try {
                                await registerInFirebase(values)
                                history.push('/')
                            } catch (error) {
                                if (error.code === 'auth/network-request-failed')
                                    showError('Check your internet connection!')
                                else
                                    showError('Email already is use!')
                            } finally {
                                setSubmitting(false)
                            }
                        }
                    }
                >
                    {({isSubmitting, isValid, dirty}) => (
                        <Form className='ui form'>
                            <MyInputField
                                name='displayName'
                                placeholder='Enter your username'
                                icon={<Icon className='icon' name='user' />} />
                            <MyInputField
                                name='email'
                                placeholder='Enter your email'
                                icon={<Icon className='icon' name='mail' />} />
                            <MyInputField
                                name='password'
                                placeholder='Enter your password'
                                type='password'
                                icon={<Icon className='icon' name='lock' />} />
                            <MyInputField
                                name='confirmPassword'
                                placeholder='Confirm your password'
                                type='password'
                                icon={<Icon className='icon' name='lock' />} />
                            <Button
                                type='submit'
                                loading={isSubmitting}
                                disabled={!isValid || !dirty || isSubmitting}
                                fluid
                                size='large'
                                className='btn-secondary submit-btn'
                                content='Sign Up'
                            />
                        </Form>
                    )}
                </Formik>
                <p className='main-text terms-line'>By creating an account, you agree to our <Link to='/'>Terms of Services</Link>
                    <br />
                    And have read and understood the <Link to='/'>Privacy Policy.</Link>
                </p>
                <p className='main-text login'>Already have an account? <Link className='login-link' to='/login'>Login</Link></p>
                <p className='go-back' onClick={() => showOptions(true)}><Icon name='left arrow' /> GO BACK</p>
            </Container>
        </div>   
    )
}