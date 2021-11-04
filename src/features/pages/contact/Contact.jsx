import React from 'react'
import { Container, Grid, Image, Icon, Button } from 'semantic-ui-react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { MyInputField } from '../../../app/common/form/MyInputFields'
import { MyTextArea } from '../../../app/common/form/MyTextArea'
import './contact.scss'
import { addUserMessage } from '../../../app/firestore/firebaseStore'
import { toast, Slide } from 'react-toastify'

export const Contact = () => {

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
        <div className="contact">
            <div className='contact-info'>
                <Container>
                    <Grid columns={3}>
                        <Grid.Column>
                            <Grid className='block'>
                                <Grid.Column className='icon-holder' computer={4}>
                                    <Image className='icon' src='/assets/contact/pointerIcon.svg' />
                                </Grid.Column>
                                <Grid.Column computer={12}>
                                        <p className='secondary-text heading'>Our Address</p>
                                        <p className='main-text'>Blankslate, New Muslim Town, Lahore</p>
                                </Grid.Column>
                            </Grid>
                        </Grid.Column>
                        <Grid.Column>
                            <Grid className='block'>
                                <Grid.Column className='icon-holder' computer={4}>
                                    <Image className='icon' src='/assets/contact/phoneIcon.svg' />
                                </Grid.Column>
                                <Grid.Column computer={12}>
                                    <p className='secondary-text heading'>Our Phone</p>
                                    <p className='main-text'>Telephone: 0900 78601<br />Mobile: 0900 78601</p>
                                </Grid.Column>
                            </Grid>
                        </Grid.Column>
                        <Grid.Column>
                            <Grid className='block'>
                                <Grid.Column className='icon-holder' computer={4}>
                                    <Image className='icon' src='/assets/contact/emailIcon.svg' />
                                </Grid.Column>
                                <Grid.Column computer={12}>
                                    <p className='secondary-text heading'>Our Address</p>
                                    <p className='main-text emails'>Email: name@blankslate.pk
                                    <br />Inquiries: info@blankslate.pk</p>
                                </Grid.Column>
                            </Grid>
                        </Grid.Column>
                    </Grid>
                </Container>
            </div>
            <div className='contact-form'>
                <Container textAlign='center'>
                    <p className='primary-text'>Contact Form</p>
                    <Formik
                        initialValues={{
                            fullName: '',
                            email: '',
                            message: ''
                        }}
                        validationSchema={
                            Yup.object({
                                fullName: Yup.string().required('Username is required!'),
                                email: Yup.string().required('Email is required!').email('Please enter a valid email!'),
                                message: Yup.string().required('Message is required!')
                            })
                        }
                        onSubmit={async (values, {setSubmitting, resetForm}) => {
                                try {
                                    await addUserMessage(values)
                                    showSuccess('Message has been forwarded!')
                                    resetForm()
                                } catch (error) {
                                    if (error.code === 'auth/network-request-failed')
                                        showError('Check your internet connection!')
                                    else
                                        showError('Message sending failed!')
                                } finally {
                                    setSubmitting(false)
                                }
                            }
                        }
                    >
                        {({isSubmitting, isValid, dirty}) => (
                            <Form className='ui form'>
                                <Grid columns={2}>
                                    <Grid.Column>
                                        <MyInputField
                                            name='fullName'
                                            placeholder='Enter your full name'
                                            icon={<Icon className='icon' name='user outline' />} />
                                
                                    </Grid.Column>
                                    <Grid.Column>
                                        <MyInputField
                                            name='email'
                                            placeholder='Enter your email'
                                            icon={<Icon className='icon' name='mail outline' />} />
                                    </Grid.Column>
                                </Grid>
                                <MyTextArea
                                    name='message'
                                    placeholder='Enter your message'
                                    type='text'
                                    icon={true}
                                    iconName={'comment alternate outline'}
                                    />
                                <Button
                                    type='submit'
                                    loading={isSubmitting}
                                    disabled={!isValid || !dirty || isSubmitting}
                                    fluid
                                    size='large'
                                    className='btn-secondary submit-btn'
                                    content='Send Message'
                                />
                            </Form>
                        )}
                    </Formik>
                </Container>
            </div>
            <div className="map">
                <iframe
                    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13606.813007965276!2d74.3235535!3d31.50483955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xbbf38938d0d6b6f0!2sBlank%20Slate!5e0!3m2!1sen!2s!4v1635405458232!5m2!1sen!2s'
                    title='map'
                    style={{border: 0}}
                    width='100%'
                    height='450'
                    allowFullScreen={false}
                    loading='lazy'
                />
            </div>
        </div>
    )
}