import React from 'react'
import { Grid, Icon, Image, Container, Button } from 'semantic-ui-react'
import CountUp from 'react-countup'
import VisibilitySensor from "react-visibility-sensor";
import './about.scss'

export const About = () => {
    
    return (
        <div className='about-page'>
            <div className="about-section">
                <Container>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column computer={7}>
                                <p className='main-text work-progress-text'>Work Process</p>
                                <p className='primary-text'>How It Works?</p>
                            </Grid.Column>
                            <Grid.Column computer={9} style={{ display: 'flex' }}>
                                <Grid>
                                    <Grid.Column computer={10} className='about-text'>
                                        <p className='main-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime cumque ullam nobis
                                            architecto, ipsa repudiandae perferendis eaque.</p>
                                    </Grid.Column>
                                    <Grid.Column computer={6} className='about-button'>
                                        <Button className='btn-secondary appointment-btn' content='Make Appointment' />
                                    </Grid.Column>
                                </Grid>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row className='about-steps' columns={3}>
                            <Grid.Column>
                                <Grid>
                                    <Grid.Column width={7}>
                                        <div className='step-images'>
                                            <Image className='icon' src='/assets/about/professional.svg' />
                                        </div>
                                    </Grid.Column>
                                    <Grid.Column width={9}>
                                        <p className='primary-text step-heading'>Search Best Online Professionals</p>
                                        <p className='main-text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit porro.</p>
                                    </Grid.Column>
                                </Grid>
                            </Grid.Column>
                            <Grid.Column>
                                <Grid>
                                    <Grid.Column width={7}>
                                        <div className='step-images'>
                                            <Image className='icon' src='/assets/about/appointment.svg' />
                                        </div>
                                    </Grid.Column>
                                    <Grid.Column width={9}>
                                        <p className='primary-text step-heading'>Get Instant Appointment</p>
                                        <p className='main-text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit porro.</p>
                                    </Grid.Column>
                                </Grid>
                            </Grid.Column>
                            <Grid.Column>
                                <Grid>
                                    <Grid.Column width={7}>
                                        <div className='step-images'>
                                            <Image className='icon' src='/assets/about/feedback.svg' />
                                        </div>
                                    </Grid.Column>
                                    <Grid.Column width={9}>
                                        <p className='primary-text step-heading'>Leave Your Feedback</p>
                                        <p className='main-text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit porro.</p>
                                    </Grid.Column>
                                </Grid>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row className='about-steps-line' columns={3}>
                            <Grid.Column className='step'>
                                <Grid>
                                    <Grid.Column width={7}></Grid.Column>
                                    <Grid.Column width={9}>
                                        <p className='primary-text step-number'>Step 1</p>
                                    </Grid.Column>
                                </Grid>
                            </Grid.Column>
                            <Grid.Column className='step'>
                                <Grid>
                                    <Grid.Column width={7}></Grid.Column>
                                    <Grid.Column width={9}>
                                        <p className='primary-text step-number'>Step 2</p>
                                    </Grid.Column>
                                </Grid>
                            </Grid.Column>
                            <Grid.Column className='step'>
                                <Grid>
                                    <Grid.Column width={7}></Grid.Column>
                                    <Grid.Column width={9}>
                                        <p className='primary-text step-number'>Step 3</p>
                                    </Grid.Column>
                                </Grid>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row columns={3}>
                            <div className="about-horizontal-line"></div>
                            <Grid.Column className='about-points'>
                                <Grid>
                                    <Grid.Column width={7}></Grid.Column>
                                    <Grid.Column width={9}>
                                        <div className='step-dot'></div>
                                    </Grid.Column>
                                </Grid>
                            </Grid.Column>
                            <Grid.Column className='about-points'>
                                <Grid>
                                    <Grid.Column width={7}></Grid.Column>
                                    <Grid.Column width={9}>
                                        <div className='step-dot'></div>
                                    </Grid.Column>
                                </Grid>
                            </Grid.Column>
                            <Grid.Column className='about-points'>
                                <Grid>
                                    <Grid.Column width={7}></Grid.Column>
                                    <Grid.Column width={9}>
                                        <div className='step-dot'></div>
                                    </Grid.Column>
                                </Grid>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </div>
            <div className="why-us-section" style={{backgroundImage: 'url(/assets/about/whyUs.png)'}}>
                <Container className='why-us-container'>
                    <Grid className='why-us-content' columns={2}>
                        <Grid.Column>
                            <p className='basic-text heading'>Why Choose<br />Docfind Clinic?</p>
                            <p className='basic-text description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero recusandae sed
                                corporis odio ullam non soluta enim dolorem? Libero ipsum id beatae perferendis quaerat est consequatur harum.</p>
                            <Grid>
                                <Grid.Column computer={4}>
                                    <Image className='why-us-icons' src={'/assets/about/stethoscope.svg'} />
                                </Grid.Column>
                                <Grid.Column computer={12}>
                                    <p className='basic-text icon-heading'>Quality Control System</p>
                                    <p className='basic-text icon-description'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                        Saepe accusantium repudiandae minus.</p>
                                </Grid.Column>
                            </Grid>
                            <Grid>
                                <Grid.Column computer={4}>
                                    <Image className='why-us-icons' src={'/assets/about/report.svg'} />
                                </Grid.Column>
                                <Grid.Column computer={12}>
                                    <p className='basic-text icon-heading'>Highly Professional Staff</p>
                                    <p className='basic-text icon-description'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                        Saepe accusantium repudiandae minus.</p>
                                </Grid.Column>
                            </Grid>
                        </Grid.Column>
                        <Grid.Column>
                            <Image className='operation-image' src={'/assets/about/operationRoom.png'} />
                            <Image className='doctors-image' src={'/assets/about/doctors.png'} />
                        </Grid.Column>
                    </Grid>
                    <div className='counter-section'>
                        <Image className='left-bg-image' src='/assets/about/leftCounterBG.png' />
                        <Image className='right-bg-image' src='/assets/about/rightCounterBG.png' />
                        <Grid className='counter-grid' columns={4} textAlign='center'>
                            <Grid.Column className='counter-blocks'>
                                <VisibilitySensor partialVisibility offset={{ bottom: 30 }}>
                                    {({ isVisible }) => (
                                    <div style={{ height: 40, marginBottom: '1.9em' }}>
                                        {isVisible ? <CountUp start={0} end={320} delay={0} duration={2}>
                                            {({ countUpRef }) => (
                                                <div>
                                                    <span className='basic-text counter-value' ref={countUpRef} />
                                                    <span className='basic-text counter-value'>+</span>
                                                </div>
                                            )}
                                        </CountUp> : <span className='basic-text counter-value'>0</span>}
                                    </div>
                                    )}
                                </VisibilitySensor>
                                <p className='basic-text counter-text'>Projects Done</p>
                            </Grid.Column>
                            <Grid.Column className='counter-blocks'>
                                <VisibilitySensor partialVisibility offset={{ bottom: 30 }}>
                                    {({ isVisible }) => (
                                    <div style={{ height: 40, marginBottom: '1.9em' }}>
                                        {isVisible ? <CountUp start={0} end={350} delay={0} duration={2}>
                                            {({ countUpRef }) => (
                                                <div>
                                                    <span className='basic-text counter-value' ref={countUpRef} />
                                                    <span className='basic-text counter-value'>+</span>
                                                </div>
                                            )}
                                        </CountUp> : <span className='basic-text counter-value'>0</span>}
                                    </div>
                                    )}
                                </VisibilitySensor>
                                <p className='basic-text counter-text'>Customers</p>
                            </Grid.Column>
                            <Grid.Column className='counter-blocks'>
                                <VisibilitySensor partialVisibility offset={{ bottom: 30 }}>
                                    {({ isVisible }) => (
                                    <div style={{ height: 40, marginBottom: '1.9em' }}>
                                        {isVisible ? <CountUp start={0} end={120} delay={0} duration={2}>
                                            {({ countUpRef }) => (
                                                <div>
                                                    <span className='basic-text counter-value' ref={countUpRef} />
                                                    <span className='basic-text counter-value'>+</span>
                                                </div>
                                            )}
                                        </CountUp> : <span className='basic-text counter-value'>0</span>}
                                    </div>
                                    )}
                                </VisibilitySensor>
                                <p className='basic-text counter-text'>Experienced Masters</p>
                            </Grid.Column>
                            <Grid.Column className='counter-blocks'>
                                <VisibilitySensor partialVisibility offset={{ bottom: 30 }}>
                                    {({ isVisible }) => (
                                    <div style={{ height: 40, marginBottom: '1.9em' }}>
                                        {isVisible ? <CountUp start={0} end={80} delay={0} duration={2}>
                                            {({ countUpRef }) => (
                                                <div>
                                                    <span className='basic-text counter-value' ref={countUpRef} />
                                                    <span className='basic-text counter-value'>+</span>
                                                </div>
                                            )}
                                        </CountUp> : <span className='basic-text counter-value'>0</span>}
                                    </div>
                                    )}
                                </VisibilitySensor>
                                <p className='basic-text counter-text'>Awards Win</p>
                            </Grid.Column>
                        </Grid>
                    </div>
                </Container>
            </div>
            <div className='team-section'>
                <Container className='team' textAlign='center'>
                    <p className='primary-text main-heading'>Our Creative Team</p>
                    <Grid columns={4}>
                        <Grid.Column className='teammember'>
                            <div className='card'>
                                <Image className='image' src={'/assets/homepage/team/teamMember1.png'} />
                                <div className='detail'>
                                    <p className='secondary-text name'>Megan Nelson</p>
                                    <p className='basic-text designation'>Neurosurgeon</p>
                                    <Grid className='icons' columns={3}>
                                        <Grid.Column className='icon-holder'>
                                            <Icon className='social-icons' inverted circular name='facebook f' />
                                        </Grid.Column>
                                        <Grid.Column className='icon-holder'>
                                            <Icon className='social-icons' inverted circular name='twitter' />
                                        </Grid.Column>
                                        <Grid.Column className='icon-holder'>
                                            <Icon className='social-icons' inverted circular name='instagram' />
                                        </Grid.Column>
                                    </Grid>
                                </div>
                            </div>
                        </Grid.Column>
                        <Grid.Column className='teammember'>
                            <div className='card'>
                                <Image className='image' src={'/assets/homepage/team/teamMember2.png'} />
                                <div className='detail'>
                                    <p className='secondary-text name'>Doris Griffin</p>
                                    <p className='basic-text designation'>Denitist</p>
                                    <Grid className='icons' columns={3}>
                                        <Grid.Column className='icon-holder'>
                                            <Icon className='social-icons' inverted circular name='facebook f' />
                                        </Grid.Column>
                                        <Grid.Column className='icon-holder'>
                                            <Icon className='social-icons' inverted circular name='twitter' />
                                        </Grid.Column>
                                        <Grid.Column className='icon-holder'>
                                            <Icon className='social-icons' inverted circular name='instagram' />
                                        </Grid.Column>
                                    </Grid>
                                </div>
                            </div>
                        </Grid.Column>
                        <Grid.Column className='teammember'>
                            <div className='card'>
                                <Image className='image' src={'/assets/homepage/team/teamMember3.png'} />
                                <div className='detail'>
                                    <p className='secondary-text name'>Adam Gilbert</p>
                                    <p className='basic-text designation'>Senior Surgeon</p>
                                    <Grid className='icons' columns={3}>
                                        <Grid.Column className='icon-holder'>
                                            <Icon className='social-icons' inverted circular name='facebook f' />
                                        </Grid.Column>
                                        <Grid.Column className='icon-holder'>
                                            <Icon className='social-icons' inverted circular name='twitter' />
                                        </Grid.Column>
                                        <Grid.Column className='icon-holder'>
                                            <Icon className='social-icons' inverted circular name='instagram' />
                                        </Grid.Column>
                                    </Grid>
                                </div>
                            </div>
                        </Grid.Column>
                        <Grid.Column className='teammember'>
                            <div className='card'>
                                <Image className='image' src={'/assets/homepage/team/teamMember4.png'} />
                                <div className='detail'>
                                    <p className='secondary-text name'>Steve Cooper</p>
                                    <p className='basic-text designation'>ENT Specialist</p>
                                    <Grid className='icons' columns={3}>
                                        <Grid.Column className='icon-holder'>
                                            <Icon className='social-icons' inverted circular name='facebook f' />
                                        </Grid.Column>
                                        <Grid.Column className='icon-holder'>
                                            <Icon className='social-icons' inverted circular name='twitter' />
                                        </Grid.Column>
                                        <Grid.Column className='icon-holder'>
                                            <Icon className='social-icons' inverted circular name='instagram' />
                                        </Grid.Column>
                                    </Grid>
                                </div>
                            </div>
                        </Grid.Column>
                    </Grid>
                </Container>
            </div>
        </div>
    )
}