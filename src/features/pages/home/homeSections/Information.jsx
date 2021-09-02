import React from 'react'
import { Container, Grid, Image, Button, Icon } from 'semantic-ui-react'

export const Information = () => {

    return (
        <div className='information'>
            <Container>
                <Grid>
                    <Grid.Column width={8} >
                        <Image id='group-image' floated='right' src={'/assets/homepage/information/groupImage.png'} />
                    </Grid.Column>
                    <Grid.Column id='content' width={8}>
                        <div id='detail'>
                            <p className="primary-text title">
                                We Provide Essential Services For Your Health.
                            </p>
                            <Grid columns={2}>
                                <Grid.Column>
                                    <p className='secondary-text heading'>Quality Control System</p>
                                    <p className='basic-text description'>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                                        Unde praesentium sequi.
                                    </p>
                                </Grid.Column>
                                <Grid.Column>
                                    <p className='secondary-text heading'>Highly Professional Staff</p>
                                    <p className='basic-text description'>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                                        Unde praesentium sequi.
                                    </p>
                                </Grid.Column>
                            </Grid>
                            <Button className='btn-secondary button'>
                                <p>Get A Quote&emsp;&emsp;
                                <Icon name='long arrow alternate right' size='large' /></p>
                            </Button>
                        </div>
                    </Grid.Column>
                </Grid>
            </Container>
        </div>
    )
}