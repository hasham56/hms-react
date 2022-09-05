import React from 'react'
import { Container, Grid, Image, Icon } from 'semantic-ui-react'

export const Team = () => {
  return (
    <Container className="team" textAlign="center">
      <p className="main-text mini-heading">Meet Our Team</p>
      <p className="primary-text main-heading">Our Creative Team</p>
      <Grid columns={4}>
        <Grid.Column className="teammember" computer={4} tablet={8} mobile={16}>
          <div className="card">
            <Image
              className="image"
              src={'/assets/homepage/team/teamMember1.png'}
            />
            <div className="detail">
              <p className="secondary-text name">Megan Nelson</p>
              <p className="basic-text designation">Neurosurgeon</p>
              <Grid className="icons" columns={3}>
                <Grid.Column className="icon-holder">
                  <Icon
                    className="social-icons"
                    inverted
                    circular
                    name="facebook f"
                  />
                </Grid.Column>
                <Grid.Column className="icon-holder">
                  <Icon
                    className="social-icons"
                    inverted
                    circular
                    name="twitter"
                  />
                </Grid.Column>
                <Grid.Column className="icon-holder">
                  <Icon
                    className="social-icons"
                    inverted
                    circular
                    name="instagram"
                  />
                </Grid.Column>
              </Grid>
            </div>
          </div>
        </Grid.Column>
        <Grid.Column className="teammember" computer={4} tablet={8} mobile={16}>
          <div className="card">
            <Image
              className="image"
              src={'/assets/homepage/team/teamMember2.png'}
            />
            <div className="detail">
              <p className="secondary-text name">Doris Griffin</p>
              <p className="basic-text designation">Denitist</p>
              <Grid className="icons" columns={3}>
                <Grid.Column className="icon-holder">
                  <Icon
                    className="social-icons"
                    inverted
                    circular
                    name="facebook f"
                  />
                </Grid.Column>
                <Grid.Column className="icon-holder">
                  <Icon
                    className="social-icons"
                    inverted
                    circular
                    name="twitter"
                  />
                </Grid.Column>
                <Grid.Column className="icon-holder">
                  <Icon
                    className="social-icons"
                    inverted
                    circular
                    name="instagram"
                  />
                </Grid.Column>
              </Grid>
            </div>
          </div>
        </Grid.Column>
        <Grid.Column className="teammember" computer={4} tablet={8} mobile={16}>
          <div className="card">
            <Image
              className="image"
              src={'/assets/homepage/team/teamMember3.png'}
            />
            <div className="detail">
              <p className="secondary-text name">Adam Gilbert</p>
              <p className="basic-text designation">Senior Surgeon</p>
              <Grid className="icons" columns={3}>
                <Grid.Column className="icon-holder">
                  <Icon
                    className="social-icons"
                    inverted
                    circular
                    name="facebook f"
                  />
                </Grid.Column>
                <Grid.Column className="icon-holder">
                  <Icon
                    className="social-icons"
                    inverted
                    circular
                    name="twitter"
                  />
                </Grid.Column>
                <Grid.Column className="icon-holder">
                  <Icon
                    className="social-icons"
                    inverted
                    circular
                    name="instagram"
                  />
                </Grid.Column>
              </Grid>
            </div>
          </div>
        </Grid.Column>
        <Grid.Column className="teammember" computer={4} tablet={8} mobile={16}>
          <div className="card">
            <Image
              className="image"
              src={'/assets/homepage/team/teamMember4.png'}
            />
            <div className="detail">
              <p className="secondary-text name">Steve Cooper</p>
              <p className="basic-text designation">ENT Specialist</p>
              <Grid className="icons" columns={3}>
                <Grid.Column className="icon-holder">
                  <Icon
                    className="social-icons"
                    inverted
                    circular
                    name="facebook f"
                  />
                </Grid.Column>
                <Grid.Column className="icon-holder">
                  <Icon
                    className="social-icons"
                    inverted
                    circular
                    name="twitter"
                  />
                </Grid.Column>
                <Grid.Column className="icon-holder">
                  <Icon
                    className="social-icons"
                    inverted
                    circular
                    name="instagram"
                  />
                </Grid.Column>
              </Grid>
            </div>
          </div>
        </Grid.Column>
      </Grid>
    </Container>
  )
}
