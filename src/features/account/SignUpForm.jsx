import React from 'react'
import './account.scss'
import { Link } from 'react-router-dom'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { Container, Icon, Label, Button } from 'semantic-ui-react'
import { MyInputField } from './MyInputFields.jsx'

export const SignUpForm = ({showOptions}) => {
    
    return (
        <div className='signup-form'>
            <Container>
                <p className='primary-text heading'>Please Enter Your Details</p>

                <Formik
                    initialValues={{email: '', password: ''}}
                    validationSchema={
                        Yup.object({
                            username: Yup.string().required('Username is required!'),
                            email: Yup.string().required('Email is required!').email('Please enter a valid email!'),
                            password: Yup.string().required('Password is required!').matches(
                                /^(?=.*[A-Z])/, 'Password must contain one uppercase letter!').matches(
                                /^(?=.*[0-9])/, 'Password must contain a digit!').matches(
                                /^(?=.{8,})/, 'Password must be 8 letters or more!'),
                            confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Password does not match!').required(
                                'Confirm Password is required!')
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
                                name='username'
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
                            {errors.auth && <Label basic color='red' style={{marginBottom: 10}} content={errors.auth} />}
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
                <Link className='go-back' onClick={() => showOptions(true)}><Icon name='left arrow' /> GO BACK</Link>
            </Container>
        </div>   
    )
}