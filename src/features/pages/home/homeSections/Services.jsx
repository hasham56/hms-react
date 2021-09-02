import React from 'react'
import { Container, Image, Grid } from 'semantic-ui-react'

export const Services = () => {

    return (
        <div className='services'>
            <Image className='services-image' src={'/assets/homepage/services/servicesCounter.png'} />
            <Container className='services-content' textAlign='center'>
                <p className='main-text mini-heading'>What we do</p>
                <p className='primary-text main-heading'>Services for You</p>
                <Grid>
                    <Grid.Row columns={3}>
                        <Grid.Column>
                            <div className='service'>
                                <Grid>
                                    <Grid.Column width={5} textAlign='right'>
                                        <div style={{position: 'relative', width: '100%', height: '100%'}}>
                                            <Image className='icon' src='/assets/homepage/services/hospital.svg' />
                                        </div>
                                    </Grid.Column>
                                    <Grid.Column className='detail' width={11} textAlign='left'>
                                        <p className='secondary-text heading'>Therapiya</p>
                                        <p className='main-text'>Lorem ipsum dolor sit amet, consect adipisicing elit, Voluptatem adipisicing elit.</p>
                                    </Grid.Column>
                                </Grid>
                            </div>
                        </Grid.Column>
                        <Grid.Column>
                            <div className='service'>
                                <Grid>
                                    <Grid.Column width={5} textAlign='right'>
                                        <div style={{position: 'relative', width: '100%', height: '100%'}}>
                                            <Image className='icon' src='/assets/homepage/services/clipboard.svg' />
                                        </div>
                                    </Grid.Column>
                                    <Grid.Column className='detail' width={11} textAlign='left'>
                                        <p className='secondary-text heading'>Dentistry</p>
                                        <p className='main-text'>Lorem ipsum dolor sit amet, consect adipisicing elit, Voluptatem adipisicing elit.</p>
                                    </Grid.Column>
                                </Grid>
                            </div>
                        </Grid.Column>
                        <Grid.Column>
                            <div className='service'>
                                <Grid>
                                    <Grid.Column width={5} textAlign='right'>
                                        <div style={{position: 'relative', width: '100%', height: '100%'}}>
                                            <Image className='icon' src='/assets/homepage/services/monitor.svg' />
                                        </div>
                                    </Grid.Column>
                                    <Grid.Column className='detail' width={11} textAlign='left'>
                                        <p className='secondary-text heading'>Virusology</p>
                                        <p className='main-text'>Lorem ipsum dolor sit amet, consect adipisicing elit, Voluptatem adipisicing elit.</p>
                                    </Grid.Column>
                                </Grid>
                            </div>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns={3}>
                        <Grid.Column>
                            <div className='service'>
                                <Grid>
                                    <Grid.Column width={5} textAlign='right'>
                                        <div style={{position: 'relative', width: '100%', height: '100%'}}>
                                            <Image className='icon' src='/assets/homepage/services/ambulance.svg' />
                                        </div>
                                    </Grid.Column>
                                    <Grid.Column className='detail' width={11} textAlign='left'>
                                        <p className='secondary-text heading'>Pharmocology</p>
                                        <p className='main-text'>Lorem ipsum dolor sit amet, consect adipisicing elit, Voluptatem adipisicing elit.</p>
                                    </Grid.Column>
                                </Grid>
                            </div>
                        </Grid.Column>
                        <Grid.Column>
                            <div className='service'>
                                <Grid>
                                    <Grid.Column width={5} textAlign='right'>
                                        <div style={{position: 'relative', width: '100%', height: '100%'}}>
                                            <Image className='icon' src='/assets/homepage/services/file.svg' />
                                        </div>
                                    </Grid.Column>
                                    <Grid.Column className='detail' width={11} textAlign='left'>
                                        <p className='secondary-text heading'>Cardiology</p>
                                        <p className='main-text'>Lorem ipsum dolor sit amet, consect adipisicing elit, Voluptatem adipisicing elit.</p>
                                    </Grid.Column>
                                </Grid>
                            </div>
                        </Grid.Column>
                        <Grid.Column>
                            <div className='service'>
                                <Grid>
                                    <Grid.Column width={5} textAlign='right'>
                                        <div style={{position: 'relative', width: '100%', height: '100%'}}>
                                            <Image className='icon' src='/assets/homepage/services/stethoscope.svg' />
                                        </div>
                                    </Grid.Column>
                                    <Grid.Column className='detail' width={11} textAlign='left'>
                                        <p className='secondary-text heading'>Researches</p>
                                        <p className='main-text'>Lorem ipsum dolor sit amet, consect adipisicing elit, Voluptatem adipisicing elit.</p>
                                    </Grid.Column>
                                </Grid>
                            </div>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        </div>
    )
}