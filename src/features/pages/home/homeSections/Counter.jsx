import React from 'react'
import { Container, Image, Grid, Button, Icon } from 'semantic-ui-react'
import CountUp from 'react-countup'
import VisibilitySensor from 'react-visibility-sensor'

export const Counter = () => {
  return (
    <div className="counter">
      <Image
        className="counter-image"
        src={'/assets/homepage/counter/servicesCounter.png'}
      />
      <Container className="services">
        <Grid>
          <Grid.Row>
            <Grid.Column width={10}>
              <p className="primary-text services-main-text">
                Praesent tempor dictum
                <br />
                tellus ut molestie
              </p>
            </Grid.Column>
            <Grid.Column width={6}>
              <Button className="btn-secondary services-button">
                <p>
                  Get A Quote&emsp;&emsp;
                  <Icon name="long arrow alternate right" size="large" />
                </p>
              </Button>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={3}>
            <Grid.Column>
              <Grid>
                <Grid.Column
                  width={5}
                  textAlign="right"
                  style={{ positon: 'relative' }}
                >
                  <div className="services-blocks">
                    <Image
                      className="services-images"
                      src="/assets/homepage/counter/hospital.svg"
                    />
                  </div>
                </Grid.Column>
                <Grid.Column width={11} className="services-text-portion">
                  <p className="secondary-text services-text">Therapiya</p>
                  <p className="main-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing.
                  </p>
                </Grid.Column>
              </Grid>
            </Grid.Column>
            <Grid.Column>
              <Grid>
                <Grid.Column
                  width={5}
                  textAlign="right"
                  style={{ positon: 'relative' }}
                >
                  <div className="services-blocks">
                    <Image
                      className="services-images"
                      src="/assets/homepage/counter/clipboard.svg"
                    />
                  </div>
                </Grid.Column>
                <Grid.Column width={11} className="services-text-portion">
                  <p className="secondary-text services-text">Dentistry</p>
                  <p className="main-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing.
                  </p>
                </Grid.Column>
              </Grid>
            </Grid.Column>
            <Grid.Column>
              <Grid>
                <Grid.Column
                  width={5}
                  textAlign="right"
                  style={{ positon: 'relative' }}
                >
                  <div className="services-blocks">
                    <Image
                      className="services-images"
                      src="/assets/homepage/counter/monitor.svg"
                    />
                  </div>
                </Grid.Column>
                <Grid.Column width={11} className="services-text-portion">
                  <p className="secondary-text services-text">Virusology</p>
                  <p className="main-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing.
                  </p>
                </Grid.Column>
              </Grid>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
      <Container className="counters">
        <Grid textAlign="center">
          <Grid.Column className="counter-blocks" width={4}>
            <Image
              className="counter-images"
              src="/assets/homepage/counter/counterBed.svg"
            />
            <VisibilitySensor partialVisibility offset={{ bottom: 30 }}>
              {({ isVisible }) => (
                <div style={{ height: 40 }}>
                  {isVisible ? (
                    <CountUp start={0} end={3500} delay={0} duration={2}>
                      {({ countUpRef }) => (
                        <div>
                          <span
                            className="basic-text counters-value-text"
                            ref={countUpRef}
                          />
                        </div>
                      )}
                    </CountUp>
                  ) : (
                    <span className="basic-text counters-value-text">0</span>
                  )}
                </div>
              )}
            </VisibilitySensor>
            <p className="basic-text">Happy Customers</p>
          </Grid.Column>
          <Grid.Column className="counter-blocks" width={4}>
            <Image
              className="counter-images"
              src="/assets/homepage/counter/counterClipboard.svg"
            />
            <VisibilitySensor partialVisibility offset={{ bottom: 30 }}>
              {({ isVisible }) => (
                <div style={{ height: 40 }}>
                  {isVisible ? (
                    <CountUp start={0} end={541} delay={0} duration={2.5}>
                      {({ countUpRef }) => (
                        <div>
                          <span
                            className="basic-text counters-value-text"
                            ref={countUpRef}
                          />
                          <span className="basic-text counters-value-text">
                            +
                          </span>
                        </div>
                      )}
                    </CountUp>
                  ) : (
                    <span className="basic-text counters-value-text">0+</span>
                  )}
                </div>
              )}
            </VisibilitySensor>
            <p className="basic-text">Projects Done</p>
          </Grid.Column>
          <Grid.Column className="counter-blocks" width={4}>
            <Image
              className="counter-images"
              src="/assets/homepage/counter/counterHeart.svg"
            />
            <VisibilitySensor partialVisibility offset={{ bottom: 30 }}>
              {({ isVisible }) => (
                <div style={{ height: 40 }}>
                  {isVisible ? (
                    <CountUp start={0} end={40} delay={0} duration={3}>
                      {({ countUpRef }) => (
                        <div>
                          <span
                            className="basic-text counters-value-text"
                            ref={countUpRef}
                          />
                          <span className="basic-text counters-value-text">
                            +
                          </span>
                        </div>
                      )}
                    </CountUp>
                  ) : (
                    <span className="basic-text counters-value-text">0+</span>
                  )}
                </div>
              )}
            </VisibilitySensor>
            <p className="basic-text">Awards Win</p>
          </Grid.Column>
          <Grid.Column className="counter-blocks" width={4}>
            <Image
              className="counter-images"
              src="/assets/homepage/counter/counterAmbulance.svg"
            />
            <VisibilitySensor partialVisibility offset={{ bottom: 30 }}>
              {({ isVisible }) => (
                <div style={{ height: 40 }}>
                  {isVisible ? (
                    <CountUp start={0} end={678} delay={0} duration={3.5}>
                      {({ countUpRef }) => (
                        <div>
                          <span
                            className="basic-text counters-value-text"
                            ref={countUpRef}
                          />
                        </div>
                      )}
                    </CountUp>
                  ) : (
                    <span className="basic-text counters-value-text">0</span>
                  )}
                </div>
              )}
            </VisibilitySensor>
            <p className="basic-text">Client Works</p>
          </Grid.Column>
        </Grid>
      </Container>
    </div>
  )
}
