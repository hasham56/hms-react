import React from 'react'
import './profile.scss'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { Container, Button } from 'semantic-ui-react'
import { MyInputField } from '../../app/common/form/MyInputFields'
import 'react-toastify/dist/ReactToastify.css'
import { changeIconLocation } from '../header/iconReducer'
import { useSelector } from 'react-redux'
import { MyTextArea } from '../../app/common/form/MyTextArea'
import {
  signOutFirebase,
  updateToFirebaseStorage,
  updateUserProfile,
} from '../../app/firestore/firebaseService'
import { setChangePassword, setEditProfile } from './profileActions'
import { signOutUser } from '../account/authActions'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { updateUserPhoto } from '../../app/firestore/firebaseStore'
import { toast, Slide } from 'react-toastify'

export const EditProfile = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const { currentUserProfile } = useSelector((state) => state.profile)
  const { filename, photoSource } = useSelector((state) => state.photo)

  const showError = (message) => {
    toast.error(message, {
      position: 'bottom-center',
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      transition: Slide,
      theme: 'colored',
      pauseOnFocusLoss: false,
    })
  }

  const showSuccess = (message) => {
    toast.success(message, {
      position: 'bottom-center',
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      transition: Slide,
      theme: 'colored',
      pauseOnFocusLoss: false,
    })
  }

  const handleGoBack = () => {
    dispatch(changeIconLocation('right'))
    dispatch(setEditProfile(false))
  }

  const handleChangePassword = async () => {
    dispatch(
      setChangePassword({
        changePassword: true,
        userEmail: currentUserProfile.email,
      }),
    )
    await signOutFirebase()
    dispatch(signOutUser())
    dispatch(changeIconLocation('right'))
    history.push('/verification')
  }

  return (
    <div className="editprofile-form">
      <Container>
        <Formik
          initialValues={{
            displayName: currentUserProfile.displayName,
            email: currentUserProfile.email,
            password: 'Password123',
            phone: currentUserProfile.phone || '',
            address: currentUserProfile.address || '',
          }}
          validationSchema={Yup.object({
            displayName: Yup.string().required('Username is required!'),
            email: Yup.string()
              .required('Email is required!')
              .email('Please enter a valid email!'),
            password: Yup.string(),
            phone: Yup.string(),
            address: Yup.string(),
          })}
          onSubmit={async (values, { setSubmitting }) => {
            try {
              await updateUserProfile(values)
              if (photoSource !== null) {
                photoSource.toBlob((blob) => {
                  const uploadedImage = updateToFirebaseStorage(blob, filename)
                  uploadedImage.on('state_changed', () => {
                    uploadedImage.snapshot.ref
                      .getDownloadURL()
                      .then((downloadURL) => {
                        updateUserPhoto(downloadURL).catch((error) => {
                          showError(error)
                        })
                      })
                  })
                }, 'image/png')
              }
              dispatch(changeIconLocation('right'))
              dispatch(setEditProfile(false))
              showSuccess('Changes Saved!')
            } catch (error) {
              if (error.code === 'auth/network-request-failed')
                showError('Check your internet connection!')
              else showError('Updating profile data failed!')
              console.log(error)
            } finally {
              setSubmitting(false)
            }
          }}
        >
          {({ isSubmitting, isValid }) => (
            <Form className="ui form">
              <div style={{ display: 'flex', position: 'relative' }}>
                <div style={{ width: '70%' }}>
                  <MyInputField
                    name="displayName"
                    placeholder="Enter your username"
                    label={true}
                    labelValue="Username"
                  />
                  <MyInputField
                    name="email"
                    placeholder="Enter your email"
                    label={true}
                    labelValue="Email"
                  />
                  <MyInputField
                    name="password"
                    placeholder="Enter your password"
                    type="password"
                    disabled
                    label={true}
                    labelValue="Password"
                  />
                  <MyInputField
                    name="phone"
                    placeholder="Enter your phone number"
                    type="text"
                    label={true}
                    labelValue="Phone Number"
                  />
                  <MyTextArea
                    name="address"
                    placeholder="Enter your address"
                    type="text"
                    label={true}
                    labelValue="Address"
                  />
                  <Button
                    type="submit"
                    loading={isSubmitting}
                    disabled={!isValid || isSubmitting}
                    fluid
                    size="large"
                    className="btn-secondary submit-btn"
                    content="Update"
                  />
                </div>
                <p
                  className="change-password"
                  onClick={() => handleChangePassword()}
                >
                  Change
                </p>
              </div>
            </Form>
          )}
        </Formik>
        <p className="main-text login">
          Don't want to update?&nbsp;
          <span className="profile-link" onClick={() => handleGoBack()}>
            Back To Profile
          </span>
        </p>
      </Container>
    </div>
  )
}
