import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { Container, Icon, Button } from 'semantic-ui-react'
import { MyInputField } from '../../app/common/form/MyInputFields'
import { signInWithEmail } from '../../app/firestore/firebaseService'
import { toast, Slide } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { changeIconLocationRight } from '../header/iconReducer'

export const VerifyUser = () => {

    const history = useHistory()
    const dispatch = useDispatch()
    const { userEmail } = useSelector(state => state.profile)

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
        <div className='login-form'>
            <Container>
                <p className='primary-text heading'>Please Verify Your Identity</p>
                
                <Formik
                    initialValues={{
                        email: userEmail,
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
                            dispatch(changeIconLocationRight())
                            history.push('/resetpassword')
                        } catch (error) {
                            if (error.code === 'auth/network-request-failed')
                                showError('Check your internet connection!')
                            else
                                showError('Wrong password!')
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
                                disabled
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
                                disabled={!isValid || isSubmitting}
                                fluid
                                size='large'
                                className='btn-secondary submit-btn'
                                content='Login'
                            />
                        </Form>
                    )}
                </Formik>
                <p className='main-text sign-up'>Changed your mind? <Link className='login-link' to='/login'>Login</Link></p>
            </Container>
        </div>
    )
}