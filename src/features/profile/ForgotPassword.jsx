import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { Container, Icon, Button } from 'semantic-ui-react'
import { MyInputField } from '../../app/common/form/MyInputFields'
import { sendPasswordResetEmail } from '../../app/firestore/firebaseService'
import { toast, Slide } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const ForgotPassword = () => {

    const [emailSent, setemailSent] = useState(false)

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

    const showSuccess = (message) => {
        toast.success(message, {
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
        <div className='login-form'>
            {emailSent ? 
                <Container>
                    <p className='primary-text heading'>Email Has Been Sent To Your Email Address <Icon className='icon' name='user md' /></p>
                    <p className='main-text sign-up'>Decided to <Link className='login-link' to='/login'>Login?</Link></p>
                </Container>: 
                <Container>
                    <p className='primary-text heading'>Please Enter Your Email Address</p>
                    
                    <Formik
                        initialValues={{
                            email: ''
                        }}
                        validationSchema={
                            Yup.object({
                                email: Yup.string().required('Email is required!').email('Please enter a valid email!')
                            })
                        }
                        onSubmit={async (values, {setSubmitting}) => {
                            try {
                                await sendPasswordResetEmail(values)
                                showSuccess('Password reset email has been sent!')
                                setemailSent(true)
                            } catch (error) {
                                if (error.code === 'auth/network-request-failed')
                                    showError('Check your internet connection!')
                                else {
                                    showError('User with this email doesnot exist!')
                                }
                            } finally {
                                setSubmitting(false)
                            }
                            }
                        }
                    >
                        {({isSubmitting, isValid}) => (
                            <Form className='ui form'>
                                <MyInputField
                                    name='email'
                                    placeholder='Enter your email'
                                    type='text'
                                    icon={<Icon className='icon' name='email' />} />
                                <p className='main-text'>Please enter your email to reset password!</p>
                                <Button
                                    type='submit'
                                    loading={isSubmitting}
                                    disabled={!isValid || isSubmitting}
                                    fluid
                                    size='large'
                                    className='btn-secondary submit-btn'
                                    content='Send'
                                />
                            </Form>
                        )}
                    </Formik>
                    <p className='main-text sign-up'>Dont have an account? <Link className='login-link' to='/signup'>Sign Up</Link></p>
                </Container>}
        </div>
    )
}