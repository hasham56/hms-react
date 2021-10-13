import React from 'react'
import { Grid, Image, Container, Icon } from 'semantic-ui-react'
import './services.scss'

export const Services = () => {
    
    return (
        <div className='services'>
            <Container className='services-section'>
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
            <Grid className='image-gallery' columns={5}>
                <Grid.Column className='image-holder'>
                    <Image className='image' src='/assets/services/imageGallery1.png' />
                </Grid.Column>
                <Grid.Column className='image-holder'>
                    <Image className='image' src='/assets/services/imageGallery2.png' />
                </Grid.Column>
                <Grid.Column className='image-holder'>
                    <Image className='image' src='/assets/services/imageGallery3.png' />
                </Grid.Column>
                <Grid.Column className='image-holder'>
                    <Image className='image' src='/assets/services/imageGallery4.png' />
                </Grid.Column>
                <Grid.Column className='image-holder'>
                    <Image className='image' src='/assets/services/imageGallery5.png' />
                </Grid.Column>
            </Grid>

            <Container className='reviews' textAlign='center'>
                <p className='main-text mini-heading'>Client Testimonials</p>
                <p className='primary-text main-heading'>What our clients say</p>
                <Grid columns={2}>
                    <Grid.Column textAlign='left'>
                        <div className="review">
                            <div className='content'>
                                <div className='vertical-line'></div>
                                <div className='image-holder'>
                                    <Image className='client-picture' floated='right' src={'/assets/homepage/reviews/client1.png'} />
                                    <Icon className='quotes' inverted circular name='quote left' />
                                </div>
                                <div className='detail'>
                                    <p className='secondary-text client-name'>Eugene Freeman</p>
                                    <p className='main-text client-designation'>Tincidunt</p>
                                </div>
                            </div>
                            <p className='main-text description'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis incidunt quisquam eum nihil corporis
                                nesciunt dolores ea culpa molestias adipisci ipsa, nesciunt dolores ea culpa molestias adipisci ipsa.
                            </p>
                        </div>
                    </Grid.Column>
                    <Grid.Column textAlign='left'>
                        <div className="review">
                            <div className='content'>
                                <div className='vertical-line'></div>
                                <div className='image-holder'>
                                    <Image className='client-picture' floated='right' src={'/assets/homepage/reviews/client2.png'} />
                                    <Icon className='quotes' inverted circular name='quote left' />
                                </div>
                                <div className='detail'>
                                    <p className='secondary-text client-name'>Kelly Coleman</p>
                                    <p className='main-text client-designation'>Nulla nec</p>
                                </div>
                            </div>
                            <p className='main-text description'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis incidunt quisquam eum nihil corporis
                                nesciunt dolores ea culpa molestias adipisci ipsa, nesciunt dolores ea culpa molestias adipisci ipsa.
                            </p>
                        </div>
                    </Grid.Column>
                </Grid>
            </Container>
        </div>
    )
}