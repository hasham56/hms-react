import React from 'react'
import { Container, Grid, Icon, Image } from 'semantic-ui-react'

export const Reviews = () => {
  return (
    <Container className="reviews" textAlign="center">
      <p className="main-text mini-heading">Client Testimonials</p>
      <p className="primary-text main-heading">What our clients say</p>
      <Grid columns={2}>
        <Grid.Column textAlign="left">
          <div className="review">
            <div className="content">
              <div className="vertical-line"></div>
              <div className="image-holder">
                <Image
                  className="client-picture"
                  floated="right"
                  src={'/assets/homepage/reviews/client1.png'}
                />
                <Icon className="quotes" inverted circular name="quote left" />
              </div>
              <div className="detail">
                <p className="secondary-text client-name">Eugene Freeman</p>
                <p className="main-text client-designation">Tincidunt</p>
              </div>
            </div>
            <p className="main-text description">
              Overall I was incredibly satisfied with my experience with
              DocFind. I didn’t have to wait for lengthy periods or stand in
              long queues. Best of all, I didn’t even have to pay any extra
              charges, only the doctors’ consultation fee.
            </p>
          </div>
        </Grid.Column>
        <Grid.Column textAlign="left">
          <div className="review">
            <div className="content">
              <div className="vertical-line"></div>
              <div className="image-holder">
                <Image
                  className="client-picture"
                  floated="right"
                  src={'/assets/homepage/reviews/client2.png'}
                />
                <Icon className="quotes" inverted circular name="quote left" />
              </div>
              <div className="detail">
                <p className="secondary-text client-name">Kelly Coleman</p>
                <p className="main-text client-designation">Nulla nec</p>
              </div>
            </div>
            <p className="main-text description">
              Overall I was incredibly satisfied with my experience with
              DocFind. I didn’t have to wait for lengthy periods or stand in
              long queues. Best of all, I didn’t even have to pay any extra
              charges, only the doctors’ consultation fee.
            </p>
          </div>
        </Grid.Column>
      </Grid>
    </Container>
  )
}
