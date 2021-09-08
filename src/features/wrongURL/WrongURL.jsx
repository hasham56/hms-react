import React from 'react'
import './wrongURL.scss'
import { Container, Image } from 'semantic-ui-react'

export const WrongURL = () => {

    return (
        <div className='wrong-url'>
            <Container className='animation-container'>
                <Image src={'/assets/wrongURL/wrongURL.png'} />
                <div className='animation cloud1'><Image src={'/assets/wrongURL/cloud1.jpg'} /></div>
                <div className='animation cloud2'><Image src={'/assets/wrongURL/cloud1.jpg'} /></div>
                <div className='animation cloud3'><Image src={'/assets/wrongURL/cloud1.jpg'} /></div>
            </Container>
        </div>
    )
}