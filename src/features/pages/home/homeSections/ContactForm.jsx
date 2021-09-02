import React from 'react'
import { Container, Image, Input, Button, Icon, Grid } from 'semantic-ui-react'

export const ContactForm = () => {

    return (
        <div className='contact-form'>
            <Container className='news-letter'>
                <div style={{position: 'relative'}}>
                    <Image id='image' src={'/assets/homepage/contactForm/newsletter.png'} />
                    <div className='content'>
                        <p className='secondary-text heading'>Get notified about the event! <br />Subscribe Today</p>
                    </div>
                    <div className='input'>
                        <Input labelPosition='right' type='text' placeholder='Email Address'>
                            <input className='input-feild' />
                            <Button id='subscrite-btn'>
                                <p>
                                    <Icon id='icon' name='mail' />
                                    &nbsp;Subscribe
                                </p>
                            </Button>
                        </Input>
                    </div>
                </div>
            </Container>
            <Container className='message-portion' textAlign='center'>
                <Grid style={{width: '100%'}}>
                    <Grid.Column width={6}>
                        <div className='image-holder'>
                            <Image id='image' src={'/assets/homepage/contactForm/groupImage.png'} />
                        </div>
                    </Grid.Column>
                    <Grid.Column className='content' width={10} textAlign='left'>
                        <p className='primary-text heading'>Get In Touch</p>
                        <p className='basic-text subheading'>We will be happy to answer your questions.</p>
                        <Input icon={<Icon className='icon' name='user outline' />} placeholder='Name' />
                        <Input icon={<Icon className='icon' name='mail outline' />} placeholder='Email' />
                        <div className='ui icon input'>
                            <textarea className='text-area' placeholder='Message' />
                            <Icon className='icon message-icon' name='comment alternate outline' />
                        </div>
                        <Button content='Send' />
                    </Grid.Column>
                </Grid>
            </Container>
        </div>
    )
}