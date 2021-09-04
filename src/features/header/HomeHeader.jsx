import React from 'react'
import { Container, Image, Button } from 'semantic-ui-react'

export const HomeHeader = () => {

    return (
        <div className='header'>
            <Image className='header-image' src={'/assets/header/maskGroupHome.png'} />
            <Container className='header-head-home'>
                <Container className='header-head-body'>
                    <Container className='header-head-content'>
                        <div style={{ display: 'flex' }}>
                            <p className='header-top-text'>Markets & Resources</p>
                            <div className='header-horizontal-line' ></div>
                        </div>
                        <p className='header-primary-text header-primary-text-home'>Find The Best<br />Doctors near By You</p>
                        <Button className='btn-secondary'>
                                <p>Get A Quote</p>
                        </Button>
                        <Button className='btn-primary'>
                                <p>Read More</p>
                        </Button>
                    </Container>
                </Container>
                <Image className='header-head-image' src={'/assets/header/headerImage.png'} />
            </Container>
        </div>
    )
}