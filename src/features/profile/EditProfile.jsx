import React from 'react'
import './profile.scss'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { Container, Button } from 'semantic-ui-react'
import { MyInputField } from '../../app/common/form/MyInputFields'
import { toast, Slide } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { changeIconLocationRight } from '../header/iconReducer'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { MyTextArea } from '../../app/common/form/MyTextArea'

export const EditProfile = ({ setEditProfile }) => {
    
    const dispatch = useDispatch()
    const { currentUserProfile } = useSelector(state => state.profile)

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

    const handleGoBack = () => {
        dispatch(changeIconLocationRight())
        setEditProfile(false)
    }

    return (
        <div className='editprofile-form'>
            <Container>
                <Formik
                    initialValues={{
                        displayName: currentUserProfile.displayName,
                        email: currentUserProfile.email,
                        password: 'password',
                        phone: currentUserProfile.phone || '',
                        address: currentUserProfile.address || ''
                    }}
                    validationSchema={
                        Yup.object({
                            displayName: Yup.string().required('Username is required!'),
                            email: Yup.string().required('Email is required!').email('Please enter a valid email!'),
                            password: Yup.string(),
                            phone: Yup.string(),
                            address: Yup.string()
                        })
                    }
                    onSubmit={async (values, {setSubmitting}) => {
                        // try {
                        //         await updateUserProfile(values)
                        // } catch (error) {
                        //     showError(error.message)
                        // } finally {
                        //     setSubmitting(false)
                        // }
                        }
                    }
                >
                    {({isSubmitting, isValid}) => (
                        <Form className='ui form'>
                            <MyInputField
                                name='displayName'
                                placeholder='Enter your username'
                                label={true}
                                labelValue='Username'/>
                            <MyInputField
                                name='email'
                                placeholder='Enter your email'
                                label={true}
                                labelValue='Email'/>
                            <MyInputField
                                name='password'
                                placeholder='Enter your password'
                                type='password'
                                disabled
                                label={true}
                                labelValue='Password' />
                            <label>Change Password</label>
                            <MyInputField
                                name='phone'
                                placeholder='Enter your phone number'
                                type='text'
                                label={true}
                                labelValue='Phone Number' />
                            <MyTextArea
                                name='address'
                                placeholder='Enter your password'
                                type='text'
                                label={true}
                                labelValue='Address'/>
                            <Button
                                type='submit'
                                loading={isSubmitting}
                                disabled={!isValid || isSubmitting}
                                fluid
                                size='large'
                                className='btn-secondary submit-btn'
                                content='Update'
                            />
                        </Form>
                    )}
                </Formik>
                <p className='main-text login'>Don't want to update?&nbsp;
                    <span className='profile-link' onClick={() => handleGoBack()}>Back To Profile</span>
                </p>
            </Container>
        </div>
    )
}