import React from 'react'
import { Grid, Button, Icon } from 'semantic-ui-react'
import ContentLoader from 'react-content-loader'

export const DoctorLoaderListEntry = () => {
  return (
    <Grid>
      <Grid.Row className="doctor" style={{ height: '200px' }}>
        <Grid.Column
          className="image-holder"
          style={{ height: '200px' }}
          computer={4}
        >
          <ContentLoader
            speed={2}
            width={'100%'}
            height={'200px'}
            backgroundColor="#2e95a0"
            foregroundColor="#005963"
          >
            <rect x="0" y="0" rx="4" ry="4" width="100%" height="100%" />
          </ContentLoader>
        </Grid.Column>
        <Grid.Column
          className="portion division"
          style={{ height: '200px' }}
          computer={7}
        >
          <ContentLoader
            speed={2}
            width={'100%'}
            height={'200px'}
            backgroundColor="#2e95a0"
            foregroundColor="#005963"
          >
            <rect x="0" y="0%" rx="4" ry="4" width="75%" height="25" />
            <rect x="0" y="18%" rx="3" ry="3" width="85%" height="12" />
            <rect x="0" y="35%" rx="3" ry="3" width="100%" height="10" />
            <rect x="0" y="45%" rx="3" ry="3" width="65%" height="10" />
          </ContentLoader>
          <div
            style={{ position: 'absolute', bottom: '0%', marginBottom: '20px' }}
          >
            <Button
              className="btn-primary viewmore-btn"
              content="View More"
              disabled
            />
            <Button
              className="btn-primary favourite-btn"
              icon="heart outline"
              disabled
            />
          </div>
        </Grid.Column>
        <Grid.Column
          className="portion review"
          style={{ height: '200px' }}
          computer={5}
        >
          <ContentLoader
            speed={2}
            width={'100%'}
            height={'200px'}
            backgroundColor="#2e95a0"
            foregroundColor="#005963"
          >
            <rect x="0" y="0%" rx="4" ry="4" width="75%" height="12" />
            <rect x="0" y="12%" rx="4" ry="4" width="100%" height="12" />
            <rect x="0" y="24%" rx="4" ry="4" width="85%" height="12" />
          </ContentLoader>
          <div className="stars">
            <Icon className="star" name="star" />
            <Icon className="star" name="star" />
            <Icon className="star" name="star" />
            <Icon className="star" name="star" />
            <Icon className="star" name="star" />
            <p className="main-text" style={{ fontSize: '9pt' }}>
              &emsp;(...)
            </p>
          </div>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row className="doctor" style={{ height: '200px' }}>
        <Grid.Column
          className="image-holder"
          style={{ height: '200px' }}
          computer={4}
        >
          <ContentLoader
            speed={2}
            width={'100%'}
            height={'200px'}
            backgroundColor="#2e95a0"
            foregroundColor="#005963"
          >
            <rect x="0" y="0" rx="4" ry="4" width="100%" height="100%" />
          </ContentLoader>
        </Grid.Column>
        <Grid.Column
          className="portion division"
          style={{ height: '200px' }}
          computer={7}
        >
          <ContentLoader
            speed={2}
            width={'100%'}
            height={'200px'}
            backgroundColor="#2e95a0"
            foregroundColor="#005963"
          >
            <rect x="0" y="0%" rx="4" ry="4" width="75%" height="25" />
            <rect x="0" y="18%" rx="3" ry="3" width="85%" height="12" />
            <rect x="0" y="35%" rx="3" ry="3" width="100%" height="10" />
            <rect x="0" y="45%" rx="3" ry="3" width="65%" height="10" />
          </ContentLoader>
          <div
            style={{ position: 'absolute', bottom: '0%', marginBottom: '20px' }}
          >
            <Button
              className="btn-primary viewmore-btn"
              content="View More"
              disabled
            />
            <Button
              className="btn-primary favourite-btn"
              icon="heart outline"
              disabled
            />
          </div>
        </Grid.Column>
        <Grid.Column
          className="portion review"
          style={{ height: '200px' }}
          computer={5}
        >
          <ContentLoader
            speed={2}
            width={'100%'}
            height={'200px'}
            backgroundColor="#2e95a0"
            foregroundColor="#005963"
          >
            <rect x="0" y="0%" rx="4" ry="4" width="75%" height="12" />
            <rect x="0" y="12%" rx="4" ry="4" width="100%" height="12" />
            <rect x="0" y="24%" rx="4" ry="4" width="85%" height="12" />
          </ContentLoader>
          <div className="stars">
            <Icon className="star" name="star" />
            <Icon className="star" name="star" />
            <Icon className="star" name="star" />
            <Icon className="star" name="star" />
            <Icon className="star" name="star" />
            <p className="main-text" style={{ fontSize: '9pt' }}>
              &emsp;(...)
            </p>
          </div>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row className="doctor" style={{ height: '200px' }}>
        <Grid.Column
          className="image-holder"
          style={{ height: '200px' }}
          computer={4}
        >
          <ContentLoader
            speed={2}
            width={'100%'}
            height={'200px'}
            backgroundColor="#2e95a0"
            foregroundColor="#005963"
          >
            <rect x="0" y="0" rx="4" ry="4" width="100%" height="100%" />
          </ContentLoader>
        </Grid.Column>
        <Grid.Column
          className="portion division"
          style={{ height: '200px' }}
          computer={7}
        >
          <ContentLoader
            speed={2}
            width={'100%'}
            height={'200px'}
            backgroundColor="#2e95a0"
            foregroundColor="#005963"
          >
            <rect x="0" y="0%" rx="4" ry="4" width="75%" height="25" />
            <rect x="0" y="18%" rx="3" ry="3" width="85%" height="12" />
            <rect x="0" y="35%" rx="3" ry="3" width="100%" height="10" />
            <rect x="0" y="45%" rx="3" ry="3" width="65%" height="10" />
          </ContentLoader>
          <div
            style={{ position: 'absolute', bottom: '0%', marginBottom: '20px' }}
          >
            <Button
              className="btn-primary viewmore-btn"
              content="View More"
              disabled
            />
          </div>
        </Grid.Column>
        <Grid.Column
          className="portion review"
          style={{ height: '200px' }}
          computer={5}
        >
          <ContentLoader
            speed={2}
            width={'100%'}
            height={'200px'}
            backgroundColor="#2e95a0"
            foregroundColor="#005963"
          >
            <rect x="0" y="0%" rx="4" ry="4" width="75%" height="12" />
            <rect x="0" y="12%" rx="4" ry="4" width="100%" height="12" />
            <rect x="0" y="24%" rx="4" ry="4" width="85%" height="12" />
          </ContentLoader>
          <div className="stars">
            <Icon className="star" name="star" />
            <Icon className="star" name="star" />
            <Icon className="star" name="star" />
            <Icon className="star" name="star" />
            <Icon className="star" name="star" />
            <p className="main-text" style={{ fontSize: '9pt' }}>
              &emsp;(...)
            </p>
          </div>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}
