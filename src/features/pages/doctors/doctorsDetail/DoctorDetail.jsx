import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router'
import { useSelector } from 'react-redux'
import { WrongURL } from '../../../wrongURL/WrongURL'
import {
  Container,
  Grid,
  Icon,
  Image,
  Button,
  Label,
  Input,
} from 'semantic-ui-react'
import {
  dataFromSnapshot,
  getHospitalData,
  getReviews,
} from '../../../../app/firestore/firebaseStore'
import moment from 'moment'
import ContentLoader from 'react-content-loader'
import { toast, Slide } from 'react-toastify'
import { setAppointment } from '../../../../app/firestore/firebaseStore'
import emailjs from '@emailjs/browser'
// import DatePicker from 'react-datepicker'

export const DoctorDetail = () => {
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

  const { id } = useParams()

  const history = useHistory()

  const { doctors } = useSelector((state) => state.doctors)
  const { authenticated } = useSelector((state) => state.auth)
  const { currentUserProfile } = useSelector((state) => state.profile)

  const [doctor, setDoctor] = useState({})
  const [hospital, setHospital] = useState({})
  const [reviews, setReviews] = useState({})
  const [activeTab, setActiveTab] = useState(1)

  const [showMore, setShowMore] = useState(false)
  const [showReviews, setShowReviews] = useState({})

  const [date, setDate] = useState(null)
  const [time, setTime] = useState(null)

  useEffect(() => {
    doctors.map((doctor) => (doctor.id === id ? setDoctor(doctor) : ''))
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    if (Object.keys(doctor).length > 0) {
      getHospitalData(doctor.hospital.id, {
        next: (snapshot) => setHospital(dataFromSnapshot(snapshot)),
        error: (err) => console.log(err),
      })
    }
  }, [doctor])

  useEffect(() => {
    getReviews(id, {
      next: (snapshot) => setReviews(dataFromSnapshot(snapshot)),
      error: (err) => console.log(err),
    })
  }, [id])

  useEffect(() => {
    if (reviews !== undefined) {
      if (Object.keys(reviews).length > 0) {
        if (!showMore) {
          const newReviews = { reviews: [], id: reviews.id }
          reviews.reviews.map(
            (review, i) => i <= 2 && newReviews.reviews.push(review),
          )
          setShowReviews({ ...newReviews })
        } else setShowReviews({ ...reviews })
      }
    }
  }, [reviews, showMore])

  const handleTab = (tab) => {
    setActiveTab(tab)
  }

  const handleShowMore = () => {
    if (showMore) setShowMore(false)
    else setShowMore(true)
  }

  const bookAppointment = async (doctor, profile) => {
    if (date === null) return
    if (time === null) return

    const status = localStorage.getItem('status')
    if (status === 'pending') {
      showError('You are not allowed to have multiple apointments per day.')
      return
    }

    const doctorId = doctor.id
    const { name, hospital } = doctor
    const hospitalId = hospital.id
    const hospitalName = hospital.name

    const { id, displayName } = profile

    const data = {
      doctorId,
      doctorName: name,
      hospitalId,
      hospitalName,
      userId: id,
      username: displayName,
      status: 'pending',
    }

    try {
      await setAppointment(data)

      const message = `Appointment has been successfully Booked with ${name} for ${date} @ ${time}`

      emailjs
        .send(
          'service_8j3fgzo',
          'template_5dk4uxn',
          {
            username: displayName,
            message,
          },
          'e8PsMWCi4XsmDeihU',
        )
        .then(
          (result) => {
            console.log(result.text)
          },
          (error) => {
            console.log(error.text)
          },
        )
      localStorage.setItem('status', 'pending')
      showSuccess(message)

      history.push('/profile')
    } catch (err) {
      showError(`Some Error Occured!`)
    }
  }

  if (doctors.length === 0) return <WrongURL />

  return (
    <div className="doctor-detail">
      {Object.keys(doctor).length === 0 ? (
        <p className="primary-text">Loading...</p>
      ) : (
        <Container>
          <Grid>
            <Grid.Column computer={11}>
              <Grid className="doctor">
                <Grid.Column className="image-holder" computer={4}>
                  <Image className="image" src={doctor.photoURL} />
                </Grid.Column>
                <Grid.Column computer={12}>
                  <p className="main-text name">{doctor.name}</p>
                  <div className="stars">
                    <Icon
                      className={
                        'star' +
                        (1 <= Math.floor(doctor.reviews.averageRating)
                          ? ''
                          : ' outline')
                      }
                      name="star"
                    />
                    <Icon
                      className={
                        'star' +
                        (2 <= Math.floor(doctor.reviews.averageRating)
                          ? ''
                          : ' outline')
                      }
                      name="star"
                    />
                    <Icon
                      className={
                        'star' +
                        (3 <= Math.floor(doctor.reviews.averageRating)
                          ? ''
                          : ' outline')
                      }
                      name="star"
                    />
                    <Icon
                      className={
                        'star' +
                        (4 <= Math.floor(doctor.reviews.averageRating)
                          ? ''
                          : ' outline')
                      }
                      name="star"
                    />
                    <Icon
                      className={
                        'star' +
                        (5 <= Math.floor(doctor.reviews.averageRating)
                          ? ''
                          : ' outline')
                      }
                      name="star"
                    />
                    <p className="main-text" style={{ fontSize: '9pt' }}>
                      &emsp;({doctor.reviews.totalReviews})
                    </p>
                  </div>
                  <p className="main-text speciality">
                    {doctor.specialty.map(
                      (specialty, i) =>
                        `${specialty}${
                          i !== doctor.specialty.length - 1 ? ' & ' : ''
                        }`,
                    )}
                  </p>
                  <Grid>
                    <Grid.Column computer={9}>
                      <p className="main-text perk">
                        <Icon name="phone" />
                        {doctor.phone}
                      </p>
                      <p className="main-text perk">
                        <Icon name="at" />
                        {doctor.email}
                      </p>
                      <p className="main-text perk">
                        <Icon name="hospital" />
                        {doctor.hospital.name}
                      </p>
                    </Grid.Column>
                    <Grid.Column computer={7}>
                      <p className="main-text perk">
                        <Icon name="map marker alternate" />
                        {doctor.from}
                      </p>
                      <p className="main-text perk">
                        <Icon name="thumbs up outline" />
                        {(doctor.experience[0] === 1
                          ? doctor.experience[0] + ' Year to '
                          : doctor.experience[0] + ' Years to ') +
                          doctor.experience[1] +
                          ' Years'}
                      </p>
                      <p className="main-text perk">
                        <Icon name="calendar minus" />
                        {doctor.availability.map(
                          (day, i) =>
                            `${day[0]}${day[1]}${day[2]}${
                              i !== doctor.availability.length - 1 ? ', ' : ''
                            }`,
                        )}
                      </p>
                    </Grid.Column>
                  </Grid>
                </Grid.Column>
              </Grid>
              <Grid className="tabs" columns={3} textAlign="center">
                <Grid.Column
                  className={'tab' + (activeTab === 1 ? ' active' : '')}
                  onClick={() => handleTab(1)}
                >
                  <p className="main-text tab-name">Overview</p>
                </Grid.Column>
                <Grid.Column
                  className={'tab' + (activeTab === 2 ? ' active' : '')}
                  onClick={() => handleTab(2)}
                >
                  <p className="main-text tab-name">Location & Contact</p>
                </Grid.Column>
                <Grid.Column
                  className={'tab' + (activeTab === 3 ? ' active' : '')}
                  onClick={() => handleTab(3)}
                >
                  <p className="main-text tab-name">Reviews</p>
                </Grid.Column>
              </Grid>
              {activeTab === 1 && (
                <div className="overview">
                  <div className="details">
                    <p className="primary-text">
                      Overview of {doctor.hospital.name}
                    </p>
                    {Object.keys(hospital).length > 0 ? (
                      <p className="main-text">{hospital.detail}</p>
                    ) : (
                      <ContentLoader
                        speed={2}
                        width={'100%'}
                        height={'120px'}
                        backgroundColor="#2e95a0"
                        foregroundColor="#005963"
                      >
                        <rect
                          x="0"
                          y="10px"
                          rx="4"
                          ry="4"
                          width="100%"
                          height="15px"
                        />
                        <rect
                          x="0"
                          y="40px"
                          rx="4"
                          ry="4"
                          width="80%"
                          height="15px"
                        />
                        <rect
                          x="0"
                          y="70px"
                          rx="4"
                          ry="4"
                          width="100%"
                          height="15px"
                        />
                        <rect
                          x="0"
                          y="100px"
                          rx="4"
                          ry="4"
                          width="70%"
                          height="15px"
                        />
                      </ContentLoader>
                    )}
                  </div>
                  {Object.keys(hospital).length > 0 ? (
                    <div className="specialities">
                      <p className="primary-text">Subspecialities</p>
                      <p className="main-text">
                        {hospital.specialty.description}
                      </p>
                      <Grid className="specialties-name">
                        {hospital.specialty.specialties.map((specialty) => (
                          <Grid.Column
                            className="speciality"
                            key={specialty}
                            computer={8}
                          >
                            <p className="main-text">
                              <Icon name="check" />
                              {specialty}
                            </p>
                          </Grid.Column>
                        ))}
                      </Grid>
                    </div>
                  ) : (
                    <ContentLoader
                      speed={2}
                      width={'100%'}
                      height={'200px'}
                      backgroundColor="#2e95a0"
                      foregroundColor="#005963"
                    >
                      <rect
                        x="0"
                        y="0"
                        rx="4"
                        ry="4"
                        width="60%"
                        height="30px"
                      />
                      <rect
                        x="0"
                        y="50px"
                        rx="4"
                        ry="4"
                        width="100%"
                        height="15px"
                      />
                      <rect
                        x="0"
                        y="80px"
                        rx="4"
                        ry="4"
                        width="80%"
                        height="15px"
                      />
                      <rect
                        x="0"
                        y="125px"
                        rx="4"
                        ry="4"
                        width="30%"
                        height="15px"
                      />
                      <rect
                        x="400px"
                        y="125px"
                        rx="4"
                        ry="4"
                        width="30%"
                        height="15px"
                      />
                      <rect
                        x="0"
                        y="155px"
                        rx="4"
                        ry="4"
                        width="30%"
                        height="15px"
                      />
                      <rect
                        x="400px"
                        y="155px"
                        rx="4"
                        ry="4"
                        width="30%"
                        height="15px"
                      />
                      <rect
                        x="0"
                        y="185px"
                        rx="4"
                        ry="4"
                        width="30%"
                        height="15px"
                      />
                    </ContentLoader>
                  )}
                </div>
              )}
              {activeTab === 2 && (
                <div className="location">
                  <p className="primary-text">
                    {doctor.hospital.name} Location & Contact Information
                  </p>
                  {Object.keys(hospital).length > 0 ? (
                    <div className="maps">
                      <iframe
                        src={hospital.location}
                        title="map"
                        style={{ border: 0 }}
                        width="100%"
                        height="450"
                        allowFullScreen={false}
                        loading="lazy"
                      />
                      <div className="address-holder">
                        <p className="primary-text address-heading">
                          Hospital Address
                        </p>
                        <Grid columns={3}>
                          <Grid.Column>
                            <p className="main-text address">
                              <Icon name="map marker alternate" size="large" />
                              {hospital.address.split(',')[0]},<br />
                              &emsp;&emsp;&emsp;{hospital.address.split(',')[1]}
                            </p>
                          </Grid.Column>
                          <Grid.Column>
                            <p className="main-text address">
                              <Icon name="phone" size="large" />
                              {hospital.phone[0]}
                              <br />
                              &emsp;&emsp;&emsp;{hospital.phone[1]}
                            </p>
                          </Grid.Column>
                          <Grid.Column>
                            <p className="main-text address">
                              <Icon name="globe" size="large" />
                              {hospital.email}
                              <br />
                              &emsp;&emsp;&emsp;{hospital.website}
                            </p>
                          </Grid.Column>
                        </Grid>
                      </div>
                    </div>
                  ) : (
                    <p className="primary-text">Loading...</p>
                  )}
                </div>
              )}
              {activeTab === 3 &&
                (doctor.reviews.totalReviews ? (
                  Object.keys(showReviews).length > 0 ? (
                    <div className="patient-reviews">
                      <p className="primary-text">Patient Experience</p>
                      {showReviews.reviews.map((review, i) => (
                        <Grid className="review" key={review.clientId + i}>
                          <Grid.Row>
                            <Grid.Column computer={3} textAlign="center">
                              <Image
                                className="image"
                                src={review.clientPhoto}
                              />
                            </Grid.Column>
                            <Grid.Column computer={13}>
                              <Grid>
                                <Grid.Column computer={6}>
                                  <p className="primary-text patient-name">
                                    {review.clientName}
                                  </p>
                                </Grid.Column>
                                <Grid.Column computer={6}>
                                  <div className="stars">
                                    <Icon
                                      className={
                                        'star' +
                                        (1 <= review.stars ? '' : ' outline')
                                      }
                                      name="star"
                                    />
                                    <Icon
                                      className={
                                        'star' +
                                        (2 <= review.stars ? '' : ' outline')
                                      }
                                      name="star"
                                    />
                                    <Icon
                                      className={
                                        'star' +
                                        (3 <= review.stars ? '' : ' outline')
                                      }
                                      name="star"
                                    />
                                    <Icon
                                      className={
                                        'star' +
                                        (4 <= review.stars ? '' : ' outline')
                                      }
                                      name="star"
                                    />
                                    <Icon
                                      className={
                                        'star' +
                                        (5 <= review.stars ? '' : ' outline')
                                      }
                                      name="star"
                                    />
                                    <p
                                      className="main-text"
                                      style={{ fontSize: '9pt' }}
                                    >
                                      &nbsp;({review.stars} / 5)
                                    </p>
                                  </div>
                                </Grid.Column>
                                <Grid.Column computer={4} textAlign="right">
                                  <p className="main-text date">
                                    {moment(review.createdAt.toDate()).format(
                                      'DD MMM, YY',
                                    )}
                                  </p>
                                </Grid.Column>
                              </Grid>
                              <p className="main-text">{review.review}</p>
                            </Grid.Column>
                          </Grid.Row>
                        </Grid>
                      ))}
                      <Button
                        className="btn-primary seemore-btn"
                        onClick={() => handleShowMore()}
                      >
                        <p>
                          {showMore ? 'See Less' : 'See More'}&emsp;
                          <Icon
                            name="long arrow alternate right"
                            size="large"
                          />
                        </p>
                      </Button>
                    </div>
                  ) : (
                    <p className="primary-text">Loading...</p>
                  )
                ) : (
                  <div className="no-reviews">
                    <p className="primary-text">No Reviews Yet!</p>
                  </div>
                ))}
            </Grid.Column>
            <Grid.Column computer={5}>
              <div className="booking">
                <div className="heading-holder">
                  <p className="primary-text heading">Booking Summary</p>
                </div>
                <Label content="Date" />
                <Input
                  type="date"
                  disabled={!authenticated}
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
                <Label content="Time" />
                <Input
                  type="time"
                  disabled={!authenticated}
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                />
                <hr />
                <Button
                  className="btn-secondary"
                  onClick={() => bookAppointment(doctor, currentUserProfile)}
                  disabled={!authenticated}
                >
                  <p>
                    Book Appointment&emsp;
                    <Icon name="long arrow alternate right" size="large" />
                  </p>
                </Button>
              </div>
            </Grid.Column>
          </Grid>
        </Container>
      )}
    </div>
  )
}
