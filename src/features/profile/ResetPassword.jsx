import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { Container, Icon, Button } from 'semantic-ui-react'
import { MyInputField } from '../../app/common/form/MyInputFields'
import { updatePassword } from '../../app/firestore/firebaseService'
import { toast, Slide } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useDispatch } from 'react-redux'
import { setChangePassword } from '../profile/profileActions'

export const ResetPassword = () => {

    const history = useHistory()
    const dispatch = useDispatch()

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
            <Container>
                <p className='primary-text heading'>Choose Your New Password</p>
                
                <Formik
                    initialValues={{
                        password: '',
                        confirmPassword: ''
                    }}
                    validationSchema={
                        Yup.object({
                            password: Yup.string().required('Password is required!').matches(
                                /^(?=.*[A-Z])/, 'Password must contain one uppercase letter!').matches(
                                /^(?=.*[0-9])/, 'Password must contain a digit!').matches(
                                /^(?=.{8,})/, 'Password must be 8 letters or more!'),
                            confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Password does not match!').required(
                                'Confirm Password is required!')
                        })
                    }
                    onSubmit={async (values, {setSubmitting}) => {
                        try {
                            await updatePassword(values)
                            dispatch(setChangePassword(false))
                            showSuccess('Password changed successfully!')
                            history.push('/')
                        } catch (error) {
                            if (error.code === 'auth/network-request-failed')
                                showError('Check your internet connection!')
                            else {
                                showError('URL expired!')
                                dispatch(setChangePassword(false))
                                history.push('/')
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
                                name='password'
                                placeholder='Enter new password'
                                type='password'
                                icon={<Icon className='icon' name='lock' />} />
                            <MyInputField
                                name='confirmPassword'
                                placeholder='Confirm new password'
                                type='password'
                                icon={<Icon className='icon' name='lock' />} />
                            <Button
                                type='submit'
                                loading={isSubmitting}
                                disabled={!isValid || isSubmitting}
                                fluid
                                size='large'
                                className='btn-secondary submit-btn'
                                content='Confirm'
                            />
                        </Form>
                    )}
                </Formik>
                <p className='main-text sign-up'>Changed your mind? <Link className='login-link' to='/login'>Login</Link></p>
            </Container>
        </div>
    )
}