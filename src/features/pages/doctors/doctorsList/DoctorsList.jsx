import React from 'react'
import { useHistory } from 'react-router'
import { Grid, Image, Button, Icon } from 'semantic-ui-react'

export const DoctorsList = ({ doctorsList }) => {
  const history = useHistory()

  const handleViewMore = (doctor) => {
    history.push(`/doctors/${doctor.id}`)
  }

  return (
    <Grid className="doctors">
      {doctorsList.map((doctor) => (
        <Grid.Row key={doctor.id} className="doctor">
          <Grid.Column className="image-holder" computer={4}>
            <Image className="image" src={doctor.photoURL} />
          </Grid.Column>
          <Grid.Column className="portion division" computer={7}>
            <p className="main-text name">{doctor.name}</p>
            <p className="main-text speciality">
              {doctor.specialty.map(
                (specialty, i) =>
                  `${specialty}${
                    i !== doctor.specialty.length - 1 ? ' & ' : ''
                  }`,
              )}
            </p>
            <p className="main-text university">{doctor.university}</p>
            <div
              style={{
                position: 'absolute',
                bottom: '0%',
                marginBottom: '20px',
              }}
            >
              <Button
                className="btn-primary viewmore-btn"
                content="View More"
                onClick={() => handleViewMore(doctor)}
              />
            </div>
          </Grid.Column>
          <Grid.Column className="portion review" computer={5}>
            <p className="main-text">
              <Icon className="icon" name="map marker alternate" />
              {doctor.from}
            </p>
            <p className="main-text">
              <Icon className="icon" name="thumbs up outline" />
              {(doctor.experience[0] === 1
                ? doctor.experience[0] + ' Year to '
                : doctor.experience[0] + ' Years to ') +
                doctor.experience[1] +
                ' Years'}
            </p>
            <p className="main-text">
              <Icon className="icon" name="calendar minus" />
              {doctor.availability.map(
                (day, i) =>
                  `${day[0]}${day[1]}${day[2]}${
                    i !== doctor.availability.length - 1 ? ', ' : ''
                  }`,
              )}
            </p>
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
          </Grid.Column>
        </Grid.Row>
      ))}
    </Grid>
  )
}
